import type { ReactNode } from "react";

export function HomeSectionHeader({
  badge,
  title,
  subtitle,
  children,
  ornament = "star",
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  ornament?: "star" | "lines" | "none";
}) {
  return (
    <div className="home-section-header">
      {badge && <span className="home-section-badge">{badge}</span>}
      <h2 className="section-title home-section-title">{title}</h2>
      {ornament === "star" && (
        <div className="home-section-ornament" aria-hidden>
          <span>✦</span>
        </div>
      )}
      {ornament === "lines" && <div className="home-section-ornament--lines" aria-hidden />}
      {subtitle && <p className="section-subtitle home-section-subtitle">{subtitle}</p>}
      {children}
    </div>
  );
}
