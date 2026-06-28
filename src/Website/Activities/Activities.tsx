"use client";

import Link from "next/link";
import { useTranslate } from "@/shared/useLocale";
import PageBanner from "@/shared/PageBanner";

const ongoing = [
  {
    title: "Winter Clothing Drive 2026",
    titleBn: "শীতবস্ত্র বিতরণ ২০২৬",
    location: "Rangpur, Dinajpur",
    locationBn: "রংপুর, দিনাজপুর",
    desc: "Distributing warm clothes and blankets to 2,000 families before winter peaks.",
    descBn: "শীতের শীর্ষে পৌঁছানোর আগে ২,০০০ পরিবারে উষ্ণ কাপড় ও কম্বল বিতরণ।",
    status: "Ongoing",
    statusBn: "চলমান",
  },
  {
    title: "Rural Health Camp Series",
    titleBn: "গ্রামীণ স্বাস্থ্য শিবির",
    location: "Mymensingh",
    locationBn: "ময়মনসিংহ",
    desc: "Monthly free medical checkups and medicine distribution in remote villages.",
    descBn: "দূরবর্তী গ্রামে মাসিক বিনামূল্যে চিকিৎসা পরীক্ষা ও ওষুধ বিতরণ।",
    status: "Ongoing",
    statusBn: "চলমান",
  },
  {
    title: "Girls Education Scholarship",
    titleBn: "মেয়েদের শিক্ষা বৃত্তি",
    location: "Nationwide",
    locationBn: "সারাদেশ",
    desc: "Supporting 150 female students with tuition, books, and mentoring.",
    descBn: "১৫০ জন মেয়ে শিক্ষার্থীকে টিউশন, বই ও পরামর্শ দিয়ে সহায়তা।",
    status: "Ongoing",
    statusBn: "চলমান",
  },
];

const completed = [
  {
    title: "Flood Relief 2025",
    titleBn: "বন্যা ত্রাণ ২০২৫",
    location: "Sylhet, Sunamganj",
    locationBn: "সিলেট, সুনামগঞ্জ",
    desc: "Emergency food, clean water, and temporary shelter for 800+ families.",
    descBn: "৮০০+ পরিবারে জরুরি খাদ্য, বিশুদ্ধ পানি ও অস্থায়ী আশ্রয়।",
    year: "2025",
  },
  {
    title: "School Renovation Project",
    titleBn: "স্কুল সংস্কার প্রকল্প",
    location: "Gaibandha",
    locationBn: "গাইবান্ধা",
    desc: "Rebuilt 3 classrooms and provided furniture for 200 students.",
    descBn: "৩টি শ্রেণিকক্ষ সংস্কার ও ২০০ শিক্ষার্থীর জন্য আসবাবপত্র সরবরাহ।",
    year: "2024",
  },
  {
    title: "Ramadan Food Package",
    titleBn: "রমজান খাদ্য প্যাকেজ",
    location: "Dhaka, Narayanganj",
    locationBn: "ঢাকা, নারায়ণগঞ্জ",
    desc: "Distributed iftar essentials to 1,500 families during Ramadan.",
    descBn: "রমজানে ১,৫০০ পরিবারে ইফতার সামগ্রী বিতরণ।",
    year: "2024",
  },
  {
    title: "Tree Plantation Drive",
    titleBn: "বৃক্ষরোপণ অভিযান",
    location: "Mehendiganj, Barishal",
    locationBn: "মেহেন্দিগঞ্জ, বরিশাল",
    desc: "Planted 5,000 saplings with community volunteers and school children.",
    descBn: "সম্প্রদায়ের স্বেচ্ছাসেবক ও স্কুলশিশুদের সাথে ৫,০০০ চারাগাছ রোপণ।",
    year: "2023",
  },
];

export default function Activities() {
  const t = useTranslate();

  return (
    <div>
      <PageBanner>
          <h1 className="page-title text-heading">{t("Our Activities", "আমাদের কার্যক্রম")}</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            {t(
              "From disaster response to long-term education programs, UHWF works year-round to serve communities in need across Bangladesh.",
              "দুর্যোগ মোকাবিলা থেকে দীর্ঘমেয়াদি শিক্ষা কর্মসূচি — UHWF সারা বছর বাংলাদেশের অসহায় সম্প্রদায়ের সেবায় কাজ করে।"
            )}
          </p>
      </PageBanner>

      <section className="page-container py-16">
        <h2 className="section-title mb-8">
          {t("Ongoing Initiatives", "চলমান উদ্যোগ")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ongoing.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {t(project.status, project.statusBn)}
              </span>
              <h3 className="mt-3 font-bold">{t(project.title, project.titleBn)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t(project.location, project.locationBn)}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(project.desc, project.descBn)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="page-container">
          <h2 className="section-title mb-8">
            {t("Completed Projects", "সম্পন্ন প্রকল্প")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {completed.map((project) => (
              <article
                key={project.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-secondary-foreground">
                  {project.year}
                </div>
                <div>
                  <h3 className="font-bold">{t(project.title, project.titleBn)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t(project.location, project.locationBn)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(project.desc, project.descBn)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <Link
          href="/gallary"
          className="inline-block rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground"
        >
          {t("View Project Gallery →", "প্রকল্প গ্যালারি দেখুন →")}
        </Link>
      </section>
    </div>
  );
}
