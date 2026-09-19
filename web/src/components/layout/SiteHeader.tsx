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
    { href: "#experience", label: dict.nav.experience },
    { href: "#portfolio", label: dict.nav.portfolio },
    { href: "#presence", label: dict.nav.presence },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3.5 md:gap-6 md:px-10">
        <Link
          href="/"
          className="font-display text-[0.8125rem] font-bold tracking-[0.12em] uppercase"
        >
          {identity.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm text-fg-muted xl:gap-8">
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
          <a
            href="#contact"
            className="hidden items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-fg transition hover:bg-accent-hover sm:inline-flex"
          >
            {dict.nav.contact}
          </a>
          <ConfigPanel />
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
