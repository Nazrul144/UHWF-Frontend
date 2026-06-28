import type { ReactNode } from "react";

export default function PageBanner({ children }: { children: ReactNode }) {
  return (
    <section className="page-banner relative overflow-hidden py-14 sm:py-16">
      <div className="page-container relative z-10">{children}</div>
    </section>
  );
}
