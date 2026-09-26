import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#9B1B1E" }}>
        <svg width="136" height="136" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="92" fill="none" stroke="#FAF7F0" strokeWidth="9" />
          <circle cx="100" cy="100" r="79" fill="none" stroke="#FAF7F0" strokeWidth="3" />
          <g fill="none" stroke="#FAF7F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" transform="translate(36 36) scale(.64)">
            <path d="M145 46.4 A70 70 0 1 0 170 100 H146.2" />
            <path d="M112.7 73.6 H118 C130.3 73.6 133.8 92.1 146.2 93.8 V106.2 C133.8 107.9 130.3 126.4 118 126.4 H112.7 Z" />
            <path d="M89.8 87.7 H112.7 M89.8 112.3 H112.7" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
