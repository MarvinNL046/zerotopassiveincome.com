import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zerotopassiveincome.com"),
  title: {
    default: "Zero To Passive Income — Build Income That Works While You Sleep",
    template: "%s | Zero To Passive Income",
  },
  description:
    "Learn how to build multiple passive income streams — affiliate marketing, dividend investing, digital products, and more. Real strategies, no get-rich-quick BS.",
  keywords: [
    "passive income",
    "passive income ideas",
    "how to make passive income",
    "affiliate marketing",
    "dividend investing",
    "digital products",
    "passive income for beginners",
  ],
  authors: [{ name: "Zero To Passive Income" }],
  creator: "Zero To Passive Income",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zerotopassiveincome.com",
    siteName: "Zero To Passive Income",
    title: "Zero To Passive Income — Build Income That Works While You Sleep",
    description:
      "Real strategies to build passive income from zero. Affiliate marketing, dividends, digital products — step by step guides for beginners.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zero To Passive Income",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero To Passive Income — Build Income That Works While You Sleep",
    description:
      "Real strategies to build passive income from zero. No BS, just results.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
