import type { ArticleBlock } from "@/types/content";

/** Renders structured article blocks as semantic HTML — no raw HTML injection. */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose-z">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i}>{b.text}</h2>;
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ol>
            );
          case "quote":
            return <blockquote key={i}>{b.text}</blockquote>;
          default:
            return <p key={i}>{b.text}</p>;
        }
      })}
    </div>
  );
}
