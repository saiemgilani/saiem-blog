import Link from "next/link";
import type { Metadata } from "next";
import { listNotes } from "@lib/notes";

export const metadata: Metadata = { title: "Notes", alternates: { canonical: "/notes" } };

export default function NotesIndex() {
  const notes = listNotes();
  return (
    <section className="py-12">
      <h1 className="font-display text-4xl">Notes</h1>
      <ul className="mt-8 divide-y divide-rule border-y border-rule bg-card">
        {notes.map((n) => (
          <li key={n.slug} className="px-4 py-4">
            <Link href={`/notes/${n.slug}`} className="font-display text-xl hover:text-brand">{n.title}</Link>
            <p className="mt-1 font-mono text-xs text-muted">{n.date ?? "undated"} · {n.readingMinutes} min</p>
            {n.excerpt && <p className="mt-2 text-sm text-muted">{n.excerpt}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
