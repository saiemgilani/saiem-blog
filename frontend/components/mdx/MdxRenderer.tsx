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
 * `blockJS` is left at next-mdx-remote's default (`true`) deliberately -- P1's review
 * called it out as site-wide defense in depth, and it stays on even though it has a
 * sharp edge: it silently strips every JSX attribute written as a JS expression
 * (`prop={expr}`), with no build/lint/tsc diagnostic (confirmed empirically: a
 * `defaultSql={"..."}"` prop vanished with zero errors, and the resulting `undefined`
 * only surfaced as a runtime crash when the widget ran). The fix belongs in the
 * CONTENT, not here: pass component props as quoted string literals
 * (`prop="literal text"`) -- a quoted attribute is not a JS expression, so `blockJS`
 * never touches it, and any `{{...}}` inside the quotes stays literal text.
 * `test/labMdxContract.test.ts` guards `content/lab/*.mdx` against regressing back
 * into the expression form.
 */
export function MdxRenderer({ source, components = {} }: { source: string; components?: MDXRemoteProps["components"] }) {
  return (
    <MDXRemote
      source={source}
      components={{ ...MDXComponents, ...components }}
      options={{
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
