"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

/**
 * Client shell: header, main and footer all follow the active locale.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const { dict } = useLocale();

  return (
    <>
      <a href="#main" className="skip-link">
        {dict.nav.skipToContent}
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
