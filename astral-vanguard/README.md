# Astral Vanguard

A stylized Three.js team arena with a Node.js + Socket.io authoritative multiplayer server. The Bloods and Crips names are used only as fictional arcade-fantasy team labels; the game contains no real-world symbols or affiliations.

## Match flow

1. Enter a display name.
2. Choose Bloods (red, west spawn) or Crips (blue, east spawn).
3. Choose the Sword or Bow starter kit.
4. Join the shared match.
5. The first team to 25 eliminations wins; a ten-minute match timer breaks on the higher score or a draw.

The Sword Kit has 120 health, 150 stamina, powerful short-range attacks, a greatsword, and a dash that costs 5 stamina. The Bow Kit has 85 health, 100 stamina, infinite arrows, a one-second firing cooldown, hold-to-draw shooting, fast straight projectiles with no drop, full-arena crosshair-accurate range, and damage that lands when the arrow arrives and scales with draw strength. Moving clear of the impact line before arrival dodges the shot.

## Controls

- WASD / arrows: move
- Shift: sprint
- Space: jump
- Mouse: camera and facing direction
- Bow users stay in a top-right over-the-shoulder camera without changing zoom; the visible arrow and server hit detection both use the exact center-crosshair ray
- Vertical camera look supports nearly straight up and straight down without inverted controls
- Mouse wheel: zoom
- Y: front-facing look-back camera
- Sword left click / 1: quick slash
- Sword right click / 2: ground strike
- Sword Q: knight dash
- Bow hold left click: draw; release to fire
- Tab: player kills/deaths standings

The top-right player board always lists everyone currently in the shared match with their team color and kit. Bow players remain in a true elevated right-shoulder view while idle, moving, drawing, firing, and recovering, with the camera looking directly along the center crosshair firing ray.

## Run locally

```bash
npm install
npm run build
npm start
```

Open `http://localhost:3000`. The same Node process serves the production client and Socket.io endpoint.

### Test with two browser tabs

1. Open `http://localhost:3000` in two separate tabs.
2. Choose a different display name in each tab.
3. Put one player on Bloods and one on Crips.
4. Try one Sword Kit and one Bow Kit.
5. Join in both tabs. Each tab should show the other player in the same world with the correct name, team color, kit weapon, health, movement, attacks, deaths, and respawns.

## Deploy to Render

This project includes `render.yaml` and is ready for a Render Web Service.

### Blueprint deployment

1. Put this folder in a GitHub repository.
2. In Render, choose **New → Blueprint**.
3. Connect the repository and apply `render.yaml`.
4. Render runs `npm install && npm run build`, then `npm start`.

### Manual Web Service

- Runtime: Node
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Health check: `/health`
- Instance count: 1

Render supplies `PORT`; `server.js` listens on it and binds to `0.0.0.0`. Keep one instance because match state is currently stored in memory. Multiple instances require a shared Socket.io adapter such as Redis plus sticky sessions.

### Test with a friend

Open the public Render URL yourself and send that exact `https://...onrender.com` link to your friend. Choose opposite teams, join the match, and confirm both names appear on the Tab standings. Do not send `localhost` or `127.0.0.1`; those addresses always refer to the viewer's own computer.

## Deploy the frontend to Netlify

The included `netlify.toml` builds the Vite client and publishes `dist/` with single-page routing enabled.

1. Deploy this repository to Render first so the Socket.io server has a public URL.
2. Import the same repository into Netlify.
3. Add `VITE_MULTIPLAYER_URL` in Netlify's environment variables and set it to the public Render URL.
4. Deploy. Netlify runs `npm run build` and serves the generated client from `dist/`.

The Render deployment does not need this variable because the Node server hosts both the client and Socket.io from the same origin.

## Networking

The server owns lobby admission, identity, teams, kits, spawns, health, ammo, damage, deaths, respawns, kills, scores, match time, wins, and rematches. Clients send movement snapshots and attack intent. Remote movement is interpolated, while reliable Socket.io events synchronize attacks, arrows, damage, match state, and player lifecycle.
