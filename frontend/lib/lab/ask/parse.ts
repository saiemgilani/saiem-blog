// Lab № 005 "Ask, in your browser": a rules parser that turns shot phrasing into filter slots,
// and the SQL template those slots fill. The optional in-browser model only ever produces
// slots too (fromModel), so every query is this template: no model output is ever SQL, and a
// column can only appear if it is written below. Pure, so node --test can load it.
import { z } from "zod";
import { COURT, THREE_BREAK_Y } from "../shotChart.ts";

export const REGIONS = ["rim", "paint", "midrange", "corner", "left-corner", "right-corner", "above-break"] as const;
/** sub_type ILIKE patterns: the only text a "kind" slot can put into SQL. */
export const KINDS = {
  dunk: "%dunk%",
  layup: "%layup%",
  hook: "%hook%",
  floater: "%floating%",
  jumper: "%jump shot%",
  stepback: "%step back%",
  fadeaway: "%fadeaway%",
  "alley-oop": "%alley oop%",
} as const;
type Kind = keyof typeof KINDS;

/** Dates of the 2025-26 game logs (nba_stats_player_game_logs). No games 2026-02-13..18. */
export const SEASON = {
  first: "2025-10-21",
  last: "2026-06-13",
  allStarLastBefore: "2026-02-12",
  allStarFirstAfter: "2026-02-19",
  regularLast: "2026-04-12",
  playoffsFirst: "2026-04-18",
} as const;

const Day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const PeriodN = z.number().int().min(1).max(10);

export const SlotsSchema = z
  .object({
    player: z.object({ id: z.number().int().positive(), name: z.string().min(1), team: z.string().regex(/^[A-Z]{3}$/) }),
    shotValue: z.union([z.literal(2), z.literal(3)]),
    region: z.enum(REGIONS),
    kind: z.enum(Object.keys(KINDS) as [Kind, ...Kind[]]),
    period: z.object({ from: PeriodN, to: PeriodN }).refine((p) => p.from <= p.to, "from after to"),
    dateFrom: Day,
    dateTo: Day,
    result: z.enum(["made", "missed"]),
  })
  .partial()
  .strict();

export type Slots = z.infer<typeof SlotsSchema>;
export type SlotKey = keyof Slots;
export type Player = { id: number; name: string; team: string; n: number };
export type Parsed = { slots: Slots; spans: Partial<Record<SlotKey, string[]>>; ignored: string[] };

/** Lowercase, accents off, one output unit per input unit so match offsets index the original. */
function fold(s: string): string {
  let out = "";
  for (const ch of s) out += ch.length === 2 ? "  " : (ch.normalize("NFD")[0].toLowerCase()[0] ?? " ");
  return out.replace(/[’‘]/g, "'");
}

const nameKey = (name: string) => fold(name).replace(/\s+(?:jr\.?|sr\.?|ii|iii|iv)$/, "").trim();
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const monthRange = (m: number): [string, string] => {
  const y = m >= 9 ? 2025 : 2026; // Oct-Dec belong to 2025, Jan-Jun to 2026
  const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
  const mm = String(m + 1).padStart(2, "0");
  return [`${y}-${mm}-01`, `${y}-${mm}-${last}`];
};
const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const ORD: Record<string, number> = { first: 1, second: 2, third: 3, fourth: 4 };

type Rule = { re: RegExp; apply: (s: Slots, m: RegExpExecArray) => SlotKey | null };

// Set a slot unless it already holds a different value; a clash leaves the words unconsumed.
function put<K extends SlotKey>(s: Slots, k: K, v: NonNullable<Slots[K]>): K | null {
  if (s[k] !== undefined && JSON.stringify(s[k]) !== JSON.stringify(v)) return null;
  s[k] = v;
  return k;
}
const after = (s: Slots, d: string): SlotKey => ((s.dateFrom = s.dateFrom && s.dateFrom > d ? s.dateFrom : d), "dateFrom");
const before = (s: Slots, d: string): SlotKey => ((s.dateTo = s.dateTo && s.dateTo < d ? s.dateTo : d), "dateTo");
const periods = (s: Slots, from: number, to: number): SlotKey => {
  s.period = s.period ? { from: Math.min(s.period.from, from), to: Math.max(s.period.to, to) } : { from, to };
  return "period";
};

const ALLSTAR = String.raw`(?:the[ -])?all[ -]?star(?:[ -](?:break|game|weekend))?`;
const Q = String.raw`(?:[ -](?:quarter|qtr|period))`;
// Order matters: multi-word phrases first, so "long twos" is a region before "twos" is a value.
const RULES: Rule[] = [
  { re: new RegExp(String.raw`\b(?:after|since|post)[ -]${ALLSTAR}\b`, "g"), apply: (s) => after(s, SEASON.allStarFirstAfter) },
  { re: new RegExp(String.raw`\b(?:before|pre)[ -]${ALLSTAR}\b`, "g"), apply: (s) => before(s, SEASON.allStarLastBefore) },
  { re: /\b(?:in[ -]the[ -])?(?:playoffs?|postseason)\b/g, apply: (s) => after(s, SEASON.playoffsFirst) },
  { re: /\b(?:in[ -]the[ -])?regular[ -]season\b/g, apply: (s) => before(s, SEASON.regularLast) },
  {
    re: new RegExp(String.raw`\b(?:in[ -])?(${MONTHS.join("|")})\b`, "g"),
    apply: (s, m) => {
      const [a, b] = monthRange(MONTHS.indexOf(m[1]));
      after(s, a);
      before(s, b);
      return "dateFrom";
    },
  },
  { re: /\b(?:in[ -]the[ -])?(?:first|1st)[ -]half\b/g, apply: (s) => periods(s, 1, 2) },
  { re: /\b(?:in[ -]the[ -])?(?:second|2nd)[ -]half\b/g, apply: (s) => periods(s, 3, 4) },
  { re: /\b(?:in[ -])?(?:overtime|ot)\b/g, apply: (s) => periods(s, 5, 10) },
  { re: new RegExp(String.raw`\b(?:in[ -]the[ -])?([1-4])(?:st|nd|rd|th)${Q}?\b`, "g"), apply: (s, m) => periods(s, +m[1], +m[1]) },
  { re: new RegExp(String.raw`\bin[ -]the[ -](first|second|third|fourth)${Q}?\b`, "g"), apply: (s, m) => periods(s, ORD[m[1]], ORD[m[1]]) },
  { re: new RegExp(String.raw`\b(first|second|third|fourth)${Q}\b`, "g"), apply: (s, m) => periods(s, ORD[m[1]], ORD[m[1]]) },
  { re: /\bq([1-4])\b/g, apply: (s, m) => periods(s, +m[1], +m[1]) },
  { re: /\b(left|right)[ -]corners?\b/g, apply: (s, m) => put(s, "region", m[1] === "left" ? "left-corner" : "right-corner") },
  { re: /\bcorners?\b/g, apply: (s) => put(s, "region", "corner") },
  { re: /\b(?:at[ -]the[ -])?rim\b|\brestricted[ -]area\b/g, apply: (s) => put(s, "region", "rim") },
  { re: /\b(?:in[ -]the[ -])?(?:paint|lane)\b/g, apply: (s) => put(s, "region", "paint") },
  { re: /\bmid[ -]?range\b|\blong[ -]twos?\b/g, apply: (s) => put(s, "region", "midrange") },
  { re: /\babove[ -]the[ -]break\b|\btop[ -]of[ -]the[ -](?:key|arc)\b/g, apply: (s) => put(s, "region", "above-break") },
  { re: /\balley[ -]?oops?\b|\blobs?\b/g, apply: (s) => put(s, "kind", "alley-oop") },
  { re: /\bdunk(?:s|ed)?\b|\bslams?\b/g, apply: (s) => put(s, "kind", "dunk") },
  { re: /\blay[ -]?ups?\b/g, apply: (s) => put(s, "kind", "layup") },
  { re: /\bhook(?:s|[ -]shots?)?\b/g, apply: (s) => put(s, "kind", "hook") },
  { re: /\bfloat(?:ers?|ing)\b/g, apply: (s) => put(s, "kind", "floater") },
  { re: /\bstep[ -]?backs?\b/g, apply: (s) => put(s, "kind", "stepback") },
  { re: /\bfade[ -]?aways?\b/g, apply: (s) => put(s, "kind", "fadeaway") },
  { re: /\bjump[ -]?shots?\b|\bjumpers?\b/g, apply: (s) => put(s, "kind", "jumper") },
  { re: /\b(?:three|3)[ -]?(?:pointers?|pt|pts|pa)\b|\bthrees?\b|\b3s\b|\btriples?\b|\bfrom[ -](?:deep|downtown)\b/g, apply: (s) => put(s, "shotValue", 3) },
  { re: /\b(?:two|2)[ -]?(?:pointers?|pt|pts|pa)\b|\btwos\b|\b2s\b/g, apply: (s) => put(s, "shotValue", 2) },
  { re: /\b(?:made|makes?|hits?|buckets?)\b/g, apply: (s) => put(s, "result", "made") },
  { re: /\b(?:missed|miss(?:es)?|bricks?|bricked)\b/g, apply: (s) => put(s, "result", "missed") },
];

/** Filler that is understood but carries no filter; anything else left over is reported as ignored. */
const STOP = new Set(
  "a an the in of on at by to from for with and or all his her their its shots shot attempts attempt fga show me what where were was are is did does do how many games game season quarter quarters period this jr sr ii iii iv chart map".split(" "),
);

/** Players by folded last name (suffixes like "Jr." dropped), longest names first. */
export function playerIndex(players: Player[]): PlayerIndex {
  const by = new Map<string, Player[]>();
  for (const p of players) {
    const k = nameKey(p.name);
    if (k) by.set(k, [...(by.get(k) ?? []), p]);
  }
  for (const list of by.values()) list.sort((a, b) => b.n - a.n);
  return [...by.entries()].sort((a, b) => b[0].length - a[0].length);
}

export type PlayerIndex = [string, Player[]][];

export function parse(text: string, index: PlayerIndex = []): Parsed {
  let work = fold(text);
  const slots: Slots = {};
  const spans: Parsed["spans"] = {};
  const consume = (i: number, len: number, key: SlotKey) => {
    (spans[key] ??= []).push(text.slice(i, i + len));
    work = work.slice(0, i) + " ".repeat(len) + work.slice(i + len);
  };

  for (const { re, apply } of RULES) {
    for (const m of [...work.matchAll(re)]) {
      const key = apply(slots, m as RegExpExecArray);
      if (key) consume(m.index!, m[0].length, key);
    }
  }

  // Players after the grammar, so a surname never swallows a filter word.
  for (const [key, cands] of index) {
    if (slots.player) break;
    const m = new RegExp(String.raw`(?<![\w-])${escapeRe(key)}(?:'s|s')?(?![\w-])`).exec(work);
    if (!m) continue;
    consume(m.index, m[0].length, "player");
    let pick = cands[0];
    if (cands.length > 1) {
      // "Williams OKC": a team code next to an ambiguous surname picks that team's player.
      const teams = cands.map((c) => c.team.toLowerCase()).join("|");
      const t = new RegExp(String.raw`\b(${teams})\b`).exec(work);
      if (t) {
        pick = cands.find((c) => c.team.toLowerCase() === t[1])!;
        consume(t.index, t[0].length, "player");
      }
    }
    slots.player = { id: pick.id, name: pick.name, team: pick.team };
  }

  const ignored = (work.match(/[a-z0-9]+(?:['-][a-z0-9]+)*/g) ?? []).filter((w) => !STOP.has(w));
  return { slots: SlotsSchema.parse(slots), spans, ignored };
}

const clampDay = (d: string) => (d < SEASON.first ? SEASON.first : d > SEASON.last ? SEASON.last : d);
const clampPeriod = (n: number) => Math.min(10, Math.max(1, Math.round(n)));

/**
 * Validate a model's JSON, key by key, into slots. An unknown key is dropped (no such column),
 * an out-of-domain value is dropped, a numeric or date range is clamped. Never throws.
 */
export function fromModel(raw: unknown, index: PlayerIndex): { slots: Slots; dropped: string[] } {
  const slots: Slots = {};
  const dropped: string[] = [];
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return { slots, dropped: ["(not a JSON object)"] };
  const shape = SlotsSchema.shape;
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    if (v === null || v === undefined || v === "") continue;
    if (k === "player") {
      const hit = typeof v === "string" && index.find(([key]) => key === nameKey(v));
      if (hit) slots.player = { id: hit[1][0].id, name: hit[1][0].name, team: hit[1][0].team };
      else dropped.push(`player: ${String(v)}`);
    } else if (k === "period") {
      const p = typeof v === "number" ? { from: v, to: v } : (v as { from?: unknown; to?: unknown });
      if (typeof p.from === "number" && typeof p.to === "number") {
        const [a, b] = [clampPeriod(p.from), clampPeriod(p.to)].sort((x, y) => x - y);
        slots.period = { from: a, to: b };
      } else dropped.push("period");
    } else if (k === "dateFrom" || k === "dateTo") {
      if (Day.safeParse(v).success && !Number.isNaN(Date.parse(v as string))) slots[k] = clampDay(v as string);
      else dropped.push(`${k}: ${String(v)}`);
    } else if (k in shape) {
      const val = k === "shotValue" && typeof v === "string" ? Number(v) : v;
      const r = shape[k as SlotKey].safeParse(val);
      if (r.success) (slots as Record<string, unknown>)[k] = r.data;
      else dropped.push(`${k}: ${JSON.stringify(v)}`);
    } else dropped.push(`${k} (no such filter)`);
  }
  return { slots, dropped };
}

const D2 = "(x_legacy * x_legacy + y_legacy * y_legacy)";
const PAINT = `abs(x_legacy) <= ${COURT.laneHalfWidth} AND y_legacy <= ${COURT.freeThrowY}`;
const BRK = THREE_BREAK_Y.toFixed(2);
const REGION_SQL: Record<(typeof REGIONS)[number], string> = {
  rim: `${D2} <= ${COURT.restrictedRadius ** 2}`,
  paint: PAINT,
  midrange: `NOT (${PAINT}) AND abs(x_legacy) < ${COURT.threeCornerX} AND ${D2} < ${COURT.threeRadius ** 2}`,
  corner: `abs(x_legacy) >= ${COURT.threeCornerX} AND y_legacy <= ${BRK}`,
  "left-corner": `x_legacy <= -${COURT.threeCornerX} AND y_legacy <= ${BRK}`,
  "right-corner": `x_legacy >= ${COURT.threeCornerX} AND y_legacy <= ${BRK}`,
  "above-break": `y_legacy > ${BRK} AND ${D2} >= ${COURT.threeRadius ** 2}`,
};
// Same window as № 004's chart: shots past half court stay in the table, not on the court.
const ON_COURT = `abs(x_legacy) <= ${COURT.halfWidth} AND y_legacy BETWEEN ${COURT.baselineY} AND ${COURT.halfCourtY}`;

/**
 * The SQL template. `{{shots}}` and `{{games}}` are replaced with read_parquet(...) by the
 * caller. Every value is schema-checked first: ids and periods are integers, region and kind
 * are enum keys looked up in constant tables, dates match YYYY-MM-DD. Nothing else gets in.
 */
export function buildSql(input: Slots): { shotsSql: string; summarySql: string; usesGames: boolean } {
  const s = SlotsSchema.parse(input);
  const w: string[] = [];
  if (s.player) w.push(`person_id = ${s.player.id}`);
  if (s.shotValue) w.push(`shot_value = ${s.shotValue}`);
  if (s.region) w.push(`(${REGION_SQL[s.region]})`);
  if (s.kind) w.push(`sub_type ILIKE '${KINDS[s.kind]}'`);
  if (s.period) w.push(s.period.from === s.period.to ? `period = ${s.period.from}` : `period BETWEEN ${s.period.from} AND ${s.period.to}`);
  const days = [s.dateFrom && `game_date >= '${s.dateFrom}'`, s.dateTo && `game_date <= '${s.dateTo}'`].filter(Boolean);
  // ponytail: play-in and All-Star games have no game-log date, so any date filter drops them.
  if (days.length) w.push(`game_id IN (SELECT game_id FROM {{games}} WHERE ${days.join(" AND ")})`);
  if (s.result) w.push(`shot_result = '${s.result === "made" ? "Made" : "Missed"}'`);
  const where = w.length ? `WHERE ${w.join(" AND ")}` : "";
  return {
    shotsSql: `SELECT x_legacy, y_legacy, (shot_result = 'Made')::INT FROM {{shots}} WHERE ${[...w, ON_COURT].join(" AND ")}`,
    summarySql: `SELECT player_name, team_tricode, count(*) AS fga, count_if(shot_result = 'Made')::BIGINT AS fgm FROM {{shots}} ${where} GROUP BY person_id, player_name, team_tricode ORDER BY fga DESC LIMIT 10`,
    usesGames: days.length > 0,
  };
}
