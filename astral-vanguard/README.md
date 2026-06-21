# Astral Vanguard

A stylized Three.js action-RPG sandbox with optional real-time multiplayer powered by Node.js and Socket.io.

## Controls

- **WASD / Arrow keys** — Move
- **Shift** — Sprint
- **Space** — Jump
- **Y** — Toggle the front-facing look-back camera
- **Mouse movement** — Aim the hero and camera
- **Left click / 1** — Quick Slash
- **Right click / 2** — Ground Strike
- **Mouse wheel** — Zoom

## Run locally: production-style multiplayer

This is the simplest way to run the game and multiplayer server together:

```bash
pnpm install
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000). Open a second browser or tab at the same address to test multiplayer. `server.js` serves the built game and its Socket.io endpoint from one Node process.

## Run locally: development mode

Use two terminals from this folder.

Terminal 1:

```bash
pnpm server
```

Terminal 2:

```bash
pnpm dev
```

Open the Vite URL, normally [http://localhost:5173](http://localhost:5173). In this workspace it may use another available port. During development the client automatically connects to the multiplayer server on port `3000`.

If the server is not running, the existing single-player game continues working offline.

## Multiplayer behavior

- Socket.io gives every connection a unique socket ID.
- The client sends position, facing rotation, movement, sprint, jump, and attack state 20 times per second.
- Remote characters interpolate between updates to reduce visible jitter.
- Quick Slash and Ground Strike are sent as reliable attack events.
- Quick Slash deals **8.5 damage** and Ground Strike deals **40 damage** when a player is in range.
- Attack reach is deliberately generous for the testing sandbox: Quick Slash reaches 4.8 world units and Ground Strike affects a 4.5-unit radius around its forward impact.
- Remote players show a world-space HP bar and briefly flash red when hit.
- At 0 HP the character falls, controls lock, and a server-synchronized respawn prompt appears.
- Disconnected players are removed from the server and every connected scene.
- `GET /health` returns server health, connected player count, and active IDs.

## Deploy online

### One Node service (recommended)

Deploy this repository as a Node web service on a host that supports WebSockets, such as Render, Fly.io, Railway, or a VPS.

Use:

- Build command: `pnpm install --frozen-lockfile && pnpm build`
- Start command: `pnpm start`
- Health check path: `/health`

The host should provide `PORT`; `server.js` already reads it and binds to `0.0.0.0`. Because the same service hosts the web game and Socket.io, no separate multiplayer URL or CORS setting is required.

For Render, create a Web Service from the repository, enter the build/start commands above, and deploy. See Render's official [Node/Express deployment guide](https://render.com/docs/deploy-node-express-app) and [WebSocket documentation](https://render.com/docs/websocket).

### Separate frontend and multiplayer server

If the Vite frontend is hosted separately from Node:

1. Deploy `server.js` as a WebSocket-capable Node service.
2. Set `CLIENT_ORIGIN` on the server to the public frontend URL. Multiple allowed origins can be comma-separated.
3. Build the frontend with `VITE_MULTIPLAYER_URL` set to the public HTTPS server URL.

Example:

```bash
VITE_MULTIPLAYER_URL=https://game-server.example.com pnpm build
```

Use HTTPS/WSS in production. If a reverse proxy sits in front of Node, it must forward WebSocket upgrade headers; see the official [Socket.io reverse-proxy guide](https://socket.io/docs/v4/reverse-proxy/).

For a static Netlify deployment, run `pnpm build` and upload the contents of `dist` (or the supplied `astral-vanguard-netlify.zip`) to Netlify Drop. The game remains playable in single-player. Multiplayer requires building with `VITE_MULTIPLAYER_URL` pointed at a separately deployed WebSocket-capable Node server, because Netlify's static hosting does not run `server.js`.

Walking, sprinting, sword slashes, and the Ground Strike stomp use responsive procedural audio generated in the browser.

This version stores players in one server process. Before horizontally scaling to multiple Node instances, add a shared Socket.io adapter such as Redis and configure sticky sessions.
