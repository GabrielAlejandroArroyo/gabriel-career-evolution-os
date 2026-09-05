import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import type { Dictionary, Locale } from "./types";

export const locales: Locale[] = ["es", "en", "pt"];

export const localeMeta: Record<
  Locale,
  { label: string; flag: string; hreflang: string; ogLocale: string; htmlLang: string }
> = {
  es: {
    label: "ES",
    flag: "🇦🇷",
    hreflang: "es",
    ogLocale: "es_AR",
    htmlLang: "es",
  },
  en: {
    label: "EN",
    flag: "🇺🇸",
    hreflang: "en",
    ogLocale: "en_US",
    htmlLang: "en",
  },
  pt: {
    label: "PT",
    flag: "🇧🇷",
    hreflang: "pt",
    ogLocale: "pt_BR",
    htmlLang: "pt-BR",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en, pt };

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en" || value === "pt";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary, Locale };
