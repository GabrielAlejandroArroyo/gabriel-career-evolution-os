/**
 * Typography packs available in project configuration.
 * All faces are loaded at build time via next/font; the active pack
 * is selected with `data-font-pack` on <html>.
 */
export const fontPackIds = ["signal", "atelier", "ledger"] as const;

export type FontPackId = (typeof fontPackIds)[number];

export const DEFAULT_FONT_PACK: FontPackId = "signal";

export const FONT_PACK_STORAGE_KEY = "fontPack";

export type FontPackMeta = {
  id: FontPackId;
  /** Stable technical label (not translated). */
  previewLabel: string;
  displaySample: string;
};

export const fontPackMeta: Record<FontPackId, FontPackMeta> = {
  signal: {
    id: "signal",
    previewLabel: "Syne · Figtree",
    displaySample: "Aa",
  },
  atelier: {
    id: "atelier",
    previewLabel: "Fraunces · Manrope",
    displaySample: "Aa",
  },
  ledger: {
    id: "ledger",
    previewLabel: "Newsreader · Source Sans",
    displaySample: "Aa",
  },
};

export function isFontPackId(value: string | null | undefined): value is FontPackId {
  return value === "signal" || value === "atelier" || value === "ledger";
}
