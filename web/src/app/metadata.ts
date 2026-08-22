import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/i18n";
import { identity } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? identity.siteUrl;

/** Shared metadata builder so both locales stay consistent. */
export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const path = locale === "es" ? "/" : "/en";

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: identity.fullName,
    authors: [{ name: identity.fullName }],
    alternates: {
      canonical: path,
      languages: { es: "/", en: "/en" },
    },
    openGraph: {
      type: "profile",
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_AR",
      url: path,
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      siteName: identity.fullName,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
    robots: { index: true, follow: true },
  };
}
