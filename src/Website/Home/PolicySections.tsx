"use client";

import { useState } from "react";
import type { AppLocale } from "@/shared/Navbar";
import type { Bilingual, ListTab } from "@/Website/Home/homePolicyContent";

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
      ✓
    </span>
  );
}

function TabIcon({ type }: { type: ListTab["icon"] }) {
  const cls = "h-5 w-5 shrink-0 sm:h-6 sm:w-6";
  switch (type) {
    case "education":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 3L2 8l10 5 10-5-10-5z" strokeLinejoin="round" />
          <path d="M6 10v5c0 2 3 4 6 4s6-2 6-4v-5" strokeLinecap="round" />
        </svg>
      );
    case "dawah":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M8 14l-3 4M16 14l3 4M12 4v6M9 7l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "service":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 21s-6-4.5-6-9a4 4 0 018 0 4 4 0 018 0c0 4.5-6 9-6 9z" strokeLinejoin="round" />
        </svg>
      );
    case "income":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M7 12h4M7 9h6" strokeLinecap="round" />
        </svg>
      );
    case "service-expense":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 3v18M8 7h8a3 3 0 010 6H10a3 3 0 000 6h8" strokeLinecap="round" />
        </svg>
      );
    case "management":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M8 8V6a4 4 0 018 0v2" strokeLinecap="round" />
        </svg>
      );
    case "welfare":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 21s-6-4.5-6-9a4 4 0 018 0 4 4 0 018 0c0 4.5-6 9-6 9z" strokeLinejoin="round" />
          <path d="M12 11v2M10 9h4" strokeLinecap="round" />
        </svg>
      );
    case "health":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 6v12M6 12h12" strokeLinecap="round" />
          <rect x="4" y="4" width="16" height="16" rx="3" />
        </svg>
      );
    case "environment":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 22V12M12 12C12 6 17 4 17 4s-2 5-8 5M12 12C12 6 7 4 7 4s2 5 8 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "disaster":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 3l9 16H3L12 3z" strokeLinejoin="round" />
          <path d="M12 10v4M12 17h.01" strokeLinecap="round" />
        </svg>
      );
  }
}

function CheckList({
  items,
  locale,
}: {
  items: Bilingual[];
  locale: AppLocale;
}) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.bn} className="body-text flex gap-3">
          <CheckIcon />
          <span className="text-foreground/90">{locale === "bn" ? item.bn : item.en}</span>
        </li>
      ))}
    </ul>
  );
}

function RichBlocks({
  blocks,
  locale,
}: {
  blocks: NonNullable<ListTab["blocks"]>;
  locale: AppLocale;
}) {
  return (
    <div className="space-y-8">
      {blocks.map((block) => (
        <div key={block.title?.bn ?? block.intro?.bn}>
          {block.title && (
            <h3 className="subsection-title mb-3 text-primary">
              {locale === "bn" ? block.title.bn : block.title.en}
            </h3>
          )}
          {block.intro && (
            <p className="body-text mb-4">
              {locale === "bn" ? block.intro.bn : block.intro.en}
            </p>
          )}
          {block.items && <CheckList items={block.items} locale={locale} />}
          {block.outro && (
            <p className="body-text mt-4">
              {locale === "bn" ? block.outro.bn : block.outro.en}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export function PrinciplesSection({
  title,
  items,
  locale,
}: {
  title: Bilingual;
  items: Bilingual[];
  locale: AppLocale;
}) {
  return (
    <section className="page-container py-16 sm:py-20">
      <h2 className="section-title mb-8 text-center sm:mb-12">
        {locale === "bn" ? title.bn : title.en}
      </h2>
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-muted/40 p-6 sm:p-10">
        <CheckList items={items} locale={locale} />
      </div>
    </section>
  );
}

export function TabbedPolicySection({
  title,
  subtitle,
  tabs,
  locale,
  defaultTabId,
}: {
  title: Bilingual;
  subtitle?: Bilingual;
  tabs: ListTab[];
  locale: AppLocale;
  defaultTabId?: string;
}) {
  const [activeId, setActiveId] = useState(defaultTabId ?? tabs[0]?.id ?? "");
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section className="page-container py-16 sm:py-20">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="section-title text-primary">
          {locale === "bn" ? title.bn : title.en}
        </h2>
        {subtitle && (
          <p className="mt-2 text-base font-medium text-primary/80 sm:text-lg">
            {locale === "bn" ? subtitle.bn : subtitle.en}
          </p>
        )}
      </div>
      <div className="mx-auto max-w-5xl">
        <div
          className="mb-4 flex flex-col gap-2 rounded-2xl border border-border bg-card p-2 sm:flex-row sm:gap-0"
          role="tablist"
          aria-label={locale === "bn" ? title.bn : title.en}
        >
          {tabs.map((tab) => {
            const active = tab.id === activeTab?.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveId(tab.id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition sm:px-4 sm:py-4 sm:text-base ${
                  active
                    ? "bg-[var(--nav-active-bg)] text-primary"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <TabIcon type={tab.icon} />
                <span>{locale === "bn" ? tab.label.bn : tab.label.en}</span>
              </button>
            );
          })}
        </div>
        <div
          className="rounded-2xl border border-border bg-card p-6 sm:p-10"
          role="tabpanel"
        >
          {activeTab?.blocks ? (
            <RichBlocks blocks={activeTab.blocks} locale={locale} />
          ) : (
            <CheckList items={activeTab?.items ?? []} locale={locale} />
          )}
        </div>
      </div>
    </section>
  );
}
