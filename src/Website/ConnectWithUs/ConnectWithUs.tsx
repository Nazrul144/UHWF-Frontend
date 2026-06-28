"use client";

import Link from "next/link";
import { useTranslate } from "@/shared/useLocale";
import PageBanner from "@/shared/PageBanner";

const executiveCommittee = [
  { name: "Md. Abdul Karim", role: "President", roleBn: "সভাপতি", phone: "+880 1711-000001" },
  { name: "Farida Akter", role: "Vice-President", roleBn: "সহ-সভাপতি", phone: "+880 1711-000002" },
  { name: "Habibur Rahman", role: "General Secretary", roleBn: "সাধারণ সম্পাদক", phone: "+880 1711-000003" },
  { name: "Nazmul Haque", role: "Treasurer", roleBn: "কোষাধ্যক্ষ", phone: "+880 1711-000004" },
  { name: "Shahana Begum", role: "Organizing Secretary", roleBn: "সংগঠন সম্পাদক", phone: "+880 1711-000005" },
  { name: "Rafiqul Islam", role: "Office Secretary", roleBn: "দপ্তর সম্পাদক", phone: "+880 1711-000006" },
  { name: "Taslima Khatun", role: "Cultural Secretary", roleBn: "সাংস্কৃতিক সম্পাদক", phone: "+880 1711-000007" },
  { name: "Jamal Uddin", role: "Sports Secretary", roleBn: "ক্রীড়া সম্পাদক", phone: "+880 1711-000008" },
  { name: "Rokeya Sultana", role: "Women Affairs Secretary", roleBn: "মহিলা বিষয়ক সম্পাদক", phone: "+880 1711-000009" },
  { name: "Anwar Hossain", role: "Publicity Secretary", roleBn: "প্রচার সম্পাদক", phone: "+880 1711-000010" },
  { name: "Salma Parvin", role: "Member Secretary", roleBn: "সদস্য সম্পাদক", phone: "+880 1711-000011" },
];

const advisors = [
  { name: "Dr. Aminul Islam", title: "Education Advisor", titleBn: "শিক্ষা উপদেষ্টা" },
  { name: "Prof. Nasreen Akhter", title: "Health Advisor", titleBn: "স্বাস্থ্য উপদেষ্টা" },
  { name: "Alhaj Mofiz Uddin", title: "Religious Affairs Advisor", titleBn: "ধর্মীয় বিষয়ক উপদেষ্টা" },
  { name: "Barrister Imran Khan", title: "Legal Advisor", titleBn: "আইনি উপদেষ্টা" },
  { name: "Eng. Shahidul Alam", title: "Technical Advisor", titleBn: "প্রযুক্তি উপদেষ্টা" },
  { name: "Mrs. Rabeya Khatun", title: "Women Development Advisor", titleBn: "নারী উন্নয়ন উপদেষ্টা" },
];

function MemberCard({
  name,
  role,
  roleBn,
  phone,
}: {
  name: string;
  role: string;
  roleBn: string;
  phone?: string;
}) {
  const t = useTranslate();

  return (
    <div className="rounded-xl border border-border bg-card p-5 text-center transition hover:shadow-md">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted text-2xl font-bold text-primary">
        {name.charAt(0)}
      </div>
      <h3 className="mt-3 font-bold">{name}</h3>
      <p className="mt-1 text-sm text-primary">{t(role, roleBn)}</p>
      {phone && (
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="mt-2 block text-xs text-muted-foreground hover:text-primary"
        >
          {phone}
        </a>
      )}
    </div>
  );
}

export default function ConnectWithUs() {
  const t = useTranslate();

  return (
    <div>
      <PageBanner>
          <h1 className="page-title text-heading">
            {t("Connect With Us", "আমাদের সাথে যুক্ত হোন")}
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            {t(
              "Meet our leadership team and advisors who guide UHWF's mission to serve communities across Bangladesh.",
              "বাংলাদেশ জুড়ে সম্প্রদায়ের সেবায় UHWF-এর লক্ষ্য পরিচালনাকারী নেতৃত্ব ও উপদেষ্টাদের সাথে পরিচিত হোন।"
            )}
          </p>
      </PageBanner>

      <section className="page-container py-16">
        <h2 className="section-title mb-2">
          {t("Executive Committee", "নির্বাহী কমিটি")}
        </h2>
        <p className="mb-8 text-muted-foreground">
          {t("11 members", "১১ সদস্য")}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {executiveCommittee.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="page-container">
          <h2 className="section-title mb-8">{t("Advisors", "উপদেষ্টামণ্ডলী")}</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-bold">{advisor.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(advisor.title, advisor.titleBn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-16">
        <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center">
          <h2 className="card-title">{t("General Members", "সাধারণ সদস্য")}</h2>
          <p className="mt-2 text-muted-foreground">
            {t(
              "A searchable, paginated list of general members will be available after backend integration.",
              "ব্যাকএন্ড সংযোগের পর সাধারণ সদস্যদের অনুসন্ধানযোগ্য তালিকা যুক্ত হবে।"
            )}
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
          >
            {t("Become a Member", "সদস্য হন")}
          </Link>
        </div>
      </section>
    </div>
  );
}
