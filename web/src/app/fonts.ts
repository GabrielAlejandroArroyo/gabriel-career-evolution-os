import { Fraunces, IBM_Plex_Mono, Manrope } from "next/font/google";

/**
 * Premium pairing for a hire-worthy architect profile:
 * - Fraunces: soft optical serif for display — distinctive without looking gimmicky
 * - Manrope: geometric body with excellent readability at length
 * - IBM Plex Mono: institutional/technical labels
 *
 * Self-hosted by next/font at build time.
 */
export const display = Fraunces({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const sans = Manrope({
  variable: "--font-sans-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const mono = IBM_Plex_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
