import { test } from "node:test";
import assert from "node:assert/strict";
import { getProjects } from "../lib/projects.ts";
import type { ApiEnv } from "../lib/api/client.ts";

const env: ApiEnv = { baseUrl: "https://api.example", secret: "s".repeat(32) };
const ok = (body: unknown) => (async () => new Response(JSON.stringify(body), { status: 200 })) as typeof fetch;
const row = (id: string, extra: Record<string, unknown> = {}) => ({ id, title: id.toUpperCase(), summary: "s", url: `https://${id}.example/`, repo: `o/${id}`, tags: ["t"], ...extra });

test("live payload → typed projects in API order; malformed rows and non-https urls are neutralized", async () => {
  const p = await getProjects(env, ok({ projects: [row("a"), row("b", { url: "http://plain.example" }), { id: "c" }, { title: "no id" }] }));
  assert.deepEqual(p.map((x) => x.id), ["a", "b"]);
  assert.equal(p[1].url, null);
  assert.deepEqual(p[0], { id: "a", title: "A", summary: "s", url: "https://a.example/", repo: "o/a", tags: ["t"] });
});

for (const [why, deps] of [
  ["no API configured", [null, ok({ projects: [row("a")] })]],
  ["HTTP 503", [env, (async () => new Response("down", { status: 503 })) as typeof fetch]],
  ["network error", [env, (async () => { throw new Error("aborted"); }) as typeof fetch]],
  ["wrong shape", [env, ok({ items: [] })]],
] as const) {
  test(`${why} → [] and never throws`, async () => {
    assert.deepEqual(await getProjects(deps[0], deps[1]), []);
  });
}
