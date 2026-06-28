import type { Metadata } from "next";
import ConnectWithUs from "@/Website/ConnectWithUs/ConnectWithUs";

export const metadata: Metadata = {
  title: "Connect With Us",
  description: "Meet the UHWF executive committee, advisors, and connect with our team.",
};

export default function ConnectWithUsPage() {
  return <ConnectWithUs />;
}
