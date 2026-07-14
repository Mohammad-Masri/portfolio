import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Mohammed Masri | Senior Full Stack Developer & Technical Lead",
    template: "%s | Mohammed Masri",
  },
  description:
    "Portfolio of Mohammed Masri, a Senior Full Stack Developer and Technical Lead in Dubai specializing in enterprise architecture, microservices, integrations, real-time systems, React, Node.js, and AWS.",
  keywords: [
    "Mohammed Masri",
    "Senior Full Stack Developer",
    "Technical Lead",
    "Enterprise Architecture",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Microservices",
    "Microfrontends",
    "AWS",
    "Dubai",
    "UAE",
  ],
  authors: [{ name: "Mohammed Masri" }],
  creator: "Mohammed Masri",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohammed Masri | Senior Full Stack Developer & Technical Lead",
    description:
      "Enterprise software architecture, secure integrations, real-time systems, and modern product engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Masri | Senior Full Stack Developer & Technical Lead",
    description:
      "Enterprise software architecture, secure integrations, real-time systems, and modern product engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#05080a]">
      <body className={`${inter.variable} min-h-screen bg-[#05080a] font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
