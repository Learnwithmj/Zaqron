"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Article } from "@/types/content";
import { BlogCard } from "./cards";
import { cn } from "@/lib/utils";

type Item = { article: Article; minutes: number };

/** Client-side search + category filters for the insights listing. */
export function InsightsExplorer({ items, featuredSlug }: { items: Item[]; featuredSlug?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.article.category)))], [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(({ article: a }) => {
      if (category !== "All" && a.category !== category) return false;
      // The featured article is already shown above — hide it in the unfiltered view
      if (!q && category === "All" && a.slug === featuredSlug) return false;
      if (!q) return true;
      return [a.title, a.excerpt, a.category, ...(a.tags ?? [])].join(" ").toLowerCase().includes(q);
    });
  }, [items, query, category, featuredSlug]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label="Filter by category" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "h-10 shrink-0 rounded-full border px-4 text-sm transition-colors",
                category === c ? "border-accent/60 bg-accent/15 text-fg" : "border-line text-muted hover:border-line-strong hover:text-fg",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative md:w-80">
          <label htmlFor="insights-search" className="sr-only">
            Search insights
          </label>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" aria-hidden="true" />
          <input
            id="insights-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="field-input !pl-10 !pr-10"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-subtle hover:text-fg">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {filtered.length} article{filtered.length === 1 ? "" : "s"} found
      </p>

      {filtered.length ? (
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ article, minutes }) => (
            <li key={article.slug}>
              <BlogCard article={article} minutes={minutes} headingLevel="h3" />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 rounded-[16px] border border-dashed border-line-strong p-12 text-center">
          <p className="font-medium">No articles match your search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-3 text-sm text-accent-soft hover:text-fg"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
