import { formatEntryNumber, type LabEntry, type LabSource } from "@lib/lab/registry-schema";

function sourceLabel(s: LabSource): { label: string; href: string } {
  switch (s.kind) {
    case "release":
      return { label: `${s.tag}/${s.asset}`, href: `https://github.com/${s.repo}/releases/tag/${encodeURIComponent(s.tag)}` };
    case "sdv-org":
      return { label: `sportsdataverse.org${s.path}`, href: `https://sportsdataverse.org${s.path}` };
    case "sdv-api":
      return { label: `data.sportsdataverse.org${s.path}`, href: `https://data.sportsdataverse.org${s.path}` };
    case "github":
      return { label: `api.github.com${s.path}`, href: `https://api.github.com${s.path}` };
  }
}

export function MarginRail({ entry }: { entry: LabEntry }) {
  const row = "mt-3 text-muted";
  return (
    <aside className="break-words font-mono text-[11px] leading-relaxed lg:border-r lg:border-rule lg:pr-4">
      <p className="text-ink">LAB / {formatEntryNumber(entry.n)}</p>
      <p className={row}>STARTED<br /><span className="text-ink">{entry.started}</span></p>
      {entry.updated && <p className={row}>UPDATED<br /><span className="text-ink">{entry.updated}</span></p>}
      <p className={row}>RUNS IN<br /><span className="text-ink">{entry.runtime.join(", ")}</span></p>
      {entry.sources.length > 0 && (
        <div className={row}>DATA
          <ul>{entry.sources.map((s) => { const x = sourceLabel(s); return <li key={x.href}><a className="text-ink underline decoration-rule underline-offset-2 hover:text-brand" href={x.href}>{x.label} ↗</a></li>; })}</ul>
        </div>
      )}
      {entry.repo && <p className={row}>CODE<br /><a className="text-ink hover:text-brand" href={entry.repo}>github ↗</a></p>}
    </aside>
  );
}
