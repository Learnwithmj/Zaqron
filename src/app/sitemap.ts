import type { MetadataRoute } from "next";
import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { getArticles, getCaseStudies } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, studies] = await Promise.all([getArticles(), getCaseStudies()]);
  const stat = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    changeFrequency,
    priority,
  });
  return [
    stat("/", 1, "weekly"),
    stat("/solutions", 0.9),
    stat("/industries", 0.8),
    stat("/about", 0.7),
    stat("/products", 0.6),
    stat("/work", 0.6),
    stat("/insights", 0.7, "weekly"),
    stat("/contact", 0.8),
    stat("/book-a-call", 0.8),
    stat("/careers", 0.4),
    stat("/privacy-policy", 0.2, "yearly"),
    stat("/terms-and-conditions", 0.2, "yearly"),
    ...solutions.map((s) => stat(`/solutions/${s.slug}`, s.isPillar ? 0.85 : 0.8)),
    ...industries.map((i) => stat(`/industries/${i.slug}`, 0.7)),
    ...articles.map((a) => ({ url: absoluteUrl(`/insights/${a.slug}`), lastModified: a.updatedAt ?? a.publishedAt, changeFrequency: "yearly" as const, priority: 0.6 })),
    ...studies.map((c) => ({ url: absoluteUrl(`/work/${c.slug}`), lastModified: c.publishedAt, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
