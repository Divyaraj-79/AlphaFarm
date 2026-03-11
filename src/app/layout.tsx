import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Farm - Pure Gir Cow Products | Natural & Ethical Gaushala",
  description:
    "Alpha Farm is a Gir Cow Gaushala offering pure, natural products including A2 Gir Cow Ghee and organic VermiCompost. Rooted in tradition, committed to purity.",
  keywords: [
    "Gir Cow Gaushala",
    "Alpha Farm",
    "A2 Ghee",
    "VermiCompost",
    "Organic Farm",
    "Gir Cow Ghee",
    "Natural Farming",
  ],
  openGraph: {
    title: "Alpha Farm - Pure Gir Cow Products",
    description:
      "Experience the purity of Gir Cow Ghee and organic VermiCompost from Alpha Farm Gaushala.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
