import { Figtree, IBM_Plex_Mono, Syne } from "next/font/google";

/**
 * Fonts are declared once and shared by both root layouts. next/font
 * self-hosts them at build time, so no request leaves the visitor's browser.
 */
export const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontVariables = `${syne.variable} ${figtree.variable} ${plexMono.variable}`;
