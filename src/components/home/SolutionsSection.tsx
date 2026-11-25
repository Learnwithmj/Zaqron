import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/Button";
import { PillarGlyph } from "@/components/content/PillarGlyph";
import { pillars } from "@/content/solutions";

export function SolutionsSection() {
  return (
    <SectionContainer id="solutions" labelledBy="solutions-title">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          id="solutions-title"
          eyebrow="Solutions"
          title={
            <>
              One Partner. <span className="text-muted">Multiple Possibilities.</span>
            </>
          }
          description="Four connected capabilities — so the product you build, the operations you automate and the growth you drive all work as one system."
        />
        <Reveal className="shrink-0">
          <ButtonLink href="/solutions/" variant="secondary" arrow>
            View all solutions
          </ButtonLink>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 80} className="h-full">
            <article className="group hairline-top relative flex h-full flex-col overflow-hidden rounded-[16px] border border-line bg-card/70 p-6 transition-[border-color,background-color,transform] duration-300 [--hairline-opacity:0] hover:-translate-y-1 hover:border-line-strong hover:bg-elevated/60 hover:[--hairline-opacity:1] lg:p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent-soft">
                  <span className="text-subtle">0{i + 1} / </span>
                  {p.label}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                  aria-hidden="true"
                />
              </div>
              <div className="my-6 rounded-xl border border-line/70 bg-bg/50 px-4 py-3">
                <PillarGlyph pillar={p.id} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-fg">
                <Link href={`/solutions/${p.slug}/`} className="after:absolute after:inset-0 after:content-['']">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-5 space-y-2 border-t border-line/70 pt-5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-fg/85">
                    <Check className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-6 text-sm font-medium text-accent-soft transition-colors group-hover:text-fg">
                Explore {p.label.toLowerCase()} →
              </span>
            </article>
          </Reveal>
        ))}
      </ul>
    </SectionContainer>
  );
}
