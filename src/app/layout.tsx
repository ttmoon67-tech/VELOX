import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VELOX — Defend Your Motion | Premium Phone Cases",
  description:
    "Engineered for those who move. Military-grade protection meets aerodynamic design. Discover VELOX phone cases — built for speed, crafted for defense.",
  keywords: ["phone case", "VELOX", "military protection", "MagSafe", "iPhone case", "Samsung case"],
  openGraph: {
    title: "VELOX — Defend Your Motion",
    description: "Military-grade phone protection, aerodynamic design.",
    siteName: "VELOX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
