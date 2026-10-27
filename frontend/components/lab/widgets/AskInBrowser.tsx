"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MLCEngineInterface } from "@mlc-ai/web-llm";
import { labDataUrl } from "@lib/lab/dataUrl";
import { KINDS, REGIONS, SEASON, buildSql, fromModel, parse, playerIndex, type Parsed, type PlayerIndex, type SlotKey, type Slots } from "@lib/lab/ask/parse";
import { HexCourt, type Shot } from "./HexCourt";

const SHOTS = { repo: "sportsdataverse/sportsdataverse-data", tag: "nba_stats_shots", asset: "shots_2026.parquet" };
const GAMES = { repo: "sportsdataverse/sportsdataverse-data", tag: "nba_stats_player_game_logs", asset: "player_game_logs_2026.parquet" };
const TIMEOUT_MS = 30_000;
const MODEL = "Qwen2.5-0.5B-Instruct-q4f16_1-MLC";
const MODEL_SIZE = "~290 MB";
const EXAMPLES = ["Brunson corner threes after the all-star break", "made dunks in the 4th", "Jokić floaters in the paint, first half", "left corner 3s in the playoffs"];

const SYSTEM = `You map the leftover words of a question about 2025-26 NBA shots to JSON filters. Use only these keys: player (a surname), shotValue (2 or 3), region (${REGIONS.join(" | ")}), kind (${Object.keys(KINDS).join(" | ")}), period ({"from": 1-10, "to": 1-10}; 5 and up is overtime), dateFrom and dateTo (YYYY-MM-DD, between ${SEASON.first} and ${SEASON.last}), result (made | missed). Leave out anything you are not sure of. Reply with one JSON object and nothing else, {} if nothing applies.`;

type Row = { name: string; team: string; fga: number; fgm: number };
type Result = { key: string; shots: Shot[] | null; rows: Row[]; error: string | null; sql: string };
type Committed = { q: string; model: Slots; dropped: string[] };
type ModelState = { s: "off" | "confirm" | "no-webgpu" | "loading" | "ready" | "error"; note?: string };

async function query(sql: string, maxRows: number) {
  const { getDb, runQuery, sourceFor } = await import("@lib/lab/duckdb");
  const src = (s: typeof SHOTS) => sourceFor([labDataUrl(window.location.origin, s)]);
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, rej) => {
    timer = setTimeout(() => rej(new Error("The query engine didn't load in 30s. Check your connection and reload.")), TIMEOUT_MS);
  });
  try {
    return await Promise.race([
      (async () => {
        await getDb();
        return runQuery(sql.replaceAll("{{shots}}", src(SHOTS)).replaceAll("{{games}}", src(GAMES)), maxRows);
      })(),
      timeout,
    ]);
  } finally {
    clearTimeout(timer);
  }
}

function chipLabel(k: SlotKey | "dates", s: Slots): string {
  const p = s.period;
  switch (k) {
    case "player": return `player: ${s.player!.name} (${s.player!.team})`;
    case "shotValue": return `${s.shotValue}-pointers`;
    case "region": return `region: ${s.region}`;
    case "kind": return `shot: ${s.kind}`;
    case "period": return p!.from >= 5 ? "overtime" : p!.from === p!.to ? `Q${p!.from}` : `Q${p!.from}–Q${p!.to}`;
    case "dates": return [s.dateFrom && `from ${s.dateFrom}`, s.dateTo && `to ${s.dateTo}`].filter(Boolean).join(" ");
    case "result": return s.result!;
    default: return k;
  }
}

/** One chip per slot; the two date slots read as one "dates" chip. */
function chips(s: Slots): (SlotKey | "dates")[] {
  const keys = (Object.keys(s) as SlotKey[]).filter((k) => k !== "dateFrom" && k !== "dateTo");
  return s.dateFrom || s.dateTo ? [...keys, "dates"] : keys;
}
const keysOf = (k: SlotKey | "dates"): SlotKey[] => (k === "dates" ? ["dateFrom", "dateTo"] : [k]);

async function askModel(engine: MLCEngineInterface, q: string, p: Parsed): Promise<unknown> {
  const r = await engine.chat.completions.create({
    messages: [
      { role: "system", content: SYSTEM },
      { role: "user", content: `Question: ${q}\nAlready understood: ${JSON.stringify(p.slots)}\nLeftover words: ${p.ignored.join(" ")}` },
    ],
    temperature: 0,
    max_tokens: 120,
    response_format: { type: "json_object" },
  });
  return JSON.parse(r.choices[0]?.message.content ?? "");
}

export function AskInBrowser() {
  const [text, setText] = useState(() => new URLSearchParams(window.location.search).get("q") || EXAMPLES[0]);
  const [index, setIndex] = useState<PlayerIndex | null>(null);
  const [indexError, setIndexError] = useState<string | null>(null);
  const [committed, setCommitted] = useState<Committed>(() => ({ q: text, model: {}, dropped: [] }));
  const [result, setResult] = useState<Result | null>(null);
  const [thinking, setThinking] = useState(false);
  const [model, setModel] = useState<ModelState>({ s: "off" });
  const engine = useRef<MLCEngineInterface | null>(null);

  const live = useMemo(() => parse(text, index ?? []), [text, index]);
  const rules = useMemo(() => parse(committed.q, index ?? []), [committed.q, index]);
  const slots: Slots = useMemo(() => ({ ...committed.model, ...rules.slots }), [committed.model, rules.slots]);
  const reqKey = JSON.stringify(slots);
  const shown = result?.key === reqKey ? result : null;

  useEffect(() => {
    query("SELECT person_id, any_value(player_name), mode(team_tricode), count(*) FROM {{shots}} GROUP BY 1", 2000)
      .then((r) => setIndex(playerIndex(r.rows.map((x) => ({ id: Number(x[0]), name: x[1] ?? "", team: x[2] ?? "", n: Number(x[3]) })))))
      .catch((e: unknown) => setIndexError(e instanceof Error ? e.message : String(e)));
  }, []);

  useEffect(() => {
    if (!index || !Object.keys(slots).length) return;
    let alive = true;
    const { shotsSql, summarySql } = buildSql(slots);
    Promise.all([query(shotsSql, 250_000), query(summarySql, 10)])
      .then(([s, t]) => {
        if (!alive) return;
        setResult({
          key: reqKey,
          sql: summarySql,
          error: null,
          shots: s.rows.map((x) => ({ x: Number(x[0]), y: Number(x[1]), m: Number(x[2]) })),
          rows: t.rows.map((x) => ({ name: x[0] ?? "", team: x[1] ?? "", fga: Number(x[2]), fgm: Number(x[3]) })),
        });
      })
      .catch((e: unknown) => { if (alive) setResult({ key: reqKey, sql: summarySql, error: e instanceof Error ? e.message : String(e), shots: null, rows: [] }); });
    return () => { alive = false; };
    // reqKey stands in for slots
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reqKey, index]);

  async function submit(q: string) {
    setText(q);
    window.history.replaceState(null, "", `?q=${encodeURIComponent(q)}`);
    const p = parse(q, index ?? []);
    let next: Committed = { q, model: {}, dropped: [] };
    if (engine.current && p.ignored.length) {
      setThinking(true);
      try {
        const m = fromModel(await askModel(engine.current, q, p), index ?? []);
        for (const k of Object.keys(p.slots) as SlotKey[]) delete m.slots[k]; // the rules win
        next = { q, model: m.slots, dropped: m.dropped };
      } catch {
        next.dropped = ["(the model's reply was not JSON)"];
      } finally {
        setThinking(false);
      }
    }
    setCommitted(next);
  }

  function removeChip(k: SlotKey | "dates") {
    const own = keysOf(k).filter((x) => rules.slots[x] !== undefined);
    if (!own.length) {
      const m = { ...committed.model };
      for (const x of keysOf(k)) delete m[x];
      setCommitted({ ...committed, model: m });
      return;
    }
    // A chip the rules made came from the user's words: take those words out of the question.
    let q = committed.q;
    for (const x of own) for (const span of rules.spans[x] ?? []) q = q.replace(span, " ");
    submit(q.replace(/\s+/g, " ").replace(/\s+([,.])/g, "$1").trim());
  }

  async function loadModel() {
    const mobile = /Mobi|Android/i.test(navigator.userAgent);
    if (mobile && model.s !== "confirm") return setModel({ s: "confirm" });
    const gpu = (navigator as Navigator & { gpu?: { requestAdapter(): Promise<unknown> } }).gpu;
    if (!gpu || !(await gpu.requestAdapter().catch(() => null))) return setModel({ s: "no-webgpu" });
    setModel({ s: "loading", note: "starting…" });
    try {
      const webllm = await import("@mlc-ai/web-llm");
      const worker = new Worker(new URL("./askWorker.ts", import.meta.url), { type: "module" });
      engine.current = await webllm.CreateWebWorkerMLCEngine(worker, MODEL, {
        initProgressCallback: (r) => setModel({ s: "loading", note: r.text }),
      });
      setModel({ s: "ready" });
    } catch (e) {
      setModel({ s: "error", note: e instanceof Error ? e.message : String(e) });
    }
  }

  const settled = !!index && text === committed.q;
  const pending = Object.keys(slots).length > 0 && !shown && !indexError;
  const btn = "border border-rule bg-page px-2 py-1 font-mono text-xs text-ink hover:border-brand disabled:opacity-50";
  const total = shown?.shots ? { n: shown.shots.length, m: shown.shots.reduce((a, s) => a + s.m, 0) } : null;
  return (
    <div className="not-prose my-6 border border-rule bg-card">
      <form className="flex flex-wrap gap-2 border-b border-rule px-3 py-2" onSubmit={(e) => { e.preventDefault(); submit(text); }}>
        <input
          aria-label="Ask about 2025-26 NBA shots"
          className="min-w-0 flex-1 border border-rule bg-page px-2 py-1 font-mono text-sm text-ink"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className={btn} disabled={!index || thinking}>{thinking ? "thinking…" : "ask"}</button>
      </form>
      <div className="flex flex-wrap items-center gap-2 border-b border-rule px-3 py-2 font-mono text-[11px] text-muted">
        <span>try</span>
        {EXAMPLES.map((q) => <button key={q} type="button" className="underline decoration-rule underline-offset-2 hover:text-ink" onClick={() => submit(q)}>{q}</button>)}
      </div>
      <div aria-live="polite" className="flex flex-wrap items-center gap-2 border-b border-rule px-3 py-2 font-mono text-[11px]">
        {text !== committed.q && <span className="text-muted">as you type: {chips(live.slots).map((k) => chipLabel(k, live.slots)).join(" · ") || "nothing yet"}</span>}
        {settled && chips(slots).map((k) => {
          const byModel = keysOf(k).every((x) => rules.slots[x] === undefined);
          return (
            <span key={k} className={`inline-flex items-center gap-1 border px-2 py-0.5 ${byModel ? "border-dashed border-brand text-brand" : "border-rule text-ink"}`}>
              {chipLabel(k, slots)}{byModel && " · model"}
              <button type="button" aria-label={`remove ${chipLabel(k, slots)}`} className="text-muted hover:text-brand" onClick={() => removeChip(k)}>×</button>
            </span>
          );
        })}
        {settled && !Object.keys(slots).length && <span className="text-muted">nothing understood yet: try a player, a zone, a quarter or a month</span>}
        {!index && !indexError && <span className="text-muted">reading the shots file for player names…</span>}
        {settled && rules.ignored.length > 0 && <span className="text-muted">ignored: {rules.ignored.join(", ")}</span>}
        {committed.dropped.length > 0 && <span className="text-muted">model output dropped: {committed.dropped.join(", ")}</span>}
      </div>
      {indexError && <p role="alert" className="px-3 py-2 font-mono text-xs text-brand">could not load the shots file: {indexError}</p>}
      {(pending || shown) && (
        <HexCourt
          shots={shown ? shown.shots : null}
          error={shown ? shown.error : null}
          label={`Hexbin shot chart for: ${chips(slots).map((k) => chipLabel(k, slots)).join(", ")}`}
        />
      )}
      {shown && !shown.error && (
        <div className="overflow-x-auto border-t border-rule px-3 py-2 font-mono text-[11px] text-muted">
          <table className="w-full">
            <caption className="pb-1 text-left">
              {total && `${total.n} shots on the court, ${total.m} made (${total.n ? ((100 * total.m) / total.n).toFixed(1) : "0.0"}%). `}
              Most attempts for this filter:
            </caption>
            <thead><tr>{["player", "team", "FGA", "FGM", "FG%"].map((h) => <th key={h} scope="col" className="px-2 py-1 text-left">{h}</th>)}</tr></thead>
            <tbody>{shown.rows.map((r, i) => (
              <tr key={i} className="border-t border-rule text-ink">
                <td className="px-2 py-0.5">{r.name}</td><td className="px-2 py-0.5">{r.team}</td><td className="px-2 py-0.5">{r.fga}</td><td className="px-2 py-0.5">{r.fgm}</td><td className="px-2 py-0.5">{r.fga ? ((100 * r.fgm) / r.fga).toFixed(1) : "—"}</td>
              </tr>
            ))}</tbody>
          </table>
          <details className="mt-2">
            <summary className="cursor-pointer">the query that ran</summary>
            <pre className="mt-1 whitespace-pre-wrap break-all text-ink">{shown.sql}</pre>
          </details>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2 border-t border-rule px-3 py-2 font-mono text-[11px] text-muted">
        {model.s === "ready" ? (
          <span className="text-ink">model loaded: {MODEL} reads the ignored words on your next ask</span>
        ) : (
          <>
            <button type="button" className={btn} disabled={model.s === "loading"} onClick={loadModel}>
              {model.s === "confirm" ? `yes, download ${MODEL_SIZE} on this phone` : `load the in-browser model (${MODEL_SIZE}, optional)`}
            </button>
            <span>
              {model.s === "off" && "Qwen2.5 0.5B via WebGPU, cached by your browser. The rules above work without it."}
              {model.s === "confirm" && "That is a big download on a phone. Tap again to go ahead."}
              {model.s === "no-webgpu" && "This browser has no WebGPU, so the model can't run here. The rules path is the whole answer."}
              {model.s === "loading" && model.note}
              {model.s === "error" && `the model failed to load: ${model.note}`}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
