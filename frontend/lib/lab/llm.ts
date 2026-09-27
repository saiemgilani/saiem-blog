import { apiFetch, type ApiEnv } from "../api/client.ts";
import type { RunAuth } from "./run.ts";
import type { LabEntry } from "./registry-schema.ts";

export function pickModel(requested: string | undefined, entryModel: string, allow: string[]): string | null {
  const m = requested ?? entryModel;
  return allow.includes(m) ? m : null;
}
export function unitsFor(usage: { inputTokens?: number; outputTokens?: number }): number {
  return Math.max(1, Math.ceil(((usage.inputTokens ?? 0) + (usage.outputTokens ?? 0)) / 1000));
}

const MAX_MESSAGES = 20;
const MAX_TEXT_CHARS = 8_000;
const MAX_BODY_CHARS = 32_000; // SF-3: text-only bound above counts `text` parts alone -- file /
// reasoning / tool-output parts ride along uncounted and still forward to the model. Bounding the
// whole serialized body is the backstop so the 2 reserved units actually bound real spend.

/** Sums every `text` part's length across a raw UI-message array. Defensive against malformed
 *  shapes (non-array `parts`, non-string `text`) -- this runs before the transcript is trusted. */
function totalTextLength(messages: unknown[]): number {
  let total = 0;
  for (const m of messages) {
    const parts = (m as { parts?: unknown } | null)?.parts;
    if (!Array.isArray(parts)) continue;
    for (const p of parts) {
      const part = p as { type?: unknown; text?: unknown } | null;
      if (part && part.type === "text" && typeof part.text === "string") total += part.text.length;
    }
  }
  return total;
}

type StreamResult = { stream: unknown };
type StreamText = (opts: Record<string, unknown>) => StreamResult;
export type ChatDeps = {
  env: ApiEnv | null; auth: RunAuth; paused: () => boolean; allowModels: string[]; gatewayConfigured: () => boolean;
  gateway: (modelId: string) => unknown; streamText: StreamText; toResponse: (result: StreamResult) => Response;
  reserveUnits?: number; fetcher?: typeof fetch;
  /** built by the route file from the AI SDK's `tool()`, `convertToModelMessages`, `isStepCount`; tests pass identity fakes */
  makeTools?: (entry: LabEntry) => Record<string, unknown>; toModelMessages?: (messages: unknown) => Promise<unknown> | unknown;
  streamOptions?: Record<string, unknown>;
};
const json = (status: number, body: unknown) => Response.json(body, { status, headers: { "cache-control": "no-store" } });

export function createChatHandler(deps: ChatDeps) {
  const units = deps.reserveUnits ?? 2;
  return async (req: Request, entry: LabEntry): Promise<Response> => {
    if (!entry.llm) return json(404, { error: "unknown" });
    if (deps.paused()) return json(503, { paused: true });
    const session = await deps.auth();
    if (!session?.githubId) return json(401, { error: "sign-in" });
    // R-P5-13 / SF-4: mirror run.ts's CSRF content-type gate. A same-site cookie (SameSite=Lax)
    // rides along on a no-preflight text/plain POST from any *.saiemgilani.com subdomain;
    // requiring JSON forces a CORS preflight for cross-origin callers. The real client
    // (ai@7's HttpChatTransport) always sends "content-type: application/json".
    if (!(req.headers.get("content-type") ?? "").startsWith("application/json")) return json(400, { error: "bad json" });
    let body: { messages?: unknown; model?: string } | null;
    try { body = await req.json(); } catch { return json(400, { error: "bad json" }); }
    if (!body || typeof body !== "object") return json(400, { error: "bad json" }); // NIT 8: a JSON `null`/non-object body
    const model = pickModel(body.model, entry.llm.model, deps.allowModels);
    if (!model) return json(400, { error: "model" });                       // before any reservation
    // R-P5-11 (SF-1 + SF-2): bound and convert the transcript BEFORE reserving. A malformed
    // transcript must never strand a reservation (a synchronous convertToModelMessages throw used
    // to happen only inside the streamText() call, after reserve already succeeded), and an
    // unbounded transcript must never bill far more tokens than the reserved units cover.
    const rawMessages = Array.isArray(body.messages) ? body.messages : [];
    if (rawMessages.length === 0) return json(400, { error: "no messages" }); // N-2
    if (
      rawMessages.length > MAX_MESSAGES ||
      totalTextLength(rawMessages) > MAX_TEXT_CHARS ||
      JSON.stringify(body).length > MAX_BODY_CHARS
    ) {
      return json(400, { error: "too long" });
    }
    let modelMessages: unknown;
    try {
      modelMessages = await (deps.toModelMessages ?? ((m) => m))(rawMessages);
    } catch {
      return json(400, { error: "bad messages" });
    }
    if (!deps.gatewayConfigured()) return json(503, { error: "gateway not configured" });
    if (!deps.env) return json(503, { error: "api not configured" });
    const env = deps.env;
    let reserved: Response;
    try {
      reserved = await apiFetch(env, "/v1/quota/reserve", { method: "POST", body: { entry_slug: entry.slug, units, login: session.login ?? "" }, sub: session.githubId, scope: "run" }, deps.fetcher);
    } catch { return json(502, { error: "api" }); }
    if (!reserved.ok) {
      let text: string;
      try { text = await reserved.text(); } catch { return json(502, { error: "api" }); } // NIT 9
      return new Response(text, { status: reserved.status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
    }
    const { reservation_id } = (await reserved.json()) as { reservation_id: string };
    const settle = (payload: Record<string, unknown>) =>
      apiFetch(env, "/v1/quota/settle", { method: "POST", body: { reservation_id, ...payload }, sub: session.githubId, scope: "run" }, deps.fetcher).catch(() => undefined);
    try {
      const result = deps.streamText({
        model: deps.gateway(model),
        instructions: `You answer questions about the SportsDataverse lab. You can list the entry's declared data sources with the list_sources tool; you cannot query them yet. Be brief.`,
        messages: modelMessages,
        maxOutputTokens: entry.llm.maxOutputTokens,
        tools: (deps.makeTools ?? (() => ({ list_sources: { description: "list the entry's declared data sources" } })))(entry),
        // NIT 1: onError can fire (refund) and onEnd can still fire afterward (success settle) when
        // a later step recovers after an earlier one errored -- the API's atomic pop makes the
        // second settle call a harmless 404 (see quota_routes.py's post_settle), so the net effect
        // is a full refund even though some tokens were spent. Acceptable; documented, not "fixed".
        onEnd: async ({ usage }: { usage: { inputTokens?: number; outputTokens?: number } }) => { await settle({ outcome: "success", units_used: unitsFor(usage ?? {}) }); },
        onError: async () => { await settle({ outcome: "refund" }); },
        // NIT 2: no abortSignal is wired, so a client disconnect never fires onEnd/onError/onAbort --
        // the reservation is simply pruned at its TTL with the full units kept. Fails closed (no
        // free tokens), so left as-is rather than adding abort plumbing beyond what was asked.
        ...(deps.streamOptions ?? {}),
      });
      return deps.toResponse(result);
    } catch {
      // A synchronous throw from streamText/toResponse (bad gateway config, model setup, response
      // construction) happens before the stream lifecycle callbacks exist to refund -- settle here.
      await settle({ outcome: "refund" });
      return json(502, { error: "gateway" });
    }
  };
}
