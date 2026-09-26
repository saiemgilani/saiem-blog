// BASE=http://localhost:3000 node scripts/check-redirects.mjs
const BASE = process.env.BASE ?? "http://localhost:3000";
const CASES = [
  ["/blog/intro-to-hoopR", "/notes/intro-to-hoopR"], ["/blog/intro-to-hoopR/", "/notes/intro-to-hoopR"],
  ["/blog", "/notes"], ["/blog/bookmark", "/notes"], ["/blog/js-cheatsheet", "/notes"], ["/snippets/supabase-policy", "/notes"], ["/projects", "/work"], ["/rss", "/feed.xml"], ["/sitemap", "/sitemap.xml"],
];
let failed = 0;
for (const [from, want] of CASES) {
  let url = new URL(from, BASE);
  let hops = 0;
  let res;
  while ((res = await fetch(url, { redirect: "manual", headers: { connection: "close" } })).status >= 300 && res.status < 400 && hops < 5) {
    url = new URL(res.headers.get("location"), url);
    hops++;
  }
  const ok = res.status === 200 && url.pathname === want && hops >= 1 && hops <= 2;
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"} ${from} → ${url.pathname} (${res.status}, ${hops} hop${hops === 1 ? "" : "s"})`);
}
process.exitCode = failed ? 1 : 0;
