import type { Metadata } from "next";
import Contact from "@/Website/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Uttarchar Human Welfare Foundation.",
};

export default function ContactPage() {
  return <Contact />;
}
