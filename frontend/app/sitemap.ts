import type { MetadataRoute } from "next";
import { listNotes } from "@lib/notes";
import { buildSitemap } from "@lib/seo";
import { LAB } from "@content/lab/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap(listNotes(), LAB);
}
