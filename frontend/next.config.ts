import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Mode B (droplet) runs the self-contained server; Vercel ignores this.
  output: "standalone",
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
};

export default nextConfig;
