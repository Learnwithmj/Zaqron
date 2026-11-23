import { ButtonLink } from "@/components/ui/Button";
import { LogoSymbol } from "@/components/brand/Logo";

export function FinalCTA({
  title = "Your Next Move Starts Here.",
  description = "Have an idea, a challenge or a business ready to scale? Let's build what's next.",
  primary = { label: "Let's Talk About Your Project", href: "/contact/" },
  secondary = { label: "Explore Solutions", href: "/solutions/" },
}: {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section aria-labelledby="cta-title" className="section-y relative">
      <div className="container-z">
        <div data-reveal className="relative isolate overflow-hidden rounded-[24px] border border-line bg-card px-6 py-16 text-center sm:px-12 lg:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,black,transparent)]" />
            <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(59_130_246/0.28),transparent_65%)]" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[400px] translate-x-1/4 translate-y-1/3 rounded-full bg-[radial-gradient(ellipse,rgb(139_92_246/0.18),transparent_65%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/60 to-transparent" />
          </div>
          <LogoSymbol className="mx-auto h-12 w-12" />
          <h2 id="cta-title" className="mx-auto mt-8 max-w-3xl text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.75rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={primary.href} size="lg" arrow className="w-full sm:w-auto">
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} size="lg" variant="secondary" className="w-full sm:w-auto">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
