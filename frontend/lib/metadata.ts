import type { Metadata } from "next";
import { SITE_URL } from "./site.ts";
import { OG_IMAGE_PATH, OG_IMAGE_SIZE, OG_IMAGE_ALT } from "./ogImage.ts";

export const SITE_NAME = "Saiem Gilani";
export const SITE_DESCRIPTION =
  "Creator of the SportsDataverse. Prototypes, experiments, and what I learned building them.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s — ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  // No canonical/og:url here on purpose: Next replaces (not merges) a child's
  // `alternates`/`openGraph.url` wholesale, so a base default silently becomes
  // every page's canonical unless every page overrides it. `pageMetadata()`
  // below is that override; a page with none (the 404) correctly gets no
  // canonical instead of inheriting the homepage's.
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { siteName: SITE_NAME, type: "website" },
  twitter: { card: "summary_large_image", creator: "@saiemgilani" },
};

/**
 * Per-page canonical + og:url, keeping the RSS alternate and og:site_name that a
 * page-local `alternates`/`openGraph` object would otherwise drop (Next replaces
 * those objects rather than merging them with the base).
 *
 * Also attaches the site's default share image by default: Next only merges a
 * file-based `opengraph-image.tsx` into the ROUTE SEGMENT that owns it, so a page
 * whose own `openGraph` object doesn't request an image gets none once that object
 * replaces the parent's. Pass `{ ownImage: true }` for a page that has its OWN
 * `opengraph-image.tsx` in the same segment (currently only `/notes/[slug]`) — Next
 * checks `hasOwnProperty('images')` on the resolved object, so setting the default
 * image there would suppress the segment's own file-convention image instead of
 * complementing it.
 */
export function pageMetadata(
  path: string,
  extraOpenGraph?: Metadata["openGraph"],
  opts: { ownImage?: boolean } = {},
): Metadata {
  const images = opts.ownImage
    ? undefined
    : [{ url: OG_IMAGE_PATH, width: OG_IMAGE_SIZE.width, height: OG_IMAGE_SIZE.height, alt: OG_IMAGE_ALT }];
  return {
    alternates: { canonical: path, types: { "application/rss+xml": "/feed.xml" } },
    openGraph: { ...baseMetadata.openGraph, url: path, ...(images ? { images } : {}), ...extraOpenGraph },
  };
}
