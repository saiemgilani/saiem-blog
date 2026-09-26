import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { findViolations, FORBIDDEN, EXEMPT_PATHS } from "./check-dead-domains.mjs";

const SCRIPT = join(dirname(fileURLToPath(import.meta.url)), "check-dead-domains.mjs");
const ROOT = join(dirname(SCRIPT), "..");

test("CLI reports the same clean coverage from the root, scripts/, and lib/", () => {
  const cwds = [ROOT, join(ROOT, "scripts"), join(ROOT, "lib")];
  const counts = cwds.map((cwd) => {
    const result = spawnSync(process.execPath, [SCRIPT], { cwd, encoding: "utf8" });
    assert.equal(result.status, 0, `expected exit 0 from cwd ${cwd}, got ${result.status}: ${result.stdout}${result.stderr}`);
    const match = result.stdout.match(/dead-domain guard: clean \((\d+) files\)/);
    assert.ok(match, `expected clean-count message from cwd ${cwd}, got: ${result.stdout}`);
    return Number(match[1]);
  });
  assert.equal(counts[0], counts[1]);
  assert.equal(counts[1], counts[2]);
  assert.ok(counts[0] > 100, `expected > 100 files scanned, got ${counts[0]}`);
});

test("flags the unowned .me domain in any case, but not lookalikes", () => {
  const hits = findViolations([
    { path: "a.md", text: "see https://saiemgilani.me/blog\nand SAIEMGILANI.ME too" },
    { path: "b.md", text: "saiemgilani.medium.com is someone else's host" },
  ]);
  assert.deepEqual(hits.map((h) => [h.path, h.line, h.name]), [
    ["a.md", 1, "unowned-domain"],
    ["a.md", 2, "unowned-domain"],
  ]);
});

test("flags the stale vercel alias and the non-canonical apex URL", () => {
  const hits = findViolations([
    { path: "robots.txt", text: "Sitemap: https://saiem-blog.vercel.app/sitemap.xml" },
    { path: "rss.ts", text: 'const siteURL = "https://saiemgilani.com";' },
    { path: "ok.ts", text: 'const siteURL = "https://www.saiemgilani.com";' },
  ]);
  assert.deepEqual(hits.map((h) => [h.path, h.name]), [
    ["robots.txt", "stale-vercel-alias"],
    ["rss.ts", "non-canonical-apex"],
  ]);
});

test("the guard's own files are exempt (they must spell the patterns)", () => {
  assert.ok(EXEMPT_PATHS.includes("scripts/check-dead-domains.mjs"));
  assert.ok(EXEMPT_PATHS.includes("scripts/check-dead-domains.test.mjs"));
  const hits = findViolations([{ path: "scripts/check-dead-domains.mjs", text: "saiemgilani.me" }]);
  assert.equal(hits.length, 0);
});

test("every pattern has a stable name", () => {
  assert.deepEqual(FORBIDDEN.map((f) => f.name), ["unowned-domain", "stale-vercel-alias", "non-canonical-apex"]);
});
