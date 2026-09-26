// Guards content/lab/*.mdx against a next-mdx-remote trap: `blockJS` stays at its
// default `true` (kept on deliberately -- see MdxRenderer.tsx), which silently strips
// any JSX attribute written as a JS expression (`prop={expr}`) -- no build/lint/tsc
// diagnostic, the prop just becomes `undefined` and the widget crashes at runtime.
// Component props in these writeups must be quoted string literals
// (`prop="literal text"`); a quoted attribute is not a JS expression, so `blockJS`
// never touches it, and any `{{...}}` inside the quotes stays literal text.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const LAB_DIR = path.join(process.cwd(), "content", "lab");

test("lab writeups pass defaultSql as a quoted string attribute, never a JS expression", () => {
  const files = readdirSync(LAB_DIR).filter((f) => f.endsWith(".mdx"));
  assert.ok(files.length > 0, "expected at least one lab writeup to check");
  for (const file of files) {
    const src = readFileSync(path.join(LAB_DIR, file), "utf8");
    if (!src.includes("defaultSql")) continue;
    assert.match(src, /defaultSql="[^"]+"/, `${file}: defaultSql must be a quoted string literal`);
    assert.doesNotMatch(src, /defaultSql=\{/, `${file}: defaultSql must not be a JSX expression -- blockJS strips it silently`);
  }
});
