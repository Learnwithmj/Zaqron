import { cn } from "@/lib/utils";

/**
 * Generated editorial cover art (used when an article has no image).
 * Four abstract compositions in the Zaqron palette — lightweight inline SVG, no image requests.
 */
export function ArticleCover({ variant, label, className }: { variant: 0 | 1 | 2 | 3; label?: string; className?: string }) {
  return (
    <div className={cn("relative h-full min-h-[180px] w-full overflow-hidden bg-[#0B1120]", className)} aria-hidden="true">
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`ac-g-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
          <radialGradient id={`ac-r-${variant}`} cx="70%" cy="30%" r="70%">
            <stop stopColor="#3B82F6" stopOpacity="0.35" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <pattern id={`ac-p-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#263247" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="400" height="240" fill={`url(#ac-p-${variant})`} opacity="0.6" />
        <rect width="400" height="240" fill={`url(#ac-r-${variant})`} />
        {variant === 0 && (
          <g fill="none" stroke={`url(#ac-g-${variant})`} strokeWidth="1.5">
            <path d="M60 170 C 120 170, 120 80, 200 80 S 280 150, 340 70" />
            <path d="M60 190 C 140 190, 150 120, 220 120 S 300 170, 350 120" strokeOpacity="0.4" />
            {[[60, 170], [200, 80], [340, 70], [220, 120]].map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y} r="10" fill="#0B1120" />
                <circle cx={x} cy={y} r="4" fill="#93C5FD" stroke="none" />
              </g>
            ))}
          </g>
        )}
        {variant === 1 && (
          <g fill="none" strokeWidth="1.2">
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={130 + i * 14} y={40 + i * 14} width={140 - i * 28} height={160 - i * 28} rx="14" stroke={i === 3 ? `url(#ac-g-${variant})` : "#33415A"} transform={`rotate(${i * 6} 200 120)`} />
            ))}
            <circle cx="200" cy="120" r="6" fill="#A78BFA" />
          </g>
        )}
        {variant === 2 && (
          <g fill="none" strokeWidth="1.5">
            {Array.from({ length: 24 }).map((_, i) => {
              const h = 20 + Math.abs(Math.sin(i * 0.55)) * 110;
              return <line key={i} x1={60 + i * 12} x2={60 + i * 12} y1={190} y2={190 - h} stroke={i > 15 ? `url(#ac-g-${variant})` : "#33415A"} strokeLinecap="round" />;
            })}
          </g>
        )}
        {variant === 3 && (
          <g fill="none" strokeWidth="1.2">
            <path d="M40 200 L120 160 L190 170 L260 110 L360 50" stroke={`url(#ac-g-${variant})`} strokeWidth="2" />
            {[[40, 200], [120, 160], [190, 170], [260, 110], [360, 50]].map(([x, y], i) => (
              <g key={i}>
                <line x1={x} y1={y} x2={x} y2={220} stroke="#263247" strokeDasharray="3 4" />
                <circle cx={x} cy={y} r="4" fill={i === 4 ? "#A78BFA" : "#93C5FD"} />
              </g>
            ))}
          </g>
        )}
      </svg>
      {label && (
        <span className="absolute bottom-4 left-4 rounded-md border border-line bg-bg/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
