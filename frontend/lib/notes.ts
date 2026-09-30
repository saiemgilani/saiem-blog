import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type NoteMeta = { slug: string; title: string; date: string | null; excerpt: string; readingMinutes: number; order: number | null };
export type Note = NoteMeta & { source: string };

const WORDS_PER_MINUTE = 220;
const SLUG = /^[A-Za-z0-9_-]+$/;

export function notesDir(root: string = process.cwd()): string {
  return path.join(root, "content", "notes");
}

function isoDay(v: unknown): string | null {
  const d = v instanceof Date ? v : typeof v === "string" ? new Date(v) : null;
  return d && !Number.isNaN(d.getTime()) ? d.toISOString().slice(0, 10) : null;
}

export function readNote(slug: string, dir: string = notesDir()): Note | null {
  if (!SLUG.test(slug)) return null;
  const file = path.join(dir, `${slug}.mdx`);
  if (!existsSync(file)) return null;
  const { data, content } = matter(readFileSync(file, "utf8"));
  const title = typeof data.title === "string" && data.title.trim() ? data.title.trim() : slug;
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title,
    date: isoDay(data.date),
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    // Optional hand-set position for the package notes. Writing (no order) leads the list newest-first;
    // ordered notes follow, ascending by order (see listNotes).
    order: typeof data.order === "number" && Number.isFinite(data.order) ? data.order : null,
    source: content,
  };
}

export function listNotes(dir: string = notesDir()): NoteMeta[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => readNote(f.slice(0, -".mdx".length), dir))
    .filter((n): n is Note => n !== null)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- destructuring drops `source` from the rest
    .map(({ source: _source, ...meta }) => meta)
    // Writing (no `order`) first, then the ordered package notes by `order`; ties within either group
    // go newest first (undated last), then by slug.
    .sort(
      (a, b) =>
        Number(a.order !== null) - Number(b.order !== null) ||
        (a.order ?? 0) - (b.order ?? 0) ||
        (b.date ?? "").localeCompare(a.date ?? "") ||
        a.slug.localeCompare(b.slug),
    );
}
