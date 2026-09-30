"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { select } from "d3-selection";
import { hexbin } from "d3-hexbin";
import { scaleSequential } from "d3-scale";
import { interpolateRdBu } from "d3-scale-chromatic";
import { quantile } from "d3-array";
import { labDataUrl } from "@lib/lab/dataUrl";
import { binRows, courtPaths, shrunkPct, toSvg } from "@lib/lab/shotChart";

const SRC = { repo: "sportsdataverse/sportsdataverse-data", tag: "nba_stats_shots", asset: "shots_2026.parquet" };
const TIMEOUT_MS = 30_000;
const HEX_R = 10; // 1 ft, in tenths of a foot
const K = 25;
const SPREAD = 0.15;

type Shot = { x: number; y: number; m: number };
type Tip = { left: number; top: number; text: string };
type Player = { id: string; name: string; n: number };

async function query(sql: string, maxRows = 20000) {
  const { getDb, runQuery, sourceFor } = await import("@lib/lab/duckdb");
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, rej) => {
    timer = setTimeout(() => rej(new Error("The query engine didn't load in 30s. Check your connection and reload.")), TIMEOUT_MS);
  });
  try {
    return await Promise.race([
      (async () => {
        await getDb();
        return runQuery(sql.replaceAll("{{src}}", sourceFor([labDataUrl(window.location.origin, SRC)])), maxRows);
      })(),
      timeout,
    ]);
  } finally {
    clearTimeout(timer);
  }
}

export function ShotChart() {
  const [teams, setTeams] = useState<string[]>(["BKN"]);
  const [team, setTeam] = useState("BKN");
  const [playersFor, setPlayersFor] = useState<{ team: string; list: Player[] }>({ team: "", list: [] });
  const [player, setPlayer] = useState(""); // "" = whole team
  const reqKey = `${team}|${player}`;
  const [loaded, setLoaded] = useState<{ key: string; shots: Shot[] | null; error: string | null }>({ key: "", shots: null, error: null });
  const [tip, setTip] = useState<Tip | null>(null);
  const [reading, setReading] = useState("");
  const [pickerError, setPickerError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const players = playersFor.team === team ? playersFor.list : [];
  const fresh = loaded.key === reqKey;
  const shots = fresh ? loaded.shots : null;
  const error = fresh ? loaded.error : null;

  useEffect(() => {
    query("SELECT DISTINCT team_tricode FROM {{src}} ORDER BY 1", 100)
      .then((r) => setTeams(r.rows.map((x) => x[0] ?? "").filter(Boolean)))
      .catch(() => setPickerError(true));
  }, [retryKey]);

  useEffect(() => {
    let live = true;
    const t = team.replace(/[^A-Z]/g, "");
    query(`SELECT person_id, any_value(player_name), count(*) n FROM {{src}} WHERE team_tricode = '${t}' GROUP BY 1 HAVING count(*) >= 50 ORDER BY n DESC`, 100)
      .then((r) => { if (live) { setPlayersFor({ team, list: r.rows.map((x) => ({ id: x[0] ?? "", name: x[1] ?? "", n: Number(x[2]) })) }); setPickerError(false); } })
      .catch(() => { if (live) setPickerError(true); });
    return () => { live = false; };
  }, [team, retryKey]);

  useEffect(() => {
    let live = true;
    const [tm, pl] = reqKey.split("|");
    const t = tm.replace(/[^A-Z]/g, "");
    const p = pl.replace(/[^0-9]/g, "");
    const who = p ? `AND person_id = ${p}` : "";
    query(`SELECT x_legacy, y_legacy, (shot_result = 'Made')::INT FROM {{src}} WHERE team_tricode = '${t}' ${who} AND x_legacy IS NOT NULL AND abs(x_legacy) <= 250 AND y_legacy BETWEEN -52.5 AND 417.5`)
      .then((r) => { if (live) setLoaded({ key: reqKey, shots: r.rows.map((x) => ({ x: Number(x[0]), y: Number(x[1]), m: Number(x[2]) })), error: null }); })
      .catch((e: unknown) => { if (live) setLoaded({ key: reqKey, shots: null, error: e instanceof Error ? e.message : String(e) }); });
    return () => { live = false; };
  }, [reqKey]);

  const binned = useMemo(() => {
    if (!shots || !shots.length) return null;
    const prior = shots.reduce((a, s) => a + s.m, 0) / shots.length;
    const hb = hexbin<Shot>().radius(HEX_R).x((s) => toSvg(s.x, s.y)[0]).y((s) => toSvg(s.x, s.y)[1]);
    const bins = hb(shots);
    const rows = binRows(bins.map((b) => ({ px: b.x, py: b.y, attempts: b.length, makes: b.reduce((a, s) => a + s.m, 0) })), prior, K);
    return { prior, hb, bins, rows };
  }, [shots]);

  useEffect(() => {
    const svg = select(svgRef.current);
    svg.selectAll("*").remove();
    if (!binned) return;
    const { prior, hb, bins } = binned;
    // size saturates at the 90th-percentile bin so the rim hexagon does not shrink everything else
    const maxN = quantile(bins.map((b) => b.length).sort((a, b) => a - b), 0.9) ?? 1;
    const color = scaleSequential(interpolateRdBu).domain([prior + SPREAD, prior - SPREAD]).clamp(true);
    svg.append("g").selectAll("path").data(bins).join("path")
      .attr("transform", (b) => `translate(${b.x},${b.y})`)
      .attr("d", (b) => hb.hexagon(HEX_R * Math.min(1, Math.max(0.3, Math.sqrt(b.length / maxN)))))
      .attr("fill", (b) => color(shrunkPct(b.reduce((a, s) => a + s.m, 0), b.length, prior, K)))
      .attr("stroke", "var(--muted)")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 0.75)
      .on("mousemove", (ev: MouseEvent, b) => {
        const makes = b.reduce((a, s) => a + s.m, 0);
        const box = wrapRef.current?.getBoundingClientRect();
        const text = `${b.length} att · ${makes} made · ${((100 * makes) / b.length).toFixed(1)}%`;
        setReading(text);
        if (box) setTip({ left: ev.clientX - box.left + 10, top: ev.clientY - box.top + 10, text });
      })
      .on("mouseleave", () => setTip(null));
    const court = svg.append("g").attr("fill", "none").attr("stroke", "var(--muted)").attr("stroke-width", 1.2).attr("pointer-events", "none");
    for (const d of courtPaths()) court.append("path").attr("d", d);
    const [rx, ry] = toSvg(0, 0);
    court.append("circle").attr("cx", rx).attr("cy", ry).attr("r", 7.5);
  }, [binned]);

  const prior = binned ? binned.prior : null;
  const sel = "border border-rule bg-page px-2 py-1 font-mono text-xs text-ink";
  return (
    <div className="not-prose my-6 border border-rule bg-card">
      <div className="flex flex-wrap items-center gap-3 border-b border-rule px-3 py-2 font-mono text-[11px] text-muted">
        <label className="flex items-center gap-1">team
          <select aria-label="Team" className={sel} value={team} onChange={(e) => { setTeam(e.target.value); setPlayer(""); }}>
            {teams.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="flex items-center gap-1">player
          <select aria-label="Player" className={sel} value={player} onChange={(e) => setPlayer(e.target.value)}>
            <option value="">whole team</option>
            {players.map((p) => <option key={p.id} value={p.id}>{p.name} ({p.n})</option>)}
          </select>
        </label>
        {pickerError && <span role="alert" className="text-brand">could not load the team/player list <button type="button" className="underline" onClick={() => { setPickerError(false); setRetryKey((k) => k + 1); }}>retry</button></span>}
        <span className="ml-auto min-w-0 truncate" title={`${SRC.tag}/${SRC.asset}`}>{SRC.tag}/{SRC.asset}</span>
      </div>
      <div ref={wrapRef} className="relative p-3">
        <svg ref={svgRef} viewBox="0 0 500 470" role="img" aria-label={`Hexbin shot chart for ${team}${player ? " player" : ""}`} className="mx-auto block w-full max-w-xl" />
        {!shots && !error && <p className="absolute inset-0 grid place-items-center font-mono text-xs text-muted">loading shots…</p>}
        {error && <p role="alert" className="absolute inset-0 grid place-items-center px-6 text-center font-mono text-xs text-brand">could not load: {error}</p>}
        {shots && !shots.length && <p className="absolute inset-0 grid place-items-center font-mono text-xs text-muted">no shots</p>}
        {tip && <div className="pointer-events-none absolute z-10 border border-rule bg-card px-2 py-1 font-mono text-[11px] text-ink" style={{ left: tip.left, top: tip.top }}>{tip.text}</div>}
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-rule px-3 py-2 font-mono text-[10px] text-muted">
        {[{ l: "below average", c: interpolateRdBu(1) }, { l: "average", c: interpolateRdBu(0.5) }, { l: "above average", c: interpolateRdBu(0) }].map((s) => (
          <span key={s.l} className="flex items-center gap-1"><i className="inline-block size-3 border border-rule" style={{ background: s.c }} />{s.l}</span>
        ))}
        <span>hex size = attempts{prior !== null && ` · average ${(prior * 100).toFixed(1)}% · ${shots?.length} shots`} · ran in your browser</span>
      </div>
      <p aria-live="polite" className="border-t border-rule px-3 py-1.5 font-mono text-[11px] text-ink">{reading || "hover a hexagon for its attempts, makes and FG%"}</p>
      {binned && (
        <details className="border-t border-rule px-3 py-2 font-mono text-[11px] text-muted">
          <summary className="cursor-pointer">Bin table</summary>
          <div className="mt-2 max-h-72 overflow-auto">
            <table className="w-full">
              <caption className="pb-1 text-left">Hexagons with 5 or more attempts: {binned.rows.length} of {binned.bins.length} shown, most attempts first. x and y are feet from the hoop.</caption>
              <thead><tr>{["x (ft)", "y (ft)", "attempts", "makes", "FG%", "shrunk FG%"].map((h) => <th key={h} scope="col" className="sticky top-0 bg-card px-2 py-1 text-left">{h}</th>)}</tr></thead>
              <tbody>{binned.rows.map((r, i) => (
                <tr key={i} className="border-t border-rule"><td className="px-2 py-0.5">{r.xFt}</td><td className="px-2 py-0.5">{r.yFt}</td><td className="px-2 py-0.5">{r.attempts}</td><td className="px-2 py-0.5">{r.makes}</td><td className="px-2 py-0.5">{(r.pct * 100).toFixed(1)}</td><td className="px-2 py-0.5">{(r.shrunk * 100).toFixed(1)}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </details>
      )}
    </div>
  );
}
