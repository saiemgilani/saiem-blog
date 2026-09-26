import Link from "next/link";
import { site } from "@content/site";
import { listNotes } from "@lib/notes";
import { StampedSeal } from "@components/brand/Seal";

export default function Home() {
  const notes = listNotes().slice(0, 3);
  return (
    <>
      <section className="relative grid items-center gap-8 py-16 sm:grid-cols-[1fr_auto]">
        <div>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
            Notes from the <em className="text-brand">workbench.</em>
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg text-muted">{site.description}</p>
          <p className="mt-4 font-mono text-xs text-brand">NOW → {site.now}</p>
        </div>
        <StampedSeal size={200} id="hero-seal" />
      </section>
      <section className="border-t border-rule py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl">Notes</h2>
          <Link href="/notes" className="font-mono text-xs text-muted hover:text-ink">all notes →</Link>
        </div>
        <ul className="mt-4 space-y-3">
          {notes.map((n) => (
            <li key={n.slug}>
              <Link href={`/notes/${n.slug}`} className="hover:text-brand">{n.title}</Link>
              <span className="ml-2 font-mono text-xs text-muted">{n.date?.slice(0, 4) ?? ""}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="border-t border-rule py-10">
        <h2 className="font-display text-2xl">Work</h2>
        <p className="mt-2 text-muted">hoopR, wehoop, cfbfastR, sportsdataverse-py and the rest of the SportsDataverse. <Link href="/work" className="text-brand underline underline-offset-4">See all →</Link></p>
      </section>
    </>
  );
}
