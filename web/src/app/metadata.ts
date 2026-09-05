import type { Metadata } from "next";
import { getDictionary, localeMeta, type Locale } from "@/i18n";
import { identity } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? identity.siteUrl;

/** Shared metadata builder so all locales stay consistent. */
export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const current = localeMeta[locale];
  const languages = Object.fromEntries(
    Object.entries(localeMeta).map(([code, meta]) => [code, meta.href]),
  );
  const alternateLocales = Object.values(localeMeta)
    .filter((meta) => meta.ogLocale !== current.ogLocale)
    .map((meta) => meta.ogLocale);

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: identity.fullName,
    authors: [{ name: identity.fullName }],
    alternates: {
      canonical: current.href,
      languages,
    },
    openGraph: {
      type: "profile",
      locale: current.ogLocale,
      alternateLocale: alternateLocales,
      url: current.href,
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
