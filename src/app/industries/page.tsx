import { PageHero } from "@/components/content/PageHero";
import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/Button";
import { IndustryCard } from "@/components/content/cards";
import { FinalCTA } from "@/components/home/FinalCTA";
import { industries } from "@/content/industries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries — Technology Shaped Around Your Sector",
  description:
    "How Zaqron applies engineering, automation and growth systems to startups, real estate, e-commerce, healthcare, education and professional services.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", href: "/industries/" }]}
        eyebrow="Industries"
        title={
          <>
            Technology shaped around <span className="text-gradient">your sector.</span>
          </>
        }
        description="Every industry has its own customers, workflows and regulations. We start with how your sector actually works — then apply the right mix of engineering, automation and growth."
        actions={
          <ButtonLink href="/contact/" size="lg" arrow className="w-full sm:w-auto">
            Discuss your industry
          </ButtonLink>
        }
      />
      <SectionContainer labelledBy="industries-grid" className="!pt-4 lg:!pt-8">
        <h2 id="industries-grid" className="sr-only">
          Industries we serve
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={i * 60}>
              <IndustryCard industry={ind} />
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
      <SectionContainer tone="alt" labelledBy="other-industries">
        <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <SectionHeading
            id="other-industries"
            eyebrow="Don't see yours?"
            title="Good systems travel well."
            description="The underlying problems — slow response times, manual operations, disconnected data, unpredictable growth — are remarkably similar across sectors. If your industry isn't listed, we'd still like to hear about it."
          />
          <Reveal className="lg:justify-self-end">
            <ButtonLink href="/contact/" variant="secondary" size="lg" arrow>
              Tell us about your business
            </ButtonLink>
          </Reveal>
        </div>
      </SectionContainer>
      <FinalCTA />
    </>
  );
}
