import "server-only";

/**
 * Sliding-window rate limiter.
 * - With UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN: shared, durable limits (recommended for
 *   serverless / multi-instance production).
 * - Otherwise: in-memory per server instance (fine for a single Node server and local development).
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX = Number(process.env.INQUIRY_RATE_LIMIT || 5);

const memory = new Map<string, number[]>();

export async function rateLimit(key: string): Promise<{ ok: boolean; retryAfter: number }> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    try {
      const bucket = `rl:inquiry:${key}:${Math.floor(Date.now() / WINDOW_MS)}`;
      const res = await fetch(`${url}/pipeline`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify([
          ["INCR", bucket],
          ["PEXPIRE", bucket, String(WINDOW_MS)],
        ]),
        cache: "no-store",
      });
      const data = (await res.json()) as { result: number }[];
      const count = data[0]?.result ?? 0;
      return { ok: count <= MAX, retryAfter: Math.ceil(WINDOW_MS / 1000) };
    } catch {
      // fall through to memory limiter if Redis is unreachable
    }
  }
  const now = Date.now();
  const hits = (memory.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX) {
    return { ok: false, retryAfter: Math.ceil((WINDOW_MS - (now - hits[0])) / 1000) };
  }
  hits.push(now);
  memory.set(key, hits);
  if (memory.size > 5000) {
    for (const [k, v] of memory) if (!v.some((t) => now - t < WINDOW_MS)) memory.delete(k);
  }
  return { ok: true, retryAfter: 0 };
}
