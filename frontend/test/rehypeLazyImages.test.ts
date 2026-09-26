import { test } from "node:test";
import assert from "node:assert/strict";
import { rehypeLazyImages } from "../lib/rehypeLazyImages.ts";

// The plugin is typed against `Root` from "hast", but only touches `type`/`tagName`/
// `name`/`properties`/`attributes`/`children` -- these fixtures use exactly that
// shape without pulling in hast/mdast-util-mdx-jsx as a real dependency of the test.
type Tree = { type: string; children?: unknown[]; [k: string]: unknown };

function run(tree: Tree): Tree {
  rehypeLazyImages()(tree as never);
  return tree;
}

test("HAST element <img> with nothing set gets both attributes", () => {
  const tree = run({
    type: "root",
    children: [{ type: "element", tagName: "img", properties: { src: "a.png" }, children: [] }],
  });
  const img = tree.children![0] as Tree;
  assert.deepEqual(img.properties, { src: "a.png", loading: "lazy", decoding: "async" });
});

test("HAST element <img> with an explicit loading=\"eager\" keeps it, but still gets decoding", () => {
  const tree = run({
    type: "root",
    children: [{ type: "element", tagName: "img", properties: { loading: "eager" }, children: [] }],
  });
  const img = tree.children![0] as Tree;
  assert.deepEqual(img.properties, { loading: "eager", decoding: "async" });
});

test("a non-img HAST element is left alone", () => {
  const tree = run({ type: "root", children: [{ type: "element", tagName: "div", properties: {}, children: [] }] });
  const div = tree.children![0] as Tree;
  assert.deepEqual(div.properties, {});
});

test("mdxJsxFlowElement <img /> (raw JSX in MDX, e.g. About's package logos) gets both attributes", () => {
  const tree = run({
    type: "root",
    children: [{ type: "mdxJsxFlowElement", name: "img", attributes: [{ type: "mdxJsxAttribute", name: "src", value: "logo.png" }] }],
  });
  const img = tree.children![0] as Tree;
  assert.deepEqual(img.attributes, [
    { type: "mdxJsxAttribute", name: "src", value: "logo.png" },
    { type: "mdxJsxAttribute", name: "loading", value: "lazy" },
    { type: "mdxJsxAttribute", name: "decoding", value: "async" },
  ]);
});

test("mdxJsxTextElement <img /> with an existing loading attribute (any value) is not overwritten", () => {
  const tree = run({
    type: "root",
    children: [{ type: "mdxJsxTextElement", name: "img", attributes: [{ type: "mdxJsxAttribute", name: "loading", value: "eager" }] }],
  });
  const img = tree.children![0] as Tree;
  assert.deepEqual(img.attributes, [
    { type: "mdxJsxAttribute", name: "loading", value: "eager" },
    { type: "mdxJsxAttribute", name: "decoding", value: "async" },
  ]);
});

test("an mdxJsxFlowElement that isn't named img is left alone", () => {
  const tree = run({ type: "root", children: [{ type: "mdxJsxFlowElement", name: "a", attributes: [] }] });
  const a = tree.children![0] as Tree;
  assert.deepEqual(a.attributes, []);
});

test("nested elements are patched (HAST element wrapped in another element, MDX JSX img wrapped in a paragraph)", () => {
  const tree = run({
    type: "root",
    children: [
      {
        type: "element",
        tagName: "p",
        properties: {},
        children: [
          { type: "element", tagName: "img", properties: {}, children: [] },
          { type: "mdxJsxTextElement", name: "img", attributes: [] },
        ],
      },
    ],
  });
  const p = tree.children![0] as Tree;
  const [hastImg, mdxImg] = p.children as Tree[];
  assert.deepEqual(hastImg.properties, { loading: "lazy", decoding: "async" });
  assert.deepEqual(mdxImg.attributes, [
    { type: "mdxJsxAttribute", name: "loading", value: "lazy" },
    { type: "mdxJsxAttribute", name: "decoding", value: "async" },
  ]);
});
