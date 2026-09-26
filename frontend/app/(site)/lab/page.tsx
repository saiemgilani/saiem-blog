import type { Metadata } from "next";
import Link from "next/link";
import { LAB } from "@content/lab/registry";
import { EntryCard } from "@components/lab/EntryCard";
import { pageMetadata } from "@lib/metadata";

const DESCRIPTION = "Ideas that don't fit neatly anywhere else: sketches, prototypes, and the occasional thing that ships.";

export const metadata: Metadata = {
  title: "Lab",
  description: DESCRIPTION,
  ...pageMetadata("/lab"),
};
const RUNTIMES = ["browser", "server", "python", "llm"] as const;

export default async function LabIndex({ searchParams }: { searchParams: Promise<{ runtime?: string }> }) {
  const { runtime } = await searchParams;
  const active = RUNTIMES.find((r) => r === runtime);
  const entries = [...LAB].filter((e) => e.status !== "archived" && (!active || e.runtime.includes(active))).sort((a, b) => b.n - a.n);
  return (
    <section className="py-12">
      <h1 className="font-display text-4xl">The lab</h1>
      <p className="mt-3 max-w-[60ch] text-muted">{DESCRIPTION}</p>
      <nav className="mt-6 flex gap-3 font-mono text-xs">
        <Link href="/lab" className={!active ? "text-brand" : "text-muted hover:text-ink"}>all</Link>
        {RUNTIMES.map((r) => <Link key={r} href={`/lab?runtime=${r}`} className={active === r ? "text-brand" : "text-muted hover:text-ink"}>{r}</Link>)}
      </nav>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((e) => <li key={e.slug}><EntryCard entry={e} /></li>)}
      </ul>
      {entries.length === 0 && <p className="mt-6 font-mono text-xs text-muted">Nothing on the bench with that runtime yet.</p>}
    </section>
  );
}
