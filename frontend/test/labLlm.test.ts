import { test } from "node:test";
import assert from "node:assert/strict";
import { createChatHandler, pickModel, unitsFor } from "../lib/lab/llm.ts";
import type { LabEntry } from "../lib/lab/registry-schema.ts";

const env = { baseUrl: "https://api.test", secret: "s".repeat(32), viewsHashSecret: "v" };
const entry: LabEntry = { n: 3, slug: "ask-the-lab", title: "t", summary: "s", status: "prototype", kind: "app", runtime: ["llm"], sources: [{ kind: "release", repo: "o/r", tag: "t", asset: "a.parquet" }], started: "2026-09-27", tags: [], llm: { model: "anthropic/claude-haiku-4-5", maxOutputTokens: 600 } };
// Fix round 1 / SF-4: the real client (ai@7's HttpChatTransport) always sends this header, so the
// default request carries it -- a dedicated test below covers a request that omits/misstates it.
const req = (body: unknown = { messages: [{ role: "user", parts: [{ type: "text", text: "hi" }] }] }, headers: Record<string, string> = { "content-type": "application/json" }) =>
  new Request("http://x", { method: "POST", body: JSON.stringify(body), headers });

test("pickModel: default, allowed, denied", () => {
  assert.equal(pickModel(undefined, "a/b", ["a/b"]), "a/b");
  assert.equal(pickModel("a/c", "a/b", ["a/b", "a/c"]), "a/c");
  assert.equal(pickModel("evil/x", "a/b", ["a/b"]), null);
});

test("unitsFor rounds up to whole thousands, minimum 1", () => {
  assert.equal(unitsFor({ inputTokens: 1200, outputTokens: 300 }), 2);
  assert.equal(unitsFor({ inputTokens: 0, outputTokens: 0 }), 1);
  assert.equal(unitsFor({}), 1);
  assert.equal(unitsFor({ inputTokens: 1000, outputTokens: 1000 }), 2);
});

function harness(over: Partial<Parameters<typeof createChatHandler>[0]> = {}) {
  const api: { url: string; body: unknown }[] = [];
  const fetcher = (async (url: string | URL | Request, init?: RequestInit) => {
    const body = init?.body ? JSON.parse(String(init.body)) : null;
    api.push({ url: String(url), body });
    if (String(url).endsWith("/v1/quota/reserve")) return Response.json({ reservation_id: "res-1", remaining_today: 4 });
    return Response.json({ ok: true });
  }) as typeof fetch;
  let streamOpts: Record<string, unknown> | null = null;
  const streamText = (opts: Record<string, unknown>) => { streamOpts = opts; return { stream: null }; };
  const toResponse = () => new Response("stream", { status: 200 });
  const h = createChatHandler({ env, auth: async () => ({ githubId: "1", login: "l" }), paused: () => false, allowModels: ["anthropic/claude-haiku-4-5"], gatewayConfigured: () => true, gateway: (id: string) => ({ id }), streamText: streamText as never, toResponse, fetcher, ...over });
  return { h, api, opts: () => streamOpts! };
}

test("model outside the allowlist → 400 and NO reserve call", async () => {  // N-8: pin the body too
  const { h, api } = harness();
  const r = await h(req({ messages: [], model: "evil/x" }), entry);
  assert.equal(r.status, 400);
  assert.deepEqual(await r.json(), { error: "model" });
  assert.equal(api.length, 0);
});

test("anon → 401; paused → 503; gateway unconfigured → 503 — none reserve", async () => {
  assert.equal((await harness({ auth: async () => null }).h(req(), entry)).status, 401);
  const p = harness({ paused: () => true }); assert.equal((await p.h(req(), entry)).status, 503); assert.equal(p.api.length, 0);
  const g = harness({ gatewayConfigured: () => false }); const r = await g.h(req(), entry);
  assert.equal(r.status, 503); assert.deepEqual(await r.json(), { error: "gateway not configured" }); assert.equal(g.api.length, 0);
});

test("happy path: reserve 2 units, then stream with the entry's cap, instructions and the list_sources tool; onEnd settles with usage units", async () => {
  const { h, api, opts } = harness();
  const r = await h(req(), entry);
  assert.equal(r.status, 200);
  assert.equal(api[0].url, "https://api.test/v1/quota/reserve");
  assert.deepEqual(api[0].body, { entry_slug: "ask-the-lab", units: 2, login: "l" });
  const o = opts();
  assert.deepEqual(o.model, { id: "anthropic/claude-haiku-4-5" });
  assert.equal(o.maxOutputTokens, 600);
  assert.ok((o.tools as Record<string, unknown>).list_sources);
  assert.equal(typeof o.instructions, "string");
  assert.equal(o.system, undefined);
  await (o.onEnd as (e: unknown) => Promise<void>)({ usage: { inputTokens: 400, outputTokens: 200 } });
  assert.equal(api[1].url, "https://api.test/v1/quota/settle");
  assert.deepEqual(api[1].body, { reservation_id: "res-1", outcome: "success", units_used: 1 });
});

test("reserve 429 passes through; stream error settles refund", async () => {
  const deny = harness({ fetcher: (async () => Response.json({ reason: "daily" }, { status: 429 })) as typeof fetch });
  const r = await deny.h(req(), entry);
  assert.equal(r.status, 429); assert.deepEqual(await r.json(), { reason: "daily" });
  const { h, api, opts } = harness();
  await h(req(), entry);
  await (opts().onError as (e: unknown) => Promise<void>)({ error: new Error("boom") });
  assert.deepEqual(api[1].body, { reservation_id: "res-1", outcome: "refund" });
});

// --- Fix round 1 ---

test("SF-4: content-type must be application/json — a text/plain POST is 400 with no reserve", async () => {
  const { h, api } = harness();
  const r = await h(req(undefined, { "content-type": "text/plain" }), entry);
  assert.equal(r.status, 400);
  assert.deepEqual(await r.json(), { error: "bad json" });
  assert.equal(api.length, 0);
});

test("R-P5-11: an oversize transcript (too many messages or too much text) is 400 with no reserve, before conversion", async () => {
  const { h, api } = harness();
  const tooManyMessages = { messages: Array.from({ length: 21 }, () => ({ role: "user", parts: [{ type: "text", text: "hi" }] })) };
  const r1 = await h(req(tooManyMessages), entry);
  assert.equal(r1.status, 400);
  assert.deepEqual(await r1.json(), { error: "too long" });
  assert.equal(api.length, 0);

  const tooMuchText = { messages: [{ role: "user", parts: [{ type: "text", text: "x".repeat(8001) }] }] };
  const r2 = await h(req(tooMuchText), entry);
  assert.equal(r2.status, 400);
  assert.deepEqual(await r2.json(), { error: "too long" });
  assert.equal(api.length, 0);
});

test("N-2: empty/missing messages is 400 with no reserve, before conversion", async () => {
  const { h, api } = harness();
  const r = await h(req({ messages: [] }), entry);
  assert.equal(r.status, 400);
  assert.deepEqual(await r.json(), { error: "no messages" });
  assert.equal(api.length, 0);
});

test("SF-3: a body padded with a large non-text part is 400 with no reserve, even though text parts stay tiny", async () => {
  const { h, api } = harness();
  const padded = {
    messages: [
      { role: "user", parts: [{ type: "text", text: "hi" }, { type: "file", data: "x".repeat(33_000) }] },
    ],
  };
  const r = await h(req(padded), entry);
  assert.equal(r.status, 400);
  assert.deepEqual(await r.json(), { error: "too long" });
  assert.equal(api.length, 0);
});

test("R-P5-11: a transcript that makes toModelMessages throw is 400 with no reserve, before conversion succeeds", async () => {
  const { h, api } = harness({ toModelMessages: () => { throw new Error("malformed"); } });
  const r = await h(req(), entry);
  assert.equal(r.status, 400);
  assert.deepEqual(await r.json(), { error: "bad messages" });
  assert.equal(api.length, 0);
});
