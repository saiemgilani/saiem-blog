import { apiEnv } from "@lib/api/client";
import { createViewsHandler } from "@lib/views";
import { createRateLimiter } from "@lib/lab/rateLimit";
import { listNotes } from "@lib/notes";

// Only slugs that are real notes get counted (unknown-note POSTs 404 before the limiter).
const known = new Set(listNotes().map((n) => n.slug));

// Mode B: the in-process bucket is the limit. Mode A: a Vercel Firewall rule on /api/views is
// the real limit (Task 8); this bucket is a per-instance backstop. Dedup makes floods cheap anyway.
const handle = createViewsHandler({
  env: apiEnv(),
  fetcher: fetch,
  limiter: createRateLimiter({ capacity: 30, refillPerSec: 0.5 }),
  isKnownSlug: (s) => known.has(s),
});
type Ctx = { params: Promise<{ slug: string }> };

export async function GET(req: Request, ctx: Ctx) {
  return handle(req, (await ctx.params).slug, "GET");
}
export async function POST(req: Request, ctx: Ctx) {
  return handle(req, (await ctx.params).slug, "POST");
}
