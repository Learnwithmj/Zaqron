import type { ReactNode } from "react";
import { PageHero } from "@/components/content/PageHero";
import { formatDate } from "@/lib/utils";

export function LegalPage({
  title,
  path,
  updated,
  intro,
  sections,
}: {
  title: string;
  path: string;
  updated: string;
  intro: ReactNode;
  sections: { heading: string; body: ReactNode }[];
}) {
  return (
    <>
      <PageHero crumbs={[{ name: title, href: path }]} eyebrow="Legal" title={title} description={`Last updated ${formatDate(updated)}`} />
      <div className="container-z grid gap-12 pb-24 lg:grid-cols-[240px_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <ol className="sticky top-28 space-y-2 text-sm">
            {sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#s${i + 1}`} className="text-muted hover:text-fg">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="prose-z max-w-3xl">
          <div className="rounded-xl border border-line bg-card/60 p-5 text-[0.95rem]">{intro}</div>
          {sections.map((s, i) => (
            <section key={s.heading} id={`s${i + 1}`} className="scroll-mt-28">
              <h2>
                {i + 1}. {s.heading}
              </h2>
              {s.body}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
