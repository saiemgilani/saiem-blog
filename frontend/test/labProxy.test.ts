import { test } from "node:test";
import assert from "node:assert/strict";
import { createLabDataHandler } from "../lib/lab/githubAsset.ts";
import { LAB } from "../content/lab/registry.ts";

const OK_Q = "repo=sportsdataverse/sportsdataverse-data&tag=espn_nba_rosters&asset=rosters_2026.parquet";
const req = (q: string, headers: Record<string, string> = {}) => new Request(`https://www.saiemgilani.com/api/lab/data?${q}`, { headers: { "x-forwarded-for": "1.2.3.4", ...headers } });
const allow = { take: () => true };

function fakeGitHub(opts: { location?: string | null; status?: number } = {}) {
  const calls: { url: string; method: string; range?: string | null }[] = [];
  const fetcher = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    const method = init?.method ?? "GET";
    calls.push({ url, method, range: new Headers(init?.headers).get("range") });
    if (url.startsWith("https://github.com/")) {
      const loc = opts.location === undefined ? "https://release-assets.githubusercontent.com/signed?x=1" : opts.location;
      return new Response(null, { status: 302, headers: loc ? { location: loc } : {} });
    }
    const status = opts.status ?? 206;
    return new Response(status === 206 ? "PAR1" : null, { status, headers: { "content-range": "bytes 0-3/72365", "content-length": "4", "accept-ranges": "bytes", "content-type": "application/octet-stream", "set-cookie": "leak=1" } });
  }) as typeof fetch;
  return { fetcher, calls };
}

test("undeclared assets are refused with 403 and GitHub is never contacted", async () => {
  const gh = fakeGitHub();
  const h = createLabDataHandler({ entries: LAB, fetcher: gh.fetcher, limiter: allow });
  for (const q of [
    "repo=sportsdataverse/sportsdataverse-data&tag=espn_nba_rosters&asset=rosters_2025.parquet",
    "repo=sportsdataverse/sportsdataverse-data&tag=espn_wnba_rosters&asset=rosters_2026.parquet",
    "repo=evil/repo&tag=espn_nba_rosters&asset=rosters_2026.parquet",
  ]) assert.equal((await h(req(q), "GET")).status, 403, q);
  assert.equal(gh.calls.length, 0);
});

test("malformed requests are 400 before any lookup", async () => {
  const gh = fakeGitHub();
  const h = createLabDataHandler({ entries: LAB, fetcher: gh.fetcher, limiter: allow });
  for (const q of ["", "repo=a/b&tag=t", "repo=a/b&tag=t&asset=../x", "repo=a/b&tag=t&asset=d/x.parquet"]) {
    assert.equal((await h(req(q), "GET")).status, 400, q);
  }
  assert.equal(gh.calls.length, 0);
});

test("happy path: range forwarded, 206 streamed, only safe headers copied", async () => {
  const gh = fakeGitHub();
  const h = createLabDataHandler({ entries: LAB, fetcher: gh.fetcher, limiter: allow });
  const res = await h(req(OK_Q, { range: "bytes=0-3" }), "GET");
  assert.equal(res.status, 206);
  assert.equal(await res.text(), "PAR1");
  assert.equal(res.headers.get("content-range"), "bytes 0-3/72365");
  assert.equal(res.headers.get("set-cookie"), null, "upstream cookies never pass through");
  assert.equal(gh.calls.at(-1)?.range, "bytes=0-3");
});

test("signed URL is cached for 60s (one HEAD for many reads)", async () => {
  let t = 0;
  const gh = fakeGitHub();
  const h = createLabDataHandler({ entries: LAB, fetcher: gh.fetcher, limiter: allow, now: () => t });
  await h(req(OK_Q), "GET");
  await h(req(OK_Q), "GET");
  assert.equal(gh.calls.filter((c) => c.url.startsWith("https://github.com/")).length, 1);
  t += 61_000;
  await h(req(OK_Q), "GET");
  assert.equal(gh.calls.filter((c) => c.url.startsWith("https://github.com/")).length, 2);
});

test("a declared asset GitHub no longer has → 404, not 500", async () => {
  const noRedirect = createLabDataHandler({ entries: LAB, fetcher: fakeGitHub({ location: null }).fetcher, limiter: allow });
  assert.equal((await noRedirect(req(OK_Q), "GET")).status, 404);
  const gone = createLabDataHandler({ entries: LAB, fetcher: fakeGitHub({ status: 404 }).fetcher, limiter: allow });
  assert.equal((await gone(req(OK_Q), "GET")).status, 404);
  const broken = createLabDataHandler({ entries: LAB, fetcher: fakeGitHub({ status: 503 }).fetcher, limiter: allow });
  assert.equal((await broken(req(OK_Q), "GET")).status, 502);
});

test("rate-limited callers get 429 before any lookup", async () => {
  const gh = fakeGitHub();
  const h = createLabDataHandler({ entries: LAB, fetcher: gh.fetcher, limiter: { take: () => false } });
  assert.equal((await h(req(OK_Q), "GET")).status, 429);
  assert.equal(gh.calls.length, 0);
});
