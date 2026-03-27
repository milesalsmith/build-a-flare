import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Import your new 16-ified Header
import Header from "@/components/shared/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build-a-Flare | L7 Security Lab",
  description: "A modern Next.js 16 E-commerce and Security Origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* 2. Place the Header above the children */}
        <Header />
        
        {/* 3. The main area grows to fill space, keeping footer at bottom */}
        <main className="flex-grow">
          {children}
        </main>

        {/* We can add the Footer here later! */}
      </body>
    </html>
  );
}