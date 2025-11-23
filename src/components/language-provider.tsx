"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getResumeData, type ResumeData } from "@/data/resume";
import {
  DEFAULT_LOCALE,
  type Locale,
  translate,
  type TranslationKey,
} from "@/lib/i18n";

const LanguageContext = createContext<{
  locale: Locale;
  data: ResumeData;
  setLocale: (locale: Locale) => void;
  showChinesePrompt: boolean;
  acceptChinesePrompt: () => void;
  dismissPrompt: () => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  const [shouldPrompt, setShouldPrompt] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("preferred_locale");
      if (stored === "en" || stored === "zh") {
        setLocale(stored);
        return;
      }

      const browserLanguage = (navigator.language || navigator.languages?.[0] || "").toLowerCase();
      if (browserLanguage.startsWith("zh")) {
        setShouldPrompt(true);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const changeLocale = (next: Locale) => {
    setLocale(next);
    try {
      localStorage.setItem("preferred_locale", next);
    } catch {
      // ignore storage errors
    }
    setShouldPrompt(false);
  };

  const value = useMemo(
    () => ({
      locale,
      data: getResumeData(locale),
      setLocale: changeLocale,
      showChinesePrompt: shouldPrompt && locale !== "zh",
      acceptChinesePrompt: () => changeLocale("zh"),
      dismissPrompt: () => setShouldPrompt(false),
    }),
    [locale, shouldPrompt]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function useTranslations() {
  const { locale } = useLanguage();
  return (key: TranslationKey, params?: Record<string, string | number>) =>
    translate(locale, key, params);
}
