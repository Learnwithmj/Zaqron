import { ButtonLink } from "@/components/ui/Button";
import { HeroStatic } from "./hero/HeroStatic";
import { HeroVisual } from "./hero/HeroVisual";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-[calc(var(--header-h)+40px)] lg:pt-[var(--header-h)]">
      {/* Backdrop: masked grid + aura */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_65%_40%,black,transparent)] opacity-60" />
        <div className="absolute -top-40 right-[-10%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgb(20_203_212/0.20),transparent_62%)]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgb(5_159_219/0.10),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="container-z grid items-center gap-6 lg:min-h-[min(860px,100svh)] lg:grid-cols-[1.08fr_1fr] lg:gap-4">
        <div className="relative z-10 max-w-2xl pb-4 lg:py-24">
          <p className="anim-rise eyebrow flex items-center gap-3" style={{ "--d": "0ms" } as React.CSSProperties}>
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="anim-pulse-dot absolute inset-0 rounded-full bg-accent" />
            </span>
            The next generation of business
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.625rem] font-semibold leading-[1.02] tracking-[-0.04em] text-fg xs:text-[2.875rem] sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[4.75rem]"
          >
            Build What&apos;s <span className="text-gradient">Next.</span>
          </h1>

          <p
            className="anim-rise mt-6 font-display text-lg font-medium tracking-tight text-fg/90 sm:text-[1.375rem]"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            Technology<span className="text-accent">.</span> Automation<span className="text-accent">.</span> Growth
            <span className="text-accent-2-soft">.</span>
          </p>

          <p
            className="anim-rise mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ "--d": "200ms" } as React.CSSProperties}
          >
            We help businesses build smarter systems, automate operations and accelerate growth through modern
            technology and digital innovation.
          </p>

          <div
            className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--d": "280ms" } as React.CSSProperties}
          >
            <ButtonLink href="/solutions/" size="lg" arrow className="w-full sm:w-auto">
              Explore Solutions
            </ButtonLink>
            <ButtonLink href="/book-a-call/" size="lg" variant="secondary" className="w-full sm:w-auto">
              Book a Strategy Call
            </ButtonLink>
          </div>

          <dl
            className="anim-rise mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line"
            style={{ "--d": "360ms" } as React.CSSProperties}
          >
            {[
              ["Build", "Products & platforms"],
              ["Automate", "AI & workflows"],
              ["Grow", "Acquisition systems"],
            ].map(([k, v]) => (
              <div key={k} className="bg-bg/90 px-4 py-3.5">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent-soft">{k}</dt>
                <dd className="mt-1 text-[13px] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="anim-fade relative mx-auto w-full max-w-[420px] sm:max-w-[520px] lg:max-w-none" style={{ "--d": "150ms" } as React.CSSProperties}>
          <HeroVisual>
            <HeroStatic className="anim-spin-slow h-full w-full lg:[animation:none]" />
          </HeroVisual>
          {/* Floating system labels */}
          <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
            <span className="absolute left-[4%] top-[18%] rounded-lg border border-line bg-bg/80 px-3 py-1.5 font-mono text-[11px] text-muted backdrop-blur">
              <span className="text-accent-soft">●</span> agents.online
            </span>
            <span className="absolute bottom-[20%] right-[2%] rounded-lg border border-line bg-bg/80 px-3 py-1.5 font-mono text-[11px] text-muted backdrop-blur">
              <span className="text-accent-2-soft">◆</span> workflows.synced
            </span>
            <span className="absolute bottom-[8%] left-[14%] rounded-lg border border-line bg-bg/80 px-3 py-1.5 font-mono text-[11px] text-muted backdrop-blur">
              <span className="text-success">▲</span> growth.compounding
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
