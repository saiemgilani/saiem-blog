"use client";
import { useState } from "react";
import type { QueryResult } from "@lib/lab/duckdb";

export function labDataUrl(origin: string, s: { repo: string; tag: string; asset: string }): string {
  const q = new URLSearchParams({ repo: s.repo, tag: s.tag, asset: s.asset });
  return `${origin}/api/lab/data?${q.toString()}`;
}

type Props = { repo: string; tag: string; asset: string; defaultSql: string };

export function ParquetPeek({ repo, tag, asset, defaultSql }: Props) {
  const [sql, setSql] = useState(defaultSql);
  const [state, setState] = useState<{ busy: boolean; error: string | null; result: QueryResult | null; ms: number | null }>({ busy: false, error: null, result: null, ms: null });

  async function run() {
    setState({ busy: true, error: null, result: null, ms: null });
    const t0 = performance.now();
    try {
      const { runQuery, sourceFor } = await import("@lib/lab/duckdb");
      const src = sourceFor([labDataUrl(window.location.origin, { repo, tag, asset })]);
      const result = await runQuery(sql.replaceAll("{{src}}", src), 200);
      setState({ busy: false, error: null, result, ms: Math.round(performance.now() - t0) });
    } catch (e) {
      setState({ busy: false, error: e instanceof Error ? e.message : String(e), result: null, ms: null });
    }
  }

  return (
    <div className="not-prose my-6 border border-rule bg-card">
      <div className="flex items-center justify-between border-b border-rule px-3 py-2 font-mono text-[11px] text-muted">
        <span>{tag}/{asset}</span>
        <button type="button" onClick={run} disabled={state.busy} className="bg-brand px-2.5 py-1 text-on-brand disabled:opacity-60">{state.busy ? "running…" : "Run ▸"}</button>
      </div>
      <textarea aria-label="SQL" value={sql} onChange={(e) => setSql(e.target.value)} spellCheck={false} rows={4} className="block w-full resize-y bg-page p-3 font-mono text-xs text-ink outline-none" />
      {state.error && <p role="alert" className="border-t border-rule px-3 py-2 font-mono text-xs text-brand">{state.error}</p>}
      {state.result && (
        <div className="max-h-80 overflow-auto border-t border-rule">
          <table className="w-full font-mono text-[11px]">
            <thead><tr>{state.result.columns.map((c) => <th key={c} className="sticky top-0 bg-card px-2 py-1 text-left text-muted">{c}</th>)}</tr></thead>
            <tbody>{state.result.rows.map((r, i) => <tr key={i} className="border-t border-rule">{r.map((v, j) => <td key={j} className="px-2 py-1">{v ?? "—"}</td>)}</tr>)}</tbody>
          </table>
          <p className="px-3 py-1.5 font-mono text-[10px] text-muted">{state.result.rowCount} rows · {state.ms} ms · ran in your browser</p>
        </div>
      )}
    </div>
  );
}
