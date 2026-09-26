import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { listNotes, readNote } from "../lib/notes.ts";

function fixture(files: Record<string, string>): string {
  const dir = mkdtempSync(path.join(tmpdir(), "notes-"));
  for (const [name, body] of Object.entries(files)) writeFileSync(path.join(dir, name), body);
  return dir;
}

const dir = fixture({
  "intro-to-hoopR.mdx": "---\ntitle: \"{hoopR}\"\ndate: '2022-05-08'\nexcerpt: 'hoops'\n---\nBody words here.",
  "newer.mdx": "---\ntitle: Newer\ndate: 2024-01-02\n---\nx",
  "undated.mdx": "---\ntitle: Undated\n---\nx",
  "garbled-date.mdx": "---\ntitle: Garbled\ndate: 'not a date'\n---\nx",
  "no-frontmatter.mdx": "Just prose, no frontmatter at all.",
  "README.md": "not a note",
});

test("slugs are filenames (case preserved) — the live URL contract", () => {
  assert.equal(readNote("intro-to-hoopR", dir)?.slug, "intro-to-hoopR");
});

test("sorted newest first; undated/garbled sort last, by slug", () => {
  assert.deepEqual(listNotes(dir).map((n) => n.slug), ["newer", "intro-to-hoopR", "garbled-date", "no-frontmatter", "undated"]);
});

test("missing/garbled frontmatter never throws and falls back sanely", () => {
  const bare = readNote("no-frontmatter", dir);
  assert.equal(bare?.title, "no-frontmatter");
  assert.equal(bare?.date, null);
  assert.equal(bare?.excerpt, "");
  assert.equal(readNote("garbled-date", dir)?.date, null);
  assert.equal(readNote("newer", dir)?.date, "2024-01-02");   // YAML Date object → ISO day
});

test("path traversal and unknown slugs return null", () => {
  assert.equal(readNote("../package", dir), null);
  assert.equal(readNote("does-not-exist", dir), null);
});

test("a missing notes directory lists nothing instead of throwing", () => {
  assert.deepEqual(listNotes(path.join(dir, "nope")), []);
});
