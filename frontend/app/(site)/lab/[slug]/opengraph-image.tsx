// One share image per lab writeup (spec §4); lettering-free because next/og's resvg has no
// web fonts. Served at a hashed path (opengraph-image-<hash>); never hand-link it -- the
// entry's own og:image points at it automatically (pageMetadata(..., { ownImage: true })).
import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { LAB } from "@content/lab/registry";
import { formatEntryNumber } from "@lib/lab/registry-schema";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamicParams = false;

const writeups = () => LAB.filter((e) => e.kind === "writeup");

export function generateStaticParams() {
  return writeups().map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = writeups().find((x) => x.slug === slug);
  if (!e) notFound();
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#FAF7F0", color: "#1C1B19", padding: 80 }}>
        {/* One text child only: Satori (next/og) crashes on a multi-child div without display:flex (hit in P1 Task 5). */}
        <div style={{ fontSize: 30, color: "#6B6457" }}>{`LAB / ${formatEntryNumber(e.n)}`}</div>
        <div style={{ fontSize: 86, lineHeight: 1.02, marginTop: 16, maxWidth: 900 }}>{e.title}</div>
        <div style={{ display: "flex", marginTop: 28 }}>
          <div style={{ border: "3px solid #9B1B1E", color: "#9B1B1E", fontSize: 26, padding: "4px 14px", transform: "rotate(-3deg)" }}>{e.status.toUpperCase()}</div>
        </div>
        <div style={{ fontSize: 28, color: "#9B1B1E", marginTop: 40 }}>saiemgilani.com/lab</div>
      </div>
    ),
    size,
  );
}
