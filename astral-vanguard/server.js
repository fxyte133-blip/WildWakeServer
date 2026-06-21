import express from 'express';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Server } from 'socket.io';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3000;
const allowedOrigins = (process.env.CLIENT_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  pingInterval: 5000,
  pingTimeout: 5000,
  cors: {
    origin: allowedOrigins.length ? allowedOrigins : true,
    methods: ['GET', 'POST'],
  },
});

const players = new Map();
const attackTimes = new Map();
const clientConnections = new Map();
const attackConfig = {
  slash: { damage: 8.5, cooldown: 500, range: 4.8 },
  heavy: { damage: 40, cooldown: 7000, range: 4.5 },
};
const finite = (value, fallback = 0) => Number.isFinite(Number(value)) ? Number(value) : fallback;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function randomSpawnPosition() {
  const angle = Math.random() * Math.PI * 2;
  const radius = 3 + Math.random() * 5;
  return { x: Math.cos(angle) * radius, y: 0, z: Math.sin(angle) * radius };
}

function cleanState(id, next = {}, previous = {}) {
  const position = next.position || previous.position || {};
  return {
    id,
    position: {
      x: clamp(finite(position.x), -80, 80),
      y: clamp(finite(position.y), -10, 45),
      z: clamp(finite(position.z), -80, 80),
    },
    rotation: clamp(finite(next.rotation, previous.rotation || 0), -Math.PI * 8, Math.PI * 8),
    moving: Boolean(next.moving),
    sprinting: Boolean(next.sprinting),
    grounded: next.grounded !== false,
    verticalVelocity: clamp(finite(next.verticalVelocity), -30, 30),
    attack: next.attack === 'slash' || next.attack === 'heavy' ? next.attack : null,
    attackSerial: Math.max(0, Math.floor(finite(next.attackSerial, previous.attackSerial || 0))),
    health: clamp(finite(previous.health, 100), 0, 100),
  };
}

function applyAttackDamage(attacker, type) {
  const config = attackConfig[type];
  const forward = { x: Math.sin(attacker.rotation), z: Math.cos(attacker.rotation) };
  const impact = type === 'heavy'
    ? { x: attacker.position.x + forward.x * 2.5, z: attacker.position.z + forward.z * 2.5 }
    : { x: attacker.position.x, z: attacker.position.z };

  players.forEach((target) => {
    if (target.id === attacker.id || target.health <= 0) return;
    const dx = target.position.x - impact.x;
    const dz = target.position.z - impact.z;
    const distance = Math.hypot(dx, dz);
    if (distance > config.range || Math.abs(target.position.y - attacker.position.y) > 3) return;
    if (type === 'slash' && distance > .01 && (dx * forward.x + dz * forward.z) / distance < -.15) return;

    target.health = Math.max(0, Math.round((target.health - config.damage) * 10) / 10);
    io.emit('playerDamaged', {
      targetId: target.id,
      health: target.health,
      damage: config.damage,
      attackerId: attacker.id,
      type,
    });
    io.to(attacker.id).emit('attackHit', { targetId: target.id, damage: config.damage, type });
  });
}

io.on('connection', (socket) => {
  const clientKey = String(socket.handshake.auth?.clientKey || '').slice(0, 96);
  if (clientKey) {
    const previousSocketId = clientConnections.get(clientKey);
    if (previousSocketId && previousSocketId !== socket.id) {
      io.sockets.sockets.get(previousSocketId)?.disconnect(true);
    }
    clientConnections.set(clientKey, socket.id);
  }
  const player = cleanState(socket.id, { position: randomSpawnPosition() });
  players.set(socket.id, player);

  socket.emit('welcome', { id: socket.id, health: player.health, position: player.position });
  socket.emit('worldSnapshot', [...players.values()].filter((entry) => entry.id !== socket.id));
  socket.broadcast.emit('playerJoined', player);

  socket.on('playerState', (next) => {
    const current = players.get(socket.id);
    if (!current || !next || typeof next !== 'object') return;
    const cleaned = cleanState(socket.id, next, current);
    players.set(socket.id, cleaned);
    socket.broadcast.volatile.emit('playerState', cleaned);
  });

  socket.on('playerAttack', (payload = {}) => {
    const type = payload.type === 'heavy' ? 'heavy' : payload.type === 'slash' ? 'slash' : null;
    if (!type) return;
    const current = players.get(socket.id);
    if (!current || current.health <= 0) return;
    const now = Date.now();
    const lastAttack = attackTimes.get(socket.id) || { slash: 0, heavy: 0 };
    if (now - lastAttack[type] < attackConfig[type].cooldown) return;
    lastAttack[type] = now;
    attackTimes.set(socket.id, lastAttack);
    current.attack = type;
    current.attackSerial = Math.max(current.attackSerial, Math.floor(finite(payload.serial, current.attackSerial)));
    socket.broadcast.emit('playerAttack', { id: socket.id, type, serial: current.attackSerial });
    applyAttackDamage(current, type);
  });

  socket.on('respawn', () => {
    const current = players.get(socket.id);
    if (!current || current.health > 0) return;
    current.health = 100;
    current.position = randomSpawnPosition();
    current.moving = false;
    current.sprinting = false;
    current.grounded = true;
    current.verticalVelocity = 0;
    current.attack = null;
    io.emit('playerRespawned', { id: socket.id, health: 100, position: current.position });
  });

  socket.on('disconnect', () => {
    players.delete(socket.id);
    attackTimes.delete(socket.id);
    if (clientKey && clientConnections.get(clientKey) === socket.id) clientConnections.delete(clientKey);
    socket.broadcast.emit('playerLeft', socket.id);
  });
});

const distDirectory = path.join(__dirname, 'dist');
app.get('/health', (_request, response) => {
  response.json({ ok: true, players: players.size, ids: [...players.keys()] });
});
app.use(express.static(distDirectory));
app.use((request, response, next) => {
  if (request.method === 'GET' && request.accepts('html')) {
    response.sendFile(path.join(distDirectory, 'index.html'));
    return;
  }
  next();
});

httpServer.listen(port, '0.0.0.0', () => {
  console.log(`Astral Vanguard multiplayer server listening on http://localhost:${port}`);
});
