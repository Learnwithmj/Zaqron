import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/content/PageHero";
import { SectionContainer, Reveal } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceCard } from "@/components/content/cards";
import { PillarGlyph } from "@/components/content/PillarGlyph";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getSolutionsByPillar, pillars } from "@/content/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions — Build, Automate, Grow, Scale",
  description:
    "Explore Zaqron's solutions: digital engineering, AI and business automation, growth and performance marketing, and business systems & SaaS — connected as one partner.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Solutions", href: "/solutions/" }]}
        eyebrow="Solutions"
        title={
          <>
            One partner. <span className="text-gradient">Four connected capabilities.</span>
          </>
        }
        description="Build the product, automate the operations, grow the demand and scale the systems — with one team that sees how every piece connects."
        actions={
          <>
            <ButtonLink href="/book-a-call/" size="lg" arrow className="w-full sm:w-auto">
              Book a strategy call
            </ButtonLink>
            <ButtonLink href="/contact/" size="lg" variant="secondary" className="w-full sm:w-auto">
              Tell us what you need
            </ButtonLink>
          </>
        }
      />

      {/* Pillar index */}
      <nav aria-label="Solution pillars" className="container-z -mt-6 mb-4">
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {pillars.map((p, i) => (
            <li key={p.id}>
              <a href={`#${p.id}`} className="flex items-center justify-between rounded-xl border border-line bg-card/60 px-4 py-3 text-sm transition-colors hover:border-accent/40">
                <span>
                  <span className="font-mono text-[11px] text-subtle">0{i + 1} </span>
                  <span className="font-medium">{p.label}</span>
                </span>
                <ArrowRight className="h-3.5 w-3.5 rotate-90 text-subtle" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {pillars.map((p, i) => {
        const items = getSolutionsByPillar(p.id).filter((s) => !s.isPillar);
        return (
          <SectionContainer key={p.id} id={p.id} tone={i % 2 ? "alt" : "default"} labelledBy={`${p.id}-title`} className="scroll-mt-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <p className="eyebrow">
                  0{i + 1} / {p.label}
                </p>
                <h2 id={`${p.id}-title`} className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
                <div className="mt-8 max-w-xs rounded-xl border border-line bg-bg/50 px-4 py-3">
                  <PillarGlyph pillar={p.id} />
                </div>
                <Link href={`/solutions/${p.slug}/`} className="mt-8 inline-flex items-center gap-1.5 font-medium text-accent-soft hover:text-fg">
                  Explore {p.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
              <ul className="grid gap-4 sm:grid-cols-2">
                {items.map((s, j) => (
                  <Reveal as="li" key={s.slug} delay={j * 60}>
                    <ServiceCard solution={s} />
                  </Reveal>
                ))}
              </ul>
            </div>
          </SectionContainer>
        );
      })}

      <FinalCTA title="Not sure which solution fits?" description="Most problems span more than one capability. Tell us the outcome you want — we'll recommend the right combination." />
    </>
  );
}
