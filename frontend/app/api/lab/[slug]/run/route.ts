import { auth } from "@lib/auth";
import { apiEnv } from "@lib/api/client";
import { createRunHandler, isPaused } from "@lib/lab/run";
import { LAB } from "@content/lab/registry";
import { isGated } from "@lib/lab/registry-schema";

export const dynamic = "force-dynamic";
export const maxDuration = 60; // a python run is synchronous, ≤ LAB_RUN_TIMEOUT_S

// Mirrors /api/me's guard: without AUTH_* set, calling auth() just logs Auth.js "MissingSecret"
// noise for every POST (it already fails closed to 401, this only quiets the log).
const authConfigured = Boolean(process.env.AUTH_SECRET && process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET);
const handler = createRunHandler({
  env: apiEnv(),
  auth: () => (authConfigured ? auth() : Promise.resolve(null)),
  paused: () => isPaused(),
});

export async function POST(req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  // Any well-formed kebab-case slug reaches createRunHandler's SLUG_RE check and gets forwarded
  // to the API, which 404s it before touching quota/DB (harmless, but wasteful). Answer 404
  // here for anything not in the registry as a gated entry, so run.ts stays slug-shape-only.
  if (!LAB.some((e) => e.slug === slug && isGated(e))) {
    return Response.json({ error: "unknown" }, { status: 404, headers: { "cache-control": "no-store" } });
  }
  return handler(req, slug);
}
