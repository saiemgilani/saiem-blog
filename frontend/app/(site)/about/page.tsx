import type { Metadata } from "next";
import { readMdxPage } from "@lib/pages";
import { MdxRenderer } from "@components/mdx/MdxRenderer";
import { pageMetadata } from "@lib/metadata";

export const metadata: Metadata = { title: "About", ...pageMetadata("/about") };

export default function About() {
  const page = readMdxPage("about");
  return (
    <article className="mx-auto max-w-[70ch] py-12">
      <h1 className="font-display text-4xl">{page.title}</h1>
      <div className="prose mt-8 max-w-none dark:prose-invert prose-a:text-brand prose-headings:font-display">
        <MdxRenderer source={page.source} />
      </div>
    </article>
  );
}
