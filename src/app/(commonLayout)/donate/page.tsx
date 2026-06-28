import type { Metadata } from "next";
import Donate from "@/Website/Donate/Donate";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Uttarchar Human Welfare Foundation through your generous donation.",
};

export default function DonatePage() {
  return <Donate />;
}
