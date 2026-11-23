import { PageHero } from "@/components/content/PageHero";
import { SectionContainer, Reveal } from "@/components/ui/primitives";
import { BlogCard } from "@/components/content/cards";
import { InsightsExplorer } from "@/components/content/InsightsExplorer";
import { FinalCTA } from "@/components/home/FinalCTA";
import { articleReadingTime, getArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Insights — Technology, Automation & Growth",
  description: "Practical articles from Zaqron on AI and automation, digital engineering, growth systems and building smarter businesses.",
  path: "/insights",
});

export default async function InsightsPage() {
  const articles = await getArticles();
  const items = articles.map((a) => ({ article: a, minutes: articleReadingTime(a) }));
  const featured = items.find((i) => i.article.featured) ?? items[0];

  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights/" }]}
        eyebrow="Insights"
        title={
          <>
            Ideas for <span className="text-gradient">what&apos;s next.</span>
          </>
        }
        description="Practical thinking on technology, automation and growth — written for founders, operators and leaders who build."
      />
      {featured && (
        <SectionContainer labelledBy="featured-title" className="!pt-0 !pb-12 lg:!pb-16">
          <h2 id="featured-title" className="eyebrow mb-6">
            Featured
          </h2>
          <Reveal>
            <BlogCard article={featured.article} minutes={featured.minutes} featured headingLevel="h3" />
          </Reveal>
        </SectionContainer>
      )}
      <SectionContainer labelledBy="all-articles" className="!pt-0">
        <h2 id="all-articles" className="mb-6 text-2xl font-semibold tracking-tight">
          {featured ? "More articles" : "All articles"}
        </h2>
        <InsightsExplorer items={items} featuredSlug={featured?.article.slug} />
      </SectionContainer>
      <FinalCTA title="Have a challenge worth writing about?" description="We'd rather solve it with you. Tell us what you're working on." />
    </>
  );
}
