import { formatEntryNumber, type LabEntry, type LabSource } from "./registry-schema.ts";

export function sourceKey(s: LabSource): string {
  return s.kind === "release" ? `release:${s.repo}@${s.tag}/${s.asset}` : `${s.kind}:${s.path}`;
}
const middle = (s: string, max: number) => (s.length <= max ? s : `${s.slice(0, Math.ceil((max - 1) / 2))}…${s.slice(s.length - Math.floor((max - 1) / 2))}`);
export function sourceLabel(s: LabSource): string {
  return middle(s.kind === "release" ? s.asset : s.path, 28);
}
export const entryLabel = (n: number, title: string): string => middle(`${formatEntryNumber(n)} ${title}`, 30);

const ORDER = { release: 0, "sdv-api": 1, "sdv-org": 2, github: 3 } as const;
type Node = { x: number; y: number };
export type Wiring = {
  width: number;
  height: number;
  entries: Array<Node & { slug: string; n: number; title: string; status: LabEntry["status"] }>;
  sources: Array<Node & { key: string; kind: LabSource["kind"]; label: string; full: string }>;
  wires: Array<{ from: string; to: string; path: string }>;
};

export function layoutWiring(all: LabEntry[], opts: { width?: number; rowGap?: number } = {}): Wiring {
  const width = opts.width ?? 720;
  const gap = opts.rowGap ?? 44;
  const live = all.filter((e) => e.status !== "archived");
  const byKey = new Map<string, LabSource>();
  for (const e of live) for (const s of e.sources) byKey.set(sourceKey(s), s);
  const sources = [...byKey.entries()]
    .sort(([, a], [, b]) => ORDER[a.kind] - ORDER[b.kind] || sourceLabel(a).localeCompare(sourceLabel(b)))
    .map(([key, s], i) => ({ key, kind: s.kind, label: sourceLabel(s), full: sourceKey(s), x: width - 200, y: gap * (i + 1) }));
  const entries = live.map((e, i) => ({ slug: e.slug, n: e.n, title: e.title, status: e.status, x: 0, y: gap * (i + 1) }));
  const sy = new Map(sources.map((s) => [s.key, s.y]));
  const wires = live.flatMap((e) =>
    e.sources.map((s) => {
      const y1 = entries.find((n) => n.slug === e.slug)!.y;
      const y2 = sy.get(sourceKey(s))!;
      const x1 = 220;
      const x2 = width - 200;
      const c = (x1 + x2) / 2;
      return { from: e.slug, to: sourceKey(s), path: `M${x1},${y1} C${c},${y1} ${c},${y2} ${x2},${y2}` };
    }),
  );
  const height = gap * (Math.max(entries.length, sources.length) + 1);
  return { width, height, entries, sources, wires };
}
