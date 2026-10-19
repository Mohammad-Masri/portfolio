import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-green-pi-77.vercel.app"),
  title: {
    default: "Mohammed Masri | Software Engineer",
    template: "%s | Mohammed Masri",
  },
  description:
    "Mohammed Masri is a Software Engineer in Dubai, delivering scalable enterprise platforms, secure integrations, and intelligent applications. Explore selected work including SEA Platform at Sharjah Education Academy.",
  keywords: [
    "Mohammed Masri",
    "Senior Full Stack Developer",
    "Technical Lead",
    "Sharjah Education Academy",
    "SEA Platform",
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Mohammed Masri | Building Digital Products with Clarity",
    description:
      "Senior Full Stack Developer & Technical Lead. Enterprise architecture, connected systems, and intelligent digital products.",
  },
  twitter: {
    card: "summary",
    title: "Mohammed Masri | Building Digital Products with Clarity",
    description:
      "Senior Full Stack Developer & Technical Lead building scalable enterprise platforms and applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#FAF9FB]">
      <body className={inter.variable + " min-h-screen bg-[#FAF9FB] font-sans antialiased"}>
        {children}
      </body>
    </html>
  );
}
