import {
  Bricolage_Grotesque,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";

/**
 * Current premium pairing for an architecture-facing profile:
 * - Bricolage Grotesque: display with optical size, architectural character
 * - Plus Jakarta Sans: soft geometric body that reads well at length
 * - JetBrains Mono: crisp technical labels without looking dated
 *
 * Self-hosted by next/font at build time; no request leaves the visitor's browser.
 */
export const display = Bricolage_Grotesque({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
});

export const sans = Plus_Jakarta_Sans({
  variable: "--font-sans-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
