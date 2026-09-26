"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Static label: `resolvedTheme` is unknown on the server, so a label derived
  // from it is wrong for dark-OS visitors until a client re-render — and React
  // doesn't patch a mismatched attribute on hydration, so it would stay wrong.
  // The icon swap below is CSS-only (`dark:` classes), so it needs no client value either.
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded p-1.5 text-muted hover:text-ink"
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="hidden size-4 dark:block" />
    </button>
  );
}
