"use client";

import { ThemeProvider } from "next-themes";
import PlausibleProvider from "next-plausible";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider src="https://plausible.io/js/pa-7t8kmJ9qoSSctb4vFKZPH.js">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </PlausibleProvider>
  );
}
