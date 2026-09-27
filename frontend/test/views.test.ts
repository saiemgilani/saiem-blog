import { test } from "node:test";
import assert from "node:assert/strict";
import { createViewsHandler, visitorHash, SLUG_RE } from "../lib/views.ts";
import { apiEnv, type ApiEnv } from "../lib/api/client.ts";

const env: ApiEnv = { baseUrl: "https://api.example", secret: "s".repeat(32), viewsHashSecret: "v".repeat(32) };
const req = (ip = "203.0.113.9") => new Request("https://www.saiemgilani.com/api/views/x", { method: "POST", headers: { "x-forwarded-for": `${ip}, 10.0.0.1` } });
const allow = { take: () => true };

function fakeApi(status = 200, body: unknown = { slug: "intro-to-hoopR", count: 7, counted: true }) {
  const calls: { url: string; method: string; auth: string | null; body: unknown }[] = [];
  const fetcher = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ url: String(input), method: init?.method ?? "GET", auth: new Headers(init?.headers).get("authorization"), body: init?.body ? JSON.parse(String(init.body)) : undefined });
    return new Response(JSON.stringify(body), { status });
  }) as typeof fetch;
  return { fetcher, calls };
}

test("POST mints a bearer, sends the visitor hash, returns the count", async () => {
  const api = fakeApi();
  const res = await createViewsHandler({ env, fetcher: api.fetcher, limiter: allow })(req(), "intro-to-hoopR", "POST");
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { count: 7 });
  assert.equal(res.headers.get("cache-control"), "no-store");
  assert.equal(api.calls[0].url, "https://api.example/v1/views/intro-to-hoopR");
  assert.match(api.calls[0].auth ?? "", /^Bearer [\w-]+\.[\w-]+\.[\w-]+$/);
  assert.deepEqual(api.calls[0].body, { visitor: visitorHash(env.viewsHashSecret, "203.0.113.9") });
  assert.match(visitorHash(env.viewsHashSecret, "203.0.113.9"), /^[0-9a-f]{64}$/);
  assert.notEqual(visitorHash(env.viewsHashSecret, "203.0.113.9"), visitorHash(env.viewsHashSecret, "203.0.113.10"));
});

test("GET never sends a body and never increments", async () => {
  const api = fakeApi(200, { slug: "x", count: 3 });
  const res = await createViewsHandler({ env, fetcher: api.fetcher, limiter: allow })(req(), "x", "GET");
  assert.deepEqual(await res.json(), { count: 3 });
  assert.equal(api.calls[0].method, "GET");
  assert.equal(api.calls[0].body, undefined);
});

for (const [why, deps] of [
  ["no API configured", { env: null, fetcher: fakeApi().fetcher }],
  ["API 503", { env, fetcher: fakeApi(503, { detail: "database not configured" }).fetcher }],
  ["API throws / times out", { env, fetcher: (async () => { throw new Error("aborted"); }) as typeof fetch }],
  ["API returns junk", { env, fetcher: fakeApi(200, { nope: 1 }).fetcher }],
] as const) {
  test(`${why} → 200 {count:null}, never throws`, async () => {
    const res = await createViewsHandler({ ...deps, limiter: allow })(req(), "x", "POST");
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { count: null });
  });
}

test("unconfigured env skips the network entirely", async () => {
  const api = fakeApi();
  await createViewsHandler({ env: null, fetcher: api.fetcher, limiter: allow })(req(), "x", "POST");
  assert.equal(api.calls.length, 0);
});

test("bad slugs are 400 before any call; real note slugs pass", async () => {
  const api = fakeApi();
  const h = createViewsHandler({ env, fetcher: api.fetcher, limiter: allow });
  for (const slug of ["../x", "a".repeat(101), "-lead", "x y", ""]) assert.equal((await h(req(), slug, "POST")).status, 400, slug);
  assert.equal(api.calls.length, 0);
  assert.ok(SLUG_RE.test("intro-to-hoopR"));
});

test("per-IP limiter answers 429", async () => {
  const api = fakeApi();
  const h = createViewsHandler({ env, fetcher: api.fetcher, limiter: { take: () => false } });
  assert.equal((await h(req(), "x", "POST")).status, 429);
  assert.equal(api.calls.length, 0);
});

test("only known note slugs are counted; unknown slugs 404 before the limiter", async () => {
  const isKnownSlug = (s: string) => s === "intro-to-hoopR";
  const known = fakeApi();
  const r1 = await createViewsHandler({ env, fetcher: known.fetcher, limiter: allow, isKnownSlug })(req(), "intro-to-hoopR", "POST");
  assert.equal(r1.status, 200);
  assert.equal(known.calls.length, 1);

  const unknown = fakeApi();
  const limiter = { take: () => { throw new Error("limiter must not run"); } };
  const r2 = await createViewsHandler({ env, fetcher: unknown.fetcher, limiter, isKnownSlug })(req(), "not-a-note", "POST");
  assert.equal(r2.status, 404);
  assert.equal(unknown.calls.length, 0);
});

test("apiEnv sets viewsHashSecret from VIEWS_HASH_SECRET, falling back to SAIEM_API_SECRET", () => {
  assert.equal(apiEnv({ ...process.env, API_BASE_URL: "https://x", SAIEM_API_SECRET: "s", VIEWS_HASH_SECRET: "v" })?.viewsHashSecret, "v");
  assert.equal(apiEnv({ ...process.env, API_BASE_URL: "https://x", SAIEM_API_SECRET: "s", VIEWS_HASH_SECRET: undefined })?.viewsHashSecret, "s");
});
