import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/Button";
import { BlogCard } from "@/components/content/cards";
import type { Article } from "@/types/content";

export function InsightsSection({ articles }: { articles: { article: Article; minutes: number }[] }) {
  if (!articles.length) return null;
  return (
    <SectionContainer labelledBy="insights-title">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          id="insights-title"
          eyebrow="Insights"
          title="Ideas for What's Next."
          description="Practical thinking on technology, automation and growth — written for people who run businesses."
        />
        <Reveal className="shrink-0">
          <ButtonLink href="/insights/" variant="secondary" arrow>
            All insights
          </ButtonLink>
        </Reveal>
      </div>
      <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map(({ article, minutes }, i) => (
          <Reveal as="li" key={article.slug} delay={i * 80}>
            <BlogCard article={article} minutes={minutes} />
          </Reveal>
        ))}
      </ul>
    </SectionContainer>
  );
}
