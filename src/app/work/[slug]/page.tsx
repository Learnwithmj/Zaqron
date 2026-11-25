import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/content/PageHero";
import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { CaseStudyCard } from "@/components/content/cards";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getSolution } from "@/content/solutions";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Pages are generated only for published case studies; unknown slugs 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getCaseStudies()).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = await getCaseStudy(slug);
  if (!c) return {};
  return buildMetadata({ title: `${c.title} — Case Study`, description: c.summary, path: `/work/${c.slug}`, type: "article", publishedTime: c.publishedAt });
}

function Block({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <Reveal className="grid gap-6 border-t border-line py-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4 text-lg leading-relaxed text-muted">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 30)}>{p}</p>
        ))}
      </div>
    </Reveal>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();
  const related = (await getCaseStudies()).filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Our Work", href: "/work/" },
          { name: study.title, href: `/work/${study.slug}/` },
        ]}
        eyebrow={study.industry}
        title={study.title}
        description={study.summary}
      />
      <div className="container-z">
        <Image
          src={study.coverImage.src}
          alt={study.coverImage.alt}
          width={study.coverImage.width}
          height={study.coverImage.height}
          priority
          sizes="(min-width: 1360px) 1280px, 100vw"
          className="w-full rounded-[20px] border border-line"
        />
        <dl className="mt-8 grid gap-px overflow-hidden rounded-[16px] border border-line bg-line sm:grid-cols-3">
          <div className="bg-card p-6">
            <dt className="eyebrow">Client</dt>
            <dd className="mt-2">{study.client ? study.client.name : "Confidential"}</dd>
          </div>
          <div className="bg-card p-6">
            <dt className="eyebrow">Services</dt>
            <dd className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {study.services.map((s) => (
                <Link key={s} href={`/solutions/${s}/`} className="text-accent-soft hover:text-fg">
                  {getSolution(s)?.name ?? s}
                </Link>
              ))}
            </dd>
          </div>
          <div className="bg-card p-6">
            <dt className="eyebrow">Stack</dt>
            <dd className="mt-2 text-muted">{study.techStack.join(", ")}</dd>
          </div>
        </dl>
      </div>

      <SectionContainer labelledBy="cs-story">
        <h2 id="cs-story" className="sr-only">
          Project story
        </h2>
        <Block title="The challenge" paragraphs={study.challenge} />
        <Block title="Strategy" paragraphs={study.strategy} />
        <Block title="Solution" paragraphs={study.solution} />
        {study.screenshots.length > 0 && (
          <div className="grid gap-4 border-t border-line pt-10 md:grid-cols-2">
            {study.screenshots.map((img) => (
              <Image key={img.src} src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 768px) 50vw, 100vw" className="rounded-[16px] border border-line" />
            ))}
          </div>
        )}
        {study.outcomes.length > 0 && (
          <div className="border-t border-line pt-10">
            <h2 className="text-2xl font-semibold tracking-tight">Verified outcomes</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {study.outcomes.map((o) => (
                <li key={o.label} className="rounded-[16px] border border-line bg-card/60 p-6">
                  <p className="font-display text-4xl font-semibold text-gradient">{o.value}</p>
                  <p className="mt-2 text-muted">{o.label}</p>
                  {o.note && <p className="mt-1 text-xs text-subtle">{o.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </SectionContainer>

      {related.length > 0 && (
        <SectionContainer tone="alt" labelledBy="cs-related">
          <SectionHeading id="cs-related" eyebrow="More work" title="Related projects" />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {related.map((c) => (
              <li key={c.slug}>
                <CaseStudyCard study={c} />
              </li>
            ))}
          </ul>
        </SectionContainer>
      )}
      <FinalCTA />
    </>
  );
}
