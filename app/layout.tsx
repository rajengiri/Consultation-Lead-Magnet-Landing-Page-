import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Free AI Marketing Consultation | Digital Rajen",
  description:
    "Book a free one-hour one-to-one AI marketing consultation and receive a customized digital marketing plan in PDF format.",
  openGraph: {
    title: "Free AI Marketing Consultation | Digital Rajen",
    description:
      "Book a free one-hour one-to-one AI marketing consultation and receive a customized digital marketing plan in PDF format.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Digital Rajen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Marketing Consultation | Digital Rajen",
    description:
      "Book a free one-hour one-to-one AI marketing consultation and receive a customized digital marketing plan in PDF format.",
    images: ["/og.png"],
  },
  // TODO: Add the square favicon when it is provided.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
