import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./animations.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-space" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-green-pi-77.vercel.app"),
  title: {
    default: "Mohammed Masri | Senior Full Stack Developer & Technical Lead",
    template: "%s | Mohammed Masri",
  },
  description:
    "Mohammed Masri — Senior Full Stack Developer and Technical Lead architecting scalable enterprise platforms, AI-powered products, real-time systems, and secure integrations in the UAE.",
  keywords: [
    "Mohammed Masri", "Senior Full Stack Developer", "Technical Lead",
    "Enterprise Architecture", "Next.js", "NestJS", "Microservices",
    "Microfrontends", "AI", "AWS", "Dubai", "UAE",
  ],
  authors: [{ name: "Mohammed Masri" }],
  creator: "Mohammed Masri",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Mohammed Masri | Architecting Complexity",
    description:
      "I architect what others build upon. Enterprise architecture, intelligent applications, and full-stack product engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Masri | Architecting Complexity",
    description:
      "Enterprise architecture, intelligent applications, and full-stack product engineering.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#090b12]">
      <body className={inter.variable + " " + space.variable + " " + mono.variable + " min-h-screen bg-[#090b12] font-sans antialiased"}>
        {children}
      </body>
    </html>
  );
}
