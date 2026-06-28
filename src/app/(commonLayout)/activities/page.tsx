import type { Metadata } from "next";
import Activities from "@/Website/Activities/Activities";

export const metadata: Metadata = {
  title: "Activities",
  description: "Explore UHWF ongoing initiatives and completed community welfare projects.",
};

export default function ActivitiesPage() {
  return <Activities />;
}
