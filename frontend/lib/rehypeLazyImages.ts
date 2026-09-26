import type { Root } from "hast";

/**
 * Rehype plugin: adds `loading="lazy"` + `decoding="async"` to every image in the
 * MDX tree, but only where absent (an explicit `loading="eager"`, or any other
 * value, is left alone).
 *
 * Two node shapes carry an <img> through this pipeline:
 *   - a normal HAST `element` (`tagName === "img"`) — what a Markdown `![]()` image
 *     compiles to. `components/mdx/components.tsx`'s `Img` already sets
 *     `loading="lazy"` on these at render time, so this is defense-in-depth.
 *   - an MDX JSX node (`mdxJsxFlowElement`/`mdxJsxTextElement`, `name === "img"`) —
 *     what a raw JSX `<img />` tag written directly in the MDX source compiles to.
 *     MDX only substitutes `components.img` for Markdown-syntax images; literal
 *     JSX the author wrote is real JSX and is never rewritten, so it never reaches
 *     `Img`. This is the case that mattered: About's raw-JSX package logos had no
 *     `loading`, so the nav's `/about` prefetch downloaded all of them on every
 *     page view via the RSC segment's image preload hints.
 *
 * Hand-rolled walk instead of `unist-util-visit`: it's only a transitive dependency
 * here (pulled in by the rehype plugins already installed), not a direct one, and
 * the walk this needs is a few lines.
 */

type MdxAttribute = { type?: unknown; name?: unknown; value?: unknown };
type NodeLike = {
  type?: unknown;
  tagName?: unknown;
  name?: unknown;
  properties?: Record<string, unknown>;
  attributes?: MdxAttribute[];
  children?: unknown[];
};

function isHastImg(node: NodeLike): boolean {
  return node.type === "element" && node.tagName === "img";
}

function isMdxJsxImg(node: NodeLike): boolean {
  return (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") && node.name === "img";
}

function addHastLazyAttrs(node: NodeLike): void {
  const properties = (node.properties ??= {});
  if (!("loading" in properties)) properties.loading = "lazy";
  if (!("decoding" in properties)) properties.decoding = "async";
}

function addMdxJsxLazyAttrs(node: NodeLike): void {
  const attributes = (node.attributes ??= []);
  const has = (name: string) => attributes.some((a) => a.type === "mdxJsxAttribute" && a.name === name);
  if (!has("loading")) attributes.push({ type: "mdxJsxAttribute", name: "loading", value: "lazy" });
  if (!has("decoding")) attributes.push({ type: "mdxJsxAttribute", name: "decoding", value: "async" });
}

function walk(node: NodeLike): void {
  if (isHastImg(node)) {
    addHastLazyAttrs(node);
  } else if (isMdxJsxImg(node)) {
    addMdxJsxLazyAttrs(node);
  }
  for (const child of node.children ?? []) {
    walk(child as NodeLike);
  }
}

export function rehypeLazyImages() {
  return (tree: Root): void => {
    walk(tree as unknown as NodeLike);
  };
}
