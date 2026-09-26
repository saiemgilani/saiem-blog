import "@styles/globals.css";
import type { Metadata } from "next";
import { fraunces, inter, jetbrains } from "@lib/fonts";
import { baseMetadata } from "@lib/metadata";
import { Providers } from "./providers";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
