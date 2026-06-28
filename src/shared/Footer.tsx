"use client";

import Link from "next/link";
import FoundationLogo, {
  FOUNDATION_NAME_BN,
  FOUNDATION_NAME_EN,
} from "@/shared/FoundationLogo";
import { useLocale, useTranslate } from "@/shared/useLocale";

const quickLinks = [
  { href: "/", label: "Home", labelBn: "হোম" },
  { href: "/about-us", label: "About Us", labelBn: "আমাদের সম্পর্কে" },
  { href: "/activities", label: "Activities", labelBn: "কার্যক্রম" },
  { href: "/gallary", label: "Gallery", labelBn: "গ্যালারি" },
  { href: "/notice", label: "Notice", labelBn: "নোটিশ" },
  { href: "/contact", label: "Contact", labelBn: "যোগাযোগ" },
  { href: "/donate", label: "Donate", labelBn: "দান করুন" },
  { href: "/connect-with-us", label: "Connect With Us", labelBn: "আমাদের সাথে যুক্ত হোন" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.87v-6.99H7.9v-2.88h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.88h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z" />
    ),
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: (
      <path d="M23.5 6.2a3.03 3.03 0 00-2.14-2.15C19.56 3.5 12 3.5 12 3.5s-7.56 0-9.36.55A3.03 3.03 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3.03 3.03 0 002.14 2.15c1.8.55 9.36.55 9.36.55s7.56 0 9.36-.55a3.03 3.03 0 002.14-2.15A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    ),
  },
];

export default function Footer() {
  const locale = useLocale();
  const t = useTranslate();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-secondary text-secondary-foreground">
      <div className="page-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3">
            <FoundationLogo size="sm" />
            <div>
              <p className="font-bold">
                {locale === "bn" ? FOUNDATION_NAME_BN : FOUNDATION_NAME_EN}
              </p>
              <p className="text-sm opacity-80">
                {locale === "bn" ? FOUNDATION_NAME_EN : FOUNDATION_NAME_BN}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed opacity-90">
            {t(
              "A Bangladesh-based non-profit committed to education, healthcare, disaster relief, and sustainable community development for underprivileged families.",
              "শিক্ষা, স্বাস্থ্যসেবা, দুর্যোগ ত্রাণ ও টেকসই সম্প্রদায় উন্নয়নে নিবেদিত বাংলাদেশ ভিত্তিক একটি অলাভজনক সংস্থা।"
            )}
          </p>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                aria-label={social.label}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">
            {t("Quick Links", "দ্রুত লিংক")}
          </h2>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="opacity-85 transition hover:opacity-100 hover:underline"
                >
                  {locale === "bn" ? link.labelBn : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">
            {t("Contact", "যোগাযোগ")}
          </h2>
          <address className="space-y-2 text-sm not-italic opacity-90">
            <p>{t("Mehendiganj, Barishal, Bangladesh", "মেহেন্দিগঞ্জ, বরিশাল, বাংলাদেশ")}</p>
            <p>
              <a href="tel:+8801700000000" className="hover:underline">
                +880 1700-000000
              </a>
            </p>
            <p>
              <a href="mailto:info@uhwf.org" className="hover:underline">
                info@uhwf.org
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-container flex flex-col items-center justify-between gap-2 py-4 text-center text-xs opacity-75 sm:flex-row">
          <p>
            &copy; {year}{" "}
            {locale === "bn" ? FOUNDATION_NAME_BN : FOUNDATION_NAME_EN}.{" "}
            {t("All rights reserved.", "সর্বস্বত্ব সংরক্ষিত।")}
          </p>
          <p>{t("Built with compassion for community welfare.", "সম্প্রদায় কল্যাণে সহানুভূতিপূর্ণভাবে তৈরি।")}</p>
        </div>
      </div>
    </footer>
  );
}
