import { test } from "node:test";
import assert from "node:assert/strict";
import { SEASON, buildSql, fromModel, parse, playerIndex, type Player, type Slots } from "../lib/lab/ask/parse.ts";

// Real ids and shot counts from nba_stats_shots/shots_2026.parquet (player_name is a surname).
const PLAYERS: Player[] = [
  { id: 1628973, name: "Brunson", team: "NYK", n: 1915 },
  { id: 1628983, name: "Gilgeous-Alexander", team: "OKC", n: 1606 },
  { id: 203999, name: "Jokić", team: "DEN", n: 1253 },
  { id: 1629008, name: "Porter Jr.", team: "BKN", n: 958 },
  { id: 1629645, name: "Porter Jr.", team: "MIL", n: 514 },
  { id: 1630314, name: "Williams", team: "DAL", n: 617 },
  { id: 1631114, name: "Williams", team: "OKC", n: 502 },
];
const IDX = playerIndex(PLAYERS);
const who = (id: number) => { const p = PLAYERS.find((x) => x.id === id)!; return { id, name: p.name, team: p.team }; };

// The phrase table: what each question must become, including the words it must not pretend to understand.
const TABLE: { q: string; slots: Slots; ignored?: string[] }[] = [
  { q: "Brunson corner threes after the all-star break", slots: { player: who(1628973), region: "corner", shotValue: 3, dateFrom: SEASON.allStarFirstAfter } },
  { q: "made dunks in the 4th", slots: { result: "made", kind: "dunk", period: { from: 4, to: 4 } } },
  { q: "Jokić floaters in the paint, first half", slots: { player: who(203999), kind: "floater", region: "paint", period: { from: 1, to: 2 } } },
  { q: "jokic missed threes in overtime", slots: { player: who(203999), result: "missed", shotValue: 3, period: { from: 5, to: 10 } } },
  { q: "Gilgeous-Alexander's midrange jumpers in March", slots: { player: who(1628983), region: "midrange", kind: "jumper", dateFrom: "2026-03-01", dateTo: "2026-03-31" } },
  { q: "Williams OKC layups in the playoffs", slots: { player: who(1631114), kind: "layup", dateFrom: SEASON.playoffsFirst } },
  { q: "Williams layups", slots: { player: who(1630314), kind: "layup" } },
  { q: "left corner 3s before the all-star break in the 2nd quarter", slots: { region: "left-corner", shotValue: 3, dateTo: SEASON.allStarLastBefore, period: { from: 2, to: 2 } } },
  { q: "at the rim makes in the regular season", slots: { region: "rim", result: "made", dateTo: SEASON.regularLast } },
  { q: "Porter Jr. above the break three-pointers", slots: { player: who(1629008), region: "above-break", shotValue: 3 } },
  { q: "step-back threes in December, q3 or q4", slots: { kind: "stepback", shotValue: 3, dateFrom: "2025-12-01", dateTo: "2025-12-31", period: { from: 3, to: 4 } } },
  { q: "Brunson clutch pull-ups, vibes only", slots: { player: who(1628973) }, ignored: ["clutch", "pull-ups", "vibes", "only"] },
  { q: "dunks and layups", slots: { kind: "dunk" }, ignored: ["layups"] },
  { q: "LeBron alley oops", slots: { kind: "alley-oop" }, ignored: ["lebron"] },
];

test("phrase -> slots, and leftover words are reported as ignored", () => {
  for (const row of TABLE) {
    const got = parse(row.q, IDX);
    assert.deepEqual(got.slots, row.slots, row.q);
    assert.deepEqual(got.ignored, row.ignored ?? [], `${row.q}: ignored`);
  }
});

test("spans are the user's own words, so removing a chip can edit the text", () => {
  const { spans } = parse("Brunson corner threes after the all-star break", IDX);
  assert.deepEqual(spans, { dateFrom: ["after the all-star break"], region: ["corner"], shotValue: ["threes"], player: ["Brunson"] });
});

test("slots -> SQL: one fixed fragment per slot, nothing else", () => {
  const { shotsSql, summarySql, usesGames } = buildSql(parse(TABLE[0].q, IDX).slots);
  assert.ok(usesGames);
  for (const frag of ["person_id = 1628973", "shot_value = 3", "(abs(x_legacy) >= 220 AND y_legacy <= 89.48)", "game_id IN (SELECT game_id FROM {{games}} WHERE game_date >= '2026-02-19')"]) {
    assert.ok(shotsSql.includes(frag) && summarySql.includes(frag), frag);
  }
  assert.match(shotsSql, /^SELECT x_legacy, y_legacy, \(shot_result = 'Made'\)::INT FROM \{\{shots\}\} WHERE /);
  assert.match(shotsSql, /abs\(x_legacy\) <= 250 AND y_legacy BETWEEN -52.5 AND 417.5$/);

  const dunks = buildSql({ result: "made", kind: "dunk", period: { from: 4, to: 4 } });
  assert.ok(dunks.summarySql.includes("WHERE sub_type ILIKE '%dunk%' AND period = 4 AND shot_result = 'Made' GROUP BY"));
  assert.equal(dunks.usesGames, false);
  assert.ok(buildSql({ period: { from: 5, to: 10 } }).shotsSql.includes("period BETWEEN 5 AND 10"));
  assert.ok(buildSql({ dateFrom: "2026-03-01", dateTo: "2026-03-31" }).shotsSql.includes("game_date >= '2026-03-01' AND game_date <= '2026-03-31'"));
  assert.ok(!buildSql({}).summarySql.includes("WHERE"));
});

test("SQL template refuses anything the schema does not describe", () => {
  const bad = (s: unknown) => assert.throws(() => buildSql(s as Slots));
  bad({ kind: "dunk'; DROP TABLE x; --" });
  bad({ region: "half court" });
  bad({ player: { id: "1 OR 1=1", name: "x", team: "NYK" } });
  bad({ dateFrom: "2026-01-01' OR '1'='1" });
  bad({ period: { from: 4, to: 1 } });
  bad({ shot_distance: 30 });
});

test("model JSON is validated key by key: unknown dropped, out-of-domain dropped, ranges clamped", () => {
  const { slots, dropped } = fromModel(
    { region: "corner", shotValue: "3", period: { from: 0, to: 12 }, player: "brunson", kind: "teleport", color: "red", dateFrom: "2024-01-01", dateTo: "tomorrow", result: null },
    IDX,
  );
  assert.deepEqual(slots, { region: "corner", shotValue: 3, period: { from: 1, to: 10 }, player: who(1628973), dateFrom: SEASON.first });
  assert.deepEqual(dropped.sort(), ['color (no such filter)', 'dateTo: tomorrow', 'kind: "teleport"']);
  assert.deepEqual(fromModel({ player: "LeBron" }, IDX), { slots: {}, dropped: ["player: LeBron"] });
  assert.deepEqual(fromModel("SELECT * FROM shots", IDX).slots, {});
  assert.doesNotThrow(() => buildSql(fromModel({ period: 7, shotValue: 2 }, IDX).slots));
});
