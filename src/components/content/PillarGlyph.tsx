import type { Pillar } from "@/types/content";
import { cn } from "@/lib/utils";

/** Abstract per-pillar visuals (pure SVG, animated on parent hover via `group`). */
export function PillarGlyph({ pillar, className }: { pillar: Pillar; className?: string }) {
  const common = "transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]";
  return (
    <svg viewBox="0 0 160 100" className={cn("h-auto w-full", className)} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id={`pg-${pillar}`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#2AEBCC" />
          <stop offset="1" stopColor="#059FDB" />
        </linearGradient>
      </defs>
      {pillar === "build" && (
        <g strokeWidth="1.2">
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d="M80 22 L124 44 L80 66 L36 44 Z"
              stroke={i === 0 ? `url(#pg-${pillar})` : "#33415A"}
              fill={i === 0 ? "rgb(20 203 212 / 0.08)" : "transparent"}
              className={cn(common, i === 0 && "group-hover:-translate-y-2", i === 2 && "group-hover:translate-y-2")}
              transform={`translate(0 ${i * 12})`}
            />
          ))}
        </g>
      )}
      {pillar === "automate" && (
        <g strokeWidth="1.2">
          <path d="M28 50 H62 M98 50 H132 M80 32 V20 M80 68 V80" stroke="#33415A" />
          <path d="M28 50 H62" stroke={`url(#pg-${pillar})`} strokeDasharray="34" strokeDashoffset="34" className={cn(common, "group-hover:[stroke-dashoffset:0]")} />
          <path d="M98 50 H132" stroke={`url(#pg-${pillar})`} strokeDasharray="34" strokeDashoffset="34" className={cn(common, "delay-150 group-hover:[stroke-dashoffset:0]")} />
          <rect x="62" y="32" width="36" height="36" rx="10" stroke={`url(#pg-${pillar})`} fill="rgb(20 203 212 / 0.08)" className={cn(common, "origin-center [transform-box:fill-box] group-hover:rotate-45")} />
          {[[24, 50], [136, 50], [80, 16], [80, 84]].map(([x, y]) => (
            <circle key={`${x}${y}`} cx={x} cy={y} r="4" fill="#7FE9EA" />
          ))}
        </g>
      )}
      {pillar === "grow" && (
        <g strokeWidth="1.2">
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={34 + i * 20}
              y={78 - (i + 1) * 10}
              width="12"
              height={(i + 1) * 10}
              rx="3"
              stroke="#33415A"
              fill={i === 4 ? "rgb(5 159 219 / 0.18)" : "transparent"}
              className={cn(common, "origin-bottom [transform-box:fill-box] group-hover:scale-y-110")}
              style={{ transitionDelay: `${i * 60}ms` }}
            />
          ))}
          <path d="M30 70 C 60 66, 90 46, 132 18" stroke={`url(#pg-${pillar})`} strokeWidth="1.6" />
          <circle cx="132" cy="18" r="4" fill="#2AEBCC" />
        </g>
      )}
      {pillar === "scale" && (
        <g strokeWidth="1.2">
          {Array.from({ length: 12 }).map((_, i) => {
            const col = i % 4, row = Math.floor(i / 4);
            const hi = i === 5 || i === 6 || i === 10;
            return (
              <rect
                key={i}
                x={36 + col * 23}
                y={20 + row * 22}
                width="17"
                height="16"
                rx="4"
                stroke={hi ? `url(#pg-${pillar})` : "#33415A"}
                fill={hi ? "rgb(20 203 212 / 0.10)" : "transparent"}
                className={cn(common, hi ? "group-hover:fill-[rgb(20_203_212/0.22)]" : "group-hover:stroke-[#3b4a66]")}
              />
            );
          })}
        </g>
      )}
    </svg>
  );
}
