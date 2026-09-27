import { apiFetch, type ApiEnv } from "../api/client.ts";

export type RunAuth = () => Promise<{ githubId?: string; login?: string } | null | undefined>;
export type RunDeps = { env: ApiEnv | null; auth: RunAuth; paused: () => boolean; fetcher?: typeof fetch };
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/; // registry slug shape
const RUN_TIMEOUT_MS = 35_000; // > LAB_RUN_TIMEOUT_S (30 s) so the API's own timeout answer arrives first
const json = (status: number, body: unknown) => Response.json(body, { status, headers: { "cache-control": "no-store" } });
const PAUSED_LAB_LIVE_RUNS_VALUES = new Set(["off", "false", "0", "no"]);

/** SF-4 (R-P5-16): the run and chat routes were each matching `LAB_LIVE_RUNS === "off"` only, so
 *  `LAB_LIVE_RUNS=false` (or any other spelling) left the UI-side mirror live while the droplet
 *  API's `settings.py` -- which accepts the whole off|false|0|no set -- correctly paused. This is
 *  NOT the authoritative switch; it only short-circuits the Next route before the API is called.
 *  See docs/runbook-deploy.md §6 for which value is authoritative. */
export function isPaused(env: NodeJS.ProcessEnv = process.env): boolean {
  return PAUSED_LAB_LIVE_RUNS_VALUES.has((env.LAB_LIVE_RUNS ?? "").trim().toLowerCase());
}

/** Next-side gate for python runs: paused → 503, no session → 401, else forward to the API with a
 *  run-scoped token for THIS user. The browser never sees the API. */
export function createRunHandler(deps: RunDeps) {
  return async (req: Request, slug: string): Promise<Response> => {
    if (!SLUG_RE.test(slug)) return json(404, { error: "unknown" });
    if (deps.paused()) return json(503, { paused: true });
    const session = await deps.auth();
    if (!session?.githubId) return json(401, { error: "sign-in" });
    if (!deps.env) return json(503, { error: "api not configured" });
    // A same-site cookie (SameSite=Lax) rides along on a no-preflight text/plain POST from any
    // *.saiemgilani.com subdomain; requiring JSON forces a CORS preflight for cross-origin callers.
    if (!(req.headers.get("content-type") ?? "").startsWith("application/json")) return json(400, { error: "bad json" });
    let body: unknown;
    try { body = await req.json(); } catch { return json(400, { error: "bad json" }); }
    try {
      const res = await apiFetch(deps.env, `/v1/lab/${slug}/runs`, { method: "POST", body, sub: session.githubId, scope: "run", timeoutMs: RUN_TIMEOUT_MS, headers: { "x-login": session.login ?? "" } }, deps.fetcher);
      const text = await res.text(); // inside the try: a body-read failure (reset, abort) must also become 502
      return new Response(text, { status: res.status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
    } catch { return json(502, { error: "api" }); }
  };
}
