import { listNotes } from "@lib/notes";
import { buildFeedXml } from "@lib/seo";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildFeedXml(listNotes()), { headers: { "content-type": "application/rss+xml; charset=utf-8" } });
}
