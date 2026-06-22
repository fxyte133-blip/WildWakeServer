import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { io } from 'socket.io-client';
import './style.css';

const TAU = Math.PI * 2;
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const game = document.querySelector('#game');

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
game.appendChild(renderer.domElement);

let audioContext = null;
let audioMaster = null;
let footstepTimer = .08;

function ensureAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioContext) {
    audioContext = new AudioContextClass();
    audioMaster = audioContext.createGain();
    audioMaster.gain.value = .58;
    audioMaster.connect(audioContext.destination);
  }
  if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
  game.dataset.audio = 'ready';
  return audioContext;
}

function noiseBuffer(duration) {
  const frameCount = Math.ceil(audioContext.sampleRate * duration);
  const buffer = audioContext.createBuffer(1, frameCount, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    const fade = 1 - i / frameCount;
    data[i] = (Math.random() * 2 - 1) * (.35 + fade * .65);
  }
  return buffer;
}

function playFootstep(sprinting) {
  const context = ensureAudio();
  if (!context) return;
  const now = context.currentTime;
  const thump = context.createOscillator();
  const thumpGain = context.createGain();
  thump.type = 'sine';
  thump.frequency.setValueAtTime(sprinting ? 112 : 88, now);
  thump.frequency.exponentialRampToValueAtTime(42, now + .105);
  thumpGain.gain.setValueAtTime(.0001, now);
  thumpGain.gain.exponentialRampToValueAtTime(sprinting ? .115 : .082, now + .008);
  thumpGain.gain.exponentialRampToValueAtTime(.0001, now + .12);
  thump.connect(thumpGain).connect(audioMaster);
  thump.start(now);
  thump.stop(now + .13);

  const grit = context.createBufferSource();
  const gritFilter = context.createBiquadFilter();
  const gritGain = context.createGain();
  grit.buffer = noiseBuffer(.075);
  gritFilter.type = 'lowpass';
  gritFilter.frequency.value = sprinting ? 760 : 520;
  gritGain.gain.setValueAtTime(sprinting ? .075 : .048, now);
  gritGain.gain.exponentialRampToValueAtTime(.0001, now + .075);
  grit.connect(gritFilter).connect(gritGain).connect(audioMaster);
  grit.start(now);
  game.dataset.lastSound = sprinting ? 'footstep-sprint' : 'footstep-walk';
}

function playSwordSlash() {
  const context = ensureAudio();
  if (!context) return;
  const now = context.currentTime;
  const whoosh = context.createBufferSource();
  const sweep = context.createBiquadFilter();
  const whooshGain = context.createGain();
  whoosh.buffer = noiseBuffer(.25);
  sweep.type = 'bandpass';
  sweep.Q.value = .65;
  sweep.frequency.setValueAtTime(2450, now);
  sweep.frequency.exponentialRampToValueAtTime(620, now + .22);
  whooshGain.gain.setValueAtTime(.0001, now);
  whooshGain.gain.exponentialRampToValueAtTime(.16, now + .025);
  whooshGain.gain.exponentialRampToValueAtTime(.0001, now + .24);
  whoosh.connect(sweep).connect(whooshGain).connect(audioMaster);
  whoosh.start(now);

  const blade = context.createOscillator();
  const bladeGain = context.createGain();
  blade.type = 'triangle';
  blade.frequency.setValueAtTime(510, now);
  blade.frequency.exponentialRampToValueAtTime(185, now + .14);
  bladeGain.gain.setValueAtTime(.045, now);
  bladeGain.gain.exponentialRampToValueAtTime(.0001, now + .15);
  blade.connect(bladeGain).connect(audioMaster);
  blade.start(now);
  blade.stop(now + .16);
  game.dataset.lastSound = 'slash';
}

function playGroundStomp() {
  const context = ensureAudio();
  if (!context) return;
  const now = context.currentTime;
  const impact = context.createOscillator();
  const impactGain = context.createGain();
  impact.type = 'sine';
  impact.frequency.setValueAtTime(105, now);
  impact.frequency.exponentialRampToValueAtTime(28, now + .28);
  impactGain.gain.setValueAtTime(.24, now);
  impactGain.gain.exponentialRampToValueAtTime(.0001, now + .3);
  impact.connect(impactGain).connect(audioMaster);
  impact.start(now);
  impact.stop(now + .31);

  const dirt = context.createBufferSource();
  const dirtFilter = context.createBiquadFilter();
  const dirtGain = context.createGain();
  dirt.buffer = noiseBuffer(.3);
  dirtFilter.type = 'lowpass';
  dirtFilter.frequency.setValueAtTime(820, now);
  dirtFilter.frequency.exponentialRampToValueAtTime(150, now + .27);
  dirtGain.gain.setValueAtTime(.18, now);
  dirtGain.gain.exponentialRampToValueAtTime(.0001, now + .3);
  dirt.connect(dirtFilter).connect(dirtGain).connect(audioMaster);
  dirt.start(now);
  game.dataset.lastSound = 'stomp';
}

function playSupplyWeaponSound(weapon) {
  const context = ensureAudio();
  if (!context) return;
  const now = context.currentTime;
  const blast = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  blast.buffer = noiseBuffer(weapon === 'rpg' ? .38 : .12);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(weapon === 'rpg' ? 520 : 1900, now);
  filter.frequency.exponentialRampToValueAtTime(weapon === 'rpg' ? 90 : 420, now + (weapon === 'rpg' ? .36 : .1));
  gain.gain.setValueAtTime(weapon === 'rpg' ? .34 : .16, now);
  gain.gain.exponentialRampToValueAtTime(.0001, now + (weapon === 'rpg' ? .38 : .12));
  blast.connect(filter).connect(gain).connect(audioMaster);
  blast.start(now);
  game.dataset.lastSound = weapon;
}

function playExplosionSound() {
  const context = ensureAudio();
  if (!context) return;
  const now = context.currentTime;
  const boom = context.createOscillator();
  const boomGain = context.createGain();
  boom.type = 'sine';
  boom.frequency.setValueAtTime(86, now);
  boom.frequency.exponentialRampToValueAtTime(22, now + .55);
  boomGain.gain.setValueAtTime(.42, now);
  boomGain.gain.exponentialRampToValueAtTime(.0001, now + .58);
  boom.connect(boomGain).connect(audioMaster);
  boom.start(now);
  boom.stop(now + .6);
  const debris = context.createBufferSource();
  const debrisGain = context.createGain();
  debris.buffer = noiseBuffer(.68);
  debrisGain.gain.setValueAtTime(.3, now);
  debrisGain.gain.exponentialRampToValueAtTime(.0001, now + .68);
  debris.connect(debrisGain).connect(audioMaster);
  debris.start(now);
  game.dataset.lastSound = 'rpg-explosion';
}

function updateMovementAudio(dt) {
  if (state.dead || !state.grounded || !state.moving || state.attack) {
    footstepTimer = Math.min(footstepTimer, .08);
    return;
  }
  footstepTimer -= dt;
  if (footstepTimer <= 0) {
    playFootstep(state.sprinting);
    footstepTimer = state.sprinting ? .285 : .46;
  }
}

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xa8c3ba, 0.0072);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.08, 520);
camera.position.set(6.5, 5.1, -8.7);

const palette = {
  skyTop: 0x2f6488,
  skyHorizon: 0xb7d1d1,
  grass: 0x58734e,
  grassDark: 0x324b38,
  grassLight: 0x77915d,
  leather: 0x4d2d23,
  leatherLight: 0x765043,
  steel: 0x74818b,
  steelDark: 0x3a4650,
  steelLight: 0xb8c1c2,
  gold: 0xb98a3f,
  cloth: 0x7f2734,
  clothDark: 0x431925,
  skin: 0xd5a276,
  hair: 0x2b201d,
};

const materials = {
  armor: new THREE.MeshStandardMaterial({ color: palette.steelDark, roughness: .38, metalness: .52 }),
  armorEdge: new THREE.MeshStandardMaterial({ color: palette.steel, roughness: .3, metalness: .58 }),
  silver: new THREE.MeshStandardMaterial({ color: 0xd2d8d5, roughness: .24, metalness: .62 }),
  gold: new THREE.MeshStandardMaterial({ color: palette.gold, roughness: .33, metalness: .56 }),
  leather: new THREE.MeshStandardMaterial({ color: palette.leather, roughness: .8, metalness: .02 }),
  leatherLight: new THREE.MeshStandardMaterial({ color: palette.leatherLight, roughness: .74, metalness: .04 }),
  cloth: new THREE.MeshStandardMaterial({ color: palette.cloth, roughness: .82, metalness: 0, side: THREE.DoubleSide }),
  clothDark: new THREE.MeshStandardMaterial({ color: palette.clothDark, roughness: .88, metalness: 0, side: THREE.DoubleSide }),
  skin: new THREE.MeshStandardMaterial({ color: palette.skin, roughness: .72 }),
  hair: new THREE.MeshStandardMaterial({ color: palette.hair, roughness: .9 }),
  eye: new THREE.MeshStandardMaterial({ color: 0x2b180f, emissive: 0x7c3e12, emissiveIntensity: .24, roughness: .34 }),
};

function shadow(mesh, cast = true, receive = true) {
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  return mesh;
}

function rounded(w, h, d, radius, material, segments = 3) {
  return shadow(new THREE.Mesh(new RoundedBoxGeometry(w, h, d, segments, radius), material));
}

function lowCylinder(rt, rb, h, sides, material) {
  return shadow(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, sides), material));
}

function createSky() {
  const uniforms = {
    top: { value: new THREE.Color(palette.skyTop) },
    horizon: { value: new THREE.Color(palette.skyHorizon) },
    sunDir: { value: new THREE.Vector3(-.45, .64, -.45).normalize() },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
      uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; varying vec3 vDir;
      void main(){
        float h = smoothstep(-0.08, .82, vDir.y);
        vec3 col = mix(horizon, top, h);
        float sun = pow(max(dot(normalize(vDir), sunDir), 0.0), 480.0);
        float glow = pow(max(dot(normalize(vDir), sunDir), 0.0), 16.0);
        col += vec3(1.0, .72, .38) * sun * 3.2 + vec3(1.0, .55, .24) * glow * .12;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(420, 32, 18), material));
}
createSky();

const hemi = new THREE.HemisphereLight(0xc8dddf, 0x263327, 1.7);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffe2bc, 4.4);
sun.position.set(-34, 46, -28);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -82;
sun.shadow.camera.right = 82;
sun.shadow.camera.top = 82;
sun.shadow.camera.bottom = -82;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 220;
sun.shadow.bias = -0.00045;
sun.shadow.normalBias = .035;
scene.add(sun);
scene.add(sun.target);

const rim = new THREE.DirectionalLight(0x8fc2d5, 1.35);
rim.position.set(18, 18, 22);
scene.add(rim);

function heightAt(x, z) {
  const ripple = Math.sin(x * .055) * .11 + Math.cos(z * .048) * .09 + Math.sin((x + z) * .032) * .07;
  const hill = (cx, cz, h, s) => h * Math.exp(-((x - cx) ** 2 + (z - cz) ** 2) / (s * s));
  return ripple
    + hill(-30, 24, 4.3, 22)
    + hill(34, 36, 5.4, 28)
    + hill(-38, -34, 3.5, 20)
    + hill(41, -25, 3.0, 19)
    + hill(-92, 74, 7.2, 42)
    + hill(104, 88, 8.5, 48)
    + hill(-108, -82, 6.6, 39)
    + hill(96, -105, 7.4, 44)
    - hill(0, 0, .25, 18);
}

function seeded(seed = 9127) {
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
const random = seeded();

const terrainSize = 320;
const terrainGeometry = new THREE.PlaneGeometry(terrainSize, terrainSize, 160, 160);
terrainGeometry.rotateX(-Math.PI / 2);
const terrainPos = terrainGeometry.attributes.position;
const terrainColors = [];
const grassA = new THREE.Color(palette.grassDark);
const grassB = new THREE.Color(palette.grassLight);
for (let i = 0; i < terrainPos.count; i++) {
  const x = terrainPos.getX(i);
  const z = terrainPos.getZ(i);
  const h = heightAt(x, z);
  terrainPos.setY(i, h);
  const variation = clamp(.47 + h * .026 + Math.sin(x * .19 + z * .11) * .09 + random() * .06, .1, .92);
  const c = grassA.clone().lerp(grassB, variation);
  terrainColors.push(c.r, c.g, c.b);
}
terrainGeometry.setAttribute('color', new THREE.Float32BufferAttribute(terrainColors, 3));
terrainGeometry.computeVertexNormals();
const terrainMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .96, metalness: 0 });
const terrain = shadow(new THREE.Mesh(terrainGeometry, terrainMaterial), false, true);
scene.add(terrain);

const collisionMeshes = [terrain];
const worldObstacles = [];
const playerObstacleRadius = .46;

function resolveWorldObstacles(position, velocity) {
  for (let pass = 0; pass < 3; pass++) {
    worldObstacles.forEach((obstacle) => {
      const dx = position.x - obstacle.x;
      const dz = position.z - obstacle.z;
      const minimumDistance = playerObstacleRadius + obstacle.radius;
      const distanceSq = dx * dx + dz * dz;
      if (distanceSq >= minimumDistance * minimumDistance) return;
      const distance = Math.sqrt(distanceSq);
      const normalX = distance > .0001 ? dx / distance : Math.sin(hero.rotation.y + Math.PI);
      const normalZ = distance > .0001 ? dz / distance : Math.cos(hero.rotation.y + Math.PI);
      position.x = obstacle.x + normalX * minimumDistance;
      position.z = obstacle.z + normalZ * minimumDistance;
      const inwardSpeed = velocity.x * normalX + velocity.z * normalZ;
      if (inwardSpeed < 0) {
        velocity.x -= inwardSpeed * normalX;
        velocity.z -= inwardSpeed * normalZ;
      }
    });
  }
}

function moveHeroWithCollisions(deltaX, deltaZ, velocity) {
  const distance = Math.hypot(deltaX, deltaZ);
  const steps = Math.max(1, Math.ceil(distance / .16));
  const stepX = deltaX / steps;
  const stepZ = deltaZ / steps;
  for (let i = 0; i < steps; i++) {
    hero.position.x += stepX;
    hero.position.z += stepZ;
    resolveWorldObstacles(hero.position, velocity);
  }
}

function createGrass() {
  const blade = new THREE.ConeGeometry(.045, .38, 3, 1);
  blade.translate(0, .19, 0);
  const material = new THREE.MeshStandardMaterial({ color: 0x6f8b54, roughness: 1, side: THREE.DoubleSide });
  material.onBeforeCompile = (shader) => {
    material.userData.shader = shader;
    shader.uniforms.uTime = { value: 0 };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec4 ip = instanceMatrix * vec4(position, 1.0);
          float bend = sin(uTime * 1.35 + ip.x * .19 + ip.z * .16) * .045;
          transformed.x += bend * uv.y;
          transformed.z += bend * .45 * uv.y;
        #endif`);
  };
  const count = 2300;
  const mesh = new THREE.InstancedMesh(blade, material, count);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    const angle = random() * TAU;
    const radius = 5 + Math.sqrt(random()) * 140;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    dummy.position.set(x, heightAt(x, z), z);
    dummy.rotation.set((random() - .5) * .12, random() * TAU, (random() - .5) * .1);
    const scale = .65 + random() * .9;
    dummy.scale.set(scale, scale * (.75 + random() * .55), scale);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  scene.add(mesh);
  return material;
}
const grassMaterial = createGrass();

function createRock(x, z, scale = 1) {
  const geometry = new THREE.DodecahedronGeometry(scale, 0);
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i);
    p.setXYZ(i, p.getX(i) * (1 + y * .06), y * .62, p.getZ(i) * .82);
  }
  geometry.computeVertexNormals();
  const material = new THREE.MeshStandardMaterial({ color: 0x68706a, roughness: .91, metalness: .02, flatShading: true });
  const rock = shadow(new THREE.Mesh(geometry, material));
  rock.position.set(x, heightAt(x, z) + scale * .25, z);
  rock.rotation.set(random() * .4, random() * TAU, random() * .22);
  scene.add(rock);
  collisionMeshes.push(rock);
  worldObstacles.push({ x, z, radius: .78 * scale, type: 'rock' });
}

function createTree(x, z, scale = 1) {
  const tree = new THREE.Group();
  tree.position.set(x, heightAt(x, z), z);
  tree.scale.setScalar(scale);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4e3b2b, roughness: .94, flatShading: true });
  const leafMats = [
    new THREE.MeshStandardMaterial({ color: 0x385d42, roughness: .92, flatShading: true }),
    new THREE.MeshStandardMaterial({ color: 0x486c49, roughness: .9, flatShading: true }),
  ];
  const trunk = lowCylinder(.2, .35, 3.25, 7, trunkMat);
  trunk.position.y = 1.55;
  trunk.rotation.z = (random() - .5) * .06;
  tree.add(trunk);
  const canopyData = [[0, 3.4, 1.25], [-.62, 3.25, .9], [.66, 3.34, .95], [.08, 4.12, 1.04]];
  canopyData.forEach(([cx, cy, cs], i) => {
    const crown = shadow(new THREE.Mesh(new THREE.IcosahedronGeometry(cs, 1), leafMats[i % 2]));
    crown.position.set(cx, cy, (random() - .5) * .38);
    crown.scale.y = .9 + random() * .2;
    tree.add(crown);
  });
  scene.add(tree);
  collisionMeshes.push(trunk);
  worldObstacles.push({ x, z, radius: .55 * scale, type: 'tree' });
}

[
  [-13, 11, .9], [-21, 17, 1.12], [18, 20, 1.08], [28, 13, .95],
  [-30, -13, 1.15], [31, -22, 1.04], [-15, -30, .94], [8, 35, 1.12],
].forEach((p) => createTree(...p));

[
  [-7, 8, .65], [10, 12, 1.0], [-14, -7, .85], [18, -11, .72], [25, 28, 1.2],
  [-25, 26, .95], [5, -26, .6], [37, 2, 1.1], [-34, -26, 1.25], [14, 5, .38],
].forEach((p) => createRock(...p));

for (let i = 0; i < 22; i++) {
  const angle = random() * TAU;
  const radius = 72 + random() * 68;
  createTree(Math.cos(angle) * radius, Math.sin(angle) * radius, .82 + random() * .42);
}
for (let i = 0; i < 30; i++) {
  const angle = random() * TAU;
  const radius = 65 + random() * 78;
  createRock(Math.cos(angle) * radius, Math.sin(angle) * radius, .45 + random() * .9);
}

const smallRockGeometry = new THREE.DodecahedronGeometry(1, 0);
const smallRockPositions = smallRockGeometry.attributes.position;
for (let i = 0; i < smallRockPositions.count; i++) {
  const y = smallRockPositions.getY(i);
  smallRockPositions.setXYZ(i, smallRockPositions.getX(i) * (1 + y * .05), y * .48, smallRockPositions.getZ(i) * .78);
}
smallRockGeometry.computeVertexNormals();
const smallRockMaterials = [
  new THREE.MeshStandardMaterial({ color: 0x717970, roughness: .96, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x59635d, roughness: .97, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x7d786c, roughness: .95, flatShading: true }),
];

function createSmallRock(x, z, scale, variant) {
  const rock = shadow(new THREE.Mesh(smallRockGeometry, smallRockMaterials[variant % smallRockMaterials.length]));
  rock.position.set(x, heightAt(x, z) + scale * .17, z);
  rock.rotation.set((random() - .5) * .42, random() * TAU, (random() - .5) * .34);
  const widthScale = scale * (1 + random() * .3);
  rock.scale.set(widthScale, scale * (.7 + random() * .25), scale);
  scene.add(rock);
  collisionMeshes.push(rock);
  worldObstacles.push({ x, z, radius: .72 * widthScale, type: 'small-rock' });
}

for (let i = 0; i < 48; i++) {
  const angle = random() * TAU;
  const radius = 14 + Math.sqrt(random()) * 125;
  createSmallRock(Math.cos(angle) * radius, Math.sin(angle) * radius, .16 + random() * .28, i);
}
game.dataset.worldObstacleCount = String(worldObstacles.length);

function createTeamSpawnSign(name, x, color, glow, panel) {
  const z = 0;
  const sign = new THREE.Group();
  sign.position.set(x, heightAt(x, z) + 9.5, z);
  sign.userData.baseY = sign.position.y;
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.roundRect(28, 30, 968, 196, 34);
  context.fillStyle = panel;
  context.fill();
  context.lineWidth = 9;
  context.strokeStyle = color;
  context.stroke();
  context.font = '900 134px system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.lineWidth = 18;
  context.strokeStyle = 'rgba(8, 12, 22, .96)';
  context.strokeText(name, 512, 130);
  context.fillStyle = color;
  context.shadowColor = glow;
  context.shadowBlur = 34;
  context.fillText(name, 512, 130);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, depthTest: false }));
  label.scale.set(12.8, 3.2, 1);
  label.renderOrder = 60;
  sign.add(label);
  scene.add(sign);
  return sign;
}

const teamSpawnSigns = [
  createTeamSpawnSign('BLOODS', -58, '#ff6a74', '#ff334d', 'rgba(48, 8, 16, .8)'),
  createTeamSpawnSign('CRIPS', 58, '#78a9ff', '#2f79ff', 'rgba(7, 18, 48, .8)'),
];

function updateTeamSpawnSigns(time) {
  teamSpawnSigns.forEach((sign, index) => {
    sign.position.y = sign.userData.baseY + Math.sin(time * 1.15 + index * Math.PI) * .12;
  });
}

function createCloud(x, y, z, scale) {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xe8eee7, transparent: true, opacity: .36, depthWrite: false });
  [[0,0,0,1.4], [1.2,.15,.05,1], [-1.1,.05,.15,.9], [.2,.35,.1,1.05]].forEach(([a,b,c,s]) => {
    const puff = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 1), mat);
    puff.position.set(a,b,c);
    puff.scale.y = .46;
    group.add(puff);
  });
  group.position.set(x, y, z);
  group.scale.setScalar(scale);
  scene.add(group);
  return group;
}
const clouds = [createCloud(-40, 28, 26, 3.6), createCloud(38, 23, 6, 2.8), createCloud(8, 32, 58, 4.3)];

// Reusable ground-impact pool for the right-click sword slam.
const dirtChunks = [];
const dustPuffs = [];
const dirtGeometry = new THREE.IcosahedronGeometry(.12, 0);
const dirtMaterials = [0x6d5034, 0x83613d, 0x4f462d].map((color) => new THREE.MeshStandardMaterial({
  color,
  roughness: 1,
  metalness: 0,
}));
for (let i = 0; i < 38; i++) {
  const chunk = new THREE.Mesh(dirtGeometry, dirtMaterials[i % dirtMaterials.length]);
  chunk.visible = false;
  chunk.castShadow = true;
  scene.add(chunk);
  dirtChunks.push(chunk);
}
for (let i = 0; i < 15; i++) {
  const dust = new THREE.Mesh(
    new THREE.IcosahedronGeometry(.22, 1),
    new THREE.MeshBasicMaterial({ color: i % 2 ? 0x9b7a50 : 0x755b3d, transparent: true, opacity: 0, depthWrite: false }),
  );
  dust.visible = false;
  scene.add(dust);
  dustPuffs.push(dust);
}
const impactRing = new THREE.Mesh(
  new THREE.RingGeometry(.38, .58, 36),
  new THREE.MeshBasicMaterial({ color: 0xb18a57, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }),
);
impactRing.rotation.x = -Math.PI / 2;
impactRing.visible = false;
scene.add(impactRing);
let groundImpactAge = 10;

function spawnGroundImpact() {
  const forward = new THREE.Vector3(Math.sin(hero.rotation.y), 0, Math.cos(hero.rotation.y));
  const center = hero.position.clone().addScaledVector(forward, 2.05);
  center.y = heightAt(center.x, center.z) + .06;
  groundImpactAge = 0;

  dirtChunks.forEach((chunk, i) => {
    const angle = (i / dirtChunks.length) * TAU + (Math.random() - .5) * .36;
    const speed = 2.5 + Math.random() * 4.8;
    chunk.position.copy(center);
    chunk.position.x += Math.cos(angle) * Math.random() * .24;
    chunk.position.z += Math.sin(angle) * Math.random() * .24;
    chunk.scale.setScalar(.5 + Math.random() * 1.2);
    chunk.rotation.set(Math.random() * TAU, Math.random() * TAU, Math.random() * TAU);
    chunk.userData.velocity = new THREE.Vector3(Math.cos(angle) * speed, 3.2 + Math.random() * 5.4, Math.sin(angle) * speed);
    chunk.userData.spin = new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).multiplyScalar(12);
    chunk.visible = true;
  });

  dustPuffs.forEach((dust, i) => {
    const angle = (i / dustPuffs.length) * TAU + Math.random() * .4;
    const radius = .16 + Math.random() * .45;
    dust.position.copy(center).add(new THREE.Vector3(Math.cos(angle) * radius, .08 + Math.random() * .18, Math.sin(angle) * radius));
    dust.scale.setScalar(.45 + Math.random() * .55);
    dust.material.opacity = .38 + Math.random() * .2;
    dust.userData.velocity = new THREE.Vector3(Math.cos(angle) * (1.4 + Math.random() * 2.7), .65 + Math.random() * 1.8, Math.sin(angle) * (1.4 + Math.random() * 2.7));
    dust.visible = true;
  });

  impactRing.position.copy(center);
  impactRing.scale.setScalar(.5);
  impactRing.material.opacity = .62;
  impactRing.visible = true;
  addShake(.34);
  playGroundStomp();
}

function updateGroundImpact(dt) {
  if (groundImpactAge > 1.05) return;
  groundImpactAge += dt;
  dirtChunks.forEach((chunk) => {
    if (!chunk.visible) return;
    const velocity = chunk.userData.velocity;
    velocity.y -= 13.5 * dt;
    chunk.position.addScaledVector(velocity, dt);
    chunk.rotation.x += chunk.userData.spin.x * dt;
    chunk.rotation.y += chunk.userData.spin.y * dt;
    chunk.rotation.z += chunk.userData.spin.z * dt;
    const floor = heightAt(chunk.position.x, chunk.position.z) + .035;
    if (chunk.position.y <= floor) {
      chunk.position.y = floor;
      velocity.x *= .78;
      velocity.z *= .78;
      velocity.y = Math.abs(velocity.y) * .22;
    }
    if (groundImpactAge > .88) chunk.visible = false;
  });
  dustPuffs.forEach((dust) => {
    if (!dust.visible) return;
    dust.position.addScaledVector(dust.userData.velocity, dt);
    dust.userData.velocity.multiplyScalar(Math.exp(-2.8 * dt));
    dust.scale.addScalar(dt * 1.65);
    dust.material.opacity = Math.max(0, dust.material.opacity - dt * .58);
    if (groundImpactAge > .95) dust.visible = false;
  });
  impactRing.scale.setScalar(.5 + groundImpactAge * 5.2);
  impactRing.material.opacity = Math.max(0, .62 - groundImpactAge * 1.05);
  if (groundImpactAge > .62) impactRing.visible = false;
}

function addMesh(parent, mesh, position, rotation = [0, 0, 0], scale = [1, 1, 1]) {
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.scale.set(...scale);
  parent.add(mesh);
  return mesh;
}

function createSword() {
  const sword = new THREE.Group();
  sword.name = 'Vanguard greatsword';

  const grip = lowCylinder(.075, .085, .58, 10, materials.leather);
  grip.position.y = 0;
  sword.add(grip);
  for (let i = 0; i < 6; i++) {
    const wrap = new THREE.Mesh(new THREE.TorusGeometry(.087, .013, 5, 10), materials.leatherLight);
    wrap.rotation.x = Math.PI / 2;
    wrap.position.y = -.25 + i * .1;
    sword.add(wrap);
  }
  const pommel = shadow(new THREE.Mesh(new THREE.OctahedronGeometry(.13, 0), materials.gold));
  pommel.position.y = -.38;
  pommel.scale.y = 1.25;
  sword.add(pommel);

  const guard = new THREE.Group();
  guard.position.y = .36;
  const guardCore = rounded(.5, .12, .16, .035, materials.gold, 2);
  guard.add(guardCore);
  [-1, 1].forEach((side) => {
    const quillon = rounded(.28, .09, .13, .025, materials.gold, 2);
    quillon.position.x = side * .3;
    quillon.rotation.z = side * .18;
    guard.add(quillon);
    const tip = new THREE.Mesh(new THREE.OctahedronGeometry(.09, 0), materials.gold);
    tip.position.set(side * .47, side * .045, 0);
    guard.add(tip);
  });
  sword.add(guard);

  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(-.13, 0);
  bladeShape.lineTo(-.16, 1.18);
  bladeShape.lineTo(-.10, 1.48);
  bladeShape.lineTo(0, 1.68);
  bladeShape.lineTo(.10, 1.48);
  bladeShape.lineTo(.16, 1.18);
  bladeShape.lineTo(.13, 0);
  bladeShape.closePath();
  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, { depth: .075, bevelEnabled: true, bevelSegments: 1, bevelSize: .028, bevelThickness: .025, curveSegments: 1 });
  bladeGeo.center();
  bladeGeo.translate(0, 1.23, -.0375);
  const blade = shadow(new THREE.Mesh(bladeGeo, materials.silver));
  sword.add(blade);

  const fuller = rounded(.035, 1.45, .09, .012, materials.armorEdge, 1);
  fuller.position.set(0, 1.18, -.002);
  sword.add(fuller);
  return sword;
}

function createBow() {
  const bow = new THREE.Group();
  bow.name = 'Vanguard longbow';
  const bowMaterial = new THREE.MeshStandardMaterial({ color: 0x8d5c32, roughness: .72, metalness: .04 });
  const upperCurve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(0, .78, 0),
    new THREE.Vector3(.3, .42, .035),
    new THREE.Vector3(.08, .08, 0),
  );
  const lowerCurve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(.08, -.08, 0),
    new THREE.Vector3(.3, -.42, .035),
    new THREE.Vector3(0, -.78, 0),
  );
  bow.add(shadow(new THREE.Mesh(new THREE.TubeGeometry(upperCurve, 10, .035, 6, false), bowMaterial)));
  bow.add(shadow(new THREE.Mesh(new THREE.TubeGeometry(lowerCurve, 10, .035, 6, false), bowMaterial)));
  addMesh(bow, lowCylinder(.055, .055, .25, 7, materials.leather), [.08, 0, 0]);
  const stringGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, .78, 0), new THREE.Vector3(.08, 0, -.02), new THREE.Vector3(0, -.78, 0),
  ]);
  const bowString = new THREE.Line(stringGeometry, new THREE.LineBasicMaterial({ color: 0xe7dfca, transparent: true, opacity: .8 }));
  bow.add(bowString);
  bow.userData.string = bowString;
  return bow;
}

function createQuiver() {
  const quiver = new THREE.Group();
  const caseMesh = lowCylinder(.15, .18, .82, 9, materials.leather);
  caseMesh.position.y = -.1;
  quiver.add(caseMesh);
  for (let i = 0; i < 5; i++) {
    const arrow = new THREE.Group();
    addMesh(arrow, lowCylinder(.012, .012, .82, 5, materials.leatherLight), [0, .34, 0]);
    addMesh(arrow, new THREE.Mesh(new THREE.ConeGeometry(.045, .12, 5), materials.silver), [0, -.12, 0], [Math.PI, 0, 0]);
    arrow.position.set((i - 2) * .045, .25 + Math.abs(i - 2) * .025, (i % 2) * .035);
    quiver.add(arrow);
  }
  return quiver;
}

function createAK47() {
  const weapon = new THREE.Group();
  weapon.name = 'Supply AK-47';
  const gunMetal = new THREE.MeshStandardMaterial({ color: 0x252b2d, roughness: .34, metalness: .72 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x704127, roughness: .76, metalness: .02 });
  addMesh(weapon, rounded(.24, .72, .18, .035, gunMetal, 2), [0, .25, 0]);
  addMesh(weapon, lowCylinder(.045, .055, .85, 8, gunMetal), [0, .98, 0]);
  addMesh(weapon, lowCylinder(.065, .065, .18, 8, gunMetal), [0, 1.48, 0]);
  addMesh(weapon, rounded(.21, .55, .2, .04, wood, 2), [0, -.38, .01], [0, 0, -.08]);
  addMesh(weapon, rounded(.18, .48, .17, .035, wood, 2), [.02, .66, .03], [.1, 0, 0]);
  addMesh(weapon, rounded(.145, .44, .115, .035, wood, 2), [.02, .01, -.16], [-.34, 0, 0]);
  addMesh(weapon, rounded(.23, .08, .2, .025, gunMetal, 1), [0, .58, 0]);
  const bolt = addMesh(weapon, rounded(.1, .26, .055, .018, materials.silver, 1), [-.13, .39, 0]);
  weapon.userData.bolt = bolt;
  weapon.userData.boltRestY = bolt.position.y;
  const magazine = rounded(.16, .48, .12, .04, gunMetal, 2);
  magazine.position.set(0, .2, -.16);
  magazine.rotation.x = -.32;
  magazine.scale.y = .82;
  weapon.add(magazine);
  const muzzle = new THREE.Object3D();
  muzzle.name = 'AK-47 muzzle';
  muzzle.position.set(0, 1.61, 0);
  weapon.add(muzzle);
  weapon.userData.muzzle = muzzle;
  const muzzleFlash = new THREE.Group();
  const flashMaterial = new THREE.MeshBasicMaterial({ color: 0xffd36a, transparent: true, opacity: .9, depthWrite: false, blending: THREE.AdditiveBlending });
  const flashCore = new THREE.Mesh(new THREE.ConeGeometry(.12, .34, 7), flashMaterial);
  flashCore.position.y = .17;
  muzzleFlash.add(flashCore);
  const flashCross = new THREE.Mesh(new THREE.OctahedronGeometry(.13, 0), flashMaterial.clone());
  flashCross.scale.set(1.65, 1.1, 1.65);
  flashCross.position.y = .08;
  muzzleFlash.add(flashCross);
  muzzleFlash.visible = false;
  muzzle.add(muzzleFlash);
  weapon.userData.muzzleFlash = muzzleFlash;
  return weapon;
}

function createRPG() {
  const weapon = new THREE.Group();
  weapon.name = 'Supply RPG';
  const tubeMat = new THREE.MeshStandardMaterial({ color: 0x405343, roughness: .67, metalness: .26 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x242b29, roughness: .45, metalness: .6 });
  addMesh(weapon, lowCylinder(.12, .12, 1.68, 12, tubeMat), [0, .45, 0]);
  addMesh(weapon, lowCylinder(.18, .13, .3, 10, darkMetal), [0, 1.42, 0]);
  addMesh(weapon, lowCylinder(.17, .14, .24, 10, darkMetal), [0, -.53, 0]);
  addMesh(weapon, rounded(.18, .46, .15, .035, darkMetal, 2), [0, .12, -.2], [-.42, 0, 0]);
  addMesh(weapon, new THREE.Mesh(new THREE.ConeGeometry(.14, .38, 10), new THREE.MeshStandardMaterial({ color: 0x5f6d51, roughness: .7, metalness: .14 })), [0, 1.73, 0]);
  const muzzle = new THREE.Object3D();
  muzzle.name = 'RPG muzzle';
  muzzle.position.set(0, 1.94, 0);
  weapon.add(muzzle);
  weapon.userData.muzzle = muzzle;
  return weapon;
}

function setAKRestTransform(weapon) {
  weapon.userData.restPosition = weapon.position.clone();
  weapon.userData.restRotation = weapon.rotation.clone();
}

function updateAKAnimation(weapon, kick, time) {
  if (!weapon?.userData.restPosition) return;
  weapon.position.copy(weapon.userData.restPosition);
  weapon.position.y -= kick * .13;
  weapon.position.z += kick * .025;
  weapon.rotation.copy(weapon.userData.restRotation);
  weapon.rotation.z -= kick * .055;
  const bolt = weapon.userData.bolt;
  if (bolt) bolt.position.y = weapon.userData.boltRestY - kick * .16;
  const flash = weapon.userData.muzzleFlash;
  if (flash) {
    flash.visible = weapon.visible && kick > .18;
    if (flash.visible) {
      const flicker = .82 + Math.sin(time * 95) * .18;
      flash.scale.set(flicker, .8 + kick * .75, flicker);
      flash.rotation.y = time * 38;
    }
  }
}

const supplyDropObjects = new Map();
const activeTracers = [];
const activeRockets = new Map();
const activeExplosions = [];
const supplyCrateMaterial = new THREE.MeshStandardMaterial({ color: 0x5d704b, roughness: .78, metalness: .08 });
const supplyBandMaterial = new THREE.MeshStandardMaterial({ color: 0xc99b48, roughness: .46, metalness: .42 });

function createSupplyDropObject(payload) {
  removeSupplyDropObject(payload.id);
  const group = new THREE.Group();
  group.name = `Supply drop ${payload.id}`;
  const crate = rounded(1.55, 1.05, 1.35, .1, supplyCrateMaterial, 2);
  crate.position.y = .55;
  group.add(crate);
  addMesh(group, rounded(1.7, .16, 1.47, .04, supplyBandMaterial, 1), [0, .55, 0]);
  addMesh(group, rounded(.18, 1.18, 1.47, .04, supplyBandMaterial, 1), [0, .55, 0]);
  const beacon = new THREE.Mesh(
    new THREE.CylinderGeometry(.12, .36, 2.4, 10, 1, true),
    new THREE.MeshBasicMaterial({ color: payload.weapon === 'rpg' ? 0xff7a3d : 0xffd45d, transparent: true, opacity: .22, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }),
  );
  beacon.position.y = 1.7;
  group.add(beacon);
  const chute = new THREE.Mesh(
    new THREE.SphereGeometry(2.35, 18, 10, 0, TAU, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: payload.weapon === 'rpg' ? 0x8b4634 : 0x735d32, roughness: .9, side: THREE.DoubleSide }),
  );
  chute.scale.y = .42;
  chute.position.y = 5.2;
  group.add(chute);
  const cordMaterial = new THREE.LineBasicMaterial({ color: 0xd4c49e, transparent: true, opacity: .7 });
  [-1, 1].forEach((x) => [-1, 1].forEach((z) => {
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x * .58, 1.05, z * .52), new THREE.Vector3(x * 1.45, 4.95, z * 1.3),
    ]), cordMaterial);
    group.add(line);
  }));
  group.position.set(payload.position.x, payload.position.y || 48, payload.position.z);
  scene.add(group);
  supplyDropObjects.set(payload.id, {
    ...payload,
    group,
    chute,
    groundY: heightAt(payload.position.x, payload.position.z),
  });
}

function removeSupplyDropObject(id) {
  const drop = supplyDropObjects.get(id);
  if (!drop) return;
  scene.remove(drop.group);
  supplyDropObjects.delete(id);
}

function updateSupplyDrops() {
  const now = Date.now();
  supplyDropObjects.forEach((drop) => {
    const duration = Math.max(1, drop.landedAt - drop.spawnedAt);
    const progress = clamp((now - drop.spawnedAt) / duration, 0, 1);
    const eased = THREE.MathUtils.smootherstep(progress, 0, 1);
    drop.group.position.y = lerp(48, drop.groundY, eased);
    drop.group.rotation.y += .0025 * (1 - progress);
    drop.chute.visible = progress < .98;
    drop.group.children.forEach((child) => {
      if (child.isLine) child.visible = progress < .98;
    });
    if (progress >= 1) drop.group.position.y = drop.groundY + Math.sin(performance.now() * .003) * .025;
  });
}

function spawnTracer(payload) {
  const origin = new THREE.Vector3(payload.origin.x, payload.origin.y, payload.origin.z);
  const target = new THREE.Vector3(payload.target.x, payload.target.y, payload.target.z);
  const direction = target.clone().sub(origin).normalize();
  const points = [origin.clone(), origin.clone().addScaledVector(direction, .18)];
  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color: 0xffe59c, transparent: true, opacity: .94, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  const bullet = new THREE.Mesh(
    new THREE.SphereGeometry(.055, 6, 4),
    new THREE.MeshBasicMaterial({ color: 0xfff1ae, transparent: true, opacity: .96, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  bullet.position.copy(origin);
  scene.add(line);
  scene.add(bullet);
  activeTracers.push({ line, bullet, origin, target, direction, distance: origin.distanceTo(target), age: 0, speed: 520 });
}

function spawnRocket(payload) {
  const group = new THREE.Group();
  const rocketMaterial = new THREE.MeshStandardMaterial({ color: 0x59674b, roughness: .55, metalness: .24 });
  addMesh(group, lowCylinder(.08, .1, .62, 8, rocketMaterial), [0, 0, 0]);
  addMesh(group, new THREE.Mesh(new THREE.ConeGeometry(.1, .24, 8), rocketMaterial), [0, .43, 0]);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(.09, .38, 8), new THREE.MeshBasicMaterial({ color: 0xff8b35, transparent: true, opacity: .82, blending: THREE.AdditiveBlending }));
  flame.position.y = -.48;
  flame.rotation.x = Math.PI;
  group.add(flame);
  const origin = new THREE.Vector3(payload.origin.x, payload.origin.y, payload.origin.z);
  const target = new THREE.Vector3(payload.target.x, payload.target.y, payload.target.z);
  group.position.copy(origin);
  group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), target.clone().sub(origin).normalize());
  scene.add(group);
  activeRockets.set(`${payload.id}-${payload.serial}`, { group, origin, target, startedAt: performance.now(), speed: payload.speed || 65 });
}

function spawnRPGExplosion(payload) {
  const ground = new THREE.Vector3(payload.position.x, heightAt(payload.position.x, payload.position.z) + .08, payload.position.z);
  const explosion = { age: 0, pieces: [], puffs: [], ring: null, flash: null };
  for (let i = 0; i < 84; i++) {
    const piece = new THREE.Mesh(new THREE.IcosahedronGeometry(.11 + Math.random() * .08, 0), dirtMaterials[i % dirtMaterials.length]);
    const angle = Math.random() * TAU;
    const speed = 6 + Math.random() * 18;
    piece.position.copy(ground).add(new THREE.Vector3((Math.random() - .5) * .7, Math.random() * .25, (Math.random() - .5) * .7));
    piece.userData.velocity = new THREE.Vector3(Math.cos(angle) * speed, 7 + Math.random() * 14, Math.sin(angle) * speed);
    piece.userData.spin = new THREE.Vector3(Math.random(), Math.random(), Math.random()).multiplyScalar(15);
    piece.castShadow = true;
    scene.add(piece);
    explosion.pieces.push(piece);
  }
  for (let i = 0; i < 32; i++) {
    const puff = new THREE.Mesh(
      new THREE.IcosahedronGeometry(.35 + Math.random() * .3, 1),
      new THREE.MeshBasicMaterial({ color: i < 7 ? 0xff8b42 : 0x665846, transparent: true, opacity: i < 7 ? .72 : .48, depthWrite: false, blending: i < 7 ? THREE.AdditiveBlending : THREE.NormalBlending }),
    );
    const angle = Math.random() * TAU;
    puff.position.copy(ground).add(new THREE.Vector3(Math.cos(angle) * Math.random() * 1.2, .2 + Math.random() * 1.1, Math.sin(angle) * Math.random() * 1.2));
    puff.userData.velocity = new THREE.Vector3(Math.cos(angle) * (3 + Math.random() * 10), 3 + Math.random() * 10, Math.sin(angle) * (3 + Math.random() * 10));
    scene.add(puff);
    explosion.puffs.push(puff);
  }
  explosion.ring = new THREE.Mesh(new THREE.RingGeometry(.6, 1.05, 42), new THREE.MeshBasicMaterial({ color: 0xffb05b, transparent: true, opacity: .82, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
  explosion.ring.rotation.x = -Math.PI / 2;
  explosion.ring.position.copy(ground);
  scene.add(explosion.ring);
  activeExplosions.push(explosion);
  const distance = hero.position.distanceTo(ground);
  if (distance < 56) addShake(.68 * (1 - distance / 64));
  playExplosionSound();
  [...activeRockets.entries()].forEach(([key, rocket]) => {
    if (rocket.target.distanceTo(new THREE.Vector3(payload.position.x, payload.position.y, payload.position.z)) < 2.5) {
      scene.remove(rocket.group);
      activeRockets.delete(key);
    }
  });
}

function updateSupplyProjectiles(dt) {
  activeTracers.forEach((tracer) => {
    tracer.age += dt;
    const headDistance = Math.min(tracer.distance, tracer.age * tracer.speed);
    const tailDistance = Math.max(0, headDistance - 4.2);
    const tail = tracer.origin.clone().addScaledVector(tracer.direction, tailDistance);
    const head = tracer.origin.clone().addScaledVector(tracer.direction, headDistance);
    tracer.line.geometry.setFromPoints([tail, head]);
    tracer.bullet.position.copy(head);
    const finishing = tracer.distance - headDistance < .01;
    tracer.line.material.opacity = finishing ? Math.max(0, 1 - (tracer.age - tracer.distance / tracer.speed) * 18) : .94;
    tracer.bullet.material.opacity = tracer.line.material.opacity;
  });
  for (let i = activeTracers.length - 1; i >= 0; i--) {
    const tracer = activeTracers[i];
    if (tracer.age > tracer.distance / tracer.speed + .07) {
      scene.remove(tracer.line);
      scene.remove(tracer.bullet);
      tracer.line.geometry.dispose();
      tracer.line.material.dispose();
      tracer.bullet.geometry.dispose();
      tracer.bullet.material.dispose();
      activeTracers.splice(i, 1);
    }
  }
  activeRockets.forEach((rocket) => {
    const distance = rocket.origin.distanceTo(rocket.target);
    const progress = clamp((performance.now() - rocket.startedAt) / Math.max(1, distance / rocket.speed * 1000), 0, 1);
    rocket.group.position.lerpVectors(rocket.origin, rocket.target, progress);
  });
  for (let i = activeExplosions.length - 1; i >= 0; i--) {
    const explosion = activeExplosions[i];
    explosion.age += dt;
    explosion.pieces.forEach((piece) => {
      piece.userData.velocity.y -= 18 * dt;
      piece.position.addScaledVector(piece.userData.velocity, dt);
      piece.rotation.x += piece.userData.spin.x * dt;
      piece.rotation.y += piece.userData.spin.y * dt;
      const floor = heightAt(piece.position.x, piece.position.z) + .03;
      if (piece.position.y < floor) {
        piece.position.y = floor;
        piece.userData.velocity.y *= -.2;
        piece.userData.velocity.x *= .72;
        piece.userData.velocity.z *= .72;
      }
      piece.scale.multiplyScalar(Math.exp(-.7 * dt));
    });
    explosion.puffs.forEach((puff) => {
      puff.position.addScaledVector(puff.userData.velocity, dt);
      puff.userData.velocity.multiplyScalar(Math.exp(-2.2 * dt));
      puff.scale.addScalar(dt * 2.4);
      puff.material.opacity = Math.max(0, puff.material.opacity - dt * .48);
    });
    explosion.ring.scale.setScalar(1 + explosion.age * 18.5);
    explosion.ring.material.opacity = Math.max(0, .88 - explosion.age * 1.45);
    if (explosion.age > 1.25) {
      explosion.pieces.forEach((piece) => scene.remove(piece));
      explosion.puffs.forEach((puff) => scene.remove(puff));
      scene.remove(explosion.ring);
      activeExplosions.splice(i, 1);
    }
  }
}

function createCapeGeometry() {
  const cols = 8;
  const rows = 11;
  const positions = [];
  const uvs = [];
  const indices = [];
  for (let y = 0; y <= rows; y++) {
    const v = y / rows;
    const width = lerp(.48, .68, v) * (1 - Math.max(0, v - .82) * .18);
    for (let x = 0; x <= cols; x++) {
      const u = x / cols;
      const scallop = v > .92 ? Math.cos((u - .5) * Math.PI * 4) * .055 : 0;
      positions.push((u - .5) * width * 2, -v * 2.02 + scallop, -.05 - v * .18);
      uvs.push(u, v);
    }
  }
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const a = y * (cols + 1) + x;
      const b = a + 1;
      const c = a + cols + 1;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.userData.base = Float32Array.from(positions);
  geometry.userData.cols = cols;
  return geometry;
}

function createSlashTrail() {
  const segments = 30;
  const positions = [];
  const uvs = [];
  const indices = [];
  for (let i = 0; i <= segments; i++) {
    const u = i / segments;
    const angle = .48 + u * 3.05;
    const taper = Math.sin(u * Math.PI);
    const inner = .72 + u * .04;
    const outer = inner + .12 + taper * .43;
    positions.push(Math.cos(angle) * inner, Math.sin(angle) * inner, 0);
    positions.push(Math.cos(angle) * outer, Math.sin(angle) * outer, 0);
    uvs.push(u, 0, u, 1);
    if (i < segments) {
      const a = i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  const material = new THREE.MeshBasicMaterial({
    color: 0xf3d783,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    depthTest: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  const trail = new THREE.Mesh(geometry, material);
  trail.position.set(0, 1.72, .86);
  trail.rotation.z = -.06;
  trail.renderOrder = 30;
  trail.visible = false;
  trail.frustumCulled = false;
  return trail;
}

function createHero() {
  const rig = new THREE.Group();
  const refs = {};

  const shadowDisc = new THREE.Mesh(
    new THREE.CircleGeometry(.72, 32),
    new THREE.MeshBasicMaterial({ color: 0x142018, transparent: true, opacity: .18, depthWrite: false }),
  );
  shadowDisc.rotation.x = -Math.PI / 2;
  shadowDisc.position.y = .018;
  rig.add(shadowDisc);
  refs.shadowDisc = shadowDisc;

  const slashTrail = createSlashTrail();
  rig.add(slashTrail);
  refs.slashTrail = slashTrail;

  const hips = new THREE.Group();
  hips.position.y = 1.44;
  rig.add(hips);
  refs.hips = hips;
  addMesh(hips, rounded(.9, .42, .54, .11, materials.leather, 3), [0, 0, 0]);
  const belt = addMesh(hips, rounded(1.02, .19, .6, .05, materials.leatherLight, 2), [0, .18, 0]);
  const buckle = addMesh(belt, rounded(.24, .24, .08, .035, materials.gold, 2), [0, 0, .33]);
  addMesh(buckle, new THREE.Mesh(new THREE.OctahedronGeometry(.07, 0), materials.armor), [0, 0, .05], [0, 0, Math.PI / 4]);
  [-1, 1].forEach((s) => {
    addMesh(hips, rounded(.24, .72, .12, .055, materials.clothDark, 2), [s * .33, -.47, .29], [0, 0, s * .06]);
  });

  const torso = new THREE.Group();
  torso.position.y = .28;
  hips.add(torso);
  refs.torso = torso;
  const underTunic = lowCylinder(.52, .43, 1.2, 8, materials.clothDark);
  underTunic.position.y = .64;
  underTunic.scale.z = .62;
  torso.add(underTunic);
  const chest = rounded(1.18, .88, .62, .16, materials.armor, 4);
  chest.position.y = .77;
  chest.scale.set(1.02, 1, .92);
  torso.add(chest);
  const chestPlate = rounded(.84, .58, .13, .1, materials.armorEdge, 3);
  chestPlate.position.set(0, .02, .36);
  chest.add(chestPlate);
  const crest = new THREE.Mesh(new THREE.OctahedronGeometry(.15, 0), materials.gold);
  crest.position.set(0, .88, .47);
  crest.scale.set(.7, 1.32, .3);
  torso.add(crest);
  const collar = lowCylinder(.36, .48, .22, 8, materials.armorEdge);
  collar.position.y = 1.25;
  collar.scale.z = .85;
  torso.add(collar);

  const headPivot = new THREE.Group();
  headPivot.position.y = 1.42;
  torso.add(headPivot);
  refs.head = headPivot;
  const neck = lowCylinder(.18, .21, .28, 8, materials.skin);
  neck.position.y = -.08;
  headPivot.add(neck);
  const head = new THREE.Mesh(new THREE.IcosahedronGeometry(.38, 2), materials.skin);
  head.scale.set(.88, 1.12, .92);
  head.position.y = .29;
  shadow(head);
  headPivot.add(head);
  const hairCap = new THREE.Mesh(new THREE.IcosahedronGeometry(.39, 1), materials.hair);
  hairCap.position.set(0, .53, -.025);
  hairCap.scale.set(.94, .72, .93);
  shadow(hairCap);
  headPivot.add(hairCap);
  [-1, 1].forEach((s) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(.025, 8, 6), materials.eye);
    eye.position.set(s * .108, .325, .405);
    eye.scale.set(1.22, .55, .38);
    headPivot.add(eye);
    const brow = rounded(.11, .022, .022, .007, materials.hair, 1);
    brow.position.set(s * .108, .395, .41);
    brow.rotation.z = -s * .08;
    headPivot.add(brow);
  });
  const nose = new THREE.Mesh(new THREE.ConeGeometry(.025, .085, 5), materials.skin);
  nose.position.set(0, .245, .41);
  nose.rotation.x = Math.PI / 2;
  headPivot.add(nose);
  const mouth = rounded(.095, .014, .018, .005, materials.hair, 1);
  mouth.position.set(0, .145, .412);
  headPivot.add(mouth);

  const capeGeo = createCapeGeometry();
  const cape = shadow(new THREE.Mesh(capeGeo, materials.cloth), true, true);
  cape.position.set(0, 1.23, -.35);
  torso.add(cape);
  refs.cape = cape;
  [-1, 1].forEach((s) => {
    const clasp = new THREE.Mesh(new THREE.SphereGeometry(.09, 8, 6), materials.gold);
    clasp.position.set(s * .42, 1.23, -.38);
    torso.add(clasp);
  });

  function makeArm(side) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * .67, 1.08, 0);
    torso.add(shoulder);
    const pauldron = new THREE.Mesh(new THREE.SphereGeometry(.38, 12, 8, 0, TAU, 0, Math.PI * .68), materials.armorEdge);
    pauldron.position.set(side * .13, -.03, 0);
    pauldron.scale.set(1.1, .66, 1.04);
    pauldron.rotation.z = side * -.08;
    shadow(pauldron);
    shoulder.add(pauldron);
    const edge = rounded(.62, .09, .58, .035, materials.gold, 2);
    edge.position.set(side * .1, -.19, 0);
    shoulder.add(edge);
    const upper = lowCylinder(.19, .22, .68, 8, materials.clothDark);
    upper.position.y = -.37;
    shoulder.add(upper);
    const upperPlate = rounded(.38, .42, .34, .08, materials.armor, 3);
    upperPlate.position.y = -.28;
    shoulder.add(upperPlate);
    const elbow = new THREE.Group();
    elbow.position.y = -.69;
    shoulder.add(elbow);
    const joint = new THREE.Mesh(new THREE.SphereGeometry(.18, 8, 6), materials.leather);
    elbow.add(joint);
    const forearm = lowCylinder(.16, .2, .64, 8, materials.armorEdge);
    forearm.position.y = -.35;
    elbow.add(forearm);
    const bracer = rounded(.36, .38, .32, .06, materials.armor, 2);
    bracer.position.y = -.28;
    elbow.add(bracer);
    const hand = new THREE.Group();
    hand.position.y = -.69;
    elbow.add(hand);
    addMesh(hand, rounded(.27, .28, .25, .07, materials.leather, 3), [0, 0, 0]);
    const fingers = [];
    for (let i = 0; i < 4; i++) {
      const finger = lowCylinder(.035, .04, .2, 6, materials.leather);
      finger.position.set((i - 1.5) * .055, -.19, .035);
      finger.rotation.x = -.2;
      hand.add(finger);
      fingers.push(finger);
    }
    const thumb = lowCylinder(.045, .05, .18, 6, materials.leather);
    thumb.position.set(side * .13, -.03, .06);
    thumb.rotation.z = side * -.75;
    hand.add(thumb);
    return { shoulder, elbow, hand, fingers, thumb };
  }

  // The hero faces +Z, so anatomical right is local -X.
  refs.rightArm = makeArm(-1);
  refs.leftArm = makeArm(1);
  refs.leftArm.shoulder.rotation.z = .09;
  refs.rightArm.shoulder.rotation.z = -.1;
  refs.leftArm.elbow.rotation.x = -.1;
  refs.rightArm.shoulder.rotation.x = -.42;
  refs.rightArm.elbow.rotation.x = -.52;

  // The weapon anchor sits at the center of the leather grip. Every sword
  // pose now comes from the wrist, so the weapon can never drift off the hand.
  const swordGripAnchor = new THREE.Group();
  swordGripAnchor.name = 'Right hand sword grip anchor';
  refs.rightArm.hand.add(swordGripAnchor);
  swordGripAnchor.position.set(0, .015, .07);
  const sword = createSword();
  sword.name = 'Right hand greatsword';
  sword.position.set(0, 0, 0);
  sword.rotation.set(0, 0, 0);
  sword.scale.setScalar(.92);
  swordGripAnchor.add(sword);
  refs.swordGripAnchor = swordGripAnchor;
  refs.sword = sword;
  const ak47 = createAK47();
  ak47.scale.setScalar(.86);
  ak47.position.set(0, -.015, .055);
  ak47.rotation.set(0, 0, -.015);
  ak47.visible = false;
  swordGripAnchor.add(ak47);
  setAKRestTransform(ak47);
  refs.ak47 = ak47;
  const rpg = createRPG();
  rpg.scale.setScalar(.76);
  rpg.position.set(0, -.05, .02);
  rpg.visible = false;
  swordGripAnchor.add(rpg);
  refs.rpg = rpg;

  const bowGripAnchor = new THREE.Group();
  bowGripAnchor.position.set(0, .02, .08);
  refs.leftArm.hand.add(bowGripAnchor);
  const bow = createBow();
  bow.rotation.set(0, .18, -.08);
  bow.scale.setScalar(1.12);
  bow.visible = false;
  bowGripAnchor.add(bow);
  refs.bowGripAnchor = bowGripAnchor;
  refs.bow = bow;

  const nockedArrow = new THREE.Group();
  addMesh(nockedArrow, lowCylinder(.014, .014, 1.08, 5, materials.leatherLight), [0, 0, .08], [Math.PI / 2, 0, 0]);
  addMesh(nockedArrow, new THREE.Mesh(new THREE.ConeGeometry(.05, .14, 5), materials.silver), [0, 0, .67], [Math.PI / 2, 0, 0]);
  nockedArrow.visible = false;
  bow.add(nockedArrow);
  refs.nockedArrow = nockedArrow;

  const quiver = createQuiver();
  quiver.position.set(.42, .78, -.5);
  quiver.rotation.set(-.18, 0, -.2);
  quiver.visible = false;
  torso.add(quiver);
  refs.quiver = quiver;

  const hood = new THREE.Mesh(
    new THREE.SphereGeometry(.47, 12, 8, 0, TAU, 0, Math.PI * .68),
    materials.cloth,
  );
  hood.position.set(0, .38, -.04);
  hood.scale.set(.98, 1.12, 1.03);
  hood.visible = false;
  headPivot.add(hood);
  refs.hood = hood;

  // Curl the glove around the handle instead of leaving the fingers parallel
  // to it. The handle remains visible between the thumb and knuckles.
  refs.rightArm.fingers.forEach((finger, i) => {
    finger.position.set(0, .135 - i * .085, .115);
    finger.rotation.set(0, 0, Math.PI / 2);
    finger.scale.set(1, 1.08, 1);
  });
  refs.rightArm.thumb.position.set(-.13, .02, .095);
  refs.rightArm.thumb.rotation.set(.18, 0, .82);

  refs.rightArm.hand.rotation.set(3.3, 0, .3);

  function makeLeg(side) {
    const leg = new THREE.Group();
    leg.position.set(side * .31, 1.35, 0);
    rig.add(leg);
    const thigh = lowCylinder(.25, .3, .76, 8, materials.clothDark);
    thigh.position.y = -.39;
    leg.add(thigh);
    const thighPlate = rounded(.43, .54, .43, .09, materials.armor, 3);
    thighPlate.position.set(0, -.31, .08);
    leg.add(thighPlate);
    const knee = new THREE.Group();
    knee.position.y = -.78;
    leg.add(knee);
    addMesh(knee, new THREE.Mesh(new THREE.SphereGeometry(.22, 8, 6), materials.leather), [0, 0, 0]);
    const kneeGuard = new THREE.Mesh(new THREE.OctahedronGeometry(.2, 0), materials.armorEdge);
    kneeGuard.position.set(0, 0, .2);
    kneeGuard.scale.set(1, 1.05, .55);
    knee.add(kneeGuard);
    const shin = lowCylinder(.18, .235, .68, 8, materials.armorEdge);
    shin.position.y = -.36;
    knee.add(shin);
    const shinPlate = rounded(.38, .52, .38, .07, materials.armor, 3);
    shinPlate.position.set(0, -.32, .08);
    knee.add(shinPlate);
    const boot = new THREE.Group();
    boot.position.y = -.73;
    knee.add(boot);
    addMesh(boot, rounded(.43, .34, .58, .09, materials.leather, 3), [0, 0, .1]);
    addMesh(boot, rounded(.38, .13, .64, .05, materials.armorEdge, 2), [0, -.18, .13]);
    addMesh(boot, rounded(.34, .16, .28, .05, materials.gold, 2), [0, .12, .02]);
    return { leg, knee, boot };
  }

  refs.leftLeg = makeLeg(-1);
  refs.rightLeg = makeLeg(1);
  rig.userData.refs = refs;
  rig.traverse((object) => {
    if (object.isMesh && object !== shadowDisc) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  return rig;
}

const hero = createHero();
hero.position.set(0, heightAt(0, 0), 0);
hero.visible = false;
scene.add(hero);
const rig = hero.userData.refs;
const aimGuideGeometry = new THREE.BufferGeometry();
const aimGuide = new THREE.Points(
  aimGuideGeometry,
  new THREE.PointsMaterial({ color: 0xffd273, size: .09, transparent: true, opacity: .72, depthWrite: false }),
);
aimGuide.visible = false;
aimGuide.frustumCulled = false;
scene.add(aimGuide);

const state = {
  joined: false,
  name: '',
  team: null,
  kit: null,
  weapon: null,
  weaponAmmo: 0,
  weaponKick: 0,
  health: 100,
  maxHealth: 100,
  arrows: 0,
  dead: false,
  deathTime: 0,
  velocity: new THREE.Vector3(),
  verticalVelocity: 0,
  grounded: true,
  moving: false,
  sprinting: false,
  stamina: 100,
  maxStamina: 100,
  gait: 0,
  landing: 0,
  attack: null,
  attackTime: 0,
  attackImpact: false,
  attackSerial: 0,
  bowDrawing: false,
  bowDrawStart: 0,
  dashing: false,
  dashTime: 0,
  dashCooldown: 0,
  dashDirection: new THREE.Vector3(),
  respawnAt: 0,
  cooldowns: { slash: 0, heavy: 0, dash: 0 },
  lookTimer: 0,
};

const TEAM_STYLE = {
  bloods: { name: 'Bloods', accent: 0xb92f43, dark: 0x521827 },
  crips: { name: 'Crips', accent: 0x356bc7, dark: 0x172e63 },
};
const lobby = document.querySelector('#lobby');
const lobbyForm = document.querySelector('#lobby-form');
const lobbyStatus = document.querySelector('#lobby-status');
const joinButton = document.querySelector('#join-game');
const scoreboard = document.querySelector('#scoreboard');
const playerBoard = document.querySelector('#player-board');
const playerBoardList = document.querySelector('#player-board-list');
const playerCount = document.querySelector('#player-count');
const rosterPanel = document.querySelector('#roster-panel');
const rosterList = document.querySelector('#roster-list');
const winnerScreen = document.querySelector('#winner-screen');
const winnerTitle = document.querySelector('#winner-title');
const winnerScore = document.querySelector('#winner-score');
const rematchButton = document.querySelector('#rematch-button');
const quickName = document.querySelector('#quick-name');
const specialName = document.querySelector('#special-name');
const ammoCounter = document.querySelector('#ammo-counter');
const ammoWeapon = document.querySelector('#ammo-weapon');
const ammoValue = document.querySelector('#ammo-value');
const ammoUnit = document.querySelector('#ammo-unit');
const bowCrosshair = document.querySelector('#bow-crosshair');
const aimHint = bowCrosshair.querySelector('.aim-hint');
const respawnHint = document.querySelector('#respawn-hint');
const supplyStatus = document.querySelector('#supply-status');
const supplyLabel = document.querySelector('#supply-label');
const supplyTimer = document.querySelector('#supply-timer');
const supplyMessage = document.querySelector('#supply-message');
let currentMatch = null;
let nextSupplyDropAt = Date.now() + 20_000;
document.body.classList.add('in-lobby');

function updateStaminaHUD() {
  document.querySelector('#stamina-fill').style.width = `${state.maxStamina ? state.stamina / state.maxStamina * 100 : 0}%`;
  document.querySelector('#stamina-value').textContent = Math.round(state.stamina);
}

function configureLocalProfile(profile) {
  state.name = profile.name;
  state.team = profile.team;
  state.kit = profile.kit;
  state.weapon = profile.weapon === 'ak47' || profile.weapon === 'rpg' ? profile.weapon : null;
  state.weaponAmmo = Number.isFinite(Number(profile.weaponAmmo)) ? Number(profile.weaponAmmo) : 0;
  state.maxHealth = profile.maxHealth || (profile.kit === 'sword' ? 120 : 85);
  state.maxStamina = profile.kit === 'sword' ? 150 : 100;
  state.stamina = state.maxStamina;
  updateStaminaHUD();
  state.arrows = profile.arrows || 0;
  const style = TEAM_STYLE[state.team] || TEAM_STYLE.bloods;
  materials.cloth.color.setHex(style.accent);
  materials.clothDark.color.setHex(style.dark);
  rig.sword.visible = state.kit === 'sword';
  rig.bow.visible = state.kit === 'bow';
  rig.quiver.visible = state.kit === 'bow';
  rig.hood.visible = state.kit === 'bow';
  quickName.textContent = state.kit === 'bow' ? 'DRAW / FIRE' : 'QUICK SLASH';
  specialName.textContent = state.kit === 'bow' ? 'ARROWS ∞' : 'GROUND STRIKE';
  abilityUI.slash.duration = state.kit === 'bow' ? 1 : .5;
  abilityUI.heavy.slot.classList.toggle('ammo-slot', state.kit === 'bow');
  abilityUI.dash.slot.hidden = state.kit !== 'sword';
  bowCrosshair.hidden = state.kit !== 'bow';
  setLocalWeapon(state.weapon, state.weaponAmmo);
}

function updateMatchUI(next) {
  if (!next) return;
  currentMatch = next;
  if (Number.isFinite(Number(next.nextSupplyDropAt))) nextSupplyDropAt = Number(next.nextSupplyDropAt);
  document.querySelector('#bloods-score').textContent = next.scores?.bloods ?? 0;
  document.querySelector('#crips-score').textContent = next.scores?.crips ?? 0;
  const seconds = Math.max(0, Math.ceil((next.remaining ?? next.duration ?? 0) / 1000));
  document.querySelector('#match-timer').textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  const orderedRoster = [...(next.roster || [])].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
  rosterList.replaceChildren(...orderedRoster.map((player) => {
    const row = document.createElement('div');
    row.className = `roster-row ${player.team}`;
    const identity = document.createElement('span');
    identity.textContent = `${player.name} · ${player.weapon || player.kit}`;
    const kills = document.createElement('span');
    kills.textContent = String(player.kills);
    const deaths = document.createElement('span');
    deaths.textContent = String(player.deaths);
    row.append(identity, kills, deaths);
    return row;
  }));
  playerCount.textContent = String(orderedRoster.length);
  playerBoardList.replaceChildren(...orderedRoster.map((player) => {
    const row = document.createElement('div');
    row.className = `player-board-row ${player.team}`;
    const dot = document.createElement('span');
    dot.className = 'player-board-dot';
    const name = document.createElement('span');
    name.className = 'player-board-name';
    name.textContent = player.name;
    const kit = document.createElement('span');
    kit.className = 'player-board-kit';
    kit.textContent = player.weapon || player.kit;
    row.append(dot, name, kit);
    return row;
  }));
}

function updateSupplyHUD() {
  if (!state.joined) return;
  supplyStatus.hidden = false;
  const active = supplyDropObjects.size > 0;
  supplyStatus.classList.toggle('active', active);
  if (active) {
    const landed = [...supplyDropObjects.values()].some((drop) => Date.now() >= drop.landedAt);
    supplyLabel.textContent = landed ? 'SUPPLY DROP LANDED' : 'SUPPLY DROP INBOUND';
    supplyTimer.textContent = landed ? 'PICK IT UP' : 'DESCENDING';
    supplyMessage.textContent = 'Move onto the glowing crate';
    return;
  }
  const seconds = Math.max(0, Math.ceil((nextSupplyDropAt - Date.now()) / 1000));
  supplyLabel.textContent = 'NEXT SUPPLY DROP';
  supplyTimer.textContent = `0:${String(seconds).padStart(2, '0')}`;
  supplyMessage.textContent = '60% AK-47 · 40% RPG';
}

lobbyForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!multiplayerSocket?.connected) return;
  const form = new FormData(lobbyForm);
  const name = String(form.get('displayName') || '').trim();
  const team = form.get('team');
  const kit = form.get('kit');
  if (!name || !team || !kit) {
    lobbyStatus.textContent = 'Enter a name, then choose a team and kit.';
    lobbyStatus.classList.add('error');
    return;
  }
  joinButton.disabled = true;
  lobbyStatus.classList.remove('error');
  lobbyStatus.textContent = 'Joining the shared match…';
  localStorage.setItem('astralDisplayName', name);
  multiplayerSocket.emit('joinGame', { name, team, kit });
});

document.querySelector('#display-name').value = localStorage.getItem('astralDisplayName') || '';
rematchButton.addEventListener('click', () => multiplayerSocket?.emit('restartMatch'));

const healthFill = document.querySelector('#health-fill');
const healthValue = document.querySelector('.health .meter-value');
const deathScreen = document.querySelector('#death-screen');
const respawnButton = document.querySelector('#respawn-button');
function setHealth(value) {
  state.health = clamp(Number(value) || 0, 0, state.maxHealth);
  healthFill.style.width = `${state.maxHealth ? state.health / state.maxHealth * 100 : 0}%`;
  healthValue.textContent = Number.isInteger(state.health) ? String(state.health) : state.health.toFixed(1);
}

function enterDeath() {
  if (state.dead) return;
  state.dead = true;
  state.deathTime = 0;
  state.velocity.set(0, 0, 0);
  state.verticalVelocity = 0;
  state.moving = false;
  state.sprinting = false;
  state.bowDrawing = false;
  state.dashing = false;
  keys.clear();
  deathScreen.hidden = false;
  respawnButton.disabled = true;
  document.exitPointerLock?.();
}

function finishRespawn(payload = {}) {
  setHealth(payload.health ?? 100);
  state.dead = false;
  state.deathTime = 0;
  state.velocity.set(0, 0, 0);
  state.verticalVelocity = 0;
  state.grounded = true;
  state.stamina = state.maxStamina;
  updateStaminaHUD();
  state.attack = null;
  state.bowDrawing = false;
  state.dashing = false;
  state.respawnAt = 0;
  state.cooldowns.slash = 0;
  state.cooldowns.heavy = 0;
  state.cooldowns.dash = 0;
  hero.rotation.x = 0;
  if (payload.position) {
    const x = payload.position.x || 0;
    const z = payload.position.z || 0;
    hero.position.set(x, heightAt(x, z), z);
  }
  if (Number.isFinite(Number(payload.arrows))) state.arrows = Number(payload.arrows);
  setLocalWeapon(payload.weapon || null, payload.weaponAmmo ?? 0);
  if (state.kit === 'bow') specialName.textContent = 'ARROWS ∞';
  deathScreen.hidden = true;
  respawnButton.disabled = true;
}

function requestRespawn() {
  if (!state.dead || respawnButton.disabled) return;
  respawnButton.disabled = true;
  if (multiplayerSocket?.connected) multiplayerSocket.emit('respawn');
  else finishRespawn({ health: 100, position: { x: 0, y: heightAt(0, 0), z: 0 } });
}

respawnButton.addEventListener('click', requestRespawn);

const abilityUI = {
  slash: {
    slot: document.querySelector('#slot-quick'),
    time: document.querySelector('#quick-cooldown'),
    fill: document.querySelector('#quick-cooldown-fill'),
    duration: .5,
  },
  heavy: {
    slot: document.querySelector('#slot-special'),
    time: document.querySelector('#special-cooldown'),
    fill: document.querySelector('#special-cooldown-fill'),
    duration: 7,
  },
  dash: {
    slot: document.querySelector('#slot-dash'),
    time: document.querySelector('#dash-cooldown'),
    fill: document.querySelector('#dash-cooldown-fill'),
    duration: 2,
  },
};

function setLocalWeapon(weapon, ammo = 0) {
  const nextWeapon = weapon === 'ak47' || weapon === 'rpg' ? weapon : null;
  const changed = state.weapon !== nextWeapon;
  state.weapon = nextWeapon;
  state.weaponAmmo = state.weapon === 'rpg'
    ? clamp(Math.floor(Number(ammo) || 0), 0, 8)
    : state.weapon === 'ak47'
      ? clamp(Math.floor(Number(ammo) || 0), 0, 80)
      : 0;
  if (state.weapon !== 'ak47') automaticFireHeld = false;
  state.bowDrawing = false;
  if (changed) state.cooldowns.slash = 0;
  const armed = Boolean(state.weapon);
  rig.sword.visible = !armed && state.kit === 'sword';
  rig.bow.visible = !armed && state.kit === 'bow';
  rig.quiver.visible = !armed && state.kit === 'bow';
  rig.hood.visible = state.kit === 'bow';
  rig.ak47.visible = state.weapon === 'ak47';
  rig.rpg.visible = state.weapon === 'rpg';
  quickName.textContent = state.weapon === 'ak47' ? `AK-47 · ${state.weaponAmmo}` : state.weapon === 'rpg' ? `RPG · ${state.weaponAmmo}` : state.kit === 'bow' ? 'DRAW / FIRE' : 'QUICK SLASH';
  ammoCounter.hidden = !armed;
  if (armed) {
    ammoWeapon.textContent = state.weapon === 'ak47' ? 'AK-47' : 'RPG';
    ammoValue.textContent = String(state.weaponAmmo);
    ammoUnit.textContent = state.weapon === 'ak47' ? 'ROUNDS' : 'ROCKETS';
  }
  specialName.textContent = armed ? 'SUPPLY WEAPON' : state.kit === 'bow' ? 'ARROWS ∞' : 'GROUND STRIKE';
  abilityUI.slash.duration = state.weapon === 'ak47' ? .11 : state.weapon === 'rpg' ? 2.5 : state.kit === 'bow' ? 1 : .5;
  abilityUI.heavy.slot.hidden = armed;
  abilityUI.dash.slot.hidden = state.kit !== 'sword';
  bowCrosshair.hidden = !(state.kit === 'bow' || armed);
  aimHint.textContent = state.weapon === 'ak47' ? 'LMB · FIRE AK-47' : state.weapon === 'rpg' ? 'LMB · FIRE RPG' : 'HOLD LMB · RELEASE TO FIRE';
  game.dataset.weapon = state.weapon || 'starter';
  game.dataset.weaponAmmo = String(state.weaponAmmo);
}

const keys = new Set();
let lookBack = false;
window.addEventListener('keydown', (e) => {
  ensureAudio();
  if (e.code === 'Tab' && state.joined) {
    e.preventDefault();
    rosterPanel.hidden = false;
    return;
  }
  if (!state.joined) return;
  if (state.dead) {
    e.preventDefault();
    return;
  }
  keys.add(e.code);
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  if (e.code === 'KeyY' && !e.repeat) lookBack = !lookBack;
  if (state.weapon && e.code === 'Digit1' && !e.repeat) fireEquippedWeapon();
  else if (state.kit === 'sword' && e.code === 'Digit1' && !e.repeat) startAttack('slash');
  if (!state.weapon && state.kit === 'sword' && e.code === 'Digit2' && !e.repeat) startAttack('heavy');
  if (state.kit === 'sword' && e.code === 'KeyQ' && !e.repeat) startDash();
  if (e.code === 'Space' && state.grounded) {
    state.verticalVelocity = 7.4;
    state.grounded = false;
  }
});
window.addEventListener('keyup', (e) => {
  keys.delete(e.code);
  if (e.code === 'Tab') rosterPanel.hidden = true;
});

let camYaw = .28;
let camPitch = .18;
let camZoom = 8.55;
let previousPointer = null;
let automaticFireHeld = false;

function lockPointerToGame() {
  if (document.pointerLockElement === renderer.domElement || !renderer.domElement.requestPointerLock) return;
  try {
    const lockRequest = renderer.domElement.requestPointerLock();
    lockRequest?.catch?.(() => {});
  } catch {
    // Mouse-look still works without pointer lock when the browser blocks it.
  }
}

renderer.domElement.addEventListener('pointerdown', (e) => {
  ensureAudio();
  if (!state.joined || state.dead || currentMatch?.ended) return;
  previousPointer = { x: e.clientX, y: e.clientY };
  if (e.button === 0) {
    lockPointerToGame();
    if (state.weapon) {
      automaticFireHeld = state.weapon === 'ak47';
      fireEquippedWeapon();
    } else if (state.kit === 'bow') {
      if (!state.bowDrawing && state.cooldowns.slash <= 0) {
        state.bowDrawing = true;
        state.bowDrawStart = performance.now();
      }
    } else startAttack('slash');
  } else if (e.button === 2) {
    e.preventDefault();
    e.stopPropagation();
    lockPointerToGame();
    if (!state.weapon && state.kit === 'sword') startAttack('heavy');
  }
});
window.addEventListener('pointerup', (e) => {
  if (e.button === 0) automaticFireHeld = false;
  if (e.button === 0 && state.bowDrawing) fireBow();
});
renderer.domElement.addEventListener('pointermove', (e) => {
  const locked = document.pointerLockElement === renderer.domElement;
  if (!locked && !previousPointer) {
    previousPointer = { x: e.clientX, y: e.clientY };
    return;
  }
  const dx = locked ? e.movementX : e.clientX - previousPointer.x;
  const dy = locked ? e.movementY : e.clientY - previousPointer.y;
  camYaw -= clamp(dx, -80, 80) * .0034;
  camPitch = clamp(camPitch + clamp(dy, -80, 80) * .0028, -1.48, 1.48);
  previousPointer = { x: e.clientX, y: e.clientY };
});
renderer.domElement.addEventListener('pointerleave', () => { previousPointer = null; });
window.addEventListener('blur', () => { automaticFireHeld = false; });
document.addEventListener('pointerlockchange', () => { previousPointer = null; });
renderer.domElement.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  e.stopPropagation();
  lockPointerToGame();
  if (!state.weapon && state.kit === 'sword') startAttack('heavy');
});
renderer.domElement.addEventListener('auxclick', (e) => e.preventDefault());
renderer.domElement.addEventListener('wheel', (e) => {
  camZoom = clamp(camZoom + Math.sign(e.deltaY) * .65, 4.8, 12.5);
}, { passive: true });

let shake = 0;
function addShake(amount) { shake = Math.max(shake, amount); }
function startAttack(type) {
  if (!state.joined || state.weapon || state.kit !== 'sword' || state.dead || state.attack || !state.grounded || state.cooldowns[type] > 0 || currentMatch?.ended) return false;
  state.attack = type;
  state.attackTime = 0;
  state.attackImpact = false;
  state.attackSerial += 1;
  state.cooldowns[type] = abilityUI[type].duration;
  multiplayerSocket?.emit('playerAttack', { type, serial: state.attackSerial });
  if (type === 'slash') {
    setTimeout(() => {
      addShake(.11);
      playSwordSlash();
    }, 55);
  }
  return true;
}

function startDash() {
  if (!state.joined || state.kit !== 'sword' || state.dead || state.attack || state.dashing || !state.grounded
    || state.cooldowns.dash > 0 || state.stamina < 5 || currentMatch?.ended) return false;
  const inputX = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
  const inputZ = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
  const forward = new THREE.Vector3(Math.sin(camYaw), 0, Math.cos(camYaw));
  const right = new THREE.Vector3(-forward.z, 0, forward.x);
  state.dashDirection.copy(forward).multiplyScalar(inputZ || (!inputX ? 1 : 0)).addScaledVector(right, inputX).normalize();
  state.dashing = true;
  state.dashTime = .27;
  state.cooldowns.dash = abilityUI.dash.duration;
  state.stamina = Math.max(0, state.stamina - 5);
  updateStaminaHUD();
  game.dataset.staminaAfterDash = state.stamina.toFixed(1);
  addShake(.13);
  game.dataset.lastAction = 'dash';
  return true;
}

function fireBow() {
  if (!state.bowDrawing || state.kit !== 'bow' || state.dead || state.cooldowns.slash > 0) return;
  const strength = clamp((performance.now() - state.bowDrawStart) / 1150, .15, 1);
  state.bowDrawing = false;
  state.cooldowns.slash = 1;
  state.attack = 'bow';
  state.attackTime = 0;
  state.attackSerial += 1;
  const shot = solveCrosshairShot(strength);
  multiplayerSocket?.emit('playerShoot', {
    strength,
    serial: state.attackSerial,
    origin: { x: shot.origin.x, y: shot.origin.y, z: shot.origin.z },
    direction: { x: shot.direction.x, y: shot.direction.y, z: shot.direction.z },
  });
}

const crosshairDirection = new THREE.Vector3();
function solveCrosshairShot(strength) {
  const speed = 70 + strength * 35;
  const maxRange = 220;
  camera.getWorldDirection(crosshairDirection).normalize();
  return {
    origin: camera.position.clone().addScaledVector(crosshairDirection, 1.15),
    direction: crosshairDirection.clone(),
    speed,
    maxRange,
  };
}

const weaponAimRaycaster = new THREE.Raycaster();
const weaponAimObjects = [];
const weaponAimDirection = new THREE.Vector3();
const weaponMuzzleOrigin = new THREE.Vector3();
const weaponShotDirection = new THREE.Vector3();
function fireEquippedWeapon() {
  if (!state.weapon || state.dead || state.cooldowns.slash > 0 || currentMatch?.ended) return false;
  if (state.weaponAmmo <= 0) {
    setLocalWeapon(null, 0);
    return false;
  }
  const firedWeapon = state.weapon;
  const range = firedWeapon === 'rpg' ? 240 : 260;
  camera.getWorldDirection(weaponAimDirection).normalize();
  const cameraRayOrigin = camera.position.clone().addScaledVector(weaponAimDirection, 1.15);
  weaponAimObjects.length = 0;
  weaponAimObjects.push(...collisionMeshes);
  remotePlayers.forEach((remote) => {
    if (!remote.dead && remote.team !== state.team) weaponAimObjects.push(remote.group);
  });
  weaponAimRaycaster.set(cameraRayOrigin, weaponAimDirection);
  weaponAimRaycaster.far = range;
  const hit = weaponAimRaycaster.intersectObjects(weaponAimObjects, true)[0];
  const target = hit?.point?.clone() || cameraRayOrigin.clone().addScaledVector(weaponAimDirection, range);
  hero.updateMatrixWorld(true);
  const muzzle = firedWeapon === 'ak47' ? rig.ak47.userData.muzzle : rig.rpg.userData.muzzle;
  const origin = muzzle?.getWorldPosition(weaponMuzzleOrigin) || cameraRayOrigin;
  weaponShotDirection.copy(target).sub(origin).normalize();
  state.cooldowns.slash = firedWeapon === 'rpg' ? 2.5 : .11;
  state.attackSerial += 1;
  state.weaponKick = 1;
  multiplayerSocket?.emit('weaponFire', {
    weapon: firedWeapon,
    serial: state.attackSerial,
    origin: { x: origin.x, y: origin.y, z: origin.z },
    direction: { x: weaponShotDirection.x, y: weaponShotDirection.y, z: weaponShotDirection.z },
    target: { x: target.x, y: target.y, z: target.z },
  });
  addShake(firedWeapon === 'rpg' ? .23 : .055);
  playSupplyWeaponSound(firedWeapon);
  const remaining = Math.max(0, state.weaponAmmo - 1);
  setLocalWeapon(remaining > 0 ? firedWeapon : null, remaining);
  return true;
}

function updateBowAiming() {
  const canAim = state.joined && (state.kit === 'bow' || state.weapon) && !state.dead && !currentMatch?.ended;
  bowCrosshair.hidden = !canAim;
  const drawStrength = state.bowDrawing ? clamp((performance.now() - state.bowDrawStart) / 1150, 0, 1) : 0;
  bowCrosshair.classList.toggle('drawing', state.bowDrawing);
  bowCrosshair.style.setProperty('--draw', drawStrength.toFixed(3));
  game.dataset.aimStrength = drawStrength.toFixed(2);

  rig.nockedArrow.visible = canAim && !state.weapon && state.bowDrawing;
  rig.nockedArrow.position.z = -.34 * drawStrength;
  const string = rig.bow.userData.string;
  string.geometry.setFromPoints([
    new THREE.Vector3(0, .78, 0),
    new THREE.Vector3(.08, 0, -.42 * drawStrength - .02),
    new THREE.Vector3(0, -.78, 0),
  ]);

  aimGuide.visible = false;
}

function updateCooldowns(dt) {
  Object.entries(abilityUI).forEach(([type, ui]) => {
    state.cooldowns[type] = Math.max(0, state.cooldowns[type] - dt);
    const remaining = state.cooldowns[type];
    const cooling = remaining > .01;
    ui.slot.classList.toggle('cooling', cooling);
    ui.slot.classList.toggle('ready', !cooling);
    ui.fill.style.transform = `scaleY(${remaining / ui.duration})`;
    ui.time.textContent = cooling ? (remaining >= 1 ? Math.ceil(remaining) : remaining.toFixed(1)) : '';
  });
}

function damp(current, target, speed, dt) {
  return lerp(current, target, 1 - Math.exp(-speed * dt));
}

function dampAngle(current, target, speed, dt) {
  let delta = (target - current + Math.PI) % TAU - Math.PI;
  if (delta < -Math.PI) delta += TAU;
  return current + delta * (1 - Math.exp(-speed * dt));
}

// --- Multiplayer -----------------------------------------------------------
// The local simulation remains authoritative for its own hero. The server
// relays compact snapshots, while remote heroes interpolate toward them.
const remotePlayers = new Map();
let multiplayerSocket = null;
let networkSendAccumulator = 0;

function playerColor(id) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = ((hash << 5) - hash + id.charCodeAt(i)) | 0;
  return new THREE.Color().setHSL(Math.abs(hash % 360) / 360, .48, .38);
}

function createRemoteHealthDisplay(id, name, team) {
  const element = document.createElement('div');
  element.className = 'remote-health-tag';
  element.dataset.playerId = id;
  const nameLabel = document.createElement('span');
  nameLabel.className = `remote-player-name ${team}`;
  nameLabel.textContent = name;
  const healthValue = document.createElement('span');
  healthValue.className = 'remote-health-value';
  healthValue.textContent = '100 HP';
  const healthTrack = document.createElement('span');
  healthTrack.className = 'remote-health-track';
  const healthFill = document.createElement('span');
  healthFill.className = 'remote-health-fill';
  healthTrack.append(healthFill);
  element.append(nameLabel, healthValue, healthTrack);
  document.body.appendChild(element);
  return {
    element,
    value: healthValue,
    fill: healthFill,
  };
}

function setRemoteHealth(remote, value) {
  remote.health = clamp(Number(value) || 0, 0, remote.maxHealth || 100);
  remote.dead = remote.health <= 0;
  const ratio = remote.health / (remote.maxHealth || 100);
  remote.healthDisplay.fill.style.width = `${ratio * 100}%`;
  remote.healthDisplay.value.textContent = `${Number.isInteger(remote.health) ? remote.health : remote.health.toFixed(1)} HP`;
}

function createRemoteCharacter(snapshot) {
  const { id, name = 'Vanguard', team = 'bloods', kit = 'sword' } = snapshot;
  const group = new THREE.Group();
  group.name = `Remote player ${id}`;
  const color = new THREE.Color(TEAM_STYLE[team]?.accent || TEAM_STYLE.bloods.accent);
  const tunicMaterial = new THREE.MeshStandardMaterial({ color, roughness: .78 });
  const darkMaterial = new THREE.MeshStandardMaterial({ color: color.clone().multiplyScalar(.42), roughness: .86 });
  const metalMaterial = new THREE.MeshStandardMaterial({ color: 0x60717a, roughness: .38, metalness: .5 });
  const skinMaterial = new THREE.MeshStandardMaterial({ color: 0xd2a078, roughness: .74 });

  const torso = new THREE.Group();
  group.add(torso);
  addMesh(torso, lowCylinder(.43, .36, 1.12, 8, tunicMaterial), [0, 2.22, 0], [0, 0, 0], [1, 1, .72]);
  addMesh(torso, rounded(.9, .55, .52, .11, metalMaterial, 3), [0, 2.42, .02]);
  addMesh(torso, rounded(.86, .16, .5, .04, materials.leather, 2), [0, 1.7, 0]);
  const head = addMesh(torso, new THREE.Mesh(new THREE.IcosahedronGeometry(.36, 2), skinMaterial), [0, 3.24, .02]);
  head.scale.set(.9, 1.08, .9);
  addMesh(torso, new THREE.Mesh(new THREE.IcosahedronGeometry(.36, 1), materials.hair), [0, 3.46, -.01], [0, 0, 0], [.92, .45, .9]);

  function makeRemoteArm(side) {
    const pivot = new THREE.Group();
    pivot.position.set(side * .58, 2.68, 0);
    group.add(pivot);
    addMesh(pivot, lowCylinder(.15, .13, .88, 7, darkMaterial), [0, -.4, 0]);
    addMesh(pivot, new THREE.Mesh(new THREE.SphereGeometry(.24, 8, 6), metalMaterial), [0, -.02, 0], [0, 0, 0], [1.15, .72, 1]);
    const hand = new THREE.Group();
    hand.position.y = -.9;
    pivot.add(hand);
    addMesh(hand, rounded(.22, .24, .22, .055, materials.leather, 2), [0, 0, 0]);
    return { pivot, hand };
  }

  const rightArm = makeRemoteArm(-1);
  const leftArm = makeRemoteArm(1);
  rightArm.pivot.rotation.x = -.42;
  rightArm.pivot.rotation.z = -.16;
  leftArm.pivot.rotation.x = -.08;
  leftArm.pivot.rotation.z = .1;
  rightArm.hand.rotation.set(3.3, 0, .3);
  const remoteSword = createSword();
  remoteSword.scale.setScalar(.76);
  remoteSword.position.set(0, .01, .055);
  remoteSword.visible = kit === 'sword' && !snapshot.weapon;
  rightArm.hand.add(remoteSword);
  const remoteBow = createBow();
  remoteBow.scale.setScalar(.9);
  remoteBow.rotation.z = -.08;
  remoteBow.visible = kit === 'bow' && !snapshot.weapon;
  leftArm.hand.add(remoteBow);
  const remoteQuiver = createQuiver();
  remoteQuiver.position.set(.38, 2.35, -.35);
  remoteQuiver.rotation.z = -.18;
  remoteQuiver.visible = kit === 'bow' && !snapshot.weapon;
  group.add(remoteQuiver);
  const remoteAK47 = createAK47();
  remoteAK47.scale.setScalar(.76);
  remoteAK47.position.set(0, -.015, .05);
  remoteAK47.rotation.set(0, 0, -.015);
  remoteAK47.visible = snapshot.weapon === 'ak47';
  rightArm.hand.add(remoteAK47);
  setAKRestTransform(remoteAK47);
  const remoteRPG = createRPG();
  remoteRPG.scale.setScalar(.68);
  remoteRPG.visible = snapshot.weapon === 'rpg';
  rightArm.hand.add(remoteRPG);

  function makeRemoteLeg(side) {
    const pivot = new THREE.Group();
    pivot.position.set(side * .23, 1.42, 0);
    group.add(pivot);
    addMesh(pivot, lowCylinder(.2, .17, .96, 7, darkMaterial), [0, -.44, 0]);
    addMesh(pivot, rounded(.34, .34, .46, .07, metalMaterial, 2), [0, -.92, .08]);
    return pivot;
  }

  const leftLeg = makeRemoteLeg(-1);
  const rightLeg = makeRemoteLeg(1);
  const healthDisplay = createRemoteHealthDisplay(id, name, team);
  const damageAura = new THREE.Mesh(
    new THREE.IcosahedronGeometry(.92, 1),
    new THREE.MeshBasicMaterial({
      color: 0xff2b2b,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    }),
  );
  damageAura.position.y = 2.05;
  damageAura.scale.set(1, 1.85, .78);
  damageAura.visible = false;
  group.add(damageAura);
  group.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });

  const remote = {
    id,
    name,
    team,
    kit,
    weapon: snapshot.weapon || null,
    weaponAmmo: Number(snapshot.weaponAmmo) || 0,
    group,
    torso,
    rightArm,
    remoteSword,
    remoteBow,
    remoteQuiver,
    remoteAK47,
    remoteRPG,
    leftArm,
    leftLeg,
    rightLeg,
    targetPosition: new THREE.Vector3(),
    targetRotation: 0,
    moving: false,
    sprinting: false,
    dashing: false,
    grounded: true,
    verticalVelocity: 0,
    gait: 0,
    attack: null,
    attackTime: 0,
    attackSerial: 0,
    health: snapshot.health ?? snapshot.maxHealth ?? 100,
    maxHealth: snapshot.maxHealth ?? (kit === 'sword' ? 120 : 85),
    healthDisplay,
    damageAura,
    damageFlash: 0,
    weaponKick: 0,
    dead: false,
  };
  setRemoteHealth(remote, snapshot.health ?? remote.maxHealth);
  return remote;
}

function setRemoteWeapon(remote, weapon, ammo = 0) {
  if (!remote) return;
  remote.weapon = weapon === 'ak47' || weapon === 'rpg' ? weapon : null;
  remote.weaponAmmo = remote.weapon ? Number(ammo) || 0 : 0;
  remote.remoteSword.visible = !remote.weapon && remote.kit === 'sword';
  remote.remoteBow.visible = !remote.weapon && remote.kit === 'bow';
  remote.remoteQuiver.visible = !remote.weapon && remote.kit === 'bow';
  remote.remoteAK47.visible = remote.weapon === 'ak47';
  remote.remoteRPG.visible = remote.weapon === 'rpg';
}

function removeRemotePlayer(id) {
  const remote = remotePlayers.get(id);
  if (!remote) return;
  scene.remove(remote.group);
  remote.healthDisplay.element.remove();
  remotePlayers.delete(id);
  game.dataset.remotePlayers = String(remotePlayers.size);
}

function upsertRemotePlayer(snapshot) {
  if (!snapshot?.id || snapshot.id === multiplayerSocket?.id) return;
  let remote = remotePlayers.get(snapshot.id);
  if (!remote) {
    remote = createRemoteCharacter(snapshot);
    remotePlayers.set(snapshot.id, remote);
    scene.add(remote.group);
    remote.group.position.set(snapshot.position?.x || 0, snapshot.position?.y || 0, snapshot.position?.z || 0);
  }
  remote.targetPosition.set(snapshot.position?.x || 0, snapshot.position?.y || 0, snapshot.position?.z || 0);
  remote.targetRotation = snapshot.rotation || 0;
  remote.moving = Boolean(snapshot.moving);
  remote.sprinting = Boolean(snapshot.sprinting);
  remote.dashing = Boolean(snapshot.dashing);
  remote.grounded = snapshot.grounded !== false;
  remote.verticalVelocity = Number(snapshot.verticalVelocity) || 0;
  if (Object.prototype.hasOwnProperty.call(snapshot, 'weapon')) setRemoteWeapon(remote, snapshot.weapon, snapshot.weaponAmmo);
  if (Number.isFinite(Number(snapshot.maxHealth))) remote.maxHealth = Number(snapshot.maxHealth);
  if (Number.isFinite(Number(snapshot.health))) setRemoteHealth(remote, snapshot.health);
  if (snapshot.attack && snapshot.attackSerial > remote.attackSerial) {
    remote.attackSerial = snapshot.attackSerial;
    remote.attack = snapshot.attack;
    remote.attackTime = 0;
  }
  game.dataset.remotePlayers = String(remotePlayers.size);
}

function handlePlayerDamaged(payload) {
  if (!payload?.targetId) return;
  if (payload.targetId === multiplayerSocket?.id) {
    if (Number.isFinite(Number(payload.maxHealth))) state.maxHealth = Number(payload.maxHealth);
    setHealth(payload.health);
    if (state.health <= 0) enterDeath();
  }
  const remote = remotePlayers.get(payload.targetId);
  if (!remote) return;
  setRemoteHealth(remote, payload.health);
  remote.damageFlash = .2;
}

function handlePlayerRespawned(payload) {
  if (!payload?.id) return;
  if (payload.id === multiplayerSocket?.id) {
    finishRespawn(payload);
    return;
  }
  const remote = remotePlayers.get(payload.id);
  if (!remote) return;
  if (Number.isFinite(Number(payload.maxHealth))) remote.maxHealth = Number(payload.maxHealth);
  remote.targetPosition.set(payload.position?.x || 0, payload.position?.y || 0, payload.position?.z || 0);
  remote.group.position.copy(remote.targetPosition);
  remote.group.rotation.x = 0;
  remote.damageFlash = 0;
  setRemoteHealth(remote, payload.health ?? 100);
  setRemoteWeapon(remote, payload.weapon || null);
}

function playRemoteAttack(payload) {
  const remote = remotePlayers.get(payload?.id);
  if (!remote || !payload?.type || payload.serial <= remote.attackSerial) return;
  remote.attackSerial = payload.serial;
  remote.attack = payload.type;
  remote.attackTime = 0;
}

const activeArrows = [];
const arrowForward = new THREE.Vector3(0, 1, 0);
function spawnArrowProjectile(payload) {
  if (!payload?.origin || !payload?.direction) return;
  const group = new THREE.Group();
  addMesh(group, lowCylinder(.018, .018, .78, 5, materials.leatherLight), [0, 0, 0]);
  addMesh(group, new THREE.Mesh(new THREE.ConeGeometry(.055, .15, 5), materials.silver), [0, .46, 0]);
  group.position.set(payload.origin.x || 0, payload.origin.y || 0, payload.origin.z || 0);
  const direction = new THREE.Vector3(payload.direction.x || 0, payload.direction.y || 0, payload.direction.z || 1).normalize();
  const velocity = direction.multiplyScalar(payload.speed || 25);
  scene.add(group);
  activeArrows.push({ group, velocity, age: 0 });
  if (payload.id === multiplayerSocket?.id) {
    state.arrows = Number(payload.arrows) || 0;
    specialName.textContent = 'ARROWS ∞';
  } else playRemoteAttack({ id: payload.id, type: 'bow', serial: payload.serial });
}

function updateArrows(dt) {
  for (let i = activeArrows.length - 1; i >= 0; i--) {
    const arrow = activeArrows[i];
    arrow.age += dt;
    arrow.group.position.addScaledVector(arrow.velocity, dt);
    arrow.group.quaternion.setFromUnitVectors(arrowForward, arrow.velocity.clone().normalize());
    const floor = heightAt(arrow.group.position.x, arrow.group.position.z) + .08;
    if (arrow.age > 3.2 || arrow.group.position.y <= floor) {
      scene.remove(arrow.group);
      activeArrows.splice(i, 1);
    }
  }
}

function handlePlayerDied(payload) {
  if (!payload?.id) return;
  if (payload.id === multiplayerSocket?.id) {
    state.respawnAt = Number(payload.respawnAt) || Date.now() + 3000;
    enterDeath();
  }
  const remote = remotePlayers.get(payload.id);
  if (remote) remote.dead = true;
}

function handleMatchEnded(payload) {
  updateMatchUI(payload);
  const winner = payload.winner;
  winnerTitle.textContent = winner === 'draw' ? 'DRAW' : `${TEAM_STYLE[winner]?.name?.toUpperCase() || 'MATCH'} WIN`;
  winnerTitle.style.color = winner === 'bloods' ? '#ff6a74' : winner === 'crips' ? '#6f9dff' : '#f3e6c9';
  winnerScore.textContent = `${payload.scores?.bloods ?? 0} — ${payload.scores?.crips ?? 0}`;
  winnerScreen.hidden = false;
  document.exitPointerLock?.();
}

const remoteHealthPosition = new THREE.Vector3();
const remoteHealthOffset = new THREE.Vector3(0, 4.18, 0);
function updateRemotePlayers(dt) {
  remotePlayers.forEach((remote) => {
    remote.group.position.lerp(remote.targetPosition, 1 - Math.exp(-12 * dt));
    remote.group.rotation.y = dampAngle(remote.group.rotation.y, remote.targetRotation, 14, dt);
    remote.group.rotation.x = damp(remote.group.rotation.x, remote.dead ? 1.48 : 0, remote.dead ? 5.8 : 13, dt);
    remoteHealthPosition.copy(remote.group.position).add(remoteHealthOffset).project(camera);
    const healthOnScreen = !remote.dead
      && remoteHealthPosition.z > -1 && remoteHealthPosition.z < 1
      && Math.abs(remoteHealthPosition.x) < 1.08 && Math.abs(remoteHealthPosition.y) < 1.08;
    remote.healthDisplay.element.hidden = !healthOnScreen;
    if (healthOnScreen) {
      const x = (remoteHealthPosition.x * .5 + .5) * window.innerWidth;
      const y = (-remoteHealthPosition.y * .5 + .5) * window.innerHeight;
      remote.healthDisplay.element.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`;
    }
    remote.damageFlash = Math.max(0, remote.damageFlash - dt);
    remote.damageAura.visible = remote.damageFlash > 0;
    remote.damageAura.material.opacity = remote.damageFlash > 0 ? .3 * (remote.damageFlash / .2) : 0;
    const pace = remote.sprinting ? 12 : 8;
    if (remote.moving) remote.gait += dt * pace;
    const stride = remote.moving ? Math.sin(remote.gait) : 0;
    let leftLegX = stride * (remote.sprinting ? .68 : .55);
    let rightLegX = -stride * (remote.sprinting ? .68 : .55);
    let torsoX = 0;
    if (!remote.grounded) {
      const rising = remote.verticalVelocity > 0;
      leftLegX = rising ? -.42 : .2;
      rightLegX = rising ? .2 : -.18;
      torsoX = rising ? -.07 : .06;
    }
    if (remote.dashing) {
      leftLegX = -.3;
      rightLegX = .42;
      torsoX = -.38;
    }

    let rightArmX = stride * .16 - .42;
    let rightArmZ = -.16;
    let handX = 3.3;
    let handZ = .3;
    let torsoTurn = 0;
    const leftArmTarget = remote.dashing ? .48 : -stride * .34 - .08;
    remote.leftArm.pivot.rotation.x = damp(remote.leftArm.pivot.rotation.x, leftArmTarget, 13, dt);
    if (remote.dashing) {
      rightArmX = .28;
      rightArmZ = -.42;
      handX = 3.08;
      handZ = .7;
    }

    remote.weaponKick = damp(remote.weaponKick, 0, 16, dt);
    if (remote.weapon) {
      const weaponBob = remote.moving ? Math.sin(remote.gait * 2) * .025 : 0;
      rightArmX = -1.14 + weaponBob - remote.weaponKick * .07;
      rightArmZ = -.22;
      handX = 3.57 - remote.weaponKick * .1;
      handZ = .06 - remote.weaponKick * .035;
      torsoTurn = -.08;
      remote.leftArm.pivot.rotation.x = damp(remote.leftArm.pivot.rotation.x, -1.18 + weaponBob, 18, dt);
    }

    if (remote.attack) {
      remote.attackTime += dt;
      const heavy = remote.attack === 'heavy';
      const bowShot = remote.attack === 'bow';
      const duration = heavy ? .96 : bowShot ? .34 : .46;
      const t = clamp(remote.attackTime / duration, 0, 1);
      if (bowShot) {
        const release = Math.sin(t * Math.PI);
        rightArmX = -1.12 + release * .5;
        rightArmZ = -.52 + release * .4;
        remote.leftArm.pivot.rotation.x = damp(remote.leftArm.pivot.rotation.x, -1.28 + release * .12, 25, dt);
        torsoTurn = -.08 + release * .12;
      } else if (heavy) {
        const windup = THREE.MathUtils.smootherstep(t, 0, .36);
        const slam = THREE.MathUtils.smootherstep(t, .36, .58);
        const recover = THREE.MathUtils.smootherstep(t, .78, 1);
        const liftedFoot = windup * (1 - slam);
        const stomp = slam * (1 - recover);
        rightLegX = -.66 * liftedFoot + .2 * stomp;
        leftLegX = -.04 * stomp;
        torsoX = slam * (1 - recover) * .42 - windup * (1 - slam) * .12;
        rightArmX = lerp(lerp(-.42, -1.42, windup), -1.02, slam);
        rightArmX = lerp(rightArmX, -.42, recover);
        rightArmZ = lerp(lerp(-.16, .22, windup), .04, slam);
        rightArmZ = lerp(rightArmZ, -.16, recover);
        handX = lerp(lerp(3.3, 2.25, windup), 4.25, slam);
        handX = lerp(handX, 3.3, recover);
        handZ = lerp(lerp(.3, -.12, windup), -.06, slam);
        handZ = lerp(handZ, .3, recover);
      } else {
        const windup = THREE.MathUtils.smootherstep(t, 0, .23);
        const cut = THREE.MathUtils.smootherstep(t, .23, .57);
        const lead = THREE.MathUtils.smootherstep(t, .18, .49);
        const recover = THREE.MathUtils.smootherstep(t, .6, 1);
        rightArmX = lerp(lerp(-.42, -.72, windup), -1.08, cut);
        rightArmX = lerp(rightArmX, -.42, recover);
        rightArmZ = lerp(lerp(-.16, -.78, windup), .98, cut);
        rightArmZ = lerp(rightArmZ, -.16, recover);
        handX = lerp(lerp(3.3, 2.1, windup), 1.35, lead);
        handX = lerp(handX, 3.3, recover);
        handZ = lerp(lerp(.3, .72, windup), -.55, lead);
        handZ = lerp(handZ, .3, recover);
        torsoTurn = lerp(lerp(0, .22, windup), -.34, cut) * (1 - recover);
      }
      if (t >= 1) remote.attack = null;
    }

    remote.leftLeg.rotation.x = damp(remote.leftLeg.rotation.x, leftLegX, 18, dt);
    remote.rightLeg.rotation.x = damp(remote.rightLeg.rotation.x, rightLegX, 18, dt);
    remote.rightArm.pivot.rotation.x = damp(remote.rightArm.pivot.rotation.x, rightArmX, 25, dt);
    remote.rightArm.pivot.rotation.z = damp(remote.rightArm.pivot.rotation.z, rightArmZ, 25, dt);
    remote.rightArm.hand.rotation.x = damp(remote.rightArm.hand.rotation.x, handX, 34, dt);
    remote.rightArm.hand.rotation.z = damp(remote.rightArm.hand.rotation.z, handZ, 34, dt);
    remote.torso.rotation.y = damp(remote.torso.rotation.y, torsoTurn, 20, dt);
    remote.torso.rotation.x = damp(remote.torso.rotation.x, torsoX, 20, dt);
    updateAKAnimation(remote.remoteAK47, remote.weapon === 'ak47' ? remote.weaponKick : 0, performance.now() * .001);
  });
}

function multiplayerEndpoint() {
  if (import.meta.env.VITE_MULTIPLAYER_URL) return import.meta.env.VITE_MULTIPLAYER_URL;
  if (window.location.port && window.location.port !== '3000') {
    return `${window.location.protocol}//${window.location.hostname}:3000`;
  }
  return window.location.origin;
}

function connectMultiplayer() {
  window.__astralSocket?.disconnect();
  const clientKey = sessionStorage.getItem('astralClientKey')
    || (crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`);
  sessionStorage.setItem('astralClientKey', clientKey);
  multiplayerSocket = io(multiplayerEndpoint(), {
    auth: { clientKey },
    transports: ['websocket', 'polling'],
    timeout: 2500,
    closeOnBeforeunload: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
  });
  window.__astralSocket = multiplayerSocket;
  game.dataset.connection = 'connecting';
  game.dataset.remotePlayers = '0';

  multiplayerSocket.on('connect', () => {
    game.dataset.connection = 'online';
    game.dataset.playerId = multiplayerSocket.id;
    joinButton.disabled = false;
    lobbyStatus.textContent = 'Connected. Choose your side and kit.';
    lobbyStatus.classList.remove('error');
    if (state.joined) multiplayerSocket.emit('joinGame', { name: state.name, team: state.team, kit: state.kit });
  });
  multiplayerSocket.on('welcome', ({ id, match }) => {
    game.dataset.playerId = id;
    if (match?.ended) handleMatchEnded(match);
    else updateMatchUI(match);
  });
  multiplayerSocket.on('joinAccepted', ({ player, match }) => {
    configureLocalProfile(player);
    state.joined = true;
    state.dead = false;
    const x = Number(player.position?.x) || 0;
    const z = Number(player.position?.z) || 0;
    hero.position.set(x, heightAt(x, z), z);
    hero.visible = true;
    setHealth(player.health);
    if (match?.ended) handleMatchEnded(match);
    else updateMatchUI(match);
    lobby.hidden = true;
    scoreboard.hidden = false;
    playerBoard.hidden = false;
    document.body.classList.remove('in-lobby');
    game.dataset.joined = 'true';
  });
  multiplayerSocket.on('joinRejected', ({ message }) => {
    joinButton.disabled = false;
    lobbyStatus.textContent = message || 'Unable to join.';
    lobbyStatus.classList.add('error');
  });
  multiplayerSocket.on('worldSnapshot', (players) => players.forEach(upsertRemotePlayer));
  multiplayerSocket.on('supplyDropSnapshot', (drops) => {
    supplyDropObjects.forEach((drop) => scene.remove(drop.group));
    supplyDropObjects.clear();
    (drops || []).forEach(createSupplyDropObject);
  });
  multiplayerSocket.on('supplyDropSpawned', (drop) => {
    createSupplyDropObject(drop);
    nextSupplyDropAt = Number(drop.spawnedAt) + 20_000;
    supplyMessage.textContent = `${drop.weapon === 'rpg' ? 'RPG' : 'AK-47'} inbound`;
  });
  multiplayerSocket.on('supplyDropPicked', (payload) => {
    removeSupplyDropObject(payload.dropId);
    if (payload.playerId === multiplayerSocket.id) setLocalWeapon(payload.weapon, payload.ammo);
    else setRemoteWeapon(remotePlayers.get(payload.playerId), payload.weapon, payload.ammo);
    supplyLabel.textContent = payload.playerId === multiplayerSocket.id ? 'SUPPLY WEAPON EQUIPPED' : 'SUPPLY DROP CLAIMED';
    supplyTimer.textContent = payload.weapon === 'rpg' ? 'RPG' : 'AK-47';
  });
  multiplayerSocket.on('supplyDropExpired', ({ dropId }) => removeSupplyDropObject(dropId));
  multiplayerSocket.on('supplyDropReset', (payload) => {
    supplyDropObjects.forEach((drop) => scene.remove(drop.group));
    supplyDropObjects.clear();
    nextSupplyDropAt = Number(payload?.nextSupplyDropAt) || Date.now() + 20_000;
  });
  multiplayerSocket.on('playerWeaponChanged', (payload) => {
    if (payload.id === multiplayerSocket.id) setLocalWeapon(payload.weapon, payload.ammo);
    else setRemoteWeapon(remotePlayers.get(payload.id), payload.weapon, payload.ammo);
  });
  multiplayerSocket.on('playerJoined', upsertRemotePlayer);
  multiplayerSocket.on('playerState', upsertRemotePlayer);
  multiplayerSocket.on('playerAttack', playRemoteAttack);
  multiplayerSocket.on('playerShoot', spawnArrowProjectile);
  multiplayerSocket.on('weaponFired', (payload) => {
    const remoteShooter = remotePlayers.get(payload.id);
    if (remoteShooter && payload.weapon === 'ak47') remoteShooter.weaponKick = 1;
    if (payload.weapon === 'rpg') spawnRocket(payload);
    else spawnTracer(payload);
  });
  multiplayerSocket.on('rpgExploded', spawnRPGExplosion);
  multiplayerSocket.on('playerDamaged', handlePlayerDamaged);
  multiplayerSocket.on('playerDied', handlePlayerDied);
  multiplayerSocket.on('playerRespawned', handlePlayerRespawned);
  multiplayerSocket.on('matchState', updateMatchUI);
  multiplayerSocket.on('matchEnded', handleMatchEnded);
  multiplayerSocket.on('matchRestarted', (payload) => {
    updateMatchUI(payload);
    winnerScreen.hidden = true;
  });
  multiplayerSocket.on('playerLeft', removeRemotePlayer);
  multiplayerSocket.on('disconnect', () => {
    game.dataset.connection = 'offline';
    joinButton.disabled = true;
    lobbyStatus.textContent = state.joined ? 'Connection lost. Reconnecting…' : 'Unable to reach the shared server.';
    lobbyStatus.classList.add('error');
    [...remotePlayers.keys()].forEach(removeRemotePlayer);
  });
  multiplayerSocket.on('connect_error', () => {
    game.dataset.connection = 'offline';
    joinButton.disabled = true;
    lobbyStatus.textContent = 'Unable to reach the shared server.';
    lobbyStatus.classList.add('error');
  });
  window.addEventListener('beforeunload', () => multiplayerSocket?.disconnect(), { once: true });
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => multiplayerSocket?.disconnect());
}

function sendMultiplayerState(dt) {
  if (!state.joined || !multiplayerSocket?.connected) return;
  networkSendAccumulator += dt;
  if (networkSendAccumulator < .05) return;
  networkSendAccumulator = 0;
  multiplayerSocket.volatile.emit('playerState', {
    position: { x: hero.position.x, y: hero.position.y, z: hero.position.z },
    rotation: hero.rotation.y,
    moving: state.moving,
    sprinting: state.sprinting,
    dashing: state.dashing,
    grounded: state.grounded,
    verticalVelocity: state.verticalVelocity,
    attack: state.attack,
    attackSerial: state.attackSerial,
  });
}

connectMultiplayer();

const cameraTarget = new THREE.Vector3(0, 2.1, 0);
const cameraPosition = camera.position.clone();
const raycaster = new THREE.Raycaster();
const desiredCamera = new THREE.Vector3();
const offset = new THREE.Vector3();
const moveInput = new THREE.Vector3();
const camForward = new THREE.Vector3();
const camRight = new THREE.Vector3();
const cameraShoulder = new THREE.Vector3();
const cameraPivot = new THREE.Vector3();
const cameraAimDirection = new THREE.Vector3();
const cameraAimRight = new THREE.Vector3();
const bowCameraTarget = new THREE.Vector3();

function updateMovement(dt) {
  if (!state.joined || state.dead || currentMatch?.ended) {
    state.moving = false;
    state.sprinting = false;
    state.velocity.x = damp(state.velocity.x, 0, 18, dt);
    state.velocity.z = damp(state.velocity.z, 0, 18, dt);
    hero.position.y = damp(hero.position.y, heightAt(hero.position.x, hero.position.z), 18, dt);
    return 0;
  }
  if (state.dashing) {
    state.dashTime = Math.max(0, state.dashTime - dt);
    const dashBlend = clamp(state.dashTime / .27, 0, 1);
    const dashSpeed = 15 + dashBlend * 9;
    state.velocity.copy(state.dashDirection).multiplyScalar(dashSpeed);
    moveHeroWithCollisions(state.velocity.x * dt, state.velocity.z * dt, state.velocity);
    const radius = Math.hypot(hero.position.x, hero.position.z);
    if (radius > 145) {
      hero.position.x *= 145 / radius;
      hero.position.z *= 145 / radius;
    }
    hero.position.y = heightAt(hero.position.x, hero.position.z);
    hero.rotation.y = Math.atan2(state.dashDirection.x, state.dashDirection.z);
    state.moving = true;
    state.sprinting = false;
    if (state.dashTime <= 0) state.dashing = false;
    return dashSpeed;
  }
  moveInput.set(0, 0, 0);
  if (keys.has('KeyW') || keys.has('ArrowUp')) moveInput.z += 1;
  if (keys.has('KeyS') || keys.has('ArrowDown')) moveInput.z -= 1;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) moveInput.x -= 1;
  if (keys.has('KeyD') || keys.has('ArrowRight')) moveInput.x += 1;

  camForward.set(Math.sin(camYaw), 0, Math.cos(camYaw));
  camRight.set(-camForward.z, 0, camForward.x);
  const desiredDirection = new THREE.Vector3()
    .addScaledVector(camForward, moveInput.z)
    .addScaledVector(camRight, moveInput.x);
  if (desiredDirection.lengthSq() > 0) desiredDirection.normalize();

  state.moving = desiredDirection.lengthSq() > .1;
  const wantsSprint = state.moving && (keys.has('ShiftLeft') || keys.has('ShiftRight')) && state.stamina > 1;
  state.sprinting = wantsSprint;
  if (wantsSprint) state.stamina = Math.max(0, state.stamina - (23 / 3) * dt);
  else state.stamina = Math.min(state.maxStamina, state.stamina + (state.moving ? 10 : 17) * dt);

  const maxSpeed = wantsSprint ? 7.2 : 3.65;
  const acceleration = state.grounded ? (wantsSprint ? 8 : 11) : 2.2;
  state.velocity.x = damp(state.velocity.x, desiredDirection.x * maxSpeed, acceleration, dt);
  state.velocity.z = damp(state.velocity.z, desiredDirection.z * maxSpeed, acceleration, dt);
  if (!state.moving && state.grounded) {
    state.velocity.x = damp(state.velocity.x, 0, 12, dt);
    state.velocity.z = damp(state.velocity.z, 0, 12, dt);
  }

  const planarSpeed = Math.hypot(state.velocity.x, state.velocity.z);
  hero.rotation.y = camYaw;

  moveHeroWithCollisions(state.velocity.x * dt, state.velocity.z * dt, state.velocity);
  const radius = Math.hypot(hero.position.x, hero.position.z);
  if (radius > 145) {
    hero.position.x *= 145 / radius;
    hero.position.z *= 145 / radius;
  }

  const groundY = heightAt(hero.position.x, hero.position.z);
  if (!state.grounded) {
    state.verticalVelocity -= 18.5 * dt;
    hero.position.y += state.verticalVelocity * dt;
    if (hero.position.y <= groundY && state.verticalVelocity < 0) {
      hero.position.y = groundY;
      state.verticalVelocity = 0;
      state.grounded = true;
      state.landing = 1;
      addShake(.19 + Math.min(planarSpeed / 35, .12));
    }
  } else {
    hero.position.y = damp(hero.position.y, groundY, 18, dt);
  }

  updateStaminaHUD();
  return planarSpeed;
}

function updateCape(time, speed) {
  const geometry = rig.cape.geometry;
  const p = geometry.attributes.position;
  const base = geometry.userData.base;
  const cols = geometry.userData.cols;
  for (let i = 0; i < p.count; i++) {
    const v = Math.floor(i / (cols + 1)) / 11;
    const x = base[i * 3];
    const flutter = Math.sin(time * (2.3 + speed * .12) + x * 4.8 + v * 3.2) * (.025 + speed * .007) * v;
    const billow = Math.sin(time * 1.5 + v * 2.6) * .035 * v + speed * .028 * v;
    p.setXYZ(i, x + flutter * .24, base[i * 3 + 1], base[i * 3 + 2] - billow - flutter);
  }
  p.needsUpdate = true;
  geometry.computeVertexNormals();
}

function updateAnimation(dt, time, speed) {
  if (state.dead) state.deathTime += dt;
  const speedRatio = clamp(speed / 7.2, 0, 1);
  state.gait += dt * (state.sprinting ? 12.2 : 8.3) * clamp(speed / 3.2, .25, 1.25);
  const stride = Math.sin(state.gait);
  const step = Math.sin(state.gait * 2);
  const moveBlend = clamp(speed / 2.8, 0, 1);
  const sprintBlend = state.sprinting ? moveBlend : 0;
  const idleBreath = Math.sin(time * 1.65);

  let torsoX = idleBreath * .012;
  let torsoLift = idleBreath * .012 + Math.abs(step) * .026 * moveBlend;
  let torsoTurn = 0;
  let torsoZ = -stride * .035 * moveBlend;
  let hipsY = 1.44 - Math.abs(step) * .035 * moveBlend;
  let leftLegX = stride * .63 * moveBlend;
  let rightLegX = -stride * .63 * moveBlend;
  let leftKneeX = Math.max(0, -stride) * .58 * moveBlend;
  let rightKneeX = Math.max(0, stride) * .58 * moveBlend;
  let leftArmX = -stride * .38 * moveBlend - .08;
  let rightArmX = stride * .18 * moveBlend - .42;
  let leftArmZ = .09;
  let rightArmZ = -.16;
  let leftElbowX = -.12 - Math.max(0, stride) * .28 * moveBlend;
  let rightElbowX = -.52 - Math.max(0, -stride) * .18 * moveBlend;
  let swordX = 3.3;
  let swordY = 0;
  let swordZ = .3;
  let headY = 0;
  let headX = clamp((camPitch - .18) * .32, -.1, .15);
  rig.slashTrail.visible = false;

  if (!state.moving && state.grounded && !state.attack) {
    leftArmX += idleBreath * .018;
    rightArmX -= idleBreath * .016;
  }

  if (sprintBlend > 0) {
    torsoX -= .17 * sprintBlend;
    leftLegX *= 1.2;
    rightLegX *= 1.2;
    leftArmX = -stride * .72 - .18;
    rightArmX = stride * .34 - .56;
    leftElbowX = -.58;
    rightElbowX = -.64;
    swordX = 3.2;
    swordY = 0;
    swordZ = .46;
  }

  if (state.dashing) {
    const dashPulse = clamp(state.dashTime / .27, 0, 1);
    torsoX = -.38;
    torsoLift = -.04;
    leftLegX = -.42 + dashPulse * .18;
    rightLegX = .5 - dashPulse * .16;
    leftKneeX = .72;
    rightKneeX = .18;
    leftArmX = .48;
    rightArmX = .28;
    leftArmZ = .32;
    rightArmZ = -.42;
    swordX = 3.08;
    swordZ = .7;
  }

  if (!state.grounded) {
    const rising = state.verticalVelocity > 0;
    torsoX = rising ? -.07 : .06;
    leftLegX = rising ? -.42 : .2;
    rightLegX = rising ? .2 : -.18;
    leftKneeX = rising ? .65 : .28;
    rightKneeX = rising ? .42 : .5;
    leftArmX = rising ? .3 : -.18;
    rightArmX = rising ? -.55 : -.2;
    leftArmZ = .28;
    rightArmZ = -.3;
    swordX = 3.15;
    swordZ = .44;
  }

  if (state.landing > 0) {
    state.landing = Math.max(0, state.landing - dt * 3.7);
    const crouch = Math.sin(state.landing * Math.PI) * .27;
    hipsY -= crouch;
    torsoX += crouch * .45;
    leftLegX = -.18;
    rightLegX = .16;
    leftKneeX = crouch * 1.8;
    rightKneeX = crouch * 1.55;
  }

  state.weaponKick = damp(state.weaponKick, 0, 16, dt);
  if (state.weapon) {
    const weaponBob = moveBlend * Math.sin(state.gait * 2) * .025;
    torsoX = -.045;
    torsoTurn = -.08;
    headY = .06;
    leftArmX = -1.18 + weaponBob;
    leftArmZ = .25;
    leftElbowX = -.62;
    rightArmX = -1.14 + weaponBob - state.weaponKick * .07;
    rightArmZ = -.22;
    rightElbowX = -.88;
    swordX = 3.57 - state.weaponKick * .1;
    swordY = 0;
    swordZ = .06 - state.weaponKick * .035;
    torsoX -= state.weaponKick * .025;
  }

  if (state.bowDrawing) {
    const draw = clamp((performance.now() - state.bowDrawStart) / 1150, 0, 1);
    torsoTurn = lerp(-.04, -.18, draw);
    torsoX = -.035;
    headY = .08 + draw * .08;
    leftArmX = -1.34;
    leftArmZ = .18;
    leftElbowX = -.18;
    rightArmX = lerp(-1.02, -1.24, draw);
    rightArmZ = lerp(-.3, -.78, draw);
    rightElbowX = lerp(-.78, -1.38, draw);
  }

  if (state.attack) {
    state.attackTime += dt;
    const heavy = state.attack === 'heavy';
    const bowShot = state.attack === 'bow';
    const duration = heavy ? .96 : bowShot ? .34 : .46;
    const t = clamp(state.attackTime / duration, 0, 1);
    const effectStart = heavy ? .3 : .12;
    const effectEnd = heavy ? .64 : .72;
    if (!bowShot && t >= effectStart && t <= effectEnd) {
      const effectT = clamp((t - effectStart) / (effectEnd - effectStart), 0, 1);
      rig.slashTrail.visible = true;
      rig.slashTrail.material.opacity = Math.sin(effectT * Math.PI) * (heavy ? .62 : .5);
      rig.slashTrail.material.color.setHex(heavy ? 0xff9b5d : 0xf6d77b);
      const effectScale = (heavy ? 1.34 : 1.16) * (.92 + effectT * .12);
      rig.slashTrail.scale.set(effectScale * .78, effectScale, effectScale);
      rig.slashTrail.rotation.z = heavy ? .18 : -.62 + effectT * 1.18;
    }
    if (bowShot) {
      const release = Math.sin(t * Math.PI);
      torsoTurn = -.08 + release * .12;
      leftArmX = -1.28 + release * .12;
      leftArmZ = .1;
      leftElbowX = -.22;
      rightArmX = -1.12 + release * .5;
      rightArmZ = -.52 + release * .4;
      rightElbowX = -1.18 + release * .48;
    } else if (heavy) {
      const windup = THREE.MathUtils.smootherstep(t, 0, .36);
      const slam = THREE.MathUtils.smootherstep(t, .36, .58);
      const recover = THREE.MathUtils.smootherstep(t, .78, 1);
      const commitment = Math.sin(t * Math.PI);
      const liftedFoot = windup * (1 - slam);
      const stomp = slam * (1 - recover);
      torsoTurn += lerp(-.12, .08, slam) * commitment;
      torsoX += slam * (1 - recover) * .42 - windup * (1 - slam) * .12;
      hipsY -= stomp * .18;
      torsoLift -= stomp * .08;
      rightLegX = -.66 * liftedFoot + .2 * stomp;
      rightKneeX = 1.02 * liftedFoot + .18 * stomp;
      leftLegX = -.04 * stomp;
      leftKneeX = .16 * stomp;
      rightArmX = lerp(lerp(-.42, -1.42, windup), -1.02, slam);
      rightArmX = lerp(rightArmX, -.42, recover);
      rightArmZ = lerp(lerp(-.16, .22, windup), .04, slam);
      rightArmZ = lerp(rightArmZ, -.16, recover);
      rightElbowX = lerp(-.52, -.9, commitment);
      swordX = lerp(lerp(3.3, 2.25, windup), 4.25, slam);
      swordX = lerp(swordX, 3.3, recover);
      swordY = 0;
      swordZ = lerp(lerp(.3, -.12, windup), -.06, slam);
      swordZ = lerp(swordZ, .3, recover);
      leftArmX = lerp(-.12, -1.02, commitment);
      leftArmZ = lerp(.09, -.62, commitment);
      leftElbowX = lerp(-.12, -.86, commitment);

      if (t >= .58 && !state.attackImpact) {
        state.attackImpact = true;
        spawnGroundImpact();
      }
    } else {
      const windup = THREE.MathUtils.smootherstep(t, 0, .23);
      const cut = THREE.MathUtils.smootherstep(t, .23, .57);
      const bladeLead = THREE.MathUtils.smootherstep(t, .18, .49);
      const recover = THREE.MathUtils.smootherstep(t, .6, 1);
      torsoTurn += lerp(lerp(0, .22, windup), -.34, cut) * (1 - recover);
      torsoX += Math.sin(t * Math.PI) * .08;
      rightArmX = lerp(lerp(-.42, -.72, windup), -1.08, cut);
      rightArmX = lerp(rightArmX, -.42, recover);
      rightArmZ = lerp(lerp(-.16, -.78, windup), .98, cut);
      rightArmZ = lerp(rightArmZ, -.16, recover);
      rightElbowX = lerp(-.52, -.72, Math.sin(t * Math.PI));
      swordX = lerp(lerp(3.3, 2.1, windup), 1.35, bladeLead);
      swordX = lerp(swordX, 3.3, recover);
      swordY = 0;
      swordZ = lerp(lerp(.3, .72, windup), -.55, bladeLead);
      swordZ = lerp(swordZ, .3, recover);
      leftArmX = lerp(-.08, -.38, Math.sin(t * Math.PI));
      leftArmZ = lerp(.09, -.16, Math.sin(t * Math.PI));
    }

    // Quick cuts keep the stance planted; the special visibly lifts and stomps the right foot.
    if (!heavy) {
      leftLegX = 0;
      rightLegX = 0;
      leftKneeX = 0;
      rightKneeX = 0;
    }

    if (t >= 1) state.attack = null;
  }

  const s = 14;
  const armSpeed = state.attack ? 30 : s;
  const wristSpeed = state.attack ? 38 : 22;
  rig.hips.position.y = damp(rig.hips.position.y, hipsY, s, dt);
  rig.hips.rotation.y = damp(rig.hips.rotation.y, -torsoZ * .9, s, dt);
  rig.torso.position.y = damp(rig.torso.position.y, .28 + torsoLift, s, dt);
  rig.torso.rotation.x = damp(rig.torso.rotation.x, torsoX, s, dt);
  rig.torso.rotation.y = damp(rig.torso.rotation.y, torsoTurn, 18, dt);
  rig.torso.rotation.z = damp(rig.torso.rotation.z, torsoZ, s, dt);
  rig.head.rotation.x = damp(rig.head.rotation.x, headX - torsoX * .25, 7, dt);
  rig.head.rotation.y = damp(rig.head.rotation.y, headY - torsoTurn * .18, 7, dt);
  rig.head.rotation.z = damp(rig.head.rotation.z, -torsoZ * .55, 9, dt);

  rig.leftLeg.leg.rotation.x = damp(rig.leftLeg.leg.rotation.x, leftLegX, s, dt);
  rig.rightLeg.leg.rotation.x = damp(rig.rightLeg.leg.rotation.x, rightLegX, s, dt);
  rig.leftLeg.knee.rotation.x = damp(rig.leftLeg.knee.rotation.x, leftKneeX, s, dt);
  rig.rightLeg.knee.rotation.x = damp(rig.rightLeg.knee.rotation.x, rightKneeX, s, dt);
  rig.leftArm.shoulder.rotation.x = damp(rig.leftArm.shoulder.rotation.x, leftArmX, armSpeed, dt);
  rig.rightArm.shoulder.rotation.x = damp(rig.rightArm.shoulder.rotation.x, rightArmX, armSpeed, dt);
  rig.leftArm.shoulder.rotation.z = damp(rig.leftArm.shoulder.rotation.z, leftArmZ, armSpeed, dt);
  rig.rightArm.shoulder.rotation.z = damp(rig.rightArm.shoulder.rotation.z, rightArmZ, armSpeed, dt);
  rig.leftArm.elbow.rotation.x = damp(rig.leftArm.elbow.rotation.x, leftElbowX, armSpeed, dt);
  rig.rightArm.elbow.rotation.x = damp(rig.rightArm.elbow.rotation.x, rightElbowX, armSpeed, dt);
  rig.rightArm.hand.rotation.x = damp(rig.rightArm.hand.rotation.x, swordX, wristSpeed, dt);
  rig.rightArm.hand.rotation.y = damp(rig.rightArm.hand.rotation.y, swordY, wristSpeed, dt);
  rig.rightArm.hand.rotation.z = damp(rig.rightArm.hand.rotation.z, swordZ, wristSpeed, dt);
  updateAKAnimation(rig.ak47, state.weapon === 'ak47' ? state.weaponKick : 0, time);
  rig.shadowDisc.material.opacity = damp(rig.shadowDisc.material.opacity, state.grounded ? .17 : .07, 8, dt);
  rig.shadowDisc.scale.setScalar(damp(rig.shadowDisc.scale.x, state.grounded ? 1 : .75, 8, dt));
  const fallTarget = state.dead ? 1.48 : 0;
  hero.rotation.x = damp(hero.rotation.x, fallTarget, state.dead ? 5.8 : 13, dt);
  updateCape(time, speedRatio * 7.2);
}

function updateCamera(dt) {
  const bowCamera = state.kit === 'bow' || Boolean(state.weapon);
  const viewYaw = camYaw + (lookBack ? Math.PI : 0);
  camera.fov = damp(camera.fov, bowCamera ? 48 : state.sprinting ? 53 : 48, 4.5, dt);
  camera.updateProjectionMatrix();

  if (bowCamera) {
    cameraPivot.set(hero.position.x, hero.position.y + 2.45, hero.position.z);
    cameraAimDirection.set(
      Math.sin(viewYaw) * Math.cos(camPitch),
      -Math.sin(camPitch),
      Math.cos(viewYaw) * Math.cos(camPitch),
    ).normalize();
    cameraAimRight.set(-Math.cos(viewYaw), 0, Math.sin(viewYaw));
    desiredCamera.copy(cameraPivot)
      .addScaledVector(cameraAimDirection, -camZoom)
      .addScaledVector(cameraAimRight, 1.68);
    desiredCamera.y = Math.max(desiredCamera.y + .78, cameraPivot.y + .65);
  } else {
    const targetHeight = state.sprinting ? 1.88 : 1.98;
    cameraShoulder.set(Math.cos(viewYaw), 0, -Math.sin(viewYaw));
    const shoulderOffset = state.sprinting ? .08 : .14;
    const wantedTarget = cameraPivot.set(hero.position.x, hero.position.y + targetHeight, hero.position.z)
      .addScaledVector(cameraShoulder, shoulderOffset);
    cameraTarget.lerp(wantedTarget, 1 - Math.exp(-7.5 * dt));
    offset.set(
      -Math.sin(viewYaw) * Math.cos(camPitch),
      Math.sin(camPitch),
      -Math.cos(viewYaw) * Math.cos(camPitch),
    ).multiplyScalar(camZoom);
    desiredCamera.copy(cameraTarget).add(offset);
  }

  const collisionStart = bowCamera ? cameraPivot : cameraTarget;
  const direction = desiredCamera.clone().sub(collisionStart);
  const distance = direction.length();
  direction.normalize();
  raycaster.set(collisionStart, direction);
  raycaster.far = distance;
  const hits = raycaster.intersectObjects(collisionMeshes, true);
  if (hits.length && hits[0].distance > .45) {
    desiredCamera.copy(collisionStart).addScaledVector(direction, Math.max(1.25, hits[0].distance - .42));
  }

  const followSpeed = bowCamera ? 10 : state.sprinting ? 5.6 : 7.2;
  cameraPosition.lerp(desiredCamera, 1 - Math.exp(-followSpeed * dt));
  if (bowCamera) bowCameraTarget.copy(cameraPosition).addScaledVector(cameraAimDirection, 40);
  shake = damp(shake, 0, 7.5, dt);
  const shakeVec = new THREE.Vector3((Math.random() - .5), (Math.random() - .5), (Math.random() - .5)).multiplyScalar(shake);
  camera.position.copy(cameraPosition).add(shakeVec);
  const lookTarget = bowCamera ? bowCameraTarget : cameraTarget;
  camera.lookAt(lookTarget.clone().add(shakeVec.multiplyScalar(.25)));
}

const clock = new THREE.Clock();
let elapsed = 0;
let fpsFrames = 0;
let fpsElapsed = 0;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), .04);
  elapsed += dt;
  updateCooldowns(dt);
  if (automaticFireHeld && state.weapon === 'ak47') fireEquippedWeapon();
  const speed = updateMovement(dt);
  updateMovementAudio(dt);
  updateAnimation(dt, elapsed, speed);
  updateGroundImpact(dt);
  updateArrows(dt);
  updateSupplyDrops();
  updateTeamSpawnSigns(elapsed);
  updateSupplyProjectiles(dt);
  updateRemotePlayers(dt);
  sendMultiplayerState(dt);
  updateCamera(dt);
  updateBowAiming();
  updateSupplyHUD();

  if (state.joined) {
    sun.position.set(hero.position.x - 34, hero.position.y + 46, hero.position.z - 28);
    sun.target.position.set(hero.position.x, hero.position.y + 1.2, hero.position.z);
  }

  if (state.dead && state.respawnAt) {
    const seconds = Math.max(0, Math.ceil((state.respawnAt - Date.now()) / 1000));
    respawnHint.textContent = seconds > 0 ? `${seconds} SECOND${seconds === 1 ? '' : 'S'}` : 'RETURNING…';
  }

  if (grassMaterial.userData.shader) grassMaterial.userData.shader.uniforms.uTime.value = elapsed;
  clouds.forEach((cloud, i) => {
    cloud.position.x += dt * (.28 + i * .07);
    if (cloud.position.x > 145) cloud.position.x = -145;
  });

  fpsFrames++;
  fpsElapsed += dt;
  if (fpsElapsed > .5) {
    document.querySelector('#fps').textContent = `${Math.round(fpsFrames / fpsElapsed)} FPS`;
    fpsFrames = 0;
    fpsElapsed = 0;
  }
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
