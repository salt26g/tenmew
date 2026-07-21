import type { Metadata } from "next";
import ConfirmForm from "./ConfirmForm";

export const metadata: Metadata = {
  title:
    "お問い合わせ内容の確認｜株式会社テンミュー",

  description:
    "お問い合わせ内容をご確認いただき、送信してください。",

  alternates: {
    canonical: "https://tenmew.jp/contact/confirm",
  },

  openGraph: {
    title:
      "お問い合わせ内容の確認｜株式会社テンミュー",

    description:
      "お問い合わせ内容をご確認いただき、送信してください。",

    url: "https://tenmew.jp/contact/confirm",

    images: [
      {
        url: "/img/contact/ogp_contact.jpg",
        width: 1200,
        height: 630,
        alt: "お問い合わせ内容の確認｜株式会社テンミュー",
      },
    ],
  },
};

export default async function Home() {
  return (
    <>
      <ConfirmForm />
    </>
  );
}