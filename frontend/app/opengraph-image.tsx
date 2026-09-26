// Wired into every page's og:image automatically (via metadataBase); never hand-link it.
// Unlike the per-note image, this one has no generateStaticParams/dynamic segment, so
// Next serves it at a stable /opengraph-image path with no per-build hash suffix.
import { ImageResponse } from "next/og";
import { OG_IMAGE_SIZE, OG_IMAGE_ALT } from "@lib/ogImage";

// Re-exported from lib/ogImage.ts, not redeclared here: lib/metadata.ts needs the same
// width/height/alt to advertise this image in openGraph.images, and it can't import this
// .tsx route module (it's imported by node --test, which doesn't run through Next's JSX/route
// pipeline).
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export const alt = OG_IMAGE_ALT;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#FAF7F0", color: "#1C1B19", padding: 72, justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div style={{ fontSize: 30, color: "#6B6457", letterSpacing: 2 }}>SAIEMGILANI.COM</div>
          <div style={{ fontSize: 84, lineHeight: 1.02, marginTop: 18 }}>Notes from the workbench.</div>
          <div style={{ fontSize: 30, color: "#9B1B1E", marginTop: 24 }}>Sports · data · software</div>
        </div>
        {/* next/og (Satori) ignores `transform` set directly on an <svg>; the rotation
            has to live on a wrapping element instead. -11deg matches StampedSeal's default. */}
        <div style={{ display: "flex", transform: "rotate(-11deg)" }}>
          <svg width="360" height="360" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="92" fill="none" stroke="#9B1B1E" strokeWidth="9" />
            <circle cx="100" cy="100" r="79" fill="none" stroke="#9B1B1E" strokeWidth="3" />
            <g fill="none" stroke="#9B1B1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" transform="translate(36 36) scale(.64)">
              <path d="M145 46.4 A70 70 0 1 0 170 100 H146.2" />
              <path d="M112.7 73.6 H118 C130.3 73.6 133.8 92.1 146.2 93.8 V106.2 C133.8 107.9 130.3 126.4 118 126.4 H112.7 Z" />
              <path d="M89.8 87.7 H112.7 M89.8 112.3 H112.7" />
            </g>
          </svg>
        </div>
      </div>
    ),
    size,
  );
}
