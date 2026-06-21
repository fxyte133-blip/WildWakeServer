import express from 'express';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Server } from 'socket.io';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3000;
const allowedOrigins = (process.env.CLIENT_ORIGIN || '').split(',').map((value) => value.trim()).filter(Boolean);
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  pingInterval: 5000,
  pingTimeout: 5000,
  cors: { origin: allowedOrigins.length ? allowedOrigins : true, methods: ['GET', 'POST'] },
});

const TEAMS = {
  bloods: { name: 'Bloods', color: '#dc3f4d', spawn: { x: -30, z: 0 } },
  crips: { name: 'Crips', color: '#3c78e8', spawn: { x: 30, z: 0 } },
};
const KITS = {
  sword: { name: 'Sword Kit', maxHealth: 120, arrows: 0 },
  bow: { name: 'Bow Kit', maxHealth: 85, arrows: -1 },
};
const ATTACKS = {
  slash: { damage: 14, cooldown: 500, range: 4.8 },
  heavy: { damage: 48, cooldown: 7000, range: 4.5 },
  bow: { cooldown: 1000 },
};
const RESPAWN_DELAY = 3000;
const SCORE_LIMIT = 25;
const MATCH_DURATION = 10 * 60 * 1000;
const players = new Map();
const attackTimes = new Map();
const respawnTimers = new Map();
const projectileTimers = new Set();
const clientConnections = new Map();
let scores = { bloods: 0, crips: 0 };
let match = { startedAt: Date.now(), duration: MATCH_DURATION, ended: false, winner: null };

const finite = (value, fallback = 0) => Number.isFinite(Number(value)) ? Number(value) : fallback;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const joinedPlayers = () => [...players.values()].filter((player) => player.joined);
const blockedName = /n[i1]gg|f[a4]gg|k[i1]ke|ch[i1]nk|sp[i1]c/i;
const cleanName = (value) => {
  const cleaned = String(value || 'Vanguard').replace(/[^a-zA-Z0-9 _-]/g, '').trim().slice(0, 18) || 'Vanguard';
  return blockedName.test(cleaned) ? 'Vanguard' : cleaned;
};

function teamSpawn(team) {
  const base = TEAMS[team]?.spawn || TEAMS.bloods.spawn;
  return { x: base.x + (Math.random() - .5) * 7, y: 0, z: base.z + (Math.random() - .5) * 12 };
}

function matchState() {
  return {
    scores: { ...scores },
    scoreLimit: SCORE_LIMIT,
    startedAt: match.startedAt,
    duration: match.duration,
    remaining: Math.max(0, match.duration - (Date.now() - match.startedAt)),
    ended: match.ended,
    winner: match.winner,
    roster: joinedPlayers().map(({ id, name, team, kit, kills, deaths, health, maxHealth }) => (
      { id, name, team, kit, kills, deaths, health, maxHealth }
    )),
  };
}

function makePlayer(id) {
  return {
    id,
    joined: false,
    name: 'Vanguard',
    team: null,
    kit: null,
    position: { x: 0, y: 0, z: 0 },
    rotation: 0,
    moving: false,
    sprinting: false,
    dashing: false,
    grounded: true,
    verticalVelocity: 0,
    attack: null,
    attackSerial: 0,
    health: 100,
    maxHealth: 100,
    arrows: 0,
    kills: 0,
    deaths: 0,
    dead: false,
  };
}

function cleanMovement(current, next = {}) {
  const position = next.position || current.position;
  return {
    ...current,
    position: {
      x: clamp(finite(position.x, current.position.x), -80, 80),
      y: clamp(finite(position.y, current.position.y), -10, 45),
      z: clamp(finite(position.z, current.position.z), -80, 80),
    },
    rotation: clamp(finite(next.rotation, current.rotation), -Math.PI * 8, Math.PI * 8),
    moving: Boolean(next.moving),
    sprinting: Boolean(next.sprinting),
    dashing: Boolean(next.dashing),
    grounded: next.grounded !== false,
    verticalVelocity: clamp(finite(next.verticalVelocity), -30, 30),
    attack: next.attack === 'slash' || next.attack === 'heavy' || next.attack === 'bow' ? next.attack : null,
    attackSerial: Math.max(current.attackSerial, Math.floor(finite(next.attackSerial, current.attackSerial))),
  };
}

function emitMatchState() {
  io.emit('matchState', matchState());
}

function endMatch(winner) {
  if (match.ended) return;
  match.ended = true;
  match.winner = winner;
  io.emit('matchEnded', matchState());
}

function respawnPlayer(player) {
  if (!player?.joined || match.ended) return;
  player.position = teamSpawn(player.team);
  player.health = player.maxHealth;
  player.dead = false;
  player.moving = false;
  player.sprinting = false;
  player.dashing = false;
  player.grounded = true;
  player.verticalVelocity = 0;
  player.attack = null;
  if (player.kit === 'bow') player.arrows = KITS.bow.arrows;
  io.emit('playerRespawned', {
    id: player.id,
    health: player.health,
    maxHealth: player.maxHealth,
    position: player.position,
    arrows: player.arrows,
  });
  emitMatchState();
}

function scheduleRespawn(player) {
  clearTimeout(respawnTimers.get(player.id));
  const respawnAt = Date.now() + RESPAWN_DELAY;
  io.emit('playerDied', { id: player.id, respawnAt, team: player.team, kills: player.kills, deaths: player.deaths });
  respawnTimers.set(player.id, setTimeout(() => {
    respawnTimers.delete(player.id);
    respawnPlayer(players.get(player.id));
  }, RESPAWN_DELAY));
}

function damagePlayer(attacker, target, damage, type) {
  if (!target || target.dead || target.team === attacker.team || match.ended) return;
  target.health = Math.max(0, Math.round((target.health - damage) * 10) / 10);
  io.emit('playerDamaged', {
    targetId: target.id,
    health: target.health,
    maxHealth: target.maxHealth,
    damage,
    attackerId: attacker.id,
    type,
  });
  io.to(attacker.id).emit('attackHit', { targetId: target.id, damage, type });
  if (target.health > 0) return;
  target.dead = true;
  target.deaths += 1;
  attacker.kills += 1;
  scores[attacker.team] += 1;
  scheduleRespawn(target);
  emitMatchState();
  if (scores[attacker.team] >= SCORE_LIMIT) endMatch(attacker.team);
}

function applySwordDamage(attacker, type) {
  const config = ATTACKS[type];
  const forward = { x: Math.sin(attacker.rotation), z: Math.cos(attacker.rotation) };
  const impact = type === 'heavy'
    ? { x: attacker.position.x + forward.x * 2.5, z: attacker.position.z + forward.z * 2.5 }
    : attacker.position;
  joinedPlayers().forEach((target) => {
    if (target.id === attacker.id || target.dead || target.team === attacker.team) return;
    const dx = target.position.x - impact.x;
    const dz = target.position.z - impact.z;
    const distance = Math.hypot(dx, dz);
    if (distance > config.range || Math.abs(target.position.y - attacker.position.y) > 3) return;
    if (type === 'slash' && distance > .01 && (dx * forward.x + dz * forward.z) / distance < -.15) return;
    damagePlayer(attacker, target, config.damage, type);
  });
}

function applyBowDamage(attacker, payload) {
  const strength = clamp(finite(payload.strength, .2), .15, 1);
  const raw = payload.direction || {};
  const length = Math.hypot(finite(raw.x), finite(raw.y), finite(raw.z)) || 1;
  const direction = {
    x: finite(raw.x) / length,
    y: finite(raw.y) / length,
    z: finite(raw.z, 1) / length,
  };
  const maxRange = 220;
  const speed = 70 + strength * 35;
  const fallbackOrigin = { x: attacker.position.x, y: attacker.position.y + 1.85, z: attacker.position.z };
  const requestedOrigin = payload.origin || {};
  const candidateOrigin = {
    x: finite(requestedOrigin.x, fallbackOrigin.x),
    y: finite(requestedOrigin.y, fallbackOrigin.y),
    z: finite(requestedOrigin.z, fallbackOrigin.z),
  };
  const cameraDistance = Math.hypot(
    candidateOrigin.x - attacker.position.x,
    candidateOrigin.y - (attacker.position.y + 2.1),
    candidateOrigin.z - attacker.position.z,
  );
  const origin = cameraDistance <= 16 ? candidateOrigin : fallbackOrigin;
  let best = null;
  joinedPlayers().forEach((target) => {
    if (target.id === attacker.id || target.dead || target.team === attacker.team) return;
    const dx = target.position.x - origin.x;
    const dz = target.position.z - origin.z;
    const horizontalDirectionSq = direction.x * direction.x + direction.z * direction.z;
    if (horizontalDirectionSq < .0001) return;
    const along = (dx * direction.x + dz * direction.z) / horizontalDirectionSq;
    if (along <= 0 || along > maxRange) return;
    const arrowX = origin.x + direction.x * along;
    const arrowY = origin.y + direction.y * along;
    const arrowZ = origin.z + direction.z * along;
    const horizontalMiss = Math.hypot(target.position.x - arrowX, target.position.z - arrowZ);
    const insideBodyHeight = arrowY >= target.position.y + .12 && arrowY <= target.position.y + 3.78;
    if (horizontalMiss <= .9 && insideBodyHeight && (!best || along < best.distance)) best = { target, distance: along };
  });
  const serial = Math.max(attacker.attackSerial + 1, Math.floor(finite(payload.serial, attacker.attackSerial + 1)));
  attacker.attack = 'bow';
  attacker.attackSerial = serial;
  io.emit('playerShoot', { id: attacker.id, origin, direction, strength, speed, serial, arrows: attacker.arrows });
  if (best) {
    const impact = {
      x: origin.x + direction.x * best.distance,
      y: origin.y + direction.y * best.distance,
      z: origin.z + direction.z * best.distance,
    };
    const travelTime = Math.max(0, best.distance / speed * 1000);
    const timer = setTimeout(() => {
      projectileTimers.delete(timer);
      const currentAttacker = players.get(attacker.id);
      const currentTarget = players.get(best.target.id);
      if (!currentAttacker?.joined || !currentTarget?.joined || currentTarget.dead || match.ended) return;
      const horizontalMiss = Math.hypot(currentTarget.position.x - impact.x, currentTarget.position.z - impact.z);
      const insideBodyHeight = impact.y >= currentTarget.position.y + .12 && impact.y <= currentTarget.position.y + 3.78;
      if (horizontalMiss <= .9 && insideBodyHeight) {
        damagePlayer(currentAttacker, currentTarget, Math.round(10 + strength * 26), 'bow');
      }
    }, travelTime);
    projectileTimers.add(timer);
  }
}

function restartMatch() {
  respawnTimers.forEach((timer) => clearTimeout(timer));
  respawnTimers.clear();
  projectileTimers.forEach((timer) => clearTimeout(timer));
  projectileTimers.clear();
  scores = { bloods: 0, crips: 0 };
  match = { startedAt: Date.now(), duration: MATCH_DURATION, ended: false, winner: null };
  joinedPlayers().forEach((player) => {
    player.kills = 0;
    player.deaths = 0;
    respawnPlayer(player);
  });
  io.emit('matchRestarted', matchState());
}

io.on('connection', (socket) => {
  const clientKey = String(socket.handshake.auth?.clientKey || '').slice(0, 96);
  if (clientKey) {
    const previousSocketId = clientConnections.get(clientKey);
    if (previousSocketId && previousSocketId !== socket.id) io.sockets.sockets.get(previousSocketId)?.disconnect(true);
    clientConnections.set(clientKey, socket.id);
  }
  const player = makePlayer(socket.id);
  players.set(socket.id, player);
  socket.emit('welcome', { id: socket.id, match: matchState() });

  socket.on('joinGame', (payload = {}) => {
    const current = players.get(socket.id);
    if (!current || current.joined) return;
    const team = payload.team === 'crips' ? 'crips' : payload.team === 'bloods' ? 'bloods' : null;
    const kit = payload.kit === 'bow' ? 'bow' : payload.kit === 'sword' ? 'sword' : null;
    if (!team || !kit) {
      socket.emit('joinRejected', { message: 'Choose a team and starter kit.' });
      return;
    }
    const kitConfig = KITS[kit];
    Object.assign(current, {
      joined: true,
      name: cleanName(payload.name),
      team,
      kit,
      position: teamSpawn(team),
      health: kitConfig.maxHealth,
      maxHealth: kitConfig.maxHealth,
      arrows: kitConfig.arrows,
      dead: false,
    });
    socket.emit('joinAccepted', { player: current, match: matchState() });
    socket.emit('worldSnapshot', joinedPlayers().filter((entry) => entry.id !== socket.id));
    socket.broadcast.emit('playerJoined', current);
    emitMatchState();
  });

  socket.on('playerState', (next) => {
    const current = players.get(socket.id);
    if (!current?.joined || current.dead || !next || typeof next !== 'object' || match.ended) return;
    const cleaned = cleanMovement(current, next);
    players.set(socket.id, cleaned);
    socket.broadcast.volatile.emit('playerState', cleaned);
  });

  socket.on('playerAttack', (payload = {}) => {
    const type = payload.type === 'heavy' ? 'heavy' : payload.type === 'slash' ? 'slash' : null;
    const current = players.get(socket.id);
    if (!type || !current?.joined || current.dead || current.kit !== 'sword' || match.ended) return;
    const now = Date.now();
    const last = attackTimes.get(socket.id) || { slash: 0, heavy: 0, bow: 0 };
    if (now - last[type] < ATTACKS[type].cooldown) return;
    last[type] = now;
    attackTimes.set(socket.id, last);
    current.attack = type;
    current.attackSerial = Math.max(current.attackSerial + 1, Math.floor(finite(payload.serial, current.attackSerial + 1)));
    socket.broadcast.emit('playerAttack', { id: socket.id, type, serial: current.attackSerial });
    applySwordDamage(current, type);
  });

  socket.on('playerShoot', (payload = {}) => {
    const current = players.get(socket.id);
    if (!current?.joined || current.dead || current.kit !== 'bow' || match.ended) return;
    const now = Date.now();
    const last = attackTimes.get(socket.id) || { slash: 0, heavy: 0, bow: 0 };
    if (now - last.bow < ATTACKS.bow.cooldown) return;
    last.bow = now;
    attackTimes.set(socket.id, last);
    applyBowDamage(current, payload);
  });

  socket.on('respawn', () => {
    const current = players.get(socket.id);
    if (current?.dead && !respawnTimers.has(socket.id)) respawnPlayer(current);
  });
  socket.on('restartMatch', () => { if (match.ended && players.get(socket.id)?.joined) restartMatch(); });

  socket.on('disconnect', () => {
    const current = players.get(socket.id);
    clearTimeout(respawnTimers.get(socket.id));
    respawnTimers.delete(socket.id);
    players.delete(socket.id);
    attackTimes.delete(socket.id);
    if (clientKey && clientConnections.get(clientKey) === socket.id) clientConnections.delete(clientKey);
    if (current?.joined) {
      socket.broadcast.emit('playerLeft', socket.id);
      emitMatchState();
    }
  });
});

setInterval(() => {
  if (!match.ended && Date.now() - match.startedAt >= match.duration) {
    const winner = scores.bloods === scores.crips ? 'draw' : scores.bloods > scores.crips ? 'bloods' : 'crips';
    endMatch(winner);
  } else if (joinedPlayers().length) emitMatchState();
}, 1000).unref();

const distDirectory = path.join(__dirname, 'dist');
app.get('/health', (_request, response) => response.json({ ok: true, players: joinedPlayers().length, scores, match: matchState() }));
app.use(express.static(distDirectory));
app.use((request, response, next) => {
  if (request.method === 'GET' && request.accepts('html')) return response.sendFile(path.join(distDirectory, 'index.html'));
  next();
});

httpServer.listen(port, '0.0.0.0', () => {
  console.log(`Astral Vanguard team server listening on http://localhost:${port}`);
});
