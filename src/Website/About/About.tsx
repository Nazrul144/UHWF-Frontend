"use client";

import Link from "next/link";
import { useTranslate } from "@/shared/useLocale";
import PageBanner from "@/shared/PageBanner";

const values = [
  {
    title: "Compassion",
    titleBn: "মানবিকতা",
    desc: "We serve every person with empathy, dignity, and respect regardless of background.",
    descBn: "আমরা পটভূমি নির্বিশেষে প্রতিটি মানুষকে সহানুভূতি, মর্যাদা ও সম্মানের সাথে সেবা করি।",
  },
  {
    title: "Transparency",
    titleBn: "স্বচ্ছতা",
    desc: "Our operations and donation records are open and accountable to members and the public.",
    descBn: "আমাদের কার্যক্রম ও দানের হিসাব সদস্য ও জনগণের কাছে উন্মুক্ত ও জবাবদিহিমূলক।",
  },
  {
    title: "Community",
    titleBn: "সম্প্রদায়",
    desc: "We believe lasting change comes from empowering local communities to lead their own development.",
    descBn: "স্থায়ী পরিবর্তন স্থানীয় সম্প্রদায়কে ক্ষমতায়ন করলেই সম্ভব বলে আমরা বিশ্বাস করি।",
  },
  {
    title: "Integrity",
    titleBn: "সততা",
    desc: "We uphold ethical standards in every program, partnership, and financial transaction.",
    descBn: "প্রতিটি কর্মসূচি, অংশীদারিত্ব ও আর্থিক লেনদেনে আমরা নৈতিক মান বজায় রাখি।",
  },
];

const timeline = [
  { year: "2025", event: "Foundation established in Mehendiganj, Barishal", eventBn: "মেহেন্দিগঞ্জ, বরিশালে প্রতিষ্ঠা" },
  { year: "2013", event: "Launched first education scholarship program", eventBn: "প্রথম শিক্ষা বৃত্তি কর্মসূচি চালু" },
  { year: "2016", event: "Expanded disaster relief operations to 10 districts", eventBn: "১০ জেলায় দুর্যোগ ত্রাণ কার্যক্রম সম্প্রসারণ" },
  { year: "2020", event: "COVID-19 emergency food and medical response", eventBn: "কোভিড-১৯ জরুরি খাদ্য ও চিকিৎসা সহায়তা" },
  { year: "2024", event: "Digital member portal and donation tracking initiated", eventBn: "ডিজিটাল সদস্য পোর্টাল ও দান ট্র্যাকিং শুরু" },
];

export default function About() {
  const t = useTranslate();

  return (
    <div>
      <PageBanner>
          <h1 className="page-title text-heading">{t("About Us", "আমাদের সম্পর্কে")}</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            {t(
              "Uttar Char Manob Kalyan Foundation is a registered non-profit organization based in Mehendiganj, Barishal, dedicated to improving the lives of underprivileged communities through education, healthcare, disaster relief, and sustainable development.",
              "উত্তর চর মানব কল্যাণ ফাউন্ডেশন মেহেন্দিগঞ্জ, বরিশাল ভিত্তিক একটি নিবন্ধিত অলাভজনক সংস্থা, যা শিক্ষা, স্বাস্থ্যসেবা, দুর্যোগ ত্রাণ ও টেকসই উন্নয়নের মাধ্যমে সুবিধাবঞ্চিত সম্প্রদায়ের জীবনমান উন্নয়নে নিবেদিত।"
            )}
          </p>
      </PageBanner>

      <section className="page-container py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="card-title text-primary">{t("Our History", "আমাদের ইতিহাস")}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t(
                "Founded in Mehendiganj, Barishal, the foundation began as a volunteer group serving local communities. Over time, we have grown into a structured organization with active members, executive leadership, and welfare programs across the region.",
                "মেহেন্দিগঞ্জ, বরিশালে প্রতিষ্ঠিত এই ফাউন্ডেশন স্থানীয় সম্প্রদায়ের সেবায় স্বেচ্ছাসেবী দল হিসেবে যাত্রা শুরু করে। সময়ের সাথে আমরা সক্রিয় সদস্য, নির্বাহী নেতৃত্ব ও আঞ্চলিক কল্যাণ কর্মসূচি নিয়ে একটি কাঠামোবদ্ধ সংস্থায় পরিণত হয়েছি।"
              )}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t(
                "Today, we operate with a formal executive committee, transparent financial practices, and a commitment to digital accountability for every donation received.",
                "আজ আমরা একটি গঠনতান্ত্রিক নির্বাহী কমিটি, স্বচ্ছ আর্থিক ব্যবস্থাপনা ও প্রতিটি দানের ডিজিটাল জবাবদিহির প্রতিশ্রুতি নিয়ে কাজ করি।"
              )}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-muted/30 p-6">
            <h3 className="card-title text-heading">{t("Milestones", "মাইলফলক")}</h3>
            <ol className="space-y-4">
              {timeline.map((item) => (
                <li key={item.year} className="flex gap-4">
                  <span className="shrink-0 font-bold text-primary">{item.year}</span>
                  <span className="text-sm text-muted-foreground">
                    {t(item.event, item.eventBn)}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="page-container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="card-title text-primary">{t("Mission", "লক্ষ্য")}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t(
                  "To deliver compassionate, transparent, and sustainable welfare programs that empower underprivileged families through education, healthcare, and livelihood support.",
                  "শিক্ষা, স্বাস্থ্যসেবা ও জীবিকা সহায়তার মাধ্যমে সুবিধাবঞ্চিত পরিবারকে ক্ষমতায়ন করে মানবিক, স্বচ্ছ ও টেকসই কল্যাণ কর্মসূচি বাস্তবায়ন করা।"
                )}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="card-title text-primary">{t("Vision", "স্বপ্ন")}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t(
                  "A society where every individual has equal access to basic needs, education, and opportunities to live with dignity and self-reliance.",
                  "এমন একটি সমাজ যেখানে প্রতিটি মানুষের মৌলিক চাহিদা, শিক্ষা ও মর্যাদাপূর্ণ স্বাবলম্বী জীবনযাপনের সুযোগ সমানভাবে থাকবে।"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-container py-16">
        <h2 className="section-title mb-8 text-center">
          {t("Core Values", "মূল মূল্যবোধ")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <h3 className="font-bold text-primary">{t(value.title, value.titleBn)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(value.desc, value.descBn)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-12 text-center text-primary-foreground">
        <div className="page-container-narrow text-center">
          <h2 className="card-title">
            {t("Want to learn more about our team?", "আমাদের দল সম্পর্কে আরও জানতে চান?")}
          </h2>
          <p className="mt-2 opacity-90">
            {t("Meet our executive committee and advisors.", "নির্বাহী কমিটি ও উপদেষ্টামণ্ডলীর সাথে পরিচিত হোন।")}
          </p>
          <Link
            href="/connect-with-us"
            className="mt-6 inline-block rounded-md bg-card px-6 py-3 text-sm font-bold text-primary"
          >
            {t("Connect With Us", "আমাদের সাথে যুক্ত হোন")}
          </Link>
        </div>
      </section>
    </div>
  );
}
