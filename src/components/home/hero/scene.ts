/**
 * ZAQRON hero WebGL scene (raw three.js, lazy-loaded).
 * A luminous icosphere with an inner core, orbiting data packets and a particle field.
 * Pauses when off-screen or the tab is hidden; fully disposed on cleanup.
 */
import * as THREE from "three";

export function startHeroScene(canvas: HTMLCanvasElement, onFirstFrame: () => void) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 9.5);

  const root = new THREE.Group();
  root.rotation.set(-0.42, 0.62, 0);
  scene.add(root);

  const mint = new THREE.Color("#2AEBCC");
  const deepBlue = new THREE.Color("#059FDB");

  // Outer shell edges with vertical gradient
  const shellGeo = new THREE.IcosahedronGeometry(1.75, 1);
  const edges = new THREE.EdgesGeometry(shellGeo, 1);
  const pos = edges.getAttribute("position");
  const colors = new Float32Array(pos.count * 3);
  const tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    tmp.copy(mint).lerp(deepBlue, (1.75 - pos.getY(i)) / 3.5);
    colors.set([tmp.r, tmp.g, tmp.b], i * 3);
  }
  edges.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const shell = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.85 }),
  );
  root.add(shell);

  // Nodes at the vertices
  const dot = makeDotTexture();
  const vertexPositions = dedupe(shellGeo.getAttribute("position") as THREE.BufferAttribute);
  const nodes = new THREE.Points(
    new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(vertexPositions, 3)),
    new THREE.PointsMaterial({ size: 0.16, map: dot, color: "#C9FBF6", transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  root.add(nodes);

  // Faint faces for depth
  const faces = new THREE.Mesh(
    shellGeo,
    new THREE.MeshBasicMaterial({ color: "#0B4F6E", transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false }),
  );
  root.add(faces);

  // Inner core
  const core = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.9, 0)),
    new THREE.LineBasicMaterial({ color: "#2AEBCC", transparent: true, opacity: 0.55 }),
  );
  root.add(core);
  const glow = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: dot, color: "#14CBD4", transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  glow.scale.setScalar(4.2);
  scene.add(glow);

  // Orbits with travelling packets
  const orbits: { line: THREE.LineLoop; packet: THREE.Sprite; r: number; speed: number; phase: number; tilt: THREE.Euler }[] = [];
  [
    { r: 2.75, tilt: new THREE.Euler(1.25, 0, -0.32), speed: 0.35, color: "#7FE9EA" },
    { r: 2.35, tilt: new THREE.Euler(1.1, 0.3, 0.45), speed: -0.5, color: "#2AEBCC" },
  ].forEach((o, idx) => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * o.r, Math.sin(a) * o.r, 0));
    }
    const line = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: "#14CBD4", transparent: true, opacity: idx ? 0.12 : 0.2 }),
    );
    line.rotation.copy(o.tilt);
    const packet = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: dot, color: o.color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
    );
    packet.scale.setScalar(0.32);
    scene.add(line, packet);
    orbits.push({ line, packet, r: o.r, speed: o.speed, phase: idx * 2, tilt: o.tilt });
  });

  // Particle field
  const count = window.innerWidth < 1100 ? 260 : 520;
  const field = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 3 + Math.random() * 4;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    field.set([r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th) * 0.7, r * Math.cos(ph) - 1.5], i * 3);
  }
  const particles = new THREE.Points(
    new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(field, 3)),
    new THREE.PointsMaterial({ size: 0.05, map: dot, color: "#7FE9EA", transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  scene.add(particles);

  // Sizing
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  // Pointer parallax
  const target = { x: 0, y: 0 };
  const onPointer = (e: PointerEvent) => {
    target.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
    target.y = (e.clientY / window.innerHeight - 0.5) * 0.35;
  };
  window.addEventListener("pointermove", onPointer, { passive: true });

  // Visibility-aware loop
  let visible = true;
  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) loop();
  });
  io.observe(canvas);
  const onVis = () => !document.hidden && loop();
  document.addEventListener("visibilitychange", onVis);

  const clock = new THREE.Clock();
  let raf = 0;
  let first = true;
  const v = new THREE.Vector3();
  function loop() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
  }
  function tick() {
    if (!visible || document.hidden) return;
    const t = clock.getElapsedTime();
    root.rotation.y = 0.62 + t * 0.12 + target.x;
    root.rotation.x = -0.42 + Math.sin(t * 0.3) * 0.06 + target.y;
    core.rotation.y = -t * 0.35;
    core.rotation.z = t * 0.2;
    particles.rotation.y = t * 0.02;
    glow.material.opacity = 0.45 + Math.sin(t * 1.4) * 0.08;
    for (const o of orbits) {
      const a = t * o.speed + o.phase;
      v.set(Math.cos(a) * o.r, Math.sin(a) * o.r, 0).applyEuler(o.tilt);
      o.packet.position.copy(v);
    }
    renderer.render(scene, camera);
    if (first) {
      first = false;
      onFirstFrame();
    }
    raf = requestAnimationFrame(tick);
  }
  loop();

  return () => {
    cancelAnimationFrame(raf);
    io.disconnect();
    ro.disconnect();
    window.removeEventListener("pointermove", onPointer);
    document.removeEventListener("visibilitychange", onVis);
    scene.traverse((obj) => {
      const m = obj as THREE.Mesh;
      m.geometry?.dispose();
      const mat = m.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else mat?.dispose();
    });
    dot.dispose();
    renderer.dispose();
  };
}

function makeDotTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.25, "rgba(255,255,255,0.8)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function dedupe(attr: THREE.BufferAttribute) {
  const seen = new Set<string>();
  const out: number[] = [];
  for (let i = 0; i < attr.count; i++) {
    const x = attr.getX(i), y = attr.getY(i), z = attr.getZ(i);
    const k = `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
    if (!seen.has(k)) {
      seen.add(k);
      out.push(x, y, z);
    }
  }
  return out;
}
