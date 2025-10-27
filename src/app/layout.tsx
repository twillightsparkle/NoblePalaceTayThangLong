import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noble Palace Tay Thang Long - Branded Residences in Hanoi",
  description: "Experience luxury and elegance at Noble Palace Tay Thang Long. Premium accommodations in the heart of Hanoi with exceptional service and modern amenities.",
  keywords: "residences, Hanoi, Tay Thang Long, accommodations, Vietnam, premium service",
  authors: [{ name: "Noble Palace Tay Thang Long" }],
  openGraph: {
    title: "Noble Palace Tay Thang Long - Branded Residences in Hanoi",
    description: "Experience luxury and elegance at Noble Palace Tay Thang Long. Premium accommodations in the heart of Hanoi with exceptional service and modern amenities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
