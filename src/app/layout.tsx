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
  title: "Aalpha Gir Gay Gaushala - Pure A2 Products & Ethical Farming",
  description:
    "Aalpha Gir Gay Gaushala is a sanctuary for sacred Gir cows offering pure A2 Ghee and organic VermiCompost. Rooted in tradition, committed to purity.",
  keywords: [
    "Aalpha Gir Gay Gaushala",
    "Gir Gay Gaushala",
    "A2 Gir Cow Ghee",
    "Organic VermiCompost",
    "Gir Gay Gaushala",
    "A2 Ghee",
    "VermiCompost",
    "Organic Farm",
    "Natural Farming",
  ],
  openGraph: {
    title: "Aalpha Gir Gay Gaushala - Pure A2 Products",
    description:
      "Experience the purity of A2 Gir Cow Ghee and organic VermiCompost from Aalpha Gir Gay Gaushala.",
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
