import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { processSteps } from "@/content/process";
import { cn } from "@/lib/utils";

export function ProcessSection({
  title = "From Vision to Execution.",
  eyebrow = "Our process",
  description = "A clear, repeatable path from first conversation to compounding results — with working software and honest reporting at every step.",
  note,
  tone = "alt",
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
  note?: string;
  tone?: "default" | "alt";
}) {
  return (
    <SectionContainer tone={tone} labelledBy="process-title" className="overflow-hidden">
      <SectionHeading id="process-title" eyebrow={eyebrow} title={title} description={description} />
      {note && (
        <Reveal as="p" className="mt-6 max-w-3xl rounded-xl border border-line bg-card/60 px-5 py-4 text-sm leading-relaxed text-muted">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-soft">Note · </span>
          {note}
        </Reveal>
      )}

      <ol className="relative mt-14 grid gap-4 lg:grid-cols-5 lg:gap-0">
        {/* connector line (desktop) */}
        <div className="pointer-events-none absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-accent/0 via-line-strong to-accent-2/0 lg:block" aria-hidden="true" />
        {/* connector line (mobile) */}
        <div className="pointer-events-none absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-accent/50 via-line to-accent-2/40 lg:hidden" aria-hidden="true" />
        {processSteps.map((s, i) => (
          <Reveal as="li" key={s.step} delay={i * 90} className="relative lg:px-3 first:lg:pl-0 last:lg:pr-0">
            <div className="flex gap-5 lg:block">
              <span
                className={cn(
                  "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-bg font-mono text-sm",
                  i === 0 ? "border-accent/60 text-accent-soft shadow-[0_0_30px_-6px_rgb(20_203_212/0.6)]" : "border-line text-muted",
                )}
              >
                {s.step}
              </span>
              <div className="pb-2 lg:mt-6 lg:pr-4">
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.outputs.map((o) => (
                    <li key={o} className="rounded-md border border-line bg-card/60 px-2 py-1 font-mono text-[11px] text-muted">
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </SectionContainer>
  );
}
