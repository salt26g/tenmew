import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    default: "株式会社テンミュー｜人生に寄り添うキャリア・転職支援サービス",
    template: "%s｜株式会社テンミュー",
  },
  description: "テンミューは、「何それ面白そう。」があふれる社会を目指し、一人ひとりの可能性を行動へつなげるキャリア支援会社です。",
  icons: {
    icon: "/img/basic/favicon.png",
    apple: "/img/basic/apple-touch-icon.jpg",
  },
  openGraph: {
    locale: "ja_JP",
    title: "株式会社テンミュー｜人生に寄り添うキャリア・転職支援サービス",
    description: "テンミューは、「何それ面白そう。」があふれる社会を目指し、一人ひとりの可能性を行動へつなげるキャリア支援会社です。",
    url: "https://tenmew.jp",
    siteName: "株式会社テンミュー",
    images: [
      {
        url: "/img/basic/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社テンミュー",
      },
    ],
    type: "website",
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
          <Header />
          {children}
          <Footer />
          </body>
    </html>
  );
}
