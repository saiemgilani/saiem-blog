import type { LabEntry } from "@lib/lab/registry-schema";
import { MarginRail } from "./MarginRail";
import { Stamp } from "./Stamp";

export function EntryShell({ entry, children }: { entry: LabEntry; children: React.ReactNode }) {
  return (
    <div className="grid gap-8 py-12 lg:grid-cols-[180px_1fr]">
      <MarginRail entry={entry} />
      <article className="min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-display text-4xl leading-tight">{entry.title}</h1>
          <Stamp status={entry.status} />
        </div>
        <p className="mt-3 max-w-[65ch] text-muted">{entry.summary}</p>
        <div className="prose mt-8 max-w-[70ch] dark:prose-invert prose-a:text-brand prose-headings:font-display">{children}</div>
      </article>
    </div>
  );
}
