import { test } from "node:test";
import assert from "node:assert/strict";
import { createRunHandler, isPaused } from "../lib/lab/run.ts";
import { runOutcome } from "../lib/lab/runClient.ts";
import { apiFetch } from "../lib/api/client.ts";

const env = { baseUrl: "https://api.test", secret: "s".repeat(32), viewsHashSecret: "v" };
const req = (body: unknown = { p_game: 0.6, best_of: 7 }) =>
  new Request("http://x/api/lab/series-odds/run", { method: "POST", body: JSON.stringify(body), headers: { "content-type": "application/json" } });
const claims = (authz: string) => JSON.parse(Buffer.from(authz.split(" ")[1].split(".")[1], "base64url").toString());

test("signed out → 401 without calling the API", async () => {
  const calls: unknown[] = [];
  const h = createRunHandler({ env, auth: async () => null, paused: () => false, fetcher: async (u) => { calls.push(u); return Response.json({}); } });
  const r = await h(req(), "series-odds");
  assert.equal(r.status, 401);
  assert.deepEqual(await r.json(), { error: "sign-in" });
  assert.equal(calls.length, 0);
});

test("paused → 503 {paused:true} without calling the API, even when signed in", async () => {
  const calls: unknown[] = [];
  const h = createRunHandler({ env, auth: async () => ({ githubId: "1", login: "l" }), paused: () => true, fetcher: async (u) => { calls.push(u); return Response.json({}); } });
  const r = await h(req(), "series-odds");
  assert.equal(r.status, 503);
  assert.deepEqual(await r.json(), { paused: true });
  assert.equal(calls.length, 0);
});

test("signed in → forwards the body with a run token for the user and x-login; API status/body pass through", async () => {
  let seen: { url: string; init: RequestInit } | undefined;
  const fetcher = async (url: string | URL | Request, init?: RequestInit) => {
    seen = { url: String(url), init: init ?? {} };
    return Response.json({ reason: "daily" }, { status: 429 });
  };
  const h = createRunHandler({ env, auth: async () => ({ githubId: "1", login: "l" }), paused: () => false, fetcher: fetcher as typeof fetch });
  const r = await h(req({ p_game: 0.6, best_of: 7 }), "series-odds");
  assert.equal(r.status, 429);
  assert.deepEqual(await r.json(), { reason: "daily" });
  assert.ok(seen);
  assert.equal(seen!.url, "https://api.test/v1/lab/series-odds/runs");
  const headers = seen!.init.headers as Record<string, string>;
  assert.equal(headers["x-login"], "l");
  const c = claims(headers.authorization);
  assert.equal(c.sub, "1");
  assert.equal(c.scope, "run");
  assert.deepEqual(JSON.parse(String(seen!.init.body)), { p_game: 0.6, best_of: 7 });
});

test("bad slug → 404, bad JSON → 400, API throws → 502, no API env → 503", async () => {
  const ok = { auth: async () => ({ githubId: "1", login: "l" }), paused: () => false };
  assert.equal((await createRunHandler({ env, ...ok })(req(), "../etc")).status, 404);
  const badJson = new Request("http://x", { method: "POST", body: "{" });
  assert.equal((await createRunHandler({ env, ...ok })(badJson, "series-odds")).status, 400);
  const boom = createRunHandler({ env, ...ok, fetcher: async () => { throw new Error("down"); } });
  const r = await boom(req(), "series-odds");
  assert.equal(r.status, 502);
  assert.deepEqual(await r.json(), { error: "api" });
  assert.equal((await createRunHandler({ env: null, ...ok })(req(), "series-odds")).status, 503);
});

test("handler order holds under multiple true conditions: paused beats signed-out, bad slug beats auth", async () => {
  const authCalls: number[] = [];
  const trackedAuth = async () => { authCalls.push(1); return null; };
  assert.equal((await createRunHandler({ env, auth: trackedAuth, paused: () => true })(req(), "series-odds")).status, 503);
  assert.equal(authCalls.length, 0, "paused must short-circuit before auth() is ever called");
  assert.equal((await createRunHandler({ env, auth: trackedAuth, paused: () => false })(req(), "../etc")).status, 404);
  assert.equal(authCalls.length, 0, "a bad slug must short-circuit before auth() is ever called");
});

test("runOutcome maps API answers to UI states", () => {
  assert.deepEqual(runOutcome(200, { run_id: "r", status: "ok", result: { exact: 0.71 }, cost_units: 1, cached: false }, 5), { kind: "ok", result: { exact: 0.71 }, cached: false, costUnits: 1 });
  assert.deepEqual(runOutcome(200, { status: "timeout", result: null, cost_units: 0, cached: false, error: "timeout" }, 5), { kind: "error", message: "the run timed out — units refunded" });
  assert.deepEqual(runOutcome(429, { reason: "daily" }, 5), { kind: "quota", message: "quota used up for today — back tomorrow" });
  assert.deepEqual(runOutcome(429, { reason: "spend_cap" }, 5), { kind: "quota", message: "the lab's monthly budget is spent — back next month" });
  assert.deepEqual(runOutcome(503, { paused: true }, 5), { kind: "paused" });
  assert.deepEqual(runOutcome(503, { busy: true }, 5), { kind: "error", message: "the lab is busy right now — try again in a moment" });
  assert.deepEqual(runOutcome(401, { error: "sign-in" }, 5), { kind: "signin" });
  assert.deepEqual(runOutcome(422, { detail: [] }, 5), { kind: "error", message: "those parameters were rejected" });
  assert.deepEqual(runOutcome(502, { error: "api" }, 5), { kind: "error", message: "the lab is unreachable right now" });
});

test("runOutcome validates a live result's shape when a guard is given; a malformed 200 body never reaches the widget as ok", () => {
  const isResult = (r: unknown): r is { ok: true } => typeof r === "object" && r !== null && (r as Record<string, unknown>).ok === true;
  assert.deepEqual(
    runOutcome(200, { status: "ok", result: { ok: true }, cost_units: 1, cached: false }, 5, isResult),
    { kind: "ok", result: { ok: true }, cached: false, costUnits: 1 },
  );
  assert.deepEqual(
    runOutcome(200, { status: "ok", result: { nope: true }, cost_units: 1, cached: false }, 5, isResult),
    { kind: "error", message: "the run returned something unexpected" },
  );
  assert.deepEqual(
    runOutcome(200, { status: "ok", result: null, cost_units: 1, cached: false }, 5, isResult),
    { kind: "error", message: "the run returned something unexpected" },
  );
  // No guard given (every other test above): any 200-ok body is trusted as-is -- unchanged.
});

test("isPaused: off|false|0|no (case/whitespace-insensitive) pause; on and unset don't", () => {  // SF-4 (R-P5-16)
  for (const v of ["off", "OFF", " off ", "false", "False", "0", "no", "NO"]) {
    assert.equal(isPaused({ ...process.env, LAB_LIVE_RUNS: v }), true, v);
  }
  assert.equal(isPaused({ ...process.env, LAB_LIVE_RUNS: "on" }), false);
  assert.equal(isPaused({ ...process.env, LAB_LIVE_RUNS: undefined }), false); // unset === live
});

test("apiFetch: a caller-supplied authorization header can never override the minted bearer", async () => {
  let seenAuth: string | undefined;
  await apiFetch(env, "/v1/x", { headers: { Authorization: "Bearer forged", "X-Login": "l" } }, async (_u, init) => {
    const headers = init?.headers as Record<string, string>;
    seenAuth = headers.authorization;
    assert.equal(headers.Authorization, undefined, "the capital-A key must be folded into lowercase, not left beside it");
    assert.equal(headers["x-login"], "l");
    return Response.json({});
  });
  assert.ok(seenAuth?.startsWith("Bearer "));
  assert.notEqual(seenAuth, "Bearer forged");
});
