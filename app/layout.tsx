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
  title: "Your Name — Full-Stack Developer",
  description:
    "Personal portfolio of Your Name — a full-stack developer building impactful digital experiences with Laravel, Next.js, and more.",
  keywords: ["portfolio", "full-stack developer", "Next.js", "Laravel", "Malaysia"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Full-Stack Developer",
    description:
      "Personal portfolio of Your Name — a full-stack developer building impactful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
