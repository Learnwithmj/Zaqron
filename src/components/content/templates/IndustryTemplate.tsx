import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { CaseStudy, Industry } from "@/types/content";
import { PageHero } from "@/components/content/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { CaseStudyCard } from "@/components/content/cards";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getSolution } from "@/content/solutions";

export function IndustryTemplate({ industry: ind, studies }: { industry: Industry; studies: CaseStudy[] }) {
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Industries", href: "/industries/" },
          { name: ind.name, href: `/industries/${ind.slug}/` },
        ]}
        eyebrow={`Industries · ${ind.name}`}
        title={ind.hero.headline}
        description={ind.hero.subheadline}
        actions={
          <>
            <ButtonLink href={`/contact/?industry=${ind.slug}`} size="lg" arrow className="w-full sm:w-auto">
              Talk to us about {ind.name.toLowerCase()}
            </ButtonLink>
            <ButtonLink href="/book-a-call/" size="lg" variant="secondary" className="w-full sm:w-auto">
              Book a strategy call
            </ButtonLink>
          </>
        }
        aside={
          <div className="relative mx-auto flex aspect-square max-w-[360px] items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-line" aria-hidden="true" />
            <div className="absolute inset-10 rounded-full border border-dashed border-line" aria-hidden="true" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgb(20_203_212/0.18),transparent_65%)]" aria-hidden="true" />
            <span className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-line bg-card text-accent-soft shadow-[0_0_60px_-12px_rgb(20_203_212/0.5)]">
              <Icon name={ind.icon} className="h-12 w-12" strokeWidth={1.3} />
            </span>
          </div>
        }
      />

      {/* Introduction */}
      <SectionContainer labelledBy="ind-intro" className="!pt-8 lg:!pt-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading id="ind-intro" eyebrow="The landscape" title={`Technology for ${ind.name.toLowerCase()}`} />
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            {ind.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </SectionContainer>

      {/* Challenges */}
      <SectionContainer tone="alt" labelledBy="ind-challenges">
        <SectionHeading id="ind-challenges" eyebrow="Industry challenges" title="What makes this sector hard" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ind.challenges.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 70} className="rounded-[16px] border border-line bg-card/60 p-6">
              <span className="font-mono text-[11px] text-subtle">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{c.description}</p>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>

      {/* Relevant solutions */}
      <SectionContainer labelledBy="ind-solutions">
        <SectionHeading id="ind-solutions" eyebrow="Relevant solutions" title="How Zaqron can help" />
        <ul className="mt-12 grid gap-3">
          {ind.solutions.map((x, i) => {
            const s = getSolution(x.slug);
            if (!s) return null;
            return (
              <Reveal as="li" key={x.slug} delay={i * 60}>
                <Link
                  href={`/solutions/${s.slug}/`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-[16px] border border-line bg-card/60 p-5 transition-colors hover:border-line-strong hover:bg-elevated/60 sm:p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-bg text-accent-soft">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold tracking-tight">{s.name}</span>
                    <span className="mt-0.5 block text-[0.95rem] text-muted">{x.why}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-subtle transition-transform group-hover:translate-x-1 group-hover:text-fg" aria-hidden="true" />
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </SectionContainer>

      {/* Use cases */}
      <SectionContainer tone="alt" labelledBy="ind-usecases">
        <SectionHeading id="ind-usecases" eyebrow="Practical use cases" title="What this looks like in practice" />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {ind.useCases.map((u, i) => (
            <Reveal as="li" key={u.title} delay={i * 80} className="hairline-top relative overflow-hidden rounded-[16px] border border-line bg-card/60 p-7">
              <h3 className="text-xl font-semibold tracking-tight">{u.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{u.description}</p>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>

      {/* Benefits */}
      <SectionContainer labelledBy="ind-benefits">
        <SectionHeading id="ind-benefits" eyebrow="Business benefits" title="What you gain" align="center" />
        <ul className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {ind.benefits.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 80} className="rounded-[16px] border border-line bg-card/60 p-7 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent-soft">
                <Check className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{b.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{b.description}</p>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>

      {/* Case studies — only real ones */}
      {studies.length > 0 && (
        <SectionContainer tone="alt" labelledBy="ind-work">
          <SectionHeading id="ind-work" eyebrow="Case studies" title={`${ind.name} work`} />
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {studies.map((c) => (
              <li key={c.slug}>
                <CaseStudyCard study={c} />
              </li>
            ))}
          </ul>
        </SectionContainer>
      )}

      <FinalCTA
        title={ind.cta.heading}
        description={ind.cta.body}
        primary={{ label: "Start the conversation", href: `/contact/?industry=${ind.slug}` }}
        secondary={{ label: "Explore solutions", href: "/solutions/" }}
      />
    </>
  );
}
