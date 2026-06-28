"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FoundationBrand } from "@/shared/FoundationLogo";

const LOCALE_KEY = "uhwf-locale";
const LOCALE_EVENT = "uhwf-locale-change";

export type AppLocale = "en" | "bn";

const navLinks = [
  { href: "/", label: "Home", labelBn: "হোম" },
  { href: "/about-us", label: "About Us", labelBn: "আমাদের সম্পর্কে" },
  { href: "/activities", label: "Activities", labelBn: "কার্যক্রম" },
  { href: "/gallary", label: "Gallery", labelBn: "গ্যালারি" },
  { href: "/notice", label: "Notice", labelBn: "নোটিশ" },
  { href: "/contact", label: "Contact", labelBn: "যোগাযোগ" },
];

function applyLocale(locale: AppLocale) {
  localStorage.setItem(LOCALE_KEY, locale);
  document.documentElement.lang = locale === "bn" ? "bn" : "en";
  window.dispatchEvent(new CustomEvent(LOCALE_EVENT, { detail: locale }));
}

function GlobeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9M12 3c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [locale, setLocale] = useState<AppLocale>("bn");
  const [langOpen, setLangOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("uhwf-theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    const storedLocale = localStorage.getItem(LOCALE_KEY) as AppLocale | null;
    const initialLocale = storedLocale ?? "bn";
    setLocale(initialLocale);
    document.documentElement.lang = initialLocale === "bn" ? "bn" : "en";
    if (!storedLocale) localStorage.setItem(LOCALE_KEY, "bn");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("uhwf-theme", next);
      return next;
    });
  }, []);

  const selectLocale = useCallback((next: AppLocale) => {
    setLocale(next);
    applyLocale(next);
    setLangOpen(false);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const t = (en: string, bn: string) => (locale === "bn" ? bn : en);

  return (
    <header className="site-header">
      <nav
        className="page-container flex min-h-[4rem] items-center justify-between gap-3 py-2 sm:min-h-[4.25rem] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center"
        aria-label={t("Main navigation", "প্রধান নেভিগেশন")}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-none lg:justify-self-start"
        >
          <FoundationBrand locale={locale} logoSize="md" priority showTextOnMobile={false} />
        </Link>

        <ul className="hidden items-center justify-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`site-nav-link ${isActive(link.href) ? "site-nav-link--active" : ""}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {locale === "bn" ? link.labelBn : link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2 sm:gap-3 lg:justify-self-end">
          {mounted && (
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-[15px] font-bold text-heading transition hover:bg-primary/5"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <GlobeIcon className="h-[1.15rem] w-[1.15rem] text-primary" />
                <span>{locale === "bn" ? "বাংলা" : "English"}</span>
                <svg className="h-4 w-4 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {langOpen && (
                <ul
                  className="absolute right-0 top-full z-50 mt-1 min-w-[9rem] overflow-hidden rounded-xl bg-card py-1 shadow-lg ring-1 ring-border"
                  role="listbox"
                >
                  <li>
                    <button
                      type="button"
                      role="option"
                      aria-selected={locale === "bn"}
                      onClick={() => selectLocale("bn")}
                      className={`block w-full px-4 py-2.5 text-left text-sm font-bold ${locale === "bn" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted/60"}`}
                    >
                      বাংলা
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      role="option"
                      aria-selected={locale === "en"}
                      onClick={() => selectLocale("en")}
                      className={`block w-full px-4 py-2.5 text-left text-sm font-bold ${locale === "en" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted/60"}`}
                    >
                      English
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            className="hidden rounded-lg p-2 text-muted-foreground transition hover:bg-primary/5 hover:text-primary md:block"
            aria-label={theme === "light" ? t("Toggle dark mode", "ডার্ক মোড") : t("Toggle light mode", "লাইট মোড")}
          >
            {theme === "light" ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          <Link href="/signin" className="site-btn-outline hidden sm:inline-block">
            {t("Sign In", "লগইন")}
          </Link>

          <Link href="/donate" className="site-btn-gradient hidden px-4 py-2.5 text-sm font-bold md:inline-block">
            {t("Donate", "দান করুন")}
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 text-heading lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={t("Open menu", "মেনু")}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border/50 bg-card/95 px-4 py-4 backdrop-blur-md lg:hidden">
          {mounted && (
            <div className="mb-4 flex gap-2 sm:hidden">
              <button
                type="button"
                onClick={() => selectLocale("bn")}
                className={`flex-1 rounded-lg py-2.5 text-sm font-bold ${locale === "bn" ? "bg-primary/12 text-primary" : "bg-muted/50 text-muted-foreground"}`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => selectLocale("en")}
                className={`flex-1 rounded-lg py-2.5 text-sm font-bold ${locale === "en" ? "bg-primary/12 text-primary" : "bg-muted/50 text-muted-foreground"}`}
              >
                English
              </button>
            </div>
          )}

          <ul className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-[17px] font-bold ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/40"
                  }`}
                >
                  {locale === "bn" ? link.labelBn : link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex gap-2 border-t border-border/50 pt-3">
              <Link
                href="/signin"
                onClick={() => setMobileOpen(false)}
                className="site-btn-outline flex-1 py-2.5 text-center"
              >
                {t("Sign In", "লগইন")}
              </Link>
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="site-btn-gradient flex-1 py-2.5 text-center text-sm font-bold"
              >
                {t("Donate", "দান করুন")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export { LOCALE_EVENT, LOCALE_KEY };
