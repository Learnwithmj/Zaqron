import { useId } from "react";
import { cn } from "@/lib/utils";
import {
  COLORS,
  GRADIENTS,
  LOCKUP_VIEWBOX,
  SYMBOL_BOTTOM,
  SYMBOL_FOLD,
  SYMBOL_TOP,
  SYMBOL_VIEWBOX,
  TAGLINE,
  WORDMARK,
} from "./geometry.mjs";

/**
 * ZAQRON identity. Geometry and colours live in ./geometry.mjs, which also feeds
 * scripts/generate-brand.mjs (static SVG files in /public/brand).
 */

type Tone = "accent" | "white" | "dark";

/** Gradient definitions, shared with the OG image */
export function SymbolGradients({ id }: { id: string }) {
  return (
    <defs>
      {GRADIENTS.map(({ key, stops, ...coords }) => (
        <linearGradient key={key} id={`${id}-${key}`} gradientUnits="userSpaceOnUse" {...coords}>
          {stops.map(([offset, color, opacity]) => (
            <stop key={offset} offset={offset} stopColor={String(color)} stopOpacity={opacity} />
          ))}
        </linearGradient>
      ))}
    </defs>
  );
}

export function LogoSymbol({
  className,
  tone = "accent",
  title,
}: {
  className?: string;
  tone?: Tone;
  title?: string;
}) {
  const id = `zg${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const accent = tone === "accent";
  const flat = tone === "dark" ? COLORS.dark : COLORS.white;
  return (
    <svg
      viewBox={SYMBOL_VIEWBOX}
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {accent && <SymbolGradients id={id} />}
      <path d={SYMBOL_TOP} fill={accent ? `url(#${id}-top)` : flat} />
      <path d={SYMBOL_BOTTOM} fill={accent ? `url(#${id}-bottom)` : flat} />
      {accent && <path d={SYMBOL_FOLD} fill={`url(#${id}-fold)`} />}
    </svg>
  );
}

/** Wordmark with the tagline beneath it */
export function Wordmark({ className, tone = "accent" }: { className?: string; tone?: Tone }) {
  const color = tone === "dark" ? COLORS.dark : COLORS.white;
  return (
    <svg viewBox={LOCKUP_VIEWBOX} className={cn("shrink-0", className)} aria-hidden="true">
      <path d={WORDMARK} fill={color} fillRule="evenodd" />
      <path d={TAGLINE} fill={tone === "accent" ? COLORS.tagline : color} />
    </svg>
  );
}

/** Horizontal lockup: symbol + wordmark + tagline */
export function Logo({ className, tone = "accent", size = "md" }: { className?: string; tone?: Tone; size?: "md" | "lg" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoSymbol tone={tone} className={size === "lg" ? "h-14 w-14" : "h-9 w-9"} />
      <Wordmark tone={tone} className={cn("h-auto", size === "lg" ? "w-[220px]" : "w-[136px]")} />
      <span className="sr-only">ZAQRON — Build What&apos;s Next</span>
    </span>
  );
}
