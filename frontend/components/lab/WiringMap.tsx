import { entryLabel, type Wiring } from "@lib/lab/wiring";
import type { LabStatus } from "@lib/lab/registry-schema";

const DOT: Record<LabStatus, string> = { sketch: "var(--muted)", prototype: "var(--brand)", shipped: "var(--shipped)", archived: "var(--muted)" };
const ENTRY_W = 220;
const SOURCE_W = 200;

export function WiringMap({ layout }: { layout: Wiring }) {
  const { width, height, entries, sources, wires } = layout;
  return (
    <div className="wiring mt-6">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`Lab wiring map: ${entries.length} entries, ${sources.length} data sources`}
        className="font-mono text-[11px]"
      >
        <g fill="none" stroke="var(--brand)" strokeWidth={1.25}>
          {wires.map((w) => <path key={`${w.from}->${w.to}`} d={w.path} />)}
        </g>
        <g>
          {entries.map((e) => (
            <a key={e.slug} href={`/lab/${e.slug}`} aria-label={`${entryLabel(e.n, e.title)} (${e.status})`}>
              <rect x={e.x} y={e.y - 14} width={ENTRY_W} height={28} fill="var(--card)" stroke="var(--rule)" />
              <circle cx={e.x + 12} cy={e.y} r={4} fill={DOT[e.status]} />
              <text x={e.x + 24} y={e.y + 4} fill="var(--ink)">{entryLabel(e.n, e.title)}</text>
            </a>
          ))}
        </g>
        <g>
          {sources.map((s) => (
            <g key={s.key}>
              <title>{s.full}</title>
              <text x={s.x + 8} y={s.y - 18} fill="var(--muted)" fontSize={9}>{s.kind}</text>
              <rect x={s.x} y={s.y - 14} width={SOURCE_W} height={28} fill="var(--card)" stroke="var(--rule)" />
              <text x={s.x + 8} y={s.y + 4} fill="var(--ink)">{s.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
