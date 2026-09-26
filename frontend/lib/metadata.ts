import type { Metadata } from "next";
import { SITE_URL } from "./site.ts";

export const SITE_NAME = "Saiem Gilani";
export const SITE_DESCRIPTION =
  "Creator of the SportsDataverse. Prototypes, experiments, and what I learned building them.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s — ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/", types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { siteName: SITE_NAME, type: "website", url: "/" },
  twitter: { card: "summary_large_image", creator: "@saiemgilani" },
};
