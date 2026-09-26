import { test } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { checkLabImplementations, scanRepo } from "../lib/lab/scan.ts";
import { LAB } from "../content/lab/registry.ts";
import type { LabEntry } from "../lib/lab/registry-schema.ts";

const e = (slug: string, kind: "writeup" | "app", n: number): LabEntry => ({ n, slug, kind, title: slug, summary: "s", status: "sketch", runtime: ["browser"], sources: [], started: "2026-09-26", tags: [] });

test("pure check: missing, orphaned and double implementations are all reported", () => {
  const problems = checkLabImplementations(
    [e("a", "writeup", 1), e("b", "app", 2), e("c", "writeup", 3)],
    ["a", "c", "orphan-mdx"],      // writeups on disk
    ["b", "c", "orphan-app"],      // app route folders on disk
  );
  assert.deepEqual(problems.sort(), [
    "c: kind=writeup but an app route exists at app/(site)/lab/c/",
    "orphan-app: app route with no registry entry",
    "orphan-mdx: content/lab/orphan-mdx.mdx has no registry entry",
  ]);
  assert.deepEqual(checkLabImplementations([e("a", "writeup", 1)], [], []), ["a: kind=writeup but content/lab/a.mdx is missing"]);
});

test("the real repo is consistent", () => {
  const root = fileURLToPath(new URL("..", import.meta.url));
  const { writeupSlugs, appSlugs } = scanRepo(root);
  assert.deepEqual(checkLabImplementations(LAB, writeupSlugs, appSlugs), []);
});
