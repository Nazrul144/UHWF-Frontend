import type { Metadata } from "next";
import Gallery from "@/Website/Gallery/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of UHWF community welfare activities and projects.",
};

export default function GalleryPage() {
  return <Gallery />;
}
