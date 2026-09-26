import type { SVGProps } from "react";

type MarkProps = Omit<SVGProps<SVGSVGElement>, "viewBox">;
const MONO = { fontFamily: "var(--font-jetbrains), ui-monospace, monospace" };

/** Large plug-G, shallow plug, ring terminal kept (≥ 96px contexts only). */
export function PlugG(props: MarkProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={9}>
        <path d="M137.1 40.6 A70 70 0 1 0 170 100 H146.2" />
        <circle cx="150.4" cy="51.4" r="8" />
        <path d="M112.7 73.6 H118 C130.3 73.6 133.8 92.1 146.2 93.8 V106.2 C133.8 107.9 130.3 126.4 118 126.4 H112.7 Z" />
        <path d="M89.8 87.7 H112.7 M89.8 112.3 H112.7" />
      </g>
    </svg>
  );
}

/** Favicon-grade plug: heavy stroke, solid body, NO terminal (< 24px). */
export function FaviconPlug(props: MarkProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden {...props}>
      <path d="M146.3 44.8 A72 72 0 1 0 172 100 H150" fill="none" stroke="currentColor" strokeWidth={20} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M111 71.8 H121.5 C134.7 71.8 138.2 91.2 153.2 93 V107 C138.2 108.8 134.7 128.2 121.5 128.2 H111 Z" fill="currentColor" />
      <path d="M83 86 H113 M83 114 H113" stroke="currentColor" strokeWidth={14} strokeLinecap="round" />
    </svg>
  );
}

/** Compact seal: rings + plug, no lettering, NO terminal (24–95px). */
export function SealCompact(props: MarkProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden {...props}>
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth={9} />
      <circle cx="100" cy="100" r="79" fill="none" stroke="currentColor" strokeWidth={3} />
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={12} transform="translate(36 36) scale(.64)">
        <path d="M145 46.4 A70 70 0 1 0 170 100 H146.2" />
        <path d="M112.7 73.6 H118 C130.3 73.6 133.8 92.1 146.2 93.8 V106.2 C133.8 107.9 130.3 126.4 118 126.4 H112.7 Z" />
        <path d="M89.8 87.7 H112.7 M89.8 112.3 H112.7" />
      </g>
    </svg>
  );
}

/** Full seal (≥ 96px). `id` must be unique on the page: it namespaces the text paths. */
export function SealFull({ id, ...props }: MarkProps & { id: string }) {
  const top = `${id}-top`;
  const bot = `${id}-bot`;
  return (
    <svg viewBox="0 0 200 200" aria-hidden {...props}>
      <defs>
        <path id={top} d="M24 100 A76 76 0 0 1 176 100" />
        <path id={bot} d="M15 100 A85 85 0 0 0 185 100" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth={3.5} />
      <circle cx="100" cy="100" r="90.5" fill="none" stroke="currentColor" strokeWidth={1} />
      <circle cx="100" cy="100" r="66" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <text fill="currentColor" fontSize="13" fontWeight={700} letterSpacing="4.6" style={MONO}>
        <textPath href={`#${top}`} startOffset="50%" textAnchor="middle">SAIEM GILANI</textPath>
      </text>
      <text fill="currentColor" fontSize="10.5" fontWeight={600} letterSpacing="2.2" style={MONO}>
        <textPath href={`#${bot}`} startOffset="50%" textAnchor="middle">SPORTS · DATA · SOFTWARE</textPath>
      </text>
      <path d="M19 94.5 L23 100 L19 105.5 L15 100 Z M181 94.5 L185 100 L181 105.5 L177 100 Z" fill="currentColor" />
      <PlugG x={47} y={47} width={106} height={106} />
    </svg>
  );
}
