import type { ReactNode } from "react";
import "@/app/globals.css";
import { fontVariables } from "@/app/fonts";
import { contact, identity } from "@/data/profile";
import { getDictionary } from "@/i18n";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { PageFontProvider } from "@/components/config/PageFontProvider";
import { buildPageFontBootSnippet } from "@/config/page-font-boot";
import { AppShell } from "./AppShell";

/**
 * Theme + locale + page font before paint (localStorage / ?lang=) to reduce flash.
 */
const bootScript = `try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme:dark)').matches;if(d)document.documentElement.classList.add('dark');var q=new URLSearchParams(location.search).get('lang');var l=q||localStorage.getItem('locale')||'es';if(l!=='es'&&l!=='en'&&l!=='pt')l='es';document.documentElement.lang=l==='pt'?'pt-BR':l;${buildPageFontBootSnippet()}}catch(e){}`;

/** Single-page shell. Locale is client-switched; SEO defaults to Spanish. */
export function Document({ children }: { children: ReactNode }) {
  const dict = getDictionary("es");

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
      "OpenText Documentum",
      "Bizagi",
      "AWS",
      "Generative AI",
    ],
  };

  return (
    <html
      lang="es"
      data-page-font="syne"
      className={fontVariables}
      suppressHydrationWarning
    >
      <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <noscript>
        <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <body className="flex min-h-screen flex-col">
        <LocaleProvider>
          <PageFontProvider>
            <AppShell>{children}</AppShell>
          </PageFontProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
