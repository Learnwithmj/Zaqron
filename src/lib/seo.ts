import type { Metadata } from "next";
import { site } from "@/content/site";

/** Absolute URL with trailing slash (matches `trailingSlash: true`). */
export function absoluteUrl(path = "/") {
  const clean = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}/`;
  return `${site.url}${clean}`;
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  noIndex,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/* ───────────── JSON-LD builders (only facts we can stand behind) ───────────── */

export function organizationSchema() {
  const sameAs = Object.values(site.socials).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: `${site.url}/`,
    logo: `${site.url}/brand/zaqron-app-icon.svg`,
    slogan: site.tagline,
    description: site.description,
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    areaServed: site.markets.map((name) => ({ "@type": "Country", name })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: `${site.url}/`,
    inLanguage: "en",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: site.markets.map((n) => ({ "@type": "Country", name: n })),
  };
}

export function articleSchema(a: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: { name: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.publishedAt,
    dateModified: a.updatedAt ?? a.publishedAt,
    mainEntityOfPage: absoluteUrl(`/insights/${a.slug}`),
    image: `${site.url}/opengraph-image`,
    author: { "@type": "Organization", name: a.author.name, url: `${site.url}/` },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
