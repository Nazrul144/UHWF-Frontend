"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocale } from "@/shared/useLocale";
import {
  financeTabs,
  goalsTabs,
  principlesItems,
} from "@/Website/Home/homePolicyContent";
import { PrinciplesSection, TabbedPolicySection } from "@/Website/Home/PolicySections";
import DonationQuotesSection from "@/Website/Home/DonationQuotesSection";

type StatIconType = "beneficiary" | "projects" | "upazila";

const impactStats: Array<{
  value: number | null;
  suffix: string;
  label: string;
  labelBn: string;
  icon: StatIconType;
}> = [
  {
    value: 12500,
    suffix: "+",
    label: "Families & Individuals Served",
    labelBn: "সেবাপ্রাপ্ত পরিবার ও ব্যক্তি",
    icon: "beneficiary",
  },
  {
    value: 48,
    suffix: "",
    label: "Projects Completed",
    labelBn: "সম্পন্ন প্রকল্প",
    icon: "projects",
  },
  {
    value: 18,
    suffix: "",
    label: "Upazila Activities",
    labelBn: "উপজেলায় কার্যক্রম",
    icon: "upazila",
  },
];

const services = [
  {
    title: "Education Support",
    titleBn: "শিক্ষা সহায়তা",
    desc: "Scholarships, school supplies, and literacy programs for underprivileged children.",
    descBn: "সুবিধাবঞ্চিত শিশুদের জন্য বৃত্তি, স্কুল সামগ্রী ও সাক্ষরতা কর্মসূচি।",
    icon: "📚",
  },
  {
    title: "Healthcare Aid",
    titleBn: "স্বাস্থ্যসেবা",
    desc: "Free medical camps, medicine distribution, and emergency health assistance.",
    descBn: "বিনামূল্যে মেডিকেল ক্যাম্প, ওষুধ বিতরণ ও জরুরি স্বাস্থ্যসেবা।",
    icon: "🏥",
  },
  {
    title: "Disaster Relief",
    titleBn: "দুর্যোগ ত্রাণ",
    desc: "Rapid response teams providing food, shelter, and essentials during crises.",
    descBn: "দুর্যোগে খাদ্য, আশ্রয় ও প্রয়োজনীয় সামগ্রী সরবরাহকারী দ্রুত প্রতিক্রিয়া দল।",
    icon: "🤝",
  },
  {
    title: "Livelihood Programs",
    titleBn: "জীবিকা উন্নয়ন",
    desc: "Vocational training and micro-support to help families become self-reliant.",
    descBn: "পরিবারকে স্বাবলম্বী করতে কারিগরি প্রশিক্ষণ ও ক্ষুদ্র সহায়তা।",
    icon: "🌱",
  },
];

const testimonials = [
  {
    quote:
      "UHWF supported my daughter's education when we had nowhere to turn. Their compassion changed our family's future.",
    name: "Rashida Begum",
    role: "Beneficiary, Dhaka",
  },
  {
    quote:
      "As a member, I can see exactly how my donations are used. The transparency builds real trust.",
    name: "Karim Uddin",
    role: "Foundation Member",
  },
  {
    quote:
      "During the flood, UHWF volunteers reached our village within hours. They are truly serving humanity.",
    name: "Abdul Malek",
    role: "Community Leader, Sylhet",
  },
];

const latestNotices = [
  {
    id: "1",
    date: "2026-06-20",
    category: "Event",
    categoryBn: "ইভেন্ট",
    title: "Annual General Meeting 2026",
    titleBn: "বার্ষিক সাধারণ সভা ২০২৬",
    excerpt:
      "All members are invited to attend the AGM on July 15, 2026 at UHWF office.",
    excerptBn: "১৫ জুলাই ২০২৬ তারিখে UHWF অফিসে বার্ষিক সাধারণ সভায় সকল সদস্যকে আমন্ত্রণ।",
  },
  {
    id: "2",
    date: "2026-06-10",
    category: "Announcement",
    categoryBn: "ঘোষণা",
    title: "Ramadan Relief Distribution Complete",
    titleBn: "রমজান ত্রাণ বিতরণ সম্পন্ন",
    excerpt:
      "Successfully distributed iftar packages to 1,500 families across Dhaka and Narayanganj.",
    excerptBn: "ঢাকা ও নারায়ণগঞ্জে ১,৫০০ পরিবারে ইফতার প্যাকেজ সফলভাবে বিতরণ করা হয়েছে।",
  },
  {
    id: "3",
    date: "2026-05-28",
    category: "Membership",
    categoryBn: "সদস্যপদ",
    title: "New Member Registration Open",
    titleBn: "নতুন সদস্য নিবন্ধন চালু",
    excerpt:
      "We are accepting new membership applications. Sign up online and await admin approval.",
    excerptBn: "নতুন সদস্য নিবন্ধন গ্রহণ করা হচ্ছে। অনলাইনে সাইন আপ করুন।",
  },
];

const noticeCategoryStyles: Record<
  string,
  { badge: string; bar: string; dateBg: string }
> = {
  Event: {
    badge: "bg-secondary/15 text-heading",
    bar: "from-secondary via-secondary/70 to-secondary/30",
    dateBg: "bg-secondary/10 text-heading",
  },
  Announcement: {
    badge: "bg-primary/12 text-primary",
    bar: "from-primary via-primary/80 to-ring/60",
    dateBg: "bg-primary/10 text-primary",
  },
  Membership: {
    badge: "bg-accent/25 text-accent-foreground",
    bar: "from-accent via-accent/80 to-accent/40",
    dateBg: "bg-accent/15 text-accent-foreground",
  },
  Program: {
    badge: "bg-muted text-muted-foreground",
    bar: "from-muted-foreground/40 to-muted-foreground/20",
    dateBg: "bg-muted text-foreground",
  },
};

const faqs = [
  {
    q: "How can I become a member?",
    qBn: "কীভাবে সদস্য হতে পারি?",
    a: "Submit a membership request through our Sign Up page. An admin will review and approve your application before dashboard access is granted.",
    aBn: "সাইন আপ পেজের মাধ্যমে সদস্যতার আবেদন করুন। অ্যাডমিন অনুমোদনের পর ড্যাশবোর্ড অ্যাক্সেস পাবেন।",
  },
  {
    q: "How are donations recorded?",
    qBn: "দান কীভাবে রেকর্ড করা হয়?",
    a: "Cash donations are recorded by authorized cashiers. Members receive digital receipts via WhatsApp and in-app notifications.",
    aBn: "নগদ দান অনুমোদিত ক্যাশিয়ার রেকর্ড করেন। সদস্যরা WhatsApp ও অ্যাপে রসিদ পান।",
  },
  {
    q: "Is my donation tax-deductible?",
    qBn: "আমার দান কি কর ছাড়যোগ্য?",
    a: "Please consult with foundation leadership regarding official receipt requirements for tax purposes in Bangladesh.",
    aBn: "কর সংক্রান্ত রসিদের জন্য ফাউন্ডেশন কর্তৃপক্ষের সাথে যোগাযোগ করুন।",
  },
  {
    q: "Can I volunteer without being a member?",
    qBn: "সদস্য না হয়ে স্বেচ্ছাসেবক হতে পারি?",
    a: "Yes! Contact us through the Connect With Us page to learn about upcoming volunteer opportunities.",
    aBn: "হ্যাঁ! 'Connect With Us' পেজে যোগাযোগ করে স্বেচ্ছাসেবার সুযোগ জানুন।",
  },
];

const VIDEO_ID = "L_xrDAtykMI";

const joinOptions = [
  {
    title: "Regular Donor",
    titleBn: "নিয়মিত দাতা",
    desc: "Monthly or recurring support",
    descBn: "মাসিক বা নিয়মিত সহায়তা",
    href: "/donate",
    gradient: "from-[#1a4d3e] via-[#2d6a4f] to-[#40916c]",
    icon: (
      <svg className="h-12 w-12 sm:h-14 sm:w-14" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <path d="M20 28c0-6 5-11 12-11s12 5 12 11v2M14 30h36v18c0 4-3 7-7 7H21c-4 0-7-3-7-7V30z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 36c-4 3-8 3-12 0v8c4 3 8 3 12 0v-8z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Volunteer",
    titleBn: "স্বেচ্ছাসেবক",
    desc: "Serve with your time and skills",
    descBn: "সময় ও দক্ষতা দিয়ে সেবায়",
    href: "/connect-with-us",
    gradient: "from-[#b45309] via-[#d97706] to-[#f59e0b]",
    icon: (
      <svg className="h-12 w-12 sm:h-14 sm:w-14" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <circle cx="32" cy="20" r="6" />
        <path d="M16 44c2-8 8-12 16-12s14 4 16 12" strokeLinecap="round" />
        <path d="M10 38l6 4M54 38l-6 4M22 30l-4-6M42 30l4-6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Well-wisher Donor",
    titleBn: "শুভাকাঙ্ক্ষী দাতা",
    desc: "Eid, campaigns & special occasions",
    descBn: "ঈদ, ক্যাম্পেইন ও বিশেষ উপলক্ষে",
    href: "/donate",
    gradient: "from-[#1e3a5f] via-[#1b4965] to-[#2a6f97]",
    icon: (
      <svg className="h-12 w-12 sm:h-14 sm:w-14" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <path d="M32 8l4 10h10l-8 7 3 10-9-6-9 6 3-10-8-7h10L32 8z" strokeLinejoin="round" />
        <path d="M14 48h36M20 54h24" strokeLinecap="round" />
      </svg>
    ),
  },
];

function NoticePreviewCard({
  notice,
  locale,
  readMore,
}: {
  notice: (typeof latestNotices)[number];
  locale: "en" | "bn";
  readMore: string;
}) {
  const styles =
    noticeCategoryStyles[notice.category] ?? noticeCategoryStyles.Program;
  const date = new Date(notice.date);
  const day = date.toLocaleDateString(locale === "bn" ? "bn-BD" : "en-US", {
    day: "numeric",
  });
  const month = date.toLocaleDateString(locale === "bn" ? "bn-BD" : "en-US", {
    month: "short",
  });
  const year = date.toLocaleDateString(locale === "bn" ? "bn-BD" : "en-US", {
    year: "numeric",
  });

  return (
    <Link
      href="/notice"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/12 bg-card shadow-[0_4px_24px_-8px_rgba(45,106,79,0.15)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_16px_40px_-12px_rgba(45,106,79,0.22)] dark:ring-white/[0.05]"
    >
      <div className={`h-1.5 bg-gradient-to-r ${styles.bar}`} aria-hidden />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide ${styles.badge}`}
          >
            {locale === "bn" ? notice.categoryBn : notice.category}
          </span>
          <div
            className={`flex shrink-0 flex-col items-center rounded-xl px-3 py-2 leading-none ${styles.dateBg}`}
          >
            <span className="text-2xl font-extrabold">{day}</span>
            <span className="mt-0.5 text-xs font-semibold uppercase opacity-80">{month}</span>
            <span className="mt-0.5 text-[10px] font-medium opacity-70">{year}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-xl">
          {locale === "bn" ? notice.titleBn : notice.title}
        </h3>
        <p className="body-text mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {locale === "bn" ? notice.excerptBn : notice.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition group-hover:gap-2.5">
          {readMore}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function JoinCard({
  href,
  title,
  desc,
  gradient,
  icon,
}: {
  href: string;
  title: string;
  desc: string;
  gradient: string;
  icon: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.3)]"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition duration-300 group-hover:brightness-110`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 blur-2xl"
        aria-hidden
      />
      <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-4 px-6 py-10 text-white sm:min-h-[240px] sm:py-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 shadow-inner ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24">
          {icon}
        </div>
        <div className="text-center">
          <span className="block text-xl font-bold leading-snug sm:text-2xl">{title}</span>
          <span className="mt-2 block text-sm font-medium text-white/80 sm:text-base">{desc}</span>
        </div>
      </div>
    </Link>
  );
}

function MissionVisionCard({
  variant,
  title,
  description,
  badge,
  icon,
}: {
  variant: "mission" | "vision";
  title: string;
  description: string;
  badge: string;
  icon: ReactNode;
}) {
  return (
    <article
      className={`mv-card group ${variant === "mission" ? "mv-card-mission" : "mv-card-vision"}`}
    >
      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="mv-card-icon shrink-0 transition group-hover:rotate-0 group-hover:scale-105">
            {icon}
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wide text-primary">
            {badge}
          </span>
        </div>
        <h2 className="subsection-title text-primary">{title}</h2>
        <p className="body-text mt-4 leading-relaxed">{description}</p>
        <div
          className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-transparent"
          aria-hidden
        />
      </div>
    </article>
  );
}

function StatIcon({
  type,
  className = "h-8 w-8",
}: {
  type: StatIconType;
  className?: string;
}) {
  switch (type) {
    case "beneficiary":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 21s-6-4.5-6-9a4 4 0 018 0 4 4 0 018 0c0 4.5-6 9-6 9z" strokeLinejoin="round" />
          <path d="M9 12h6" strokeLinecap="round" />
        </svg>
      );
    case "projects":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "upazila":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
  }
}

function useCountUp(value: number, started: boolean) {
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
      else {
        setDisplay(value);
        setDone(true);
      }
    };
    requestAnimationFrame(animate);
  }, [started, value]);

  return { display, done };
}

function StatCardShell({
  children,
  started,
  index,
  highlight,
  className = "",
}: {
  children: ReactNode;
  started: boolean;
  index: number;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-[1.75rem] border border-primary/15 bg-gradient-to-br from-card via-card to-primary/[0.07] text-center shadow-[0_2px_8px_rgba(0,0,0,0.04),0_16px_48px_-12px_rgba(45,106,79,0.22)] ring-1 ring-black/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06),0_28px_56px_-14px_rgba(45,106,79,0.32)] dark:ring-white/[0.06] ${
        started ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${highlight ? "stat-highlight" : ""} ${className}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:bg-primary/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-secondary/8 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />
      {children}
      <div
        className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-ring to-secondary transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />
    </div>
  );
}

function AnimatedStat({
  value,
  suffix,
  label,
  labelBn,
  icon,
  index,
  locale,
}: {
  value: number | null;
  suffix: string;
  label: string;
  labelBn: string;
  icon: StatIconType;
  index: number;
  locale: "en" | "bn";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const hasValue = value !== null;
  const { display, done } = useCountUp(value ?? 0, started && hasValue);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setStarted(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      <StatCardShell
        started={started}
        index={index}
        highlight={hasValue && done}
        className="flex flex-col items-center justify-center p-8 sm:p-9 lg:min-h-[300px] lg:p-10"
      >
        <div className="relative mx-auto mb-7 flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_8px_20px_-8px_rgba(45,106,79,0.35)] ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:ring-primary/35 sm:h-24 sm:w-24">
          <StatIcon type={icon} className="h-11 w-11 sm:h-12 sm:w-12" />
        </div>

        <p className="relative text-5xl font-extrabold leading-none tracking-tight tabular-nums sm:text-6xl lg:text-[3.25rem]">
          {hasValue ? (
            <span className="bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent">
              {display.toLocaleString()}
              {suffix}
            </span>
          ) : (
            <span className="text-muted-foreground/40">—</span>
          )}
        </p>

        <div className="relative mx-auto mt-6 w-full max-w-[14rem] border-t border-primary/12 pt-5 sm:max-w-[16rem]">
          <p className="text-base font-bold leading-snug text-foreground/85 transition-colors group-hover:text-foreground sm:text-lg">
            {locale === "bn" ? labelBn : label}
          </p>
        </div>
      </StatCardShell>
    </div>
  );
}

export default function Home() {
  const locale = useLocale();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const t = (en: string, bn: string) => (locale === "bn" ? bn : en);

  return (
    <div>
      {/* Hero */}
      <section className="hero-soft relative flex min-h-[78vh] flex-col items-center justify-center px-4 pb-20 pt-10 text-center sm:min-h-[82vh] sm:pb-24 sm:pt-12 lg:min-h-[88vh]">
        <div className="relative z-10 mx-auto w-full max-w-4xl animate-fade-up">
          <div className="hero-soft__ornament mb-5 text-sm font-semibold tracking-wide">
            <span>{t("Serving Humanity Since 2025", "২০২৫ থেকে মানবতার সেবায়")}</span>
          </div>
          <h1 className="page-title text-heading">
            {t(
              "Building Hope for Underprivileged Communities",
              "সুবিধা বঞ্চিত সম্প্রদায়ের জন্য আশার সৃষ্টি"
            )}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t(
              "Based in Mehendiganj, Barishal, Uttar Char Manob Kalyan Foundation works to improve quality of life through education, healthcare, disaster relief, and support for people at every level of society.",
              "মেহেন্দিগঞ্জ, বরিশাল ভিত্তিক উত্তর চর মানব কল্যাণ ফাউন্ডেশন শিক্ষা, স্বাস্থ্যসেবা, দুর্যোগ ত্রাণ ও সমাজের সব স্তরের মানুষের জীবনযাত্রার মান উন্নয়নে নিবেদিতভাবে কাজ করছে।"
            )}
          </p>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-primary/15 bg-card/70 px-6 py-5 shadow-sm backdrop-blur-sm">
            <p className="text-base italic leading-relaxed text-foreground/85 sm:text-lg">
              {t(
                '"The best of people are those who benefit others." — Prophet Muhammad (peace be upon him)',
                '"সর্বোত্তম মানুষ তারাই, যারা মানুষের উপকার করে।" — হজরত মুহাম্মদ (সা.)'
              )}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/donate"
              className="site-btn-gradient inline-flex min-w-[11rem] items-center justify-center px-8 py-3.5 text-base font-bold"
            >
              {t("Donate Now", "এখনই দান করুন")}
            </Link>
            <Link
              href="/about-us"
              className="site-btn-outline inline-flex min-w-[11rem] items-center justify-center bg-card/60 px-8 py-3.5 text-base font-bold backdrop-blur-sm"
            >
              {t("Learn About Us", "আমাদের জানুন")}
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="page-container py-16 sm:py-20">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="section-title">
            {t("Mission & Vision", "লক্ষ্য ও স্বপ্ন")}
          </h2>
          <p className="section-subtitle">
            {t(
              "Our purpose and the future we strive to build together.",
              "আমাদের উদ্দেশ্য ও যে ভবিষ্যৎ আমরা একসাথে গড়তে চাই।"
            )}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <MissionVisionCard
            variant="mission"
            badge={t("Mission", "লক্ষ্য")}
            title={t("Our Mission", "আমাদের লক্ষ্য")}
            description={t(
              "To continuously improve lives through sustainable programs in education, healthcare, disaster relief, and livelihood—serving underprivileged communities with compassion and transparency.",
              "শিক্ষা, স্বাস্থ্যসেবা, দুর্যোগ ত্রাণ ও জীবিকায় টেকসই কর্মসূচির মাধ্যমে সুবিধাবঞ্চিত সম্প্রদায়ের জীবনযাত্রার মানোন্নয়নে মানবিকতা ও স্বচ্ছতার সাথে অবিরত কাজ করা।"
            )}
            icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            }
          />
          <MissionVisionCard
            variant="vision"
            badge={t("Vision", "স্বপ্ন")}
            title={t("Our Vision", "আমাদের স্বপ্ন")}
            description={t(
              "A humane and prosperous Bangladesh where every family enjoys education, dignified healthcare, and the opportunity to build a self-reliant future.",
              "এমন একটি সমৃদ্ধ ও মানবিক বাংলাদেশ গড়ার স্বপ্ন, যেখানে প্রতিটি পরিবার শিক্ষা, মর্যাদাপূর্ণ স্বাস্থ্যসেবা ও স্বাবলম্বী ভবিষ্যৎ লাভ করবে।"
            )}
            icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 3l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17.8 5.8 22.3l2.4-7.4L2 10.4h7.6L12 3z" strokeLinejoin="round" />
              </svg>
            }
          />
        </div>
      </section>

      {/* Donation & Charity Quotes */}
      <DonationQuotesSection locale={locale} />

      {/* Principles & Ideals */}
      <PrinciplesSection
        locale={locale}
        title={{ bn: "নীতি ও আদর্শ", en: "Principles & Ideals" }}
        items={principlesItems}
      />

      {/* Goals */}
      <TabbedPolicySection
        locale={locale}
        title={{ bn: "আমাদের লক্ষ্যসমূহ", en: "Our Goals" }}
        tabs={goalsTabs}
        defaultTabId="social-welfare"
      />

      {/* Income-Expenditure Policy */}
      <section className="bg-muted/50">
        <TabbedPolicySection
          locale={locale}
          title={{ bn: "আয়-ব্যয়ের নীতিমালা", en: "Income & Expenditure Policy" }}
          tabs={financeTabs}
          defaultTabId="income"
        />
      </section>

      {/* Services */}
      <section className="bg-muted/50 py-16">
        <div className="page-container">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="section-title">
              {t("What We Do", "আমরা যা করি")}
            </h2>
            <p className="section-subtitle">
              {t("Programs that create lasting impact", "দীর্ঘস্থায়ী প্রভাব সৃষ্টিকারী কর্মসূচি")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card p-6 transition hover:shadow-md"
              >
                <span className="text-3xl" aria-hidden>
                  {service.icon}
                </span>
                <h3 className="subsection-title mt-3 text-primary">
                  {locale === "bn" ? service.titleBn : service.title}
                </h3>
                <p className="body-text mt-2">
                  {locale === "bn" ? service.descBn : service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="page-container py-16 sm:py-20">
        <div className="mb-10 text-center sm:mb-12">
          <span className="section-badge">{t("Video", "ভিডিও")}</span>
          <h2 className="section-title">
            {t("Video About Our Activities", "আমাদের কার্যক্রম সম্পর্কে ভিডিও")}
          </h2>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
            {!videoPlaying ? (
              <button
                type="button"
                onClick={() => setVideoPlaying(true)}
                className="group relative h-full w-full"
                aria-label={t("Play video", "ভিডিও চালান")}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80')",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/35" aria-hidden />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-white">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition group-hover:scale-105 sm:h-20 sm:w-20">
                    <svg className="ml-1 h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <p className="max-w-xl text-lg font-bold sm:text-2xl">
                    {t(
                      "Activities you may not know about UHWF",
                      "উত্তর চর মানব কল্যাণ ফাউন্ডেশনের যে কার্যক্রম সম্পর্কে আপনি হয়তো জানেন না"
                    )}
                  </p>
                </div>
              </button>
            ) : (
              <iframe
                title={t("UHWF activities video", "UHWF কার্যক্রম ভিডিও")}
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/60 via-muted/40 to-background py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(45,106,79,0.12),transparent)]"
          aria-hidden
        />
        <div className="page-container relative">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="section-title text-heading">
              {t("Our Impact", "আমাদের অর্জন")}
            </h2>
            <div
              className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
              aria-hidden
            />
            <p className="section-subtitle mx-auto mt-4 max-w-4xl text-lg leading-relaxed sm:text-xl">
              {t(
                "We pledged to stand beside disadvantaged people in every corner of Uttar Char village, Mehendiganj, Barishal — these numbers are the quiet witnesses of that commitment.",
                "বরিশাল জেলার মেহেন্দিগঞ্জ উপজেলার উত্তর চর গ্রামের প্রতিটি প্রান্তের সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানোর যে অঙ্গীকার আমরা নিয়েছি — এই সংখ্যাগুলো তারই নীরব সাক্ষী।"
              )}
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {impactStats.map((stat, index) => (
              <AnimatedStat key={stat.labelBn} {...stat} index={index} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 py-16">
        <div className="page-container">
          <h2 className="section-title mb-10 text-center sm:mb-12">
            {t("Voices from Our Community", "আমাদের সম্প্রদায়ের কণ্ঠ")}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="body-text">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="subsection-title text-sm">{item.name}</p>
                  <p className="body-text mt-1 text-sm">{item.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="page-container py-16 sm:py-20">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="section-title">
            {t("Join Us", "আমাদের সাথে যুক্ত হোন")}
          </h2>
          <p className="section-subtitle">
            {t(
              "Choose any path below to stand with us in serving those in need.",
              "আপনি পছন্দমতো যেকোনো উপায়ে আমাদের পাশে দাঁড়িয়ে কষ্টার্ত মানুষের সেবায় অংশ নিতে পারেন।"
            )}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {joinOptions.map((option) => (
            <JoinCard
              key={option.titleBn}
              href={option.href}
              title={t(option.title, option.titleBn)}
              desc={t(option.desc, option.descBn)}
              gradient={option.gradient}
              icon={option.icon}
            />
          ))}
        </div>
      </section>

      {/* Latest Notices */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="page-container">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="section-title text-heading">
              {t("Latest News & Notices", "সর্বশেষ খবর ও নোটিশ")}
            </h2>
            <div
              className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
              aria-hidden
            />
            <Link
              href="/notice"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-card px-5 py-2 text-sm font-bold text-primary shadow-sm transition hover:border-primary/40 hover:bg-primary/5"
            >
              {t("View all notices", "সব নোটিশ দেখুন")}
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestNotices.map((notice) => (
              <NoticePreviewCard
                key={notice.id}
                notice={notice}
                locale={locale}
                readMore={t("Read more", "আরও পড়ুন")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/50 py-16">
        <div className="page-container-narrow py-16">
          <h2 className="section-title mb-8 text-center sm:mb-12">
            {t("Frequently Asked Questions", "সাধারণ জিজ্ঞাসা")}
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="rounded-lg border border-border bg-card">
                <button
                  type="button"
                  className="body-text flex w-full items-center justify-between px-4 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{locale === "bn" ? faq.qBn : faq.q}</span>
                  <span className="ml-4 text-primary" aria-hidden>
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="body-text border-t border-border px-4 py-3">
                    {locale === "bn" ? faq.aBn : faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="page-container py-16">
        <h2 className="section-title mb-6 text-center sm:mb-10">
          {t("Find Us", "আমাদের খুঁজুন")}
        </h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title={t("UHWF Office Location", "UHWF অফিসের অবস্থান")}
            src="https://www.openstreetmap.org/export/embed.html?bbox=90.38%2C23.85%2C90.42%2C23.88&layer=mapnik&marker=23.865%2C90.399"
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {t("Mehendiganj, Barishal, Bangladesh", "মেহেন্দিগঞ্জ, বরিশাল, বাংলাদেশ")} —{" "}
          <a
            href="https://www.openstreetmap.org/?mlat=23.865&mlon=90.399#map=15/23.865/90.399"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {t("Get directions", "দিকনির্দেশনা পান")}
          </a>
        </p>
      </section>

      {/* CTA */}
      <section className="cta-luxury py-20 sm:py-28">
        <div
          className="cta-luxury__bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1591604129939-f608efa850c8?auto=format&fit=crop&w=1600&q=80')",
          }}
          aria-hidden
        />
        <div className="cta-luxury__overlay" aria-hidden />
        <div className="cta-luxury__pattern" aria-hidden />
        <div className="cta-luxury__glow" aria-hidden />

        <div className="page-container relative z-10">
          <div className="cta-luxury__frame mx-auto max-w-3xl px-8 py-14 text-center sm:px-14 sm:py-16">
            <div className="cta-luxury__ornament mb-6 text-xs font-semibold tracking-[0.2em] text-[#d4af37] sm:text-sm">
              <span>{t("Serving Humanity", "মানবতার সেবায়")}</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {t("Join Us in Making a Difference", "পরিবর্তনের সঙ্গী হোন")}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {t(
                "Every contribution helps us reach more families. Become a member or make a donation today.",
                "আপনার অবদান আরও পরিবারের কাছে পৌঁছাতে সাহায্য করে। আজই সদস্য হন বা দান করুন।"
              )}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="cta-luxury__btn-primary inline-flex min-w-[10.5rem] items-center justify-center rounded-lg px-8 py-3.5 text-sm font-bold transition sm:text-base"
              >
                {t("Become a Member", "সদস্য হন")}
              </Link>
              <Link
                href="/donate"
                className="cta-luxury__btn-secondary inline-flex min-w-[10.5rem] items-center justify-center rounded-lg px-8 py-3.5 text-sm font-bold transition sm:text-base"
              >
                {t("Donate", "দান করুন")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
