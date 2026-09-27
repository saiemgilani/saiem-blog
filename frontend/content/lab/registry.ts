import { LabRegistrySchema, type LabEntry } from "../../lib/lab/registry-schema.ts";

// Entry numbers are permanent. Never renumber, never reuse — archive instead.
const entries: LabEntry[] = [
  {
    n: 1,
    slug: "peek-inside-a-release",
    title: "Peek inside a release",
    summary: "Run SQL against a SportsDataverse release file without downloading it — DuckDB in your browser reads just the bytes it needs.",
    status: "prototype",
    kind: "writeup",
    runtime: ["browser"],
    sources: [{ kind: "release", repo: "sportsdataverse/sportsdataverse-data", tag: "espn_nba_rosters", asset: "rosters_2026.parquet" }],
    started: "2026-09-26",
    tags: ["duckdb", "parquet", "nba"],
  },
  {
    n: 2,
    slug: "series-odds",
    title: "Series odds, two ways",
    summary: "Exact best-of-N series win probability from a per-game edge, checked against a Monte-Carlo run on the server.",
    status: "prototype",
    kind: "app",
    runtime: ["python"],
    sources: [],
    limits: "timeout 30 s · 512 MB · 5 runs/day",
    started: "2026-09-27",
    tags: ["probability", "simulation", "python"],
  },
];

export const LAB: LabEntry[] = LabRegistrySchema.parse(entries);
