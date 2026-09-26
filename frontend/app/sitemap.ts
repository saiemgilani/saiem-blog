import type { MetadataRoute } from "next";
import { listNotes } from "@lib/notes";
import { buildSitemap } from "@lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap(listNotes());
}
