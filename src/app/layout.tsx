import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
// 1. Siphon the providers from Brad
import { ThemeProvider } from 'next-themes';
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} | ${APP_DESCRIPTION}`,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
  icons: {
    icon: '/images/logo.svg', 
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* 2. Wrap everything in the ThemeProvider so Dark Mode works across the site */}
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          
          <main className="grow container mx-auto px-4 py-8">
            {children}
          </main>

          <Footer />
          
          {/* 3. Add the Toaster at the bottom of the body */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}