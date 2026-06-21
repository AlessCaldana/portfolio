"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { Locale, Dictionary, dictionaries, locales } from "./translations";

const STORAGE_KEY = "ac-portfolio-locale";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && locales.includes(stored)) {
        setLocaleState(stored);
      } else {
        const browserLang = window.navigator.language.slice(0, 2);
        if (locales.includes(browserLang as Locale)) {
          setLocaleState(browserLang as Locale);
        }
      }
    } catch {
      // localStorage unavailable, fall back to default
    }
    setHydrated(true);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore write errors (private browsing, etc.)
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale]
  );

  return (
    <I18nContext.Provider value={value}>
      <div style={{ opacity: hydrated ? 1 : 0.999 }}>{children}</div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
