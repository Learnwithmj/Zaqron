import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionContainer, SectionHeading } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/Button";
import { ArticleBody } from "@/components/content/ArticleBody";
import { ArticleCover } from "@/components/content/ArticleCover";
import { BlogCard } from "@/components/content/cards";
import { LogoSymbol } from "@/components/brand/Logo";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleReadingTime, getArticle, getArticles } from "@/lib/content";
import { articleSchema, buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getArticles()).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) return {};
  return buildMetadata({ title: a.title, description: a.excerpt, path: `/insights/${a.slug}`, type: "article", publishedTime: a.publishedAt });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const all = await getArticles();
  const article = all.find((a) => a.slug === slug);
  if (!article) notFound();
  const minutes = articleReadingTime(article);
  const related = all
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <article>
        <header className="relative isolate overflow-hidden pt-[calc(var(--header-h)+40px)] lg:pt-[calc(var(--header-h)+64px)]">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          </div>
          <div className="container-z max-w-[860px]">
            <Breadcrumb
              items={[
                { name: "Insights", href: "/insights/" },
                { name: article.title, href: `/insights/${article.slug}/` },
              ]}
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-subtle">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-blue-soft">{article.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {minutes} min read
              </span>
            </div>
            <h1 className="mt-5 text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem]">{article.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{article.excerpt}</p>
            <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card">
                <LogoSymbol className="h-5 w-5" />
              </span>
              <div className="text-sm">
                <p className="font-medium">{article.author.name}</p>
                <p className="text-muted">{article.author.role}</p>
              </div>
            </div>
          </div>
          <div className="container-z mt-10 max-w-[1080px]">
            <div className="relative aspect-[21/9] overflow-hidden rounded-[20px] border border-line">
              {article.cover.src ? (
                <Image src={article.cover.src} alt={article.cover.alt} fill priority sizes="(min-width: 1080px) 1080px, 100vw" className="object-cover" />
              ) : (
                <ArticleCover variant={article.cover.variant} />
              )}
            </div>
          </div>
        </header>

        <div className="container-z max-w-[760px] py-14 lg:py-20">
          <ArticleBody blocks={article.body} />
          {article.tags && article.tags.length > 0 && (
            <ul className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8" aria-label="Tags">
              {article.tags.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                  #{t}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[16px] border border-line bg-card/60 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="font-display text-xl font-semibold">Want to apply this in your business?</p>
              <p className="mt-1 text-muted">A 30-minute call is enough to map the first step.</p>
            </div>
            <ButtonLink href="/book-a-call/" arrow className="shrink-0">
              Book a strategy call
            </ButtonLink>
          </div>
          <Link href="/insights/" className="mt-10 inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to all insights
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <SectionContainer tone="alt" labelledBy="related-posts">
          <SectionHeading id="related-posts" eyebrow="Keep reading" title="Related posts" />
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <li key={a.slug}>
                <BlogCard article={a} minutes={articleReadingTime(a)} />
              </li>
            ))}
          </ul>
        </SectionContainer>
      )}
    </>
  );
}
