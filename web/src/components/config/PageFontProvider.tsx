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
  DEFAULT_PAGE_FONT_ID,
  LEGACY_FONT_PACK_KEY,
  PAGE_FONT_STORAGE_KEY,
  getPageFont,
  googleFontsCatalogCssUrl,
  googleFontsCssUrl,
  pageFontStack,
  resolveStoredPageFontId,
} from "@/config/page-fonts";

const LINK_ID = "page-font-stylesheet";
const CATALOG_LINK_ID = "page-font-catalog-stylesheet";

type PageFontContextValue = {
  pageFontId: string;
  setPageFontId: (id: string) => void;
};

const PageFontContext = createContext<PageFontContextValue | null>(null);

let storeFontId = DEFAULT_PAGE_FONT_ID;
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

function getSnapshot(): string {
  return storeFontId;
}

function getServerSnapshot(): string {
  return DEFAULT_PAGE_FONT_ID;
}

function upsertStylesheet(id: string, href: string) {
  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  if (link.getAttribute("href") !== href) link.href = href;
}

export function ensureGoogleFontStylesheet(family: string) {
  upsertStylesheet(LINK_ID, googleFontsCssUrl(family));
}

/** Load the full catalog once so config previews render in their own faces. */
export function ensureCatalogFontStylesheet() {
  upsertStylesheet(CATALOG_LINK_ID, googleFontsCatalogCssUrl());
}

export function applyPageFont(id: string) {
  const font = getPageFont(id) ?? getPageFont(DEFAULT_PAGE_FONT_ID)!;
  const stack = pageFontStack(font.family);
  const root = document.documentElement;
  root.style.setProperty("--page-font", stack);
  root.dataset.pageFont = font.id;
  ensureGoogleFontStylesheet(font.family);
}

function readBrowserFontId(): string {
  try {
    const stored = window.localStorage.getItem(PAGE_FONT_STORAGE_KEY);
    if (stored) return resolveStoredPageFontId(stored);

    const legacy = window.localStorage.getItem(LEGACY_FONT_PACK_KEY);
    return resolveStoredPageFontId(legacy);
  } catch {
    return DEFAULT_PAGE_FONT_ID;
  }
}

function writeFontId(next: string) {
  const resolved = resolveStoredPageFontId(next);
  storeFontId = resolved;
  try {
    window.localStorage.setItem(PAGE_FONT_STORAGE_KEY, resolved);
  } catch {
    /* ignore */
  }
  applyPageFont(resolved);
  emit();
}

export function PageFontProvider({ children }: { children: ReactNode }) {
  const pageFontId = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const initial = readBrowserFontId();
    if (initial !== storeFontId) {
      storeFontId = initial;
      emit();
    }
    applyPageFont(storeFontId);
  }, []);

  const setPageFontId = useCallback((next: string) => {
    writeFontId(next);
  }, []);

  const value = useMemo<PageFontContextValue>(
    () => ({ pageFontId, setPageFontId }),
    [pageFontId, setPageFontId],
  );

  return (
    <PageFontContext.Provider value={value}>{children}</PageFontContext.Provider>
  );
}

export function usePageFont(): PageFontContextValue {
  const ctx = useContext(PageFontContext);
  if (!ctx) throw new Error("usePageFont must be used within PageFontProvider");
  return ctx;
}
