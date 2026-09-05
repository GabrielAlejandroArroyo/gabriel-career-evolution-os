"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getDictionary, localeMeta, locales } from "@/i18n";
import { identity } from "@/data/profile";
import { ScrollProgress } from "./ScrollProgress";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const { dict, locale, setLocale } = useLocale();

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
          <div
            role="group"
            aria-label="Idioma"
            className="inline-flex h-10 items-center rounded-full border border-border px-1 font-mono text-xs tracking-wider"
          >
            {locales.map((code) => {
              const meta = localeMeta[code];
              const isActive = code === locale;
              const name = getDictionary(code).localeName;

              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  aria-pressed={isActive}
                  aria-label={name}
                  title={name}
                  className={
                    isActive
                      ? "inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1.5 font-semibold text-accent-fg"
                      : "inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-fg-muted transition hover:text-fg"
                  }
                >
                  <span aria-hidden className="text-sm leading-none">
                    {meta.flag}
                  </span>
                  <span>{meta.label}</span>
                </button>
              );
            })}
          </div>
          <ThemeToggle label={dict.nav.toggleTheme} />
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
