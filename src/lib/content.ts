import "server-only";
import type { Article, ArticleBlock, CaseStudy } from "@/types/content";
import { articles as localArticles } from "@/content/insights";
import { caseStudies as localCaseStudies } from "@/content/collections";
import { sanityEnabled, sanityFetch, sanityImageUrl } from "./sanity";
import { readingTime } from "./utils";

/**
 * Content access layer. Pages never import content files for CMS-managed
 * collections directly — they go through here, so switching to Sanity is a
 * configuration change rather than a refactor.
 */

type PortableSpan = { text?: string };
type PortableBlock = {
  _type: string;
  style?: string;
  listItem?: "bullet" | "number";
  children?: PortableSpan[];
};

function portableToBlocks(blocks: PortableBlock[] = []): ArticleBlock[] {
  const out: ArticleBlock[] = [];
  for (const b of blocks) {
    if (b._type !== "block") continue;
    const text = (b.children ?? []).map((c) => c.text ?? "").join("");
    if (b.listItem) {
      const kind = b.listItem === "number" ? "ol" : "ul";
      const last = out[out.length - 1];
      if (last && last.type === kind) last.items.push(text);
      else out.push({ type: kind, items: [text] });
      continue;
    }
    if (b.style === "h2" || b.style === "h3") out.push({ type: b.style, text });
    else if (b.style === "blockquote") out.push({ type: "quote", text });
    else if (text.trim()) out.push({ type: "p", text });
  }
  return out;
}

type SanityPost = Omit<Article, "body" | "cover"> & {
  body: PortableBlock[];
  cover?: { alt?: string; asset?: { _ref?: string } };
};

const postProjection = `{
  "slug": slug.current, title, excerpt, category, featured, publishedAt, updatedAt, tags,
  "author": author->{name, role},
  cover, body
}`;

function mapPost(p: SanityPost, i: number): Article {
  return {
    ...p,
    author: p.author ?? { name: "Zaqron Editorial", role: "Technology & Growth Team" },
    cover: {
      src: sanityImageUrl(p.cover?.asset?._ref),
      alt: p.cover?.alt ?? p.title,
      variant: (i % 4) as 0 | 1 | 2 | 3,
    },
    body: portableToBlocks(p.body),
  };
}

const byDateDesc = (a: Article, b: Article) => b.publishedAt.localeCompare(a.publishedAt);

export async function getArticles(): Promise<Article[]> {
  if (sanityEnabled) {
    const posts = await sanityFetch<SanityPost[]>(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postProjection}`);
    if (posts && posts.length) return posts.map(mapPost);
  }
  return [...localArticles].sort(byDateDesc);
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  return (await getArticles()).find((a) => a.slug === slug);
}

export function articleText(a: Article) {
  return a.body
    .map((b) => ("text" in b ? b.text : b.items.join(" ")))
    .join(" ");
}

export function articleReadingTime(a: Article) {
  return readingTime(`${a.title} ${a.excerpt} ${articleText(a)}`);
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (sanityEnabled) {
    const items = await sanityFetch<CaseStudy[]>(
      `*[_type == "caseStudy" && defined(slug.current)] | order(publishedAt desc){..., "slug": slug.current}`,
    );
    if (items && items.length) return items;
  }
  return [...localCaseStudies].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getCaseStudy(slug: string) {
  return (await getCaseStudies()).find((c) => c.slug === slug);
}
