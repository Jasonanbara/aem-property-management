import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AEM Property Management | Ottawa's Trusted Property Managers",
    template: "%s | AEM Property Management",
  },
  description:
    "Stress-free property management in Ottawa. Expert residential management, tenant screening, rent collection, and maintenance for property owners and investors.",
  keywords: [
    "property management Ottawa",
    "Ottawa rental management",
    "tenant screening Ottawa",
    "property manager Ottawa",
    "rent collection",
    "residential property management",
  ],
  openGraph: {
    title: "AEM Property Management | Ottawa",
    description: "Stress-free property management in Ottawa, Canada.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
