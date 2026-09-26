import { readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export function readMdxPage(name: "about" | "privacy", root: string = process.cwd()): { title: string; source: string } {
  const { data, content } = matter(readFileSync(path.join(root, "content", "pages", `${name}.mdx`), "utf8"));
  return { title: typeof data.title === "string" ? data.title : name[0].toUpperCase() + name.slice(1), source: content };
}
