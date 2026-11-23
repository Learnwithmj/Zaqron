import { PageHero } from "@/components/content/PageHero";
import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/content/cards";
import { EmptyState } from "@/components/content/EmptyState";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getCaseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work — Case Studies",
  description: "Case studies from Zaqron: the challenge, strategy, solution, technology and verified outcomes behind each project.",
  path: "/work",
});

const standards = [
  { title: "Permission first", text: "Client names and details appear only with written approval." },
  { title: "Verified outcomes", text: "Results are client-confirmed — no estimated or inflated metrics." },
  { title: "The full story", text: "Challenge, strategy, solution and stack — including trade-offs we made." },
];

export default async function WorkPage() {
  const studies = await getCaseStudies();
  return (
    <>
      <PageHero
        crumbs={[{ name: "Our Work", href: "/work/" }]}
        eyebrow="Our work"
        title={
          <>
            Ideas into <span className="text-gradient">impact.</span>
          </>
        }
        description="How we approach real problems — the constraints, decisions, technology and outcomes behind the work."
      />
      <SectionContainer labelledBy="work-list" className="!pt-4 lg:!pt-8">
        <h2 id="work-list" className="sr-only">
          Case studies
        </h2>
        {studies.length > 0 ? (
          <ul className="grid gap-4 md:grid-cols-2">
            {studies.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 60}>
                <CaseStudyCard study={s} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <EmptyState
            eyebrow="Case studies"
            title="Our first case studies are being prepared."
            description="We publish work only with client permission and verified outcomes, so this page fills up deliberately. Want to see how we'd approach your project? We'll walk you through our process and architecture thinking on a call."
            actions={
              <>
                <ButtonLink href="/book-a-call/" arrow>
                  Book a walkthrough
                </ButtonLink>
                <ButtonLink href="/solutions/" variant="secondary">
                  Explore solutions
                </ButtonLink>
              </>
            }
          />
        )}
      </SectionContainer>
      <SectionContainer tone="alt" labelledBy="standards-title">
        <SectionHeading id="standards-title" eyebrow="Our publishing standard" title="Every case study, held to the same rules" />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {standards.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 70} className="rounded-[16px] border border-line bg-card/60 p-7">
              <span className="font-mono text-[11px] text-subtle">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
      <FinalCTA />
    </>
  );
}
