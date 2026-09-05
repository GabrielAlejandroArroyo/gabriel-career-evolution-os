import {
  Figtree,
  Fraunces,
  IBM_Plex_Mono,
  Manrope,
  Newsreader,
  Source_Sans_3,
  Syne,
} from "next/font/google";

/**
 * All typography packs are self-hosted at build time.
 * Active pack is chosen at runtime via `data-font-pack` (see globals.css).
 *
 * - signal (default): Syne + Figtree — geometric, contemporary
 * - atelier: Fraunces + Manrope — soft serif display (legacy look)
 * - ledger: Newsreader + Source Sans 3 — editorial / resume-like
 */

const signalDisplay = Syne({
  variable: "--font-pack-signal-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const signalSans = Figtree({
  variable: "--font-pack-signal-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const atelierDisplay = Fraunces({
  variable: "--font-pack-atelier-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const atelierSans = Manrope({
  variable: "--font-pack-atelier-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ledgerDisplay = Newsreader({
  variable: "--font-pack-ledger-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const ledgerSans = Source_Sans_3({
  variable: "--font-pack-ledger-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-pack-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontVariables = [
  signalDisplay.variable,
  signalSans.variable,
  atelierDisplay.variable,
  atelierSans.variable,
  ledgerDisplay.variable,
  ledgerSans.variable,
  mono.variable,
].join(" ");
