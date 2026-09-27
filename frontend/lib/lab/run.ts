import { apiFetch, type ApiEnv } from "../api/client.ts";

export type RunAuth = () => Promise<{ githubId?: string; login?: string } | null | undefined>;
export type RunDeps = { env: ApiEnv | null; auth: RunAuth; paused: () => boolean; fetcher?: typeof fetch };
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/; // registry slug shape
const RUN_TIMEOUT_MS = 35_000; // > LAB_RUN_TIMEOUT_S (30 s) so the API's own timeout answer arrives first
const json = (status: number, body: unknown) => Response.json(body, { status, headers: { "cache-control": "no-store" } });

/** Next-side gate for python runs: paused → 503, no session → 401, else forward to the API with a
 *  run-scoped token for THIS user. The browser never sees the API. */
export function createRunHandler(deps: RunDeps) {
  return async (req: Request, slug: string): Promise<Response> => {
    if (!SLUG_RE.test(slug)) return json(404, { error: "unknown" });
    if (deps.paused()) return json(503, { paused: true });
    const session = await deps.auth();
    if (!session?.githubId) return json(401, { error: "sign-in" });
    if (!deps.env) return json(503, { error: "api not configured" });
    let body: unknown;
    try { body = await req.json(); } catch { return json(400, { error: "bad json" }); }
    let res: Response;
    try {
      res = await apiFetch(deps.env, `/v1/lab/${slug}/runs`, { method: "POST", body, sub: session.githubId, scope: "run", timeoutMs: RUN_TIMEOUT_MS, headers: { "x-login": session.login ?? "" } }, deps.fetcher);
    } catch { return json(502, { error: "api" }); }
    return new Response(await res.text(), { status: res.status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
  };
}
