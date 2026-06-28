import type { Metadata } from "next";
import Notice from "@/Website/Notice/Notice";

export const metadata: Metadata = {
  title: "Notice",
  description: "Latest news, announcements, and notices from UHWF.",
};

export default function NoticePage() {
  return <Notice />;
}
