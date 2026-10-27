"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { select } from "d3-selection";
import { hexbin } from "d3-hexbin";
import { scaleSequential } from "d3-scale";
import { interpolateRdBu } from "d3-scale-chromatic";
import { quantile } from "d3-array";
import { binRows, courtPaths, shrunkPct, toSvg } from "@lib/lab/shotChart";

const HEX_R = 10; // 1 ft, in tenths of a foot
const K = 25;
const SPREAD = 0.15;

export type Shot = { x: number; y: number; m: number };
type Tip = { left: number; top: number; text: string };

/** The № 004 hexbin court: shots in the legacy frame in, hexagons + legend + bin table out. `shots` null = loading. */
export function HexCourt({ shots, error, label }: { shots: Shot[] | null; error: string | null; label: string }) {
  const [tip, setTip] = useState<Tip | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [reading, setReading] = useState("");
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const binned = useMemo(() => {
    if (!shots || !shots.length) return null;
    const prior = shots.reduce((a, s) => a + s.m, 0) / shots.length;
    const hb = hexbin<Shot>().radius(HEX_R).x((s) => toSvg(s.x, s.y)[0]).y((s) => toSvg(s.x, s.y)[1]);
    const bins = hb(shots);
    const rows = binRows(bins.map((b) => ({ px: b.x, py: b.y, attempts: b.length, makes: b.reduce((a, s) => a + s.m, 0) })), prior, K, 1);
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
  const rowsShown = binned ? (showAll ? binned.rows : binned.rows.filter((r) => r.attempts >= 5)) : [];
  return (
    <>
      <div ref={wrapRef} className="relative p-3">
        <svg ref={svgRef} viewBox="0 0 500 470" role="img" aria-label={label} className="mx-auto block w-full max-w-xl" />
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
          <label className="mt-2 flex items-center gap-2"><input type="checkbox" checked={showAll} onChange={(e) => setShowAll(e.target.checked)} />show all bins (1 or more attempts)</label>
          <div className="mt-2 max-h-72 overflow-auto">
            <table className="w-full">
              <caption className="pb-1 text-left">Hexagons with {showAll ? 1 : 5} or more attempts: {rowsShown.length} of {binned.bins.length} shown, most attempts first. x and y are feet from the hoop.</caption>
              <thead><tr>{["x (ft)", "y (ft)", "attempts", "makes", "FG%", "shrunk FG%"].map((h) => <th key={h} scope="col" className="sticky top-0 bg-card px-2 py-1 text-left">{h}</th>)}</tr></thead>
              <tbody>{rowsShown.map((r, i) => (
                <tr key={i} className="border-t border-rule"><td className="px-2 py-0.5">{r.xFt}</td><td className="px-2 py-0.5">{r.yFt}</td><td className="px-2 py-0.5">{r.attempts}</td><td className="px-2 py-0.5">{r.makes}</td><td className="px-2 py-0.5">{(r.pct * 100).toFixed(1)}</td><td className="px-2 py-0.5">{(r.shrunk * 100).toFixed(1)}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </details>
      )}
    </>
  );
}
