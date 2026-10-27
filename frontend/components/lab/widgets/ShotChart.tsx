"use client";
import { useEffect, useState } from "react";
import { labDataUrl } from "@lib/lab/dataUrl";
import { HexCourt, type Shot } from "./HexCourt";

const SRC = { repo: "sportsdataverse/sportsdataverse-data", tag: "nba_stats_shots", asset: "shots_2026.parquet" };
const TIMEOUT_MS = 30_000;

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
  const [pickerError, setPickerError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
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
      <HexCourt shots={shots} error={error} label={`Hexbin shot chart for ${team}${player ? " player" : ""}`} />
    </div>
  );
}
