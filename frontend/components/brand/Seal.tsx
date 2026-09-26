import { selectSealVariant } from "@lib/seal";
import { FaviconPlug, SealCompact, SealFull } from "./marks";

type Props = { size: number; id: string; className?: string; label?: string };

export function Seal({ size, id, className, label = "Saiem Gilani" }: Props) {
  const common = { width: size, height: size, className, role: "img" as const, "aria-label": label, "aria-hidden": undefined };
  switch (selectSealVariant(size)) {
    case "full":
      return <SealFull id={id} {...common} />;
    case "compact":
      return <SealCompact {...common} />;
    default:
      return <FaviconPlug {...common} />;
  }
}

/** The one large, stamped seal a page may carry: rotated, ink-textured, multiplied. */
export function StampedSeal({ size, id, rotate = -11 }: { size: number; id: string; rotate?: number }) {
  const filter = `${id}-ink`;
  return (
    <div className="stamp-in text-brand" style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, mixBlendMode: "multiply" }}>
      <svg width="0" height="0" aria-hidden className="absolute">
        <filter id={filter} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} seed={7} result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.3 1.55" result="m" />
          <feComposite in="SourceGraphic" in2="m" operator="in" />
        </filter>
      </svg>
      <div style={{ filter: `url(#${filter})` }}>
        <Seal size={size} id={id} />
      </div>
    </div>
  );
}
