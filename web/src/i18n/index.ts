import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import type { Dictionary, Locale } from "./types";

export const locales: Locale[] = ["es", "en", "pt"];

export const localeMeta: Record<
  Locale,
  { label: string; href: string; hreflang: string; ogLocale: string }
> = {
  es: { label: "ES", href: "/", hreflang: "es", ogLocale: "es_AR" },
  en: { label: "EN", href: "/en/", hreflang: "en", ogLocale: "en_US" },
  pt: { label: "PT", href: "/pt/", hreflang: "pt", ogLocale: "pt_BR" },
};

const dictionaries: Record<Locale, Dictionary> = { es, en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localeHome(locale: Locale): string {
  return localeMeta[locale].href;
}

export type { Dictionary, Locale };
