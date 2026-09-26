import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import type { LabEntry } from "./registry-schema.ts";

export function scanRepo(frontendRoot: string): { writeupSlugs: string[]; appSlugs: string[] } {
  const mdxDir = path.join(frontendRoot, "content", "lab");
  const appDir = path.join(frontendRoot, "app", "(site)", "lab");
  const writeupSlugs = existsSync(mdxDir) ? readdirSync(mdxDir).filter((f) => f.endsWith(".mdx")).map((f) => f.slice(0, -4)) : [];
  const appSlugs = existsSync(appDir)
    ? readdirSync(appDir, { withFileTypes: true })
        .filter((d) => d.isDirectory() && !d.name.startsWith("[") && existsSync(path.join(appDir, d.name, "page.tsx")))
        .map((d) => d.name)
    : [];
  return { writeupSlugs, appSlugs };
}

export function checkLabImplementations(entries: LabEntry[], writeupSlugs: string[], appSlugs: string[]): string[] {
  const problems: string[] = [];
  const known = new Set(entries.map((x) => x.slug));
  for (const x of entries) {
    const hasMdx = writeupSlugs.includes(x.slug);
    const hasApp = appSlugs.includes(x.slug);
    if (x.kind === "writeup" && !hasMdx) problems.push(`${x.slug}: kind=writeup but content/lab/${x.slug}.mdx is missing`);
    if (x.kind === "writeup" && hasApp) problems.push(`${x.slug}: kind=writeup but an app route exists at app/(site)/lab/${x.slug}/`);
    if (x.kind === "app" && !hasApp) problems.push(`${x.slug}: kind=app but app/(site)/lab/${x.slug}/page.tsx is missing`);
    if (x.kind === "app" && hasMdx) problems.push(`${x.slug}: kind=app but content/lab/${x.slug}.mdx also exists`);
  }
  for (const s of writeupSlugs) if (!known.has(s)) problems.push(`${s}: content/lab/${s}.mdx has no registry entry`);
  for (const s of appSlugs) if (!known.has(s)) problems.push(`${s}: app route with no registry entry`);
  return problems;
}
