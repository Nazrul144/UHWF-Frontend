"use client";

import { useLocale, useTranslate } from "@/shared/useLocale";
import PageBanner from "@/shared/PageBanner";

const notices = [
  {
    id: "1",
    date: "2026-06-20",
    category: "Event",
    categoryBn: "ইভেন্ট",
    title: "Annual General Meeting 2026",
    titleBn: "বার্ষিক সাধারণ সভা ২০২৬",
    excerpt:
      "All members are invited to attend the AGM on July 15, 2026 at UHWF office. Agenda includes annual report presentation and executive committee election.",
    excerptBn:
      "১৫ জুলাই ২০২৬ তারিখে UHWF অফিসে বার্ষিক সাধারণ সভায় সকল সদস্যকে আমন্ত্রণ জানানো হলো। এজেন্ডায় বার্ষিক প্রতিবেদন ও নির্বাহী কমিটি নির্বাচন রয়েছে।",
  },
  {
    id: "2",
    date: "2026-06-10",
    category: "Announcement",
    categoryBn: "ঘোষণা",
    title: "Ramadan Relief Distribution Complete",
    titleBn: "রমজান ত্রাণ বিতরণ সম্পন্ন",
    excerpt:
      "Successfully distributed iftar packages to 1,500 families across Dhaka and Narayanganj. Thank you to all donors and volunteers.",
    excerptBn:
      "ঢাকা ও নারায়ণগঞ্জে ১,৫০০ পরিবারে ইফতার প্যাকেজ সফলভাবে বিতরণ করা হয়েছে। সকল দাতা ও স্বেচ্ছাসেবকদের ধন্যবাদ।",
  },
  {
    id: "3",
    date: "2026-05-28",
    category: "Membership",
    categoryBn: "সদস্যপদ",
    title: "New Member Registration Open",
    titleBn: "নতুন সদস্য নিবন্ধন চালু",
    excerpt:
      "We are accepting new membership applications. Sign up online and await admin approval for dashboard access.",
    excerptBn:
      "নতুন সদস্য নিবন্ধন গ্রহণ করা হচ্ছে। অনলাইনে সাইন আপ করুন এবং অ্যাডমিন অনুমোদনের পর ড্যাশবোর্ড অ্যাক্সেস পাবেন।",
  },
  {
    id: "4",
    date: "2026-05-15",
    category: "Program",
    categoryBn: "কর্মসূচি",
    title: "Winter Clothing Drive Launch",
    titleBn: "শীতবস্ত্র বিতরণ কার্যক্রম শুরু",
    excerpt:
      "Collection of warm clothes and blankets begins June 1. Drop-off points available at UHWF office and partner locations.",
    excerptBn:
      "১ জুন থেকে উষ্ণ কাপড় ও কম্বল সংগ্রহ শুরু। UHWF অফিস ও অংশীদার স্থানে জমা দেওয়া যাবে।",
  },
  {
    id: "5",
    date: "2026-04-22",
    category: "Announcement",
    categoryBn: "ঘোষণা",
    title: "Health Camp in Mymensingh — April 30",
    titleBn: "ময়মনসিংহে স্বাস্থ্য শিবির — ৩০ এপ্রিল",
    excerpt:
      "Free medical checkups, medicine distribution, and health awareness sessions for rural communities.",
    excerptBn:
      "গ্রামীণ সম্প্রদায়ের জন্য বিনামূল্যে চিকিৎসা পরীক্ষা, ওষুধ বিতরণ ও স্বাস্থ্য সচেতনতা সেশন।",
  },
];

const categoryColors: Record<string, string> = {
  Event: "bg-secondary/10 text-heading",
  Announcement: "bg-primary/10 text-primary",
  Membership: "bg-accent/20 text-accent-foreground",
  Program: "bg-muted text-muted-foreground",
};

export default function Notice() {
  const locale = useLocale();
  const t = useTranslate();

  return (
    <div>
      <PageBanner>
          <h1 className="page-title text-heading">{t("Notice & News", "নোটিশ ও সংবাদ")}</h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            {t(
              "Stay updated with the latest announcements, events, and program news from Uttar Char Manob Kalyan Foundation.",
              "উত্তর চর মানব কল্যাণ ফাউন্ডেশনের সর্বশেষ ঘোষণা, ইভেন্ট ও কর্মসূচির খবর জানুন।"
            )}
          </p>
      </PageBanner>

      <section className="page-container-narrow py-16">
        <div className="space-y-6">
          {notices.map((notice) => (
            <article
              key={notice.id}
              className="rounded-xl border border-border bg-card p-6 transition hover:shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[notice.category] ?? "bg-muted text-muted-foreground"}`}
                >
                  {t(notice.category, notice.categoryBn)}
                </span>
                <time className="text-sm text-muted-foreground" dateTime={notice.date}>
                  {new Date(notice.date).toLocaleDateString(locale === "bn" ? "bn-BD" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h2 className="card-title mt-3">
                {t(notice.title, notice.titleBn)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(notice.excerpt, notice.excerptBn)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
