import type { Metadata } from "next";
import { LAB } from "@content/lab/registry";
import { formatEntryNumber } from "@lib/lab/registry-schema";
import { pageMetadata } from "@lib/metadata";
import { EntryShell } from "@components/lab/EntryShell";
import { SeriesOdds, type SeriesOddsParams, type SeriesOddsResult } from "@components/lab/widgets/SeriesOdds";
import rawExample from "@content/lab/examples/series-odds.json";

const entry = LAB.find((e) => e.slug === "series-odds")!;
const example = rawExample as { params: SeriesOddsParams; result: SeriesOddsResult };

export const metadata: Metadata = {
  title: `${formatEntryNumber(entry.n)} — ${entry.title}`,
  description: entry.summary,
  ...pageMetadata("/lab/series-odds"),
};

export default function SeriesOddsPage() {
  return (
    <EntryShell entry={entry}>
      <p>
        The exact number sums a negative-binomial distribution: for a best-of-N series, the first
        side to reach (N+1)/2 wins takes it, and the formula sums the chance of getting there
        after every possible number of losses along the way. It only knows the single per-game
        probability — no home edge, no simulation.
      </p>
      <p>
        The simulated number runs <code>sims</code> seeded series on the server, adding{" "}
        <code>home_edge</code> to the per-game probability only in home games (the 2-2-1-1-1
        pattern). With no home edge the two numbers agree within simulation error. Raise it and
        they part ways on purpose: the exact sum never sees it, so the growing gap between exact
        and simulated is exactly what home advantage is worth.
      </p>
      <SeriesOdds example={example} />
    </EntryShell>
  );
}
