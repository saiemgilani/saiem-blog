import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { listNotes, readNote } from "@lib/notes";
import { MdxRenderer } from "@components/mdx/MdxRenderer";
import { pageMetadata } from "@lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return listNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = readNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.excerpt || undefined,
    ...pageMetadata(`/notes/${slug}`, { type: "article" }, { ownImage: true }),
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = readNote(slug);
  if (!note) notFound();
  return (
    <article className="mx-auto max-w-[70ch] py-12">
      <p className="font-mono text-xs text-muted">{note.date ?? "undated"} · {note.readingMinutes} min</p>
      <h1 className="mt-2 font-display text-4xl leading-tight">{note.title}</h1>
      <div className="prose mt-8 max-w-none dark:prose-invert prose-a:text-brand prose-headings:font-display">
        <MdxRenderer source={note.source} />
      </div>
    </article>
  );
}
