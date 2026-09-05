"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { identity } from "@/data/profile";
import { ClientMarquee } from "./ClientMarquee";

export function SiteFooter() {
  const { dict } = useLocale();

  return (
    <>
      <footer className="border-t border-border bg-bg pb-[var(--logo-dock-height)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-fg-subtle md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            {identity.fullName} · {dict.footer.tagline}
          </p>
          <p className="font-mono text-xs">{dict.footer.builtWith}</p>
        </div>
      </footer>
      <ClientMarquee label={dict.footer.clientsLabel} />
    </>
  );
}
