import type { NextConfig } from "next";
import path from "node:path";
import { REDIRECTS } from "./lib/redirects";

const nextConfig: NextConfig = {
  // Mode B (droplet) runs the self-contained server; Vercel ignores this.
  output: "standalone",
  // /api/views/[slug] reads content/notes/**.mdx at cold start (isKnownSlug) — without this the
  // standalone build and Vercel's per-function bundle both drop those files from the trace.
  outputFileTracingIncludes: { "/api/views/[slug]": ["./content/notes/**"] },
  // Pin the workspace root (a stray lockfile in the home dir otherwise gets
  // mis-detected as the Turbopack root) — same fix as sportsdataverse-web.
  turbopack: { root: path.resolve(__dirname) },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
  typescript: { ignoreBuildErrors: false },
  async redirects() {
    return REDIRECTS;
  },
};

export default nextConfig;
