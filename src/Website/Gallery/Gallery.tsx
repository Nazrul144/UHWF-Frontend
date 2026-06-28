"use client";

import Image from "next/image";
import { useTranslate } from "@/shared/useLocale";
import PageBanner from "@/shared/PageBanner";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    alt: "Volunteers distributing food packages",
    altBn: "স্বেচ্ছাসেবকরা খাদ্য বিতরণ করছেন",
    caption: "Food Distribution Drive",
    captionBn: "খাদ্য বিতরণ কার্যক্রম",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836629-18ba1795216d?auto=format&fit=crop&w=600&q=80",
    alt: "Children in classroom",
    altBn: "শ্রেণিকক্ষে শিশুরা",
    caption: "Education Program",
    captionBn: "শিক্ষা কর্মসূচি",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    alt: "Medical camp",
    altBn: "মেডিকেল ক্যাম্প",
    caption: "Free Health Camp",
    captionBn: "বিনামূল্যে স্বাস্থ্য শিবির",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
    alt: "Community gathering",
    altBn: "সম্প্রদায়ের সমাবেশ",
    caption: "Community Outreach",
    captionBn: "সম্প্রদায় সংযোগ",
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f0d05c12?auto=format&fit=crop&w=600&q=80",
    alt: "Tree plantation",
    altBn: "বৃক্ষরোপণ",
    caption: "Tree Plantation Drive",
    captionBn: "বৃক্ষরোপণ অভিযান",
  },
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80",
    alt: "Relief supplies",
    altBn: "ত্রাণ সামগ্রী",
    caption: "Disaster Relief",
    captionBn: "দুর্যোগ ত্রাণ",
  },
];

export default function Gallery() {
  const t = useTranslate();

  return (
    <div>
      <PageBanner>
          <h1 className="page-title text-heading">{t("Gallery", "গ্যালারি")}</h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            {t(
              "Moments from our programs — education, healthcare, disaster relief, and community events across Bangladesh.",
              "আমাদের কর্মসূচির কিছু মুহূর্ত — শিক্ষা, স্বাস্থ্যসেবা, দুর্যোগ ত্রাণ ও সারাদেশের সম্প্রদায় ইভেন্ট।"
            )}
          </p>
      </PageBanner>

      <section className="page-container py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.caption}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={t(item.alt, item.altBn)}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="p-3 text-sm font-medium">
                {t(item.caption, item.captionBn)}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {t(
            "Full CMS-managed gallery with upload support will be available after backend integration.",
            "ব্যাকএন্ড সংযোগের পর সম্পূর্ণ গ্যালারি ব্যবস্থাপনা ও আপলোড সুবিধা যুক্ত হবে।"
          )}
        </p>
      </section>
    </div>
  );
}
