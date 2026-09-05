"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  getDictionary,
  isLocale,
  localeMeta,
  type Dictionary,
  type Locale,
} from "@/i18n";

const STORAGE_KEY = "locale";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

let storeLocale: Locale = "es";
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Locale {
  return storeLocale;
}

function getServerSnapshot(): Locale {
  return "es";
}

function readBrowserLocale(): Locale {
  try {
    const fromQuery = new URLSearchParams(window.location.search).get("lang");
    if (isLocale(fromQuery)) return fromQuery;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }

  return "es";
}

function syncUrl(locale: Locale) {
  try {
    const url = new URL(window.location.href);
    if (locale === "es") url.searchParams.delete("lang");
    else url.searchParams.set("lang", locale);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  } catch {
    /* ignore */
  }
}

function applyHtmlLang(locale: Locale) {
  document.documentElement.lang = localeMeta[locale].htmlLang;
}

function writeLocale(next: Locale) {
  storeLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  syncUrl(next);
  applyHtmlLang(next);
  emit();
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const initial = readBrowserLocale();
    if (initial !== storeLocale) {
      storeLocale = initial;
      emit();
    }
    applyHtmlLang(storeLocale);
    syncUrl(storeLocale);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    writeLocale(next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dict: getDictionary(locale),
      setLocale,
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
