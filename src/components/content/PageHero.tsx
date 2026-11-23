import type { ReactNode } from "react";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { cn } from "@/lib/utils";

/** Interior page hero — consistent across every non-home page. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  actions,
  aside,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden pt-[calc(var(--header-h)+40px)] pb-16 lg:pt-[calc(var(--header-h)+72px)] lg:pb-24", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_70%_at_70%_0%,black,transparent)]" />
        <div className="absolute -top-56 right-[-5%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgb(59_130_246/0.16),transparent_62%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>
      <div className={cn("container-z", aside && "grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]")}>
        <div className="max-w-3xl">
          <Breadcrumb items={crumbs} />
          {eyebrow && <p className="eyebrow anim-rise">{eyebrow}</p>}
          <h1 className="mt-4 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] text-fg sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>
          {description && (
            <p className="anim-rise mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg" style={{ "--d": "100ms" } as React.CSSProperties}>
              {description}
            </p>
          )}
          {actions && (
            <div className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--d": "180ms" } as React.CSSProperties}>
              {actions}
            </div>
          )}
        </div>
        {aside && <div className="anim-fade hidden lg:block">{aside}</div>}
      </div>
    </section>
  );
}
