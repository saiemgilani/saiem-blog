import type { Metadata } from "next";
import { LAB } from "@content/lab/registry";
import { formatEntryNumber } from "@lib/lab/registry-schema";
import { pageMetadata } from "@lib/metadata";
import { EntryShell } from "@components/lab/EntryShell";
import { AskTheRegistry, type AskTheRegistryExample } from "@components/lab/widgets/AskTheRegistry";
import rawExample from "@content/lab/examples/ask-the-lab.json";

const entry = LAB.find((e) => e.slug === "ask-the-lab")!;
const example = rawExample as AskTheRegistryExample;

export const metadata: Metadata = {
  title: `${formatEntryNumber(entry.n)} — ${entry.title}`,
  description: entry.summary,
  ...pageMetadata("/lab/ask-the-lab"),
};

export default function AskTheLabPage() {
  return (
    <EntryShell entry={entry}>
      <p>
        This entry can do one thing: list the data sources declared for it in the registry, via a
        single read-only <code>list_sources</code> tool. It cannot query them — a SQL tool over
        the assets is a follow-up. Everything else it says comes from the model itself, not from
        SportsDataverse data, so treat its answers as a demo of the metering and streaming plumbing
        rather than a source of truth.
      </p>
      <p>
        Each answer is streamed through Vercel AI Gateway against a small fixed model allowlist,
        capped at 600 output tokens, and metered the same way as the other gated entries: 2 units
        reserved up front, settled down to what was actually used once the answer finishes.
      </p>
      <AskTheRegistry example={example} />
    </EntryShell>
  );
}
