"use client";

import { FormEvent, useState } from "react";
import { useTranslate } from "@/shared/useLocale";
import PageBanner from "@/shared/PageBanner";

export default function Contact() {
  const t = useTranslate();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get("name")?.toString().trim()) {
      newErrors.name = t("Name is required", "নাম আবশ্যক");
    }
    if (!data.get("email")?.toString().trim()) {
      newErrors.email = t("Email is required", "ইমেইল আবশ্যক");
    }
    if (!data.get("message")?.toString().trim()) {
      newErrors.message = t("Message is required", "বার্তা আবশ্যক");
    }

    const email = data.get("email")?.toString() ?? "";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t("Please enter a valid email", "সঠিক ইমেইল লিখুন");
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    form.reset();
  };

  return (
    <div>
      <PageBanner>
          <h1 className="page-title text-heading">{t("Contact Us", "যোগাযোগ করুন")}</h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            {t(
              "Have a question, partnership inquiry, or want to volunteer? We would love to hear from you.",
              "কোনো প্রশ্ন, অংশীদারিত্বের আগ্রহ বা স্বেচ্ছাসেবক হতে চান? আমরা আপনার কথা শুনতে আগ্রহী।"
            )}
          </p>
      </PageBanner>

      <section className="page-container py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="card-title text-primary">{t("Get in Touch", "যোগাযোগের তথ্য")}</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="font-semibold text-foreground">{t("Address:", "ঠিকানা:")}</span>
                {t("Mehendiganj, Barishal, Bangladesh", "মেহেন্দিগঞ্জ, বরিশাল, বাংলাদেশ")}
              </li>
              <li className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="font-semibold text-foreground">{t("Phone:", "ফোন:")}</span>
                <a href="tel:+8801700000000" className="text-primary hover:underline">
                  +880 1700-000000
                </a>
              </li>
              <li className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="font-semibold text-foreground">{t("Email:", "ইমেইল:")}</span>
                <a href="mailto:info@uhwf.org" className="text-primary hover:underline">
                  info@uhwf.org
                </a>
              </li>
              <li className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="font-semibold text-foreground">{t("Hours:", "সময়:")}</span>
                {t("Sat – Thu, 9:00 AM – 6:00 PM", "শনি – বৃহস্পতি, সকাল ৯টা – বিকেল ৬টা")}
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <iframe
                title={t("UHWF Office Location", "UHWF অফিসের অবস্থান")}
                src="https://www.openstreetmap.org/export/embed.html?bbox=90.38%2C23.85%2C90.42%2C23.88&layer=mapnik&marker=23.865%2C90.399"
                className="h-56 w-full sm:h-64"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="card-title">{t("Send a Message", "বার্তা পাঠান")}</h2>

            {submitted && (
              <div
                className="mt-4 rounded-md bg-primary/10 px-4 py-3 text-sm text-primary"
                role="status"
              >
                {t(
                  "Thank you! Your message has been received. We will respond within 2 business days. (Backend integration pending)",
                  "ধন্যবাদ! আপনার বার্তা পেয়েছি। ২ কর্মদিবসের মধ্যে উত্তর দেওয়া হবে। (ব্যাকএন্ড সংযোগ পরবর্তীতে)"
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  {t("Full Name", "পূর্ণ নাম")} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  {t("Email", "ইমেইল")} <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  {t("Phone (optional)", "ফোন (ঐচ্ছিক)")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  {t("Message", "বার্তা")} <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
              >
                {t("Send Message", "বার্তা পাঠান")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
