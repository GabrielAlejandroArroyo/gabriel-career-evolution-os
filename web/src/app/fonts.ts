import { IBM_Plex_Mono } from "next/font/google";

/**
 * Only mono is self-hosted. Display/body typefaces come from Google Fonts
 * at runtime based on project configuration (`--page-font`).
 */
const mono = IBM_Plex_Mono({
  variable: "--font-pack-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontVariables = mono.variable;
