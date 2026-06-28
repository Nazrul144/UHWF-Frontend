"use client";

import type { AppLocale } from "@/shared/Navbar";
import { donationQuotes } from "@/Website/Home/donationQuotes";

function QuoteMarkIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.5 12A5.5 5.5 0 0110 6.5V4A8 8 0 002 12h2.5zm11 0A5.5 5.5 0 0121 6.5V4a8 8 0 00-8 8h2.5z" />
    </svg>
  );
}

function DonationQuoteCard({
  quote,
  source,
  variant,
  index,
  locale,
}: {
  quote: string;
  source: string;
  variant: "a" | "b" | "c";
  index: number;
  locale: AppLocale;
}) {
  return (
    <article className={`mv-card mv-card-quote mv-card-quote-${variant} group`}>
      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="mv-card-icon mv-card-quote-icon shrink-0 transition group-hover:scale-105">
            <QuoteMarkIcon />
          </div>
          <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <blockquote className="text-base leading-relaxed text-foreground sm:text-lg">
          <span className="text-primary">&ldquo;</span>
          {quote}
          <span className="text-primary">&rdquo;</span>
        </blockquote>
        <footer className="mt-5 border-t border-border/60 pt-4">
          <cite className="body-text not-italic text-sm font-semibold text-primary">
            — {source}
          </cite>
        </footer>
        <div
          className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-transparent"
          aria-hidden
        />
      </div>
    </article>
  );
}

export default function DonationQuotesSection({ locale }: { locale: AppLocale }) {
  const t = (en: string, bn: string) => (locale === "bn" ? bn : en);

  return (
    <section className="bg-muted/40 py-16 sm:py-20">
      <div className="page-container">
        <div className="mb-10 text-center sm:mb-12">
          <span className="section-badge">{t("Charity", "দান")}</span>
          <h2 className="section-title">
            {t("Wisdom on Giving & Helping Others", "দান ও সহায়তার মহিমা")}
          </h2>
          <p className="section-subtitle">
            {t(
              "Inspiring words from the Qur'an, the Prophet (peace be upon him), and Islamic teachings on the reward of helping humanity.",
              "কুরআন, হাদীস ও ইসলামী শিক্ষা থেকে—মানুষের সাহায্য ও দান করলে আল্লাহর পক্ষ থেকে কী প্রতিদান মিলে, তার অনুপ্রেরণামূলক বাণী।"
            )}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {donationQuotes.map((item, index) => (
            <DonationQuoteCard
              key={item.source.bn}
              index={index}
              variant={item.variant}
              locale={locale}
              quote={locale === "bn" ? item.quote.bn : item.quote.en}
              source={locale === "bn" ? item.source.bn : item.source.en}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
