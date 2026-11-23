import "server-only";

/**
 * Dependency-free Sanity GROQ client.
 * Enabled only when NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET are set.
 * SANITY_API_READ_TOKEN is optional (needed for private datasets / drafts) and never sent to the browser.
 */
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || "2025-02-19";
const token = process.env.SANITY_API_READ_TOKEN;

export const sanityEnabled = Boolean(projectId && dataset);

export async function sanityFetch<T>(query: string, params: Record<string, string> = {}): Promise<T | null> {
  if (!sanityEnabled) return null;
  const host = token ? "api.sanity.io" : "apicdn.sanity.io";
  const url = new URL(`https://${projectId}.${host}/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set("query", query);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(`$${k}`, JSON.stringify(v));
  try {
    const res = await fetch(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      next: { revalidate: 3600, tags: ["sanity"] },
    });
    if (!res.ok) {
      console.error(`[sanity] ${res.status} ${res.statusText}`);
      return null;
    }
    const json = (await res.json()) as { result: T };
    return json.result;
  } catch (err) {
    console.error("[sanity] request failed", err);
    return null;
  }
}

export function sanityImageUrl(ref: string | undefined, width = 1600) {
  // image-<id>-<w>x<h>-<ext>
  if (!ref || !projectId || !dataset) return undefined;
  const [, id, dims, ext] = ref.split("-");
  if (!id || !dims || !ext) return undefined;
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dims}.${ext}?w=${width}&auto=format`;
}
