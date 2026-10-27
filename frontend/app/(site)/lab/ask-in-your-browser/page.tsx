import type { Metadata } from "next";
import { LAB } from "@content/lab/registry";
import { formatEntryNumber } from "@lib/lab/registry-schema";
import { readWriteup } from "@lib/lab/writeups";
import { pageMetadata } from "@lib/metadata";
import { EntryShell } from "@components/lab/EntryShell";
import { MdxRenderer } from "@components/mdx/MdxRenderer";
import { MarginNote } from "@components/lab/MarginNote";
import { AskInBrowser } from "@components/lab/widgets/AskInBrowserLazy";

const entry = LAB.find((e) => e.slug === "ask-in-your-browser")!;

export const metadata: Metadata = {
  title: `${formatEntryNumber(entry.n)} — ${entry.title}`,
  description: entry.summary,
  ...pageMetadata("/lab/ask-in-your-browser"),
};

export default function AskInYourBrowserPage() {
  const doc = readWriteup(entry.slug, process.cwd(), "lab/apps")!;
  return (
    <EntryShell entry={entry}>
      <MdxRenderer source={doc.source} components={{ AskInBrowser, MarginNote }} />
    </EntryShell>
  );
}
