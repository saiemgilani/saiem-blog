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
    limits: "timeout 30 s · 512 MB · 5 runs/day · no network sandbox",
    started: "2026-09-27",
    tags: ["probability", "simulation", "python"],
  },
  {
    n: 3,
    slug: "ask-the-lab",
    title: "Ask the lab",
    summary: "A metered chat over the lab's declared data sources, streamed through AI Gateway with a model allowlist.",
    status: "prototype",
    kind: "app",
    runtime: ["llm"],
    sources: [{ kind: "release", repo: "sportsdataverse/sportsdataverse-data", tag: "espn_nba_rosters", asset: "rosters_2026.parquet" }],
    llm: { model: "anthropic/claude-haiku-4-5", maxOutputTokens: 600 },
    limits: "600 output tokens per answer · 2 units reserved per ask, unused refunded · 5 units/day",
    started: "2026-09-27",
    tags: ["llm", "ai-gateway"],
  },
  {
    n: 4,
    slug: "shot-chart-from-a-release",
    title: "A shot chart from a release file",
    summary: "A hexbin shot chart drawn in your browser from one NBA season's parquet file on a release, read by byte range with DuckDB-wasm.",
    status: "prototype",
    kind: "writeup",
    runtime: ["browser"],
    sources: [{ kind: "release", repo: "sportsdataverse/sportsdataverse-data", tag: "nba_stats_shots", asset: "shots_2026.parquet" }],
    limits: "reads ~4 MB per season · one season for now",
    started: "2026-09-30",
    tags: ["duckdb", "parquet", "nba", "d3"],
  },
];

export const LAB: LabEntry[] = LabRegistrySchema.parse(entries);
