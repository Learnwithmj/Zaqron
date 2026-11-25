import { AlertTriangle, Check } from "lucide-react";
import type { CaseStudy, Solution } from "@/types/content";
import { PageHero } from "@/components/content/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/ui/Accordion";
import { ServiceCard, CaseStudyCard } from "@/components/content/cards";
import { PillarGlyph } from "@/components/content/PillarGlyph";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/seo";
import { getSolution, pillars } from "@/content/solutions";

export function SolutionTemplate({ solution: s, studies }: { solution: Solution; studies: CaseStudy[] }) {
  const pillar = pillars.find((p) => p.id === s.pillar)!;
  const related = s.related.map(getSolution).filter((x): x is Solution => Boolean(x));
  const crumbs = [{ name: "Solutions", href: "/solutions/" }];
  if (!s.isPillar) crumbs.push({ name: pillar.title, href: `/solutions/${pillar.slug}/` });
  crumbs.push({ name: s.name, href: `/solutions/${s.slug}/` });

  return (
    <>
      <JsonLd data={[serviceSchema({ name: s.name, description: s.seo.description, path: `/solutions/${s.slug}` }), faqSchema(s.faqs)]} />

      {/* 1 · Hero */}
      <PageHero
        crumbs={crumbs}
        eyebrow={s.hero.eyebrow}
        title={s.hero.headline}
        description={s.hero.subheadline}
        actions={
          <>
            <ButtonLink href={`/contact/?service=${s.slug}`} size="lg" arrow className="w-full sm:w-auto">
              Discuss your project
            </ButtonLink>
            <ButtonLink href="/book-a-call/" size="lg" variant="secondary" className="w-full sm:w-auto">
              Book a strategy call
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-[20px] border border-line bg-card/60 p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-soft">{pillar.label}</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-bg text-accent-soft">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
            </div>
            <PillarGlyph pillar={s.pillar} className="my-6" />
            <ul className="space-y-2.5 border-t border-line pt-6">
              {s.deliverables.slice(0, 4).map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-fg/85">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" /> {d}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {/* 2 · Introduction */}
      <SectionContainer labelledBy="intro-title" className="!pt-8 lg:!pt-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading id="intro-title" eyebrow="Overview" title={s.intro.heading} />
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            {s.intro.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </SectionContainer>

      {/* 3 · Business problems */}
      <SectionContainer tone="alt" labelledBy="problems-title">
        <SectionHeading id="problems-title" eyebrow="The challenge" title="What's holding businesses back" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.problems.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 70} className="rounded-[16px] border border-line bg-card/60 p-6">
              <AlertTriangle className="h-5 w-5 text-accent-2-soft" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.description}</p>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>

      {/* 4 · Approach */}
      <SectionContainer labelledBy="approach-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading id="approach-title" eyebrow="The Zaqron approach" title="How we solve it" description="Principles we apply to every engagement in this area." />
          </div>
          <ol className="space-y-3">
            {s.approach.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 70} className="grid grid-cols-[auto_1fr] gap-5 rounded-[16px] border border-line bg-card/60 p-6">
                <span className="font-mono text-sm text-accent-soft">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{a.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{a.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </SectionContainer>

      {/* 5 · Deliverables + 6 · Capabilities */}
      <SectionContainer tone="alt" labelledBy="deliver-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <SectionHeading id="deliver-title" eyebrow="What we deliver" title="Concrete outputs, not vague retainers" />
            <Reveal as="ul" className="mt-8 space-y-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-xl border border-line bg-card/60 px-4 py-3.5 text-[0.95rem]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </Reveal>
          </div>
          <div>
            <h2 className="sr-only">Key capabilities</h2>
            <p className="eyebrow mb-6" data-reveal>
              Key capabilities
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {s.capabilities.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 50} className="rounded-[16px] border border-line bg-card/60 p-6 transition-colors hover:border-line-strong">
                  <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{c.description}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* 7 · Use cases */}
      <SectionContainer labelledBy="usecases-title">
        <SectionHeading id="usecases-title" eyebrow="Use cases" title="Where this makes a difference" description="Representative scenarios — the kinds of problems this work is designed to solve." />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {s.useCases.map((u, i) => (
            <Reveal as="li" key={u.title} delay={i * 80} className="hairline-top relative overflow-hidden rounded-[16px] border border-line bg-card/60 p-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">Scenario 0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{u.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{u.description}</p>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>

      {/* 8 · Technologies */}
      <SectionContainer tone="alt" labelledBy="tech-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-16">
          <SectionHeading id="tech-title" eyebrow="Technologies & integrations" title="Tools we work with" description="We choose technology per project — these are platforms we commonly use and integrate in this area." />
          <Reveal as="ul" className="flex flex-wrap gap-2.5">
            {s.technologies.map((t) => (
              <li key={t} className="rounded-xl border border-line bg-card/70 px-4 py-2.5 font-mono text-[13px] text-fg/85">
                {t}
              </li>
            ))}
          </Reveal>
        </div>
      </SectionContainer>

      {/* 9 · Engagement process */}
      <ProcessSection tone="default" eyebrow="Engagement process" title="How we'll work together" description="The same disciplined path on every engagement — adapted to the scope of this work." note={s.engagementNote} />

      {/* 10 · Relevant projects (only real case studies) */}
      {studies.length > 0 && (
        <SectionContainer tone="alt" labelledBy="projects-title">
          <SectionHeading id="projects-title" eyebrow="Relevant projects" title="Related work" />
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {studies.slice(0, 2).map((c) => (
              <li key={c.slug}>
                <CaseStudyCard study={c} />
              </li>
            ))}
          </ul>
        </SectionContainer>
      )}

      {/* 11 · FAQs */}
      <SectionContainer tone={studies.length ? "default" : "alt"} labelledBy="faq-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHeading id="faq-title" eyebrow="FAQs" title="Questions, answered" description="Can't find what you're looking for? Ask us directly." />
          <Reveal>
            <Accordion items={s.faqs} />
          </Reveal>
        </div>
      </SectionContainer>

      {related.length > 0 && (
        <SectionContainer labelledBy="related-title">
          <SectionHeading id="related-title" eyebrow="Explore further" title="Related solutions" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r, i) => (
              <Reveal as="li" key={r.slug} delay={i * 60}>
                <ServiceCard solution={r} compact />
              </Reveal>
            ))}
          </ul>
        </SectionContainer>
      )}

      {/* 12 · CTA */}
      <FinalCTA
        title={s.cta.heading}
        description={s.cta.body}
        primary={{ label: "Start the conversation", href: `/contact/?service=${s.slug}` }}
        secondary={{ label: "Book a strategy call", href: "/book-a-call/" }}
      />
    </>
  );
}
