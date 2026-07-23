import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://tenmew.jp"),

  title: {
    default: "株式会社テンミュー",
    template: "%s｜株式会社テンミュー",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://tenmew.jp",
  },

  icons: {
    icon: "/img/basic/favicon.png",
    apple: "/img/basic/apple-touch-icon.jpg",
  },

  openGraph: {
    locale: "ja_JP",
    siteName: "株式会社テンミュー",
    type: "website",
    images: [
      {
        url: "/img/basic/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社テンミュー",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
          {children}
          <Analytics />
      </body>
    </html>
  );
}
