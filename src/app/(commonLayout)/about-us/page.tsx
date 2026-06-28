import type { Metadata } from "next";
import About from "@/Website/About/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Uttar Char Manob Kalyan Foundation — our history, mission, vision, and core values.",
};

export default function AboutPage() {
  return <About />;
}
