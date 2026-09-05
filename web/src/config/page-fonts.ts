/**
 * Catalog of Google Fonts selectable in project configuration.
 * Only the active family is loaded at runtime (CSS link injection).
 */

export const PAGE_FONT_STORAGE_KEY = "pageFont";
export const LEGACY_FONT_PACK_KEY = "fontPack";

export type PageFontCategory = "sans" | "serif" | "display";

export type PageFont = {
  id: string;
  /** Exact Google Fonts family name. */
  family: string;
  category: PageFontCategory;
};

export const DEFAULT_PAGE_FONT_ID = "syne";

/** Migrate previous 3-pack prefs to a single family. */
const legacyPackMap: Record<string, string> = {
  signal: "syne",
  atelier: "fraunces",
  ledger: "newsreader",
};

export const pageFonts: PageFont[] = [
  { id: "syne", family: "Syne", category: "display" },
  { id: "figtree", family: "Figtree", category: "sans" },
  { id: "manrope", family: "Manrope", category: "sans" },
  { id: "outfit", family: "Outfit", category: "sans" },
  { id: "space-grotesk", family: "Space Grotesk", category: "sans" },
  { id: "dm-sans", family: "DM Sans", category: "sans" },
  { id: "plus-jakarta-sans", family: "Plus Jakarta Sans", category: "sans" },
  { id: "sora", family: "Sora", category: "sans" },
  { id: "urbanist", family: "Urbanist", category: "sans" },
  { id: "lexend", family: "Lexend", category: "sans" },
  { id: "albert-sans", family: "Albert Sans", category: "sans" },
  { id: "onest", family: "Onest", category: "sans" },
  { id: "work-sans", family: "Work Sans", category: "sans" },
  { id: "nunito-sans", family: "Nunito Sans", category: "sans" },
  { id: "karla", family: "Karla", category: "sans" },
  { id: "libre-franklin", family: "Libre Franklin", category: "sans" },
  { id: "source-sans-3", family: "Source Sans 3", category: "sans" },
  { id: "ibm-plex-sans", family: "IBM Plex Sans", category: "sans" },
  { id: "schibsted-grotesk", family: "Schibsted Grotesk", category: "sans" },
  { id: "redhat-display", family: "Red Hat Display", category: "sans" },
  { id: "barlow", family: "Barlow", category: "sans" },
  { id: "mulish", family: "Mulish", category: "sans" },
  { id: "fraunces", family: "Fraunces", category: "serif" },
  { id: "newsreader", family: "Newsreader", category: "serif" },
  { id: "libre-baskerville", family: "Libre Baskerville", category: "serif" },
  { id: "lora", family: "Lora", category: "serif" },
  { id: "source-serif-4", family: "Source Serif 4", category: "serif" },
  { id: "playfair-display", family: "Playfair Display", category: "display" },
  { id: "cormorant-garamond", family: "Cormorant Garamond", category: "serif" },
  { id: "instrument-serif", family: "Instrument Serif", category: "serif" },
  { id: "literata", family: "Literata", category: "serif" },
  { id: "eb-garamond", family: "EB Garamond", category: "serif" },
  { id: "crimson-pro", family: "Crimson Pro", category: "serif" },
  { id: "bitter", family: "Bitter", category: "serif" },
  { id: "spectral", family: "Spectral", category: "serif" },
  { id: "josefin-sans", family: "Josefin Sans", category: "display" },
];

const byId = new Map(pageFonts.map((font) => [font.id, font]));

export function getPageFont(id: string): PageFont | undefined {
  return byId.get(id);
}

export function isPageFontId(value: string | null | undefined): value is string {
  return typeof value === "string" && byId.has(value);
}

export function resolveStoredPageFontId(raw: string | null | undefined): string {
  if (isPageFontId(raw)) return raw;
  if (raw && legacyPackMap[raw]) return legacyPackMap[raw];
  return DEFAULT_PAGE_FONT_ID;
}

/**
 * Google Fonts CSS2 URL with a practical weight range for UI + headings.
 */
export function googleFontsCssUrl(family: string): string {
  const familyParam = family.replace(/ /g, "+");
  return `https://fonts.googleapis.com/css2?family=${familyParam}:wght@400;500;600;700&display=swap`;
}

/**
 * Single stylesheet listing every catalog family (for config panel previews).
 */
export function googleFontsCatalogCssUrl(fonts: PageFont[] = pageFonts): string {
  const families = fonts
    .map((font) => `family=${font.family.replace(/ /g, "+")}:wght@400;600;700`)
    .join("&");
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

export function pageFontStack(family: string): string {
  return `"${family}", ui-sans-serif, system-ui, sans-serif`;
}
