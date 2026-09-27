import { createHmac } from "node:crypto";
import { apiFetch, type ApiEnv } from "./api/client.ts";

export const SLUG_RE = /^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$/; // same pattern as the API's views.SLUG
export type ViewsDeps = {
  env: ApiEnv | null;
  fetcher?: typeof fetch;
  limiter: { take(key: string): boolean };
  isKnownSlug?: (slug: string) => boolean;
};

/** HMAC of the client IP: the API stores this, never an address. */
export const visitorHash = (secret: string, ip: string): string => createHmac("sha256", secret).update(ip).digest("hex");
export const clientIp = (req: Request): string => (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { "cache-control": "no-store" } });

export function createViewsHandler(deps: ViewsDeps) {
  const fetcher = deps.fetcher ?? fetch;
  return async (req: Request, slug: string, method: "GET" | "POST"): Promise<Response> => {
    if (!SLUG_RE.test(slug)) return json({ error: "bad slug" }, 400);
    if (deps.isKnownSlug && !deps.isKnownSlug(slug)) return json({ error: "unknown note" }, 404);
    const ip = clientIp(req);
    if (!deps.limiter.take(ip)) return json({ error: "rate limited" }, 429);
    if (!deps.env) return json({ count: null }); // Review Focus #3: unconfigured → hidden, no network
    try {
      const res =
        method === "POST"
          ? await apiFetch(deps.env, `/v1/views/${slug}`, { method: "POST", body: { visitor: visitorHash(deps.env.viewsHashSecret, ip) } }, fetcher)
          : await apiFetch(deps.env, `/v1/views/${slug}`, {}, fetcher);
      if (!res.ok) {
        console.warn("views: api responded", res.status);
        return json({ count: null });
      }
      const b = (await res.json()) as { count?: unknown };
      return json({ count: typeof b.count === "number" ? b.count : null });
    } catch {
      console.warn("views: api unreachable");
      return json({ count: null });
    }
  };
}
