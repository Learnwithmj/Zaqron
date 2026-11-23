import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LogoSymbol } from "@/components/brand/Logo";

/** Designed, honest empty state for proof-based collections. */
export function EmptyState({
  eyebrow,
  title,
  description,
  actions,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      data-reveal
      className={cn(
        "relative overflow-hidden rounded-[16px] border border-dashed border-line-strong bg-card/40 px-6 py-12 sm:px-12 sm:py-16",
        className,
      )}
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-bg/80">
          <LogoSymbol className="h-7 w-7" />
        </span>
        {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{description}</p>
        {children}
        {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>}
      </div>
    </div>
  );
}
