"use client";
import { useState } from "react";
import { useRunGate, RunGatePrompt } from "@components/lab/RunGate";
import { ExampleOutput } from "@components/lab/ExampleOutput";
import type { RunOutcome } from "@lib/lab/runClient";

export type SeriesOddsParams = { p_game: number; best_of: 3 | 5 | 7; home_edge: number; sims: number };
export type SeriesOddsResult = { exact: number; simulated: number; distribution: Record<string, number> };

const inputClass = "w-full border border-rule bg-page px-2 py-1 font-mono text-xs text-ink outline-none";
const buttonClass = "shrink-0 bg-brand px-2.5 py-1 text-on-brand disabled:opacity-60";
const pct = (n: number) => `${(n * 100).toFixed(1)}%`;
const totalGames = (key: string) => key.split("-").reduce((s, n) => s + Number(n), 0);
const sortedEntries = (d: Record<string, number>) => Object.entries(d).sort(([a], [b]) => totalGames(a) - totalGames(b) || a.localeCompare(b));

function DistributionChart({ distribution }: { distribution: Record<string, number> }) {
  const entries = sortedEntries(distribution);
  const max = Math.max(...entries.map(([, v]) => v), 0.0001);
  const barH = 16;
  const gap = 4;
  const chartW = 160;
  const width = 240;
  const height = entries.length * (barH + gap);
  return (
    <svg role="img" aria-label="series score distribution" width="100%" viewBox={`0 0 ${width} ${height}`} className="mt-3">
      {entries.map(([key, value], i) => {
        const w = Math.max((value / max) * chartW, 1);
        const y = i * (barH + gap);
        return (
          <g key={key}>
            <text x={0} y={y + barH / 2 + 4} className="fill-current font-mono text-[10px] text-muted">{key}</text>
            <rect x={34} y={y} width={w} height={barH} className="fill-current text-brand">
              <title>{`${key}: ${pct(value)}`}</title>
            </rect>
            <text x={34 + w + 4} y={y + barH / 2 + 4} className="fill-current font-mono text-[10px] text-ink">{pct(value)}</text>
          </g>
        );
      })}
    </svg>
  );
}

function ResultView({ result }: { result: SeriesOddsResult }) {
  const gap = Math.abs(result.exact - result.simulated);
  return (
    <div>
      <dl className="grid grid-cols-3 gap-3 font-mono text-xs">
        <div><dt className="text-muted">exact</dt><dd className="text-ink">{pct(result.exact)}</dd></div>
        <div><dt className="text-muted">simulated</dt><dd className="text-ink">{pct(result.simulated)}</dd></div>
        <div><dt className="text-muted">gap</dt><dd className="text-ink">{pct(gap)}</dd></div>
      </dl>
      <DistributionChart distribution={result.distribution} />
    </div>
  );
}

function outcomeMessage(o: RunOutcome): string | null {
  switch (o.kind) {
    case "ok":
      return null;
    case "quota":
    case "error":
      return o.message;
    case "paused":
      return "live runs are paused right now";
    case "signin":
      return "sign in to run this";
  }
}

export function SeriesOdds({ example }: { example: { params: SeriesOddsParams; result: SeriesOddsResult } }) {
  const { state, run } = useRunGate("series-odds");
  const [params, setParams] = useState<SeriesOddsParams>(example.params);
  const [busy, setBusy] = useState(false);
  const [outcome, setOutcome] = useState<RunOutcome | null>(null);

  async function onRun() {
    if (!run) return;
    setBusy(true);
    setOutcome(await run(params));
    setBusy(false);
  }

  const live = outcome?.kind === "ok" ? outcome : null;
  const statusText = outcome ? (live ? (live.cached ? "cached · free" : "1 unit") : outcomeMessage(outcome)) : null;

  return (
    <div>
      <form
        onSubmit={(e) => { e.preventDefault(); void onRun(); }}
        className="mt-6 grid gap-3 sm:grid-cols-2"
      >
        <label className="block font-mono text-[11px] text-muted">
          p(win a game)
          <input
            type="number" min={0.01} max={0.99} step={0.01} value={params.p_game}
            onChange={(e) => setParams({ ...params, p_game: Number(e.target.value) })}
            className={inputClass}
          />
        </label>
        <label className="block font-mono text-[11px] text-muted">
          best of
          <select
            value={params.best_of}
            onChange={(e) => setParams({ ...params, best_of: Number(e.target.value) as 3 | 5 | 7 })}
            className={inputClass}
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={7}>7</option>
          </select>
        </label>
        <label className="block font-mono text-[11px] text-muted">
          home edge
          <input
            type="number" step={0.01} min={-0.2} max={0.2} value={params.home_edge}
            onChange={(e) => setParams({ ...params, home_edge: Number(e.target.value) })}
            className={inputClass}
          />
        </label>
        <label className="block font-mono text-[11px] text-muted">
          simulations
          <input
            type="number" min={1000} max={200000} step={1000} value={params.sims}
            onChange={(e) => setParams({ ...params, sims: Number(e.target.value) })}
            className={inputClass}
          />
        </label>
        {run && (
          <button type="submit" disabled={busy} aria-busy={busy} className={`${buttonClass} sm:col-span-2`}>
            run
          </button>
        )}
      </form>
      <RunGatePrompt state={state} />
      {statusText && <p role="status" className="mt-3 font-mono text-[11px] text-muted">{statusText}</p>}
      {live ? (
        <ResultView result={live.result as SeriesOddsResult} />
      ) : (
        <ExampleOutput label={`p=${example.params.p_game}, best of ${example.params.best_of}`}>
          <ResultView result={example.result} />
        </ExampleOutput>
      )}
    </div>
  );
}
