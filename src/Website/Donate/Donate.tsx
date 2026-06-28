"use client";

import Link from "next/link";
import { useTranslate } from "@/shared/useLocale";

const donationMethods = [
  {
    title: "Cash Donation (In Person)",
    titleBn: "নগদ দান (সরাসরি)",
    desc: "Visit our office or meet an authorized cashier at foundation events. Members receive digital receipts via WhatsApp.",
    descBn: "আমাদের অফিসে আসুন বা ফাউন্ডেশন ইভেন্টে অনুমোদিত ক্যাশিয়ারের সাথে যোগাযোগ করুন। সদস্যরা WhatsApp-এ ডিজিটাল রসিদ পান।",
  },
  {
    title: "Bank Transfer",
    titleBn: "ব্যাংক ট্রান্সফার",
    desc: "Transfer to UHWF official bank account. Contact treasurer for account details and reference number.",
    descBn: "UHWF-এর সরকারি ব্যাংক হিসাবে ট্রান্সফার করুন। হিসাব নম্বর ও রেফারেন্সের জন্য কোষাধ্যক্ষের সাথে যোগাযোগ করুন।",
  },
  {
    title: "Member Monthly Contribution",
    titleBn: "সদস্যের মাসিক অবদান",
    desc: "Registered members can set up recurring monthly donations recorded by our cashier team.",
    descBn: "নিবন্ধিত সদস্যরা মাসিক পুনরাবৃত্ত দান সেটআপ করতে পারেন, যা ক্যাশিয়ার দল রেকর্ড করবে।",
  },
];

export default function Donate() {
  const t = useTranslate();

  return (
    <div>
      <section className="bg-accent py-16 text-accent-foreground">
        <div className="page-container">
          <h1 className="page-title">{t("Donate", "দান করুন")}</h1>
          <p className="mt-6 max-w-2xl leading-relaxed opacity-90">
            {t(
              "Your generosity directly funds education, healthcare, disaster relief, and livelihood programs for families who need it most. Every contribution is recorded transparently.",
              "আপনার দান সরাসরি শিক্ষা, স্বাস্থ্যসেবা, দুর্যোগ ত্রাণ ও জীবিকা কর্মসূচিতে ব্যয় হয় যারা সবচেয়ে বেশি সাহায্যের প্রয়োজন। প্রতিটি অবদান স্বচ্ছভাবে রেকর্ড করা হয়।"
            )}
          </p>
        </div>
      </section>

      <section className="page-container py-16">
        <h2 className="section-title mb-8">
          {t("Ways to Donate", "দানের উপায়")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {donationMethods.map((method) => (
            <div
              key={method.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-bold text-heading">{t(method.title, method.titleBn)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(method.desc, method.descBn)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="page-container-narrow">
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="card-title">{t("Online Donations", "অনলাইন দান")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                "Online payment via bKash, Nagad, or SSLCommerz is planned for a future phase. For now, please use cash or bank transfer methods above.",
                "bKash, Nagad বা SSLCommerz-এর মাধ্যমে অনলাইন পেমেন্ট পরবর্তী পর্যায়ে আসবে। এখন উপরের নগদ বা ব্যাংক ট্রান্সফার পদ্ধতি ব্যবহার করুন।"
              )}
            </p>
            <div className="mt-6 rounded-lg border border-dashed border-border p-6">
              <p className="text-sm text-muted-foreground">
                {t(
                  "Quick donation form will connect to the payment gateway once the backend is ready.",
                  "ব্যাকএন্ড প্রস্তুত হলে দ্রুত দান ফর্ম পেমেন্ট গেটওয়ের সাথে সংযুক্ত হবে।"
                )}
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
            >
              {t("Contact Us to Donate", "দান করতে যোগাযোগ করুন")}
            </Link>
          </div>
        </div>
      </section>

      <section className="page-container-narrow py-12 text-center">
        <p className="text-sm text-muted-foreground">
          {t(
            "UHWF maintains an immutable donation ledger. Every contribution receives a sequential receipt number (e.g., UHWF-2026-00421) for accountability.",
            "UHWF একটি অপরিবর্তনীয় দান খাতা রাখে। প্রতিটি অবদানের জন্য ক্রমিক রসিদ নম্বর (যেমন UHWF-2026-00421) দেওয়া হয়।"
          )}
        </p>
      </section>
    </div>
  );
}
