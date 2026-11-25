import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ─────────── Card ─────────── */
export function Card({
  as: Tag = "div",
  className,
  children,
  interactive,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  interactive?: boolean;
}) {
  return (
    <Tag
      className={cn(
        "relative rounded-[16px] border border-line bg-card/80",
        interactive &&
          "transition-[border-color,background-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-line-strong hover:bg-elevated/70",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ─────────── Badge ─────────── */
type BadgeTone = "default" | "accent" | "mint" | "success" | "muted";
const badgeTones: Record<BadgeTone, string> = {
  default: "border-line bg-white/[0.03] text-fg/90",
  accent: "border-accent/30 bg-accent/10 text-accent-soft",
  mint: "border-accent-2/30 bg-accent-2/10 text-accent-2-soft",
  success: "border-success/30 bg-success/10 text-success",
  muted: "border-line bg-transparent text-muted",
};
export function Badge({
  children,
  tone = "default",
  className,
  dot,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em]",
        badgeTones[tone],
        className,
      )}
    >
      {dot && <span className="anim-pulse-dot h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />}
      {children}
    </span>
  );
}

/* ─────────── Section container ─────────── */
export function SectionContainer({
  id,
  as: Tag = "section",
  className,
  innerClassName,
  children,
  tone = "default",
  labelledBy,
}: {
  id?: string;
  as?: ElementType;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  tone?: "default" | "alt";
  labelledBy?: string;
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={cn("section-y relative", tone === "alt" && "bg-bg-2", className)}
    >
      <div className={cn("container-z", innerClassName)}>{children}</div>
    </Tag>
  );
}

/* ─────────── Section heading ─────────── */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div
      data-reveal
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4 flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-fg sm:text-[2.5rem] lg:text-[3rem]"
      >
        {title}
      </Tag>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}

/* ─────────── Reveal wrapper (CSS + shared observer) ─────────── */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag data-reveal className={className} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
