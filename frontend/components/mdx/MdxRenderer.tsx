import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeLazyImages } from "@lib/rehypeLazyImages";
import MDXComponents from "./components";

/**
 * Server-side MDX renderer for the App Router. Same rehype chain as the old
 * `MDXContent.getPostFromSlug` serialize path (slug anchors, autolinked
 * headings, shiki one-dark-pro highlighting), but compiled in the RSC pass —
 * no client hydration cost for static prose. `components` layers extra,
 * writeup-specific components (e.g. /lab's `ParquetPeek`) on top of the
 * site-wide defaults; callers omit it for plain prose.
 *
 * `blockJS: false`: next-mdx-remote 6.x defaults to stripping every JSX
 * attribute expression (`prop={expr}`) as an XSS guard for untrusted MDX --
 * silently, with no build error (confirmed empirically: a `defaultSql={"..."}"`
 * prop vanished with zero diagnostics). All MDX here is first-party (committed
 * to this repo, never user-submitted), and a writeup with a data widget
 * legitimately needs expression props (e.g. `defaultSql={"SELECT ... {{src}}"}`),
 * so the guard is off; `blockDangerousJS` stays at its default `true`, which
 * still throws on the genuinely dangerous constructs (`eval`, `Function`,
 * `require`, `.constructor`/`.prototype`, etc.) regardless of `blockJS`.
 */
export function MdxRenderer({ source, components = {} }: { source: string; components?: MDXRemoteProps["components"] }) {
  return (
    <MDXRemote
      source={source}
      components={{ ...MDXComponents, ...components }}
      options={{
        blockJS: false,
        mdxOptions: {
          rehypePlugins: [
            rehypeLazyImages,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behaviour: "wrap" }],
            [rehypePrettyCode, { theme: "one-dark-pro", keepBackground: false }],
          ],
        },
      }}
    />
  );
}
