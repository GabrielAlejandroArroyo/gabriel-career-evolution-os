import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { identity } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? identity.siteUrl;

/** Single-page metadata (Spanish default; language switches client-side). */
export function buildMetadata(): Metadata {
  const dict = getDictionary("es");

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: identity.fullName,
    authors: [{ name: identity.fullName }],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "profile",
      locale: "es_AR",
      alternateLocale: ["en_US", "pt_BR"],
      url: "/",
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
