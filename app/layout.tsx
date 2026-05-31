import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NatureDry – Premium Dehydrated Foods, Vegetables & Powders",
    template: "%s | NatureDry",
  },
  description:
    "Shop premium dehydrated vegetables, fruit powders, and meal kits. 100% natural, long-lasting, and nutrient-rich foods delivered to your doorstep.",
  keywords: [
    "dehydrated food",
    "dehydrated vegetables",
    "fruit powder",
    "vegetable powder",
    "dried food",
    "healthy food",
    "natural food",
    "survival food",
    "meal kit",
  ],
  authors: [{ name: "NatureDry" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NatureDry",
    title: "NatureDry – Premium Dehydrated Foods, Vegetables & Powders",
    description:
      "Shop premium dehydrated vegetables, fruit powders, and meal kits. 100% natural, long-lasting, and nutrient-rich foods.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
