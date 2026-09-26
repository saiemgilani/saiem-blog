import type { Metadata } from "next";
import { SITE_URL } from "./site.ts";

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
 */
export function pageMetadata(path: string, extraOpenGraph?: Metadata["openGraph"]): Metadata {
  return {
    alternates: { canonical: path, types: { "application/rss+xml": "/feed.xml" } },
    openGraph: { ...baseMetadata.openGraph, url: path, ...extraOpenGraph },
  };
}
