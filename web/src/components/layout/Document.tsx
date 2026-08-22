import type { ReactNode } from "react";
import "@/app/globals.css";
import { fontVariables } from "@/app/fonts";
import { contact, identity } from "@/data/profile";
import { getDictionary, type Locale } from "@/i18n";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/**
 * Runs before first paint so the stored theme is applied without a flash of
 * the wrong palette. Kept inline and dependency-free on purpose.
 */
const themeScript = `try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme:dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}`;

export function Document({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const dict = getDictionary(locale);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.fullName,
    alternateName: identity.shortName,
    jobTitle: dict.meta.jobTitle,
    description: dict.meta.description,
    email: `mailto:${contact.email}`,
    url: identity.siteUrl,
    sameAs: [contact.linkedin, contact.github],
    knowsAbout: [
      "Software Architecture",
      "Solution Architecture",
      "Enterprise Integration",
      "Legacy Modernization",
      "Banking Systems",
      "COBIS",
      "AWS",
      "Generative AI",
    ],
  };

  return (
    <html lang={dict.htmlLang} className={fontVariables} suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* Scroll reveals start hidden and are shown by an observer, so without
          JavaScript the page would render almost empty. */}
      <noscript>
        <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-accent-fg"
        >
          {dict.nav.skipToContent}
        </a>
        <SiteHeader dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter dict={dict} />
      </body>
    </html>
  );
}
