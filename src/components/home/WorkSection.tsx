import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/content/cards";
import { EmptyState } from "@/components/content/EmptyState";
import type { CaseStudy } from "@/types/content";

export function WorkSection({ studies }: { studies: CaseStudy[] }) {
  return (
    <SectionContainer labelledBy="work-title">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Ideas Into Impact."
          description="Real projects, real constraints and outcomes our clients have approved us to share."
        />
        {studies.length > 0 && (
          <Reveal className="shrink-0">
            <ButtonLink href="/work/" variant="secondary" arrow>
              All work
            </ButtonLink>
          </Reveal>
        )}
      </div>
      {studies.length > 0 ? (
        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {studies.slice(0, 4).map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 80}>
              <CaseStudyCard study={s} />
            </Reveal>
          ))}
        </ul>
      ) : (
        <EmptyState
          className="mt-14"
          eyebrow="Case studies"
          title="Case studies are on their way."
          description="We publish case studies only with client permission and verified outcomes. In the meantime, we're happy to walk you through our approach, architecture decisions and relevant work on a call."
          actions={
            <>
              <ButtonLink href="/book-a-call/" arrow>
                Book a walkthrough
              </ButtonLink>
              <ButtonLink href="/solutions/" variant="secondary">
                Explore what we build
              </ButtonLink>
            </>
          }
        />
      )}
    </SectionContainer>
  );
}
