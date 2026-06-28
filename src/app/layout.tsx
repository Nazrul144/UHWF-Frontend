import type { Metadata } from "next";
import "@hixbe/kalpurush";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Uttar Char Manob Kalyan Foundation",
    template: "%s | উত্তর চর মানব কল্যাণ ফাউন্ডেশন",
  },
  description:
    "উত্তর চর মানব কল্যাণ ফাউন্ডেশন — মেহেন্দিগঞ্জ, বরিশাল ভিত্তিক মানবিক ও সামাজিক কল্যাণ সংস্থা।",
  icons: {
    icon: [
      { url: "/icon.jpg", type: "image/jpeg", sizes: "32x32" },
      { url: "/logo/logo.jpg", type: "image/jpeg", sizes: "any" },
    ],
    apple: "/icon.jpg",
    shortcut: "/icon.jpg",
  },
  keywords: [
    "উত্তর চর মানব কল্যাণ ফাউন্ডেশন",
    "Uttar Char Manob Kalyan Foundation",
    "Mehendiganj",
    "Barishal",
    "non-profit",
    "Bangladesh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning className="h-full antialiased">
      <head>
        <link rel="icon" href="/icon.jpg" type="image/jpeg" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon.jpg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("uhwf-theme");if(t)document.documentElement.setAttribute("data-theme",t);else if(window.matchMedia("(prefers-color-scheme: dark)").matches)document.documentElement.setAttribute("data-theme","dark");}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
