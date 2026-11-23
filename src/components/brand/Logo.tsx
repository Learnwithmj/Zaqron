import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * ZAQRON identity — single source of truth.
 * To rebrand, replace the geometry here and in scripts/generate-brand.mjs
 * (which writes the static SVG files in /public/brand).
 */

type Tone = "accent" | "white" | "dark";

export function LogoSymbol({
  className,
  tone = "accent",
  title,
}: {
  className?: string;
  tone?: Tone;
  title?: string;
}) {
  const id = useId().replace(/:/g, "");
  const stroke = tone === "accent" ? `url(#zg-${id})` : tone === "white" ? "#F8FAFC" : "#080B14";
  const a = tone === "accent" ? "#3B82F6" : stroke;
  const b = tone === "accent" ? "#8B5CF6" : stroke;
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {tone === "accent" && (
        <defs>
          <linearGradient id={`zg-${id}`} x1="8" y1="10" x2="40" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M16 12H34L14 36H32"
        fill="none"
        stroke={stroke}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="12" r="3.75" fill={a} />
      <circle cx="39.5" cy="36" r="3.75" fill={b} />
    </svg>
  );
}

export function Wordmark({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="-1 -1 134 23" className={cn("shrink-0", className)} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="3.2" strokeLinejoin="round">
        <path d="M0 1.6H14L0 18.4H14" />
        <path d="M21.6 20L26.5 1.6H29.5L34.4 20M24.2 13H31.8" />
        <circle cx="52" cy="10" r="8.4" />
        <path d="M55 13L61.5 19.5" />
        <path d="M70.6 20V1.6H77.5A4.9 4.9 0 0 1 77.5 11.4H70.6M77 11.4L82.6 20" />
        <circle cx="100" cy="10" r="8.4" />
        <path d="M117.6 20V1.6L130.4 18.4V0" />
      </g>
    </svg>
  );
}

/** Horizontal lockup: symbol + wordmark */
export function Logo({ className, tone = "accent" }: { className?: string; tone?: Tone }) {
  const word = tone === "dark" ? "#080B14" : "#F8FAFC";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoSymbol tone={tone} className="h-8 w-8" />
      <Wordmark color={word} className="h-[15px] w-auto" />
      <span className="sr-only">ZAQRON</span>
    </span>
  );
}
