"use client";

import { useEffect, useState } from "react";
import { LOCALE_EVENT, type AppLocale } from "@/shared/Navbar";

const LOCALE_KEY = "uhwf-locale";

export function useLocale(): AppLocale {
  const [locale, setLocale] = useState<AppLocale>("bn");

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_KEY) as AppLocale | null;
    if (stored) setLocale(stored);

    const onLocaleChange = (e: Event) => {
      const detail = (e as CustomEvent<AppLocale>).detail;
      if (detail) setLocale(detail);
    };
    window.addEventListener(LOCALE_EVENT, onLocaleChange);
    return () => window.removeEventListener(LOCALE_EVENT, onLocaleChange);
  }, []);

  return locale;
}

export function useTranslate() {
  const locale = useLocale();
  return (en: string, bn: string) => (locale === "bn" ? bn : en);
}
