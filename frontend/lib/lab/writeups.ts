import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export function readWriteup(slug: string, root: string = process.cwd()): { source: string } | null {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  const file = path.join(root, "content", "lab", `${slug}.mdx`);
  if (!existsSync(file)) return null;
  return { source: matter(readFileSync(file, "utf8")).content }; // metadata lives in the registry, not frontmatter
}
