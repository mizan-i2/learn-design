import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Precision Steel Detailing Services | Steel Detailing & BIM",
    template: "%s | Precision Steel Detailing Services",
  },
  description:
    "Steel detailing, BIM modeling, and construction support for mining, commercial, and infrastructure projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${dmSans.variable} ${instrumentSerif.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
