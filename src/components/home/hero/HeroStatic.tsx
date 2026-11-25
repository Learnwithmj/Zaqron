import { icosphere, mulberry32, rotate } from "./geometry";

/**
 * Server-rendered SVG version of the hero object. It is the LCP-safe default,
 * the mobile/reduced-motion visual, and the fallback if WebGL is unavailable.
 */
const SIZE = 600;
const C = SIZE / 2;
const R = 170;

function build() {
  const outer = icosphere(1);
  const inner = icosphere(0);
  const rx = -0.42, ry = 0.62;
  const proj = (v: [number, number, number], r: number) => {
    const p = rotate(v, rx, ry);
    return { x: C + p[0] * r, y: C - p[1] * r, z: p[2] };
  };
  const o = outer.verts.map((v) => proj(v, R));
  const i = inner.verts.map((v) => proj(v, R * 0.52));
  const rand = mulberry32(7);
  const particles = Array.from({ length: 70 }, () => {
    const a = rand() * Math.PI * 2;
    const d = R * (1.35 + rand() * 0.45);
    return { x: C + Math.cos(a) * d, y: C + Math.sin(a) * d * 0.82, r: 0.6 + rand() * 1.3, o: 0.15 + rand() * 0.5 };
  });
  return { o, i, oe: outer.edges, ie: inner.edges, particles };
}

const g = build();
const r2 = (n: number) => Math.round(n * 100) / 100;

export function HeroStatic({ className }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hs-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2AEBCC" />
          <stop offset="1" stopColor="#059FDB" />
        </linearGradient>
        <radialGradient id="hs-core" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#14CBD4" stopOpacity="0.55" />
          <stop offset="0.45" stopColor="#14CBD4" stopOpacity="0.12" />
          <stop offset="1" stopColor="#14CBD4" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={C} cy={C} r={R * 1.25} fill="url(#hs-core)" />

      {/* orbit rings */}
      <g fill="none" stroke="#14CBD4" strokeOpacity="0.22">
        <ellipse cx={C} cy={C} rx={R * 1.55} ry={R * 0.48} transform={`rotate(-18 ${C} ${C})`} />
        <ellipse cx={C} cy={C} rx={R * 1.32} ry={R * 0.38} transform={`rotate(24 ${C} ${C})`} strokeOpacity="0.14" strokeDasharray="2 6" />
      </g>
      <circle cx={C + R * 1.47} cy={C - R * 0.5} r="4" fill="#7FE9EA" />
      <circle cx={C - R * 1.2} cy={C - R * 0.62} r="3" fill="#2AEBCC" />

      {/* particles */}
      {g.particles.map((p, k) => (
        <circle key={k} cx={r2(p.x)} cy={r2(p.y)} r={r2(p.r)} fill="#7FE9EA" opacity={r2(p.o)} />
      ))}

      {/* inner core */}
      <g stroke="#2AEBCC" strokeOpacity="0.35" strokeWidth="1">
        {g.ie.map(([a, b], k) => (
          <line key={k} x1={r2(g.i[a].x)} y1={r2(g.i[a].y)} x2={r2(g.i[b].x)} y2={r2(g.i[b].y)} />
        ))}
      </g>

      {/* outer shell — back edges dimmer */}
      <g stroke="url(#hs-edge)" strokeWidth="1.2">
        {g.oe.map(([a, b], k) => {
          const z = (g.o[a].z + g.o[b].z) / 2;
          return (
            <line
              key={k}
              x1={r2(g.o[a].x)}
              y1={r2(g.o[a].y)}
              x2={r2(g.o[b].x)}
              y2={r2(g.o[b].y)}
              strokeOpacity={r2(0.18 + (z + 1) * 0.36)}
            />
          );
        })}
      </g>
      {g.o.map((p, k) => (
        <circle
          key={k}
          cx={r2(p.x)}
          cy={r2(p.y)}
          r={p.z > 0.2 ? 3 : 2}
          fill={p.z > 0 ? "#C9FBF6" : "#2AEBCC"}
          opacity={r2(0.35 + (p.z + 1) * 0.32)}
        />
      ))}
    </svg>
  );
}
