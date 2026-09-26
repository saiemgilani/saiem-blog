import { test } from "node:test";
import assert from "node:assert/strict";
import { getSdvPackages, getEcosystemStats, type SdvPackage } from "../lib/sdvOrg.ts";

const pkg = (title: string, extra: Record<string, unknown> = {}) => ({
  _id: "x", title, repoType: "R", sports: "NBA", content: "desc", sourceHref: `https://github.com/sportsdataverse/${title}`,
  docsHref: `https://${title}.sportsdataverse.org/`, logoHref: null, published: false, ...extra,
});
const ok = (body: unknown) => (async () => new Response(JSON.stringify(body), { status: 200 })) as typeof fetch;
const fallback: SdvPackage[] = [{ title: "hoopR", repoType: "R", sports: "NBA", content: "", sourceHref: "https://github.com/sportsdataverse/hoopR", docsHref: null, logoHref: null }];

test("live payload: keeps valid packages, sorted by title, drops malformed rows", async () => {
  const r = await getSdvPackages(ok({ success: true, message: [pkg("wehoop"), pkg("cfbfastR"), { title: "" }, { junk: 1 }] }), fallback);
  assert.equal(r.live, true);
  assert.deepEqual(r.packages.map((p) => p.title), ["cfbfastR", "wehoop"]);
  assert.equal("_id" in r.packages[0], false, "only whitelisted fields survive");
});

for (const [why, fetcher] of [
  ["HTTP 500", (async () => new Response("boom", { status: 500 })) as typeof fetch],
  ["network error / timeout", (async () => { throw new Error("aborted"); }) as typeof fetch],
  ["wrong shape", ok({ packages: [] })],
  ["empty list", ok({ success: true, message: [] })],
] as const) {
  test(`${why} → committed fallback, never throws`, async () => {
    const r = await getSdvPackages(fetcher, fallback);
    assert.equal(r.live, false);
    assert.deepEqual(r.packages, fallback);
  });
}

test("stats: numbers pass through; anything odd → null", async () => {
  assert.deepEqual(await getEcosystemStats(ok({ repos: 40, gists: 1, followers: 900, githubStars: 5000, forks: 700 })), { repos: 40, followers: 900, githubStars: 5000, forks: 700 });
  assert.equal(await getEcosystemStats(ok({ repos: "40" })), null);
  assert.equal(await getEcosystemStats((async () => { throw new Error("x"); }) as typeof fetch), null);
});
