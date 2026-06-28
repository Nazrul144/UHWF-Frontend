import type { Metadata } from "next";
import Home from "@/Website/Home/Home";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Uttar Char Manob Kalyan Foundation — education, healthcare, disaster relief, and community development in Mehendiganj, Barishal.",
};

export default function HomePage() {
  return <Home />;
}
