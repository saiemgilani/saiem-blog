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
        The exact number sums a negative-binomial distribution: for a best-of-N series, the
        favorite&apos;s win probability is the sum, over every k games the trailing side could
        still take before losing four, of the chance of reaching that score and then winning the
        decider. That closed form comes straight from the single per-game edge — no simulation
        needed.
      </p>
      <p>
        The simulated number draws <code>sims</code> independent series on the server with a
        seeded generator, using the same per-game probability, and reports the fraction won. It is
        noisier than the exact sum and its error shrinks as <code>sims</code> grows, but it lands
        within simulation error of the exact figure every run — two independent methods agreeing
        is what a correct probability model looks like.
      </p>
      <SeriesOdds example={example} />
    </EntryShell>
  );
}
