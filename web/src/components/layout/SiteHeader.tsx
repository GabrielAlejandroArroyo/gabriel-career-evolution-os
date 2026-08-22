import Link from "next/link";
import type { Dictionary } from "@/i18n";
import { identity } from "@/data/profile";
import { ScrollProgress } from "./ScrollProgress";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader({ dict }: { dict: Dictionary }) {
  const navItems = [
    { href: "#expertise", label: dict.nav.expertise },
    { href: "#experience", label: dict.nav.experience },
    { href: "#credentials", label: dict.nav.credentials },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-3.5 md:px-10">
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-[0.14em] uppercase"
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
          <Link
            href={dict.switchTo.href}
            hrefLang={dict.switchTo.hreflang}
            className="inline-flex h-10 items-center rounded-full border border-border px-3.5 font-mono text-xs tracking-wider text-fg-muted transition hover:border-border-strong hover:text-fg"
          >
            {dict.switchTo.label}
          </Link>
          <ThemeToggle label={dict.nav.toggleTheme} />
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
