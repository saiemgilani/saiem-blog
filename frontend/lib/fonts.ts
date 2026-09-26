import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
// next/font downloads at build time and self-hosts; no runtime request to Google.
export const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", style: ["normal", "italic"], axes: ["opsz"] });
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
