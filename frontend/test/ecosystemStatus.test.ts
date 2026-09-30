import { test } from "node:test";
import assert from "node:assert/strict";
import { getEcosystemStatus, summarizeStatus, STATUS_SUMMARY_URL } from "../lib/ecosystemStatus.ts";

// Trimmed from the real snapshot (status/summary.json, 2026-09-30): extra keys ride along and are ignored.
const snapshot = {
  generated_at: "2026-09-30T14:01:03.572489+00:00",
  producers: [
    { repo: "sportsdataverse/cfbfastR-cfb-data", state: "fresh", label: "College football (ESPN)" },
    { repo: "sportsdataverse/hoopR-nba-data", state: "idle" },
    { repo: "sportsdataverse/hoopR-mbb-data", state: "idle" },
    { repo: "sportsdataverse/baseballr-data", state: "stale" },
    { repo: "sportsdataverse/x-data", state: "failing" },
    { repo: "sportsdataverse/y-data", state: "unknown" },
  ],
  totals: { producers: { fresh: 1, idle: 2, stale: 1 } },
};
const ok = (body: unknown) => (async () => new Response(JSON.stringify(body), { status: 200 })) as typeof fetch;

test("counts producers by state and normalises the timestamp to a valid <time dateTime>", () => {
  assert.deepEqual(summarizeStatus(snapshot), {
    generatedAt: "2026-09-30T14:01:03.572Z",
    counts: { fresh: 1, idle: 2, stale: 1, failing: 1, unknown: 1 },
  });
});

test("a state this site doesn't know, a missing state or a non-object producer is folded into unknown", () => {
  const r = summarizeStatus({ generated_at: "2026-09-30T00:00:00Z", producers: [{ state: "fresh" }, { state: "on-fire" }, {}, null, "idle"] });
  assert.deepEqual(r?.counts, { fresh: 1, idle: 0, stale: 0, failing: 0, unknown: 4 });
});

for (const [why, body] of [
  ["not an object", "nope"],
  ["null", null],
  ["no generated_at", { producers: [{ state: "fresh" }] }],
  ["generated_at not a string", { generated_at: 20260930, producers: [{ state: "fresh" }] }],
  ["generated_at not a date", { generated_at: "yesterday-ish", producers: [{ state: "fresh" }] }],
  ["producers not an array", { generated_at: "2026-09-30T00:00:00Z", producers: { fresh: 8 } }],
  ["no producers", { generated_at: "2026-09-30T00:00:00Z", producers: [] }],
] as const) {
  test(`malformed snapshot (${why}) → null`, () => assert.equal(summarizeStatus(body), null));
}

test("fetches the snapshot URL with hourly revalidation and a timeout", async () => {
  const calls: { url: unknown; init: RequestInit }[] = [];
  const fetcher = (async (url: unknown, init: RequestInit) => {
    calls.push({ url, init });
    return new Response(JSON.stringify(snapshot), { status: 200 });
  }) as unknown as typeof fetch;
  const r = await getEcosystemStatus(fetcher);
  assert.equal(r?.counts.idle, 2);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, STATUS_SUMMARY_URL);
  assert.equal(calls[0].init.next?.revalidate, 3600);
  assert.ok(calls[0].init.signal instanceof AbortSignal);
});

for (const [why, fetcher] of [
  ["HTTP 404", (async () => new Response("nope", { status: 404 })) as typeof fetch],
  ["network error / timeout", (async () => { throw new Error("aborted"); }) as typeof fetch],
  ["body is not JSON", (async () => new Response("<html>", { status: 200 })) as typeof fetch],
  ["wrong shape", ok({ producers: "all good" })],
] as const) {
  test(`${why} → null, never throws`, async () => assert.equal(await getEcosystemStatus(fetcher), null));
}
