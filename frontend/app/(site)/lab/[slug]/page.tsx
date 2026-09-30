import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LAB } from "@content/lab/registry";
import { readWriteup } from "@lib/lab/writeups";
import { formatEntryNumber } from "@lib/lab/registry-schema";
import { EntryShell } from "@components/lab/EntryShell";
import { MdxRenderer } from "@components/mdx/MdxRenderer";
import { ParquetPeek } from "@components/lab/widgets/ParquetPeek";
import { ShotChart } from "@components/lab/widgets/ShotChart";
import { MarginNote } from "@components/lab/MarginNote";
import { pageMetadata } from "@lib/metadata";

export const dynamicParams = false;
const writeups = () => LAB.filter((e) => e.kind === "writeup");

export function generateStaticParams() {
  return writeups().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = LAB.find((x) => x.slug === slug);
  if (!e) return {};
  return {
    title: `${formatEntryNumber(e.n)} — ${e.title}`,
    description: e.summary,
    ...pageMetadata(`/lab/${slug}`, { type: "article" }, { ownImage: true }),
  };
}

export default async function LabWriteup({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = writeups().find((e) => e.slug === slug);
  const doc = entry && readWriteup(slug);
  if (!entry || !doc) notFound();
  return (
    <EntryShell entry={entry}>
      <MdxRenderer source={doc.source} components={{ ParquetPeek, ShotChart, MarginNote }} />
    </EntryShell>
  );
}
