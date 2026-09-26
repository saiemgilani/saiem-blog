// One share image per note (spec §4); lettering-free because next/og's resvg has no web fonts.
// Served at a hashed path (opengraph-image-<hash>); never hand-link it — the note's
// og:image points at it automatically.
import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { listNotes, readNote } from "@lib/notes";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamicParams = false;

export function generateStaticParams() {
  return listNotes().map((n) => ({ slug: n.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = readNote(slug);
  if (!note) notFound();
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#FAF7F0", color: "#1C1B19", padding: 80 }}>
        {/* Satori (next/og's renderer) requires an explicit display on any node with >1 child; this one always has two (the "NOTES" text plus the date expression). */}
        <div style={{ display: "flex", fontSize: 30, color: "#6B6457" }}>NOTES{note.date ? ` · ${note.date}` : ""}</div>
        <div style={{ fontSize: 80, lineHeight: 1.04, marginTop: 16, maxWidth: 980 }}>{note.title}</div>
        <div style={{ fontSize: 28, color: "#9B1B1E", marginTop: 40 }}>saiemgilani.com/notes</div>
      </div>
    ),
    size,
  );
}
