import Link from "next/link";
import { formatEntryNumber, isGated, type LabEntry } from "@lib/lab/registry-schema";
import { Stamp } from "./Stamp";

export function EntryCard({ entry }: { entry: LabEntry }) {
  return (
    <Link href={`/lab/${entry.slug}`} className="group relative block border border-rule bg-card p-4 hover:border-brand">
      <p className="font-mono text-[11px] text-muted">{formatEntryNumber(entry.n)}{isGated(entry) ? " · 🔒 run needs sign-in" : ""}</p>
      <p className="mt-1 font-sans text-base font-semibold group-hover:text-brand">{entry.title}</p>
      <p className="mt-2 line-clamp-2 text-sm text-muted">{entry.summary}</p>
      <p className="mt-3 font-mono text-[10px] text-muted">{entry.runtime.join(" · ")}</p>
      <Stamp status={entry.status} className="absolute right-3 top-3" />
    </Link>
  );
}
