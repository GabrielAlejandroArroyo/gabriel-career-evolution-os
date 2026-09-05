import Link from "next/link";
import type { Dictionary } from "@/i18n";
import { localeHome, localeMeta, locales } from "@/i18n";
import { identity } from "@/data/profile";
import { ScrollProgress } from "./ScrollProgress";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader({ dict }: { dict: Dictionary }) {
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
          href={localeHome(dict.locale)}
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
          <nav
            aria-label="Language"
            className="inline-flex h-10 items-center rounded-full border border-border px-1 font-mono text-xs tracking-wider"
          >
            {locales.map((locale) => {
              const meta = localeMeta[locale];
              const isActive = locale === dict.locale;

              return (
                <Link
                  key={locale}
                  href={meta.href}
                  hrefLang={meta.hreflang}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "rounded-full bg-accent px-2.5 py-1.5 font-semibold text-accent-fg"
                      : "rounded-full px-2.5 py-1.5 text-fg-muted transition hover:text-fg"
                  }
                >
                  {meta.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle label={dict.nav.toggleTheme} />
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
