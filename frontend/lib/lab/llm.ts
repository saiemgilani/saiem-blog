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
    let body: { messages?: unknown; model?: string };
    try { body = await req.json(); } catch { return json(400, { error: "bad json" }); }
    const model = pickModel(body.model, entry.llm.model, deps.allowModels);
    if (!model) return json(400, { error: "model" });                       // before any reservation
    if (!deps.gatewayConfigured()) return json(503, { error: "gateway not configured" });
    if (!deps.env) return json(503, { error: "api not configured" });
    const env = deps.env;
    let reserved: Response;
    try {
      reserved = await apiFetch(env, "/v1/quota/reserve", { method: "POST", body: { entry_slug: entry.slug, units, login: session.login ?? "" }, sub: session.githubId, scope: "run" }, deps.fetcher);
    } catch { return json(502, { error: "api" }); }
    if (!reserved.ok) return new Response(await reserved.text(), { status: reserved.status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
    const { reservation_id } = (await reserved.json()) as { reservation_id: string };
    const settle = (payload: Record<string, unknown>) =>
      apiFetch(env, "/v1/quota/settle", { method: "POST", body: { reservation_id, ...payload }, sub: session.githubId, scope: "run" }, deps.fetcher).catch(() => undefined);
    const result = deps.streamText({
      model: deps.gateway(model),
      instructions: `You answer questions about the SportsDataverse lab. You can list the entry's declared data sources with the list_sources tool; you cannot query them yet. Be brief.`,
      messages: await (deps.toModelMessages ?? ((m) => m))(body.messages ?? []),
      maxOutputTokens: entry.llm.maxOutputTokens,
      tools: (deps.makeTools ?? (() => ({ list_sources: { description: "list the entry's declared data sources" } })))(entry),
      onEnd: async ({ usage }: { usage: { inputTokens?: number; outputTokens?: number } }) => { await settle({ outcome: "success", units_used: unitsFor(usage ?? {}) }); },
      onError: async () => { await settle({ outcome: "refund" }); },
      ...(deps.streamOptions ?? {}),
    });
    return deps.toResponse(result);
  };
}
