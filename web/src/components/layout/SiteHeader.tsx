"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { ConfigPanel } from "@/components/config/ConfigPanel";
import { identity } from "@/data/profile";
import { ScrollProgress } from "./ScrollProgress";

export function SiteHeader() {
  const { dict } = useLocale();

  const navItems = [
    { href: "#expertise", label: dict.nav.expertise },
    { href: "#portfolio", label: dict.nav.portfolio },
    { href: "#presence", label: dict.nav.presence },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-3.5 md:px-10">
        <Link
          href="/"
          className="font-display text-[0.8125rem] font-bold tracking-[0.12em] uppercase"
        >
          {identity.shortName}
        </Link>

        <nav aria-label={dict.nav.expertise} className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-fg-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ConfigPanel />
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
