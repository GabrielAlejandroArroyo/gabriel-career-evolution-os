"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import {
  ensureCatalogFontStylesheet,
  usePageFont,
} from "@/components/config/PageFontProvider";
import { pageFonts } from "@/config/page-fonts";
import { getDictionary, localeMeta, locales } from "@/i18n";

/**
 * Project configuration panel: locale, theme and page typography.
 */
export function ConfigPanel() {
  const { dict, locale, setLocale } = useLocale();
  const { pageFontId, setPageFontId } = usePageFont();
  const [isOpen, setIsOpen] = useState(false);
  const [fontQuery, setFontQuery] = useState("");
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    ensureCatalogFontStylesheet();
  }, [isOpen]);

  const filteredFonts = useMemo(() => {
    const q = fontQuery.trim().toLowerCase();
    if (!q) return pageFonts;
    return pageFonts.filter(
      (font) =>
        font.family.toLowerCase().includes(q) ||
        font.category.toLowerCase().includes(q),
    );
  }, [fontQuery]);

  function setTheme(nextIsDark: boolean) {
    document.documentElement.classList.toggle("dark", nextIsDark);
    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }

  const cfg = dict.config;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={cfg.openLabel}
        title={cfg.openLabel}
        onClick={() => setIsOpen((open) => !open)}
        className={
          isOpen
            ? "inline-flex size-10 items-center justify-center rounded-full border border-accent bg-accent-subtle text-accent"
            : "inline-flex size-10 items-center justify-center rounded-full border border-border text-fg-muted transition hover:border-border-strong hover:text-fg"
        }
      >
        <GearIcon />
      </button>

      {isOpen ? (
        <div
          id={panelId}
          role="dialog"
          aria-label={cfg.title}
          className="absolute top-[calc(100%+0.6rem)] right-0 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-border bg-bg-elevated p-4 shadow-[0_18px_50px_rgba(12,13,16,0.16)]"
        >
          <p className="font-display text-sm font-semibold tracking-tight">{cfg.title}</p>
          <p className="mt-1 text-xs text-fg-muted">{cfg.subtitle}</p>

          <section className="mt-4">
            <h3 className="font-mono text-[0.65rem] tracking-wider text-fg-subtle uppercase">
              {cfg.languageLabel}
            </h3>
            <div
              role="group"
              aria-label={cfg.languageLabel}
              className="mt-2 flex flex-wrap gap-1.5"
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
                        ? "inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-fg"
                        : "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-fg-muted transition hover:border-border-strong hover:text-fg"
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
          </section>

          <section className="mt-4">
            <h3 className="font-mono text-[0.65rem] tracking-wider text-fg-subtle uppercase">
              {cfg.themeLabel}
            </h3>
            <div
              role="group"
              aria-label={cfg.themeLabel}
              className="mt-2 grid grid-cols-2 gap-1.5"
            >
              <button
                type="button"
                onClick={() => setTheme(false)}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-fg transition hover:border-border-strong dark:font-normal dark:text-fg-muted"
              >
                {cfg.themeLight}
              </button>
              <button
                type="button"
                onClick={() => setTheme(true)}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-fg-muted transition hover:border-border-strong dark:font-semibold dark:text-fg"
              >
                {cfg.themeDark}
              </button>
            </div>
          </section>

          <section className="mt-4">
            <h3 className="font-mono text-[0.65rem] tracking-wider text-fg-subtle uppercase">
              {cfg.fontLabel}
            </h3>
            <label className="mt-2 block">
              <span className="sr-only">{cfg.fontSearch}</span>
              <input
                type="search"
                value={fontQuery}
                onChange={(event) => setFontQuery(event.target.value)}
                placeholder={cfg.fontSearch}
                className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm text-fg outline-none placeholder:text-fg-subtle focus-visible:border-border-strong"
              />
            </label>
            <div
              role="radiogroup"
              aria-label={cfg.fontLabel}
              className="mt-2 max-h-52 overflow-y-auto rounded-xl border border-border"
            >
              {filteredFonts.length === 0 ? (
                <p className="px-3 py-4 text-xs text-fg-muted">{cfg.fontEmpty}</p>
              ) : (
                filteredFonts.map((font) => {
                  const isActive = font.id === pageFontId;

                  return (
                    <button
                      key={font.id}
                      type="button"
                      role="radio"
                      aria-checked={isActive}
                      onClick={() => setPageFontId(font.id)}
                      className={
                        isActive
                          ? "flex w-full items-center gap-3 border-b border-border bg-accent-subtle px-3 py-2.5 text-left last:border-b-0"
                          : "flex w-full items-center gap-3 border-b border-border px-3 py-2.5 text-left transition last:border-b-0 hover:bg-bg-inset"
                      }
                    >
                      <span
                        aria-hidden
                        className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-bg-inset text-base font-semibold"
                        style={{ fontFamily: `"${font.family}", sans-serif` }}
                      >
                        Aa
                      </span>
                      <span className="min-w-0">
                        <span
                          className="block truncate text-sm font-semibold text-fg"
                          style={{ fontFamily: `"${font.family}", sans-serif` }}
                        >
                          {font.family}
                        </span>
                        <span className="mt-0.5 block font-mono text-[0.65rem] tracking-wider text-fg-subtle uppercase">
                          {font.category}
                        </span>
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}

function GearIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.2.6.7 1.1 1.5 1.1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </svg>
  );
}
