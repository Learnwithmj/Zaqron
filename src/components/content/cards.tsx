import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, ExternalLink } from "lucide-react";
import type { Article, CaseStudy, Industry, Product, Solution } from "@/types/content";
import { Badge } from "@/components/ui/primitives";
import { Icon, IconTile } from "@/components/ui/Icon";
import { cn, formatDate } from "@/lib/utils";
import { getSolution } from "@/content/solutions";
import { ArticleCover } from "./ArticleCover";

const cardBase =
  "group relative flex h-full flex-col rounded-[16px] border border-line bg-card/70 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-elevated/60";

const stretched = "after:absolute after:inset-0 after:rounded-[16px] after:content-['']";

/* ───────── ServiceCard ───────── */
export function ServiceCard({ solution, compact }: { solution: Solution; compact?: boolean }) {
  return (
    <article className={cn(cardBase, compact ? "p-5" : "p-6")}>
      <div className="flex items-start justify-between">
        <IconTile name={solution.icon} />
        <ArrowUpRight className="h-5 w-5 text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden="true" />
      </div>
      <h3 className={cn("mt-5 font-semibold tracking-tight text-fg", compact ? "text-lg" : "text-xl")}>
        <Link href={`/solutions/${solution.slug}/`} className={stretched}>
          {solution.name}
        </Link>
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{solution.short}</p>
    </article>
  );
}

/* ───────── IndustryCard ───────── */
export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className={cn(cardBase, "p-6")}>
      <div className="flex items-start justify-between">
        <IconTile name={industry.icon} />
        <ArrowUpRight className="h-5 w-5 text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg">
        <Link href={`/industries/${industry.slug}/`} className={stretched}>
          {industry.name}
        </Link>
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{industry.short}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5 pt-1">
        {industry.solutions.slice(0, 3).map((s) => (
          <li key={s.slug} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
            {getSolution(s.slug)?.name}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ───────── ProductCard ───────── */
const statusMap: Record<Product["status"], { label: string; tone: "success" | "accent" | "muted" }> = {
  live: { label: "Live", tone: "success" },
  beta: { label: "Beta", tone: "accent" },
  "coming-soon": { label: "Coming Soon", tone: "muted" },
};

export function ProductCard({ product }: { product: Product }) {
  const status = statusMap[product.status];
  return (
    <article className={cn(cardBase, "overflow-hidden")}>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-bg-2">
        {product.screenshot ? (
          <Image
            src={product.screenshot.src}
            alt={product.screenshot.alt}
            width={product.screenshot.width}
            height={product.screenshot.height}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="bg-grid flex h-full items-center justify-center opacity-60">
            <Icon name="boxes" className="h-10 w-10 text-subtle" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {product.icon ? (
              <Image src={product.icon} alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
            ) : (
              <IconTile name="boxes" className="h-9 w-9" />
            )}
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">{product.category}</span>
          </div>
          <Badge tone={status.tone} dot={product.status === "live"}>
            {status.label}
          </Badge>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">{product.name}</h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{product.description}</p>
        {product.website && product.status !== "coming-soon" ? (
          <a
            href={product.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft hover:text-fg"
          >
            Explore {product.name} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : (
          <Link href={`/contact/?path=business&interest=${product.slug}`} className="mt-5 text-sm font-medium text-accent-soft hover:text-fg">
            {product.status === "coming-soon" ? "Ask about this product →" : "Learn more →"}
          </Link>
        )}
      </div>
    </article>
  );
}

/* ───────── CaseStudyCard ───────── */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className={cn(cardBase, "overflow-hidden")}>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <Image
          src={study.coverImage.src}
          alt={study.coverImage.alt}
          width={study.coverImage.width}
          height={study.coverImage.height}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-soft">{study.industry}</span>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">
          <Link href={`/work/${study.slug}/`} className={stretched}>
            {study.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{study.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {study.services.map((s) => (
            <li key={s} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
              {getSolution(s)?.name ?? s}
            </li>
          ))}
        </ul>
        <span className="mt-5 text-sm font-medium text-accent-soft group-hover:text-fg">View case study →</span>
      </div>
    </article>
  );
}

/* ───────── BlogCard ───────── */
export function BlogCard({
  article,
  minutes,
  featured,
  headingLevel = "h3",
}: {
  article: Article;
  minutes: number;
  featured?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const H = headingLevel;
  return (
    <article className={cn(cardBase, "overflow-hidden", featured && "lg:grid lg:grid-cols-[1.15fr_1fr]")}>
      <div className={cn("relative overflow-hidden border-b border-line", featured ? "aspect-[16/10] lg:aspect-auto lg:border-b-0 lg:border-r" : "aspect-[16/9]")}>
        {article.cover.src ? (
          <Image
            src={article.cover.src}
            alt={article.cover.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          />
        ) : (
          <ArticleCover variant={article.cover.variant} label={article.category} className="transition-transform duration-700 group-hover:scale-[1.03]" />
        )}
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:p-10")}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-subtle">
          <span className="font-mono uppercase tracking-[0.12em] text-accent-soft">{article.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden="true" /> {minutes} min read
          </span>
        </div>
        <H className={cn("mt-3 font-semibold leading-snug tracking-tight text-fg", featured ? "text-2xl lg:text-[2rem]" : "text-lg")}>
          <Link href={`/insights/${article.slug}/`} className={stretched}>
            {article.title}
          </Link>
        </H>
        <p className={cn("mt-3 flex-1 leading-relaxed text-muted", featured ? "text-base" : "text-[0.925rem] line-clamp-3")}>
          {article.excerpt}
        </p>
        <span className="mt-5 text-sm font-medium text-accent-soft group-hover:text-fg">Read article →</span>
      </div>
    </article>
  );
}
