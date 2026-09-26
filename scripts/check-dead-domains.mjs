// Fails CI when a dead or non-canonical host appears in any tracked text file.
// saiemgilani.me is no longer owned (detached 2026-09-26); the canonical host is
// https://www.saiemgilani.com (the apex 301s to it). Change the apex rule here if
// the canonical host ever flips.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// Script lives at <root>/scripts/check-dead-domains.mjs — resolve the root
// from here so results don't depend on the caller's cwd.
const ROOT = fileURLToPath(new URL("..", import.meta.url));

export const FORBIDDEN = [
  { name: "unowned-domain", re: /saiemgilani\.me\b/i },
  { name: "stale-vercel-alias", re: /saiem-?blog\.vercel\.app/i },
  { name: "non-canonical-apex", re: /https?:\/\/saiemgilani\.com/i },
];

export const EXEMPT_PATHS = ["scripts/check-dead-domains.mjs", "scripts/check-dead-domains.test.mjs"];

const BINARY = /\.(png|jpe?g|gif|webp|ico|woff2?|ttf|otf|pdf|zip|gz|parquet|mp4|webm)$/i;

/**
 * Scan file contents for dead or non-canonical host references.
 * Files listed in EXEMPT_PATHS are skipped (they must spell the patterns).
 * @param {{ path: string, text: string }[]} files repo-root-relative paths with their contents
 * @returns {{ path: string, line: number, name: string, excerpt: string }[]} one entry per matching line and rule (1-based line numbers)
 */
export function findViolations(files) {
  const hits = [];
  for (const { path, text } of files) {
    if (EXEMPT_PATHS.includes(path)) continue;
    const lines = text.split(/\r?\n/);
    lines.forEach((line, i) => {
      for (const { name, re } of FORBIDDEN) {
        if (re.test(line)) hits.push({ path, line: i + 1, name, excerpt: line.trim().slice(0, 140) });
      }
    });
  }
  return hits;
}

/**
 * Read every git-tracked, non-binary file, resolved from the repo root so the
 * result does not depend on the caller's working directory.
 * @returns {{ path: string, text: string }[]}
 */
function trackedTextFiles() {
  const out = execFileSync("git", ["ls-files", "-z"], { cwd: ROOT, encoding: "utf8" });
  return out
    .split("\0")
    .filter((p) => p && !BINARY.test(p))
    .map((path) => ({ path, text: readFileSync(join(ROOT, path), "utf8") }));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const files = trackedTextFiles();
  const hits = findViolations(files);
  for (const h of hits) console.log(`${h.path}:${h.line}  [${h.name}]  ${h.excerpt}`);
  if (hits.length) {
    console.error(`\n${hits.length} dead/non-canonical host reference(s). Canonical host: https://www.saiemgilani.com`);
    process.exit(1);
  }
  console.log(`dead-domain guard: clean (${files.length} files)`);
}
