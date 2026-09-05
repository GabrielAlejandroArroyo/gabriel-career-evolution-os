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
  DEFAULT_FONT_PACK,
  FONT_PACK_STORAGE_KEY,
  isFontPackId,
  type FontPackId,
} from "@/config/font-packs";

type FontPackContextValue = {
  fontPack: FontPackId;
  setFontPack: (pack: FontPackId) => void;
};

const FontPackContext = createContext<FontPackContextValue | null>(null);

let storePack: FontPackId = DEFAULT_FONT_PACK;
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

function getSnapshot(): FontPackId {
  return storePack;
}

function getServerSnapshot(): FontPackId {
  return DEFAULT_FONT_PACK;
}

function applyFontPack(pack: FontPackId) {
  document.documentElement.dataset.fontPack = pack;
}

function readBrowserPack(): FontPackId {
  try {
    const stored = window.localStorage.getItem(FONT_PACK_STORAGE_KEY);
    if (isFontPackId(stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_FONT_PACK;
}

function writePack(next: FontPackId) {
  storePack = next;
  try {
    window.localStorage.setItem(FONT_PACK_STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  applyFontPack(next);
  emit();
}

export function FontPackProvider({ children }: { children: ReactNode }) {
  const fontPack = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const initial = readBrowserPack();
    if (initial !== storePack) {
      storePack = initial;
      emit();
    }
    applyFontPack(storePack);
  }, []);

  const setFontPack = useCallback((next: FontPackId) => {
    writePack(next);
  }, []);

  const value = useMemo<FontPackContextValue>(
    () => ({ fontPack, setFontPack }),
    [fontPack, setFontPack],
  );

  return (
    <FontPackContext.Provider value={value}>{children}</FontPackContext.Provider>
  );
}

export function useFontPack(): FontPackContextValue {
  const ctx = useContext(FontPackContext);
  if (!ctx) throw new Error("useFontPack must be used within FontPackProvider");
  return ctx;
}
