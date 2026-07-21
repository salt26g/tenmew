import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/Complete.module.css";

export const metadata: Metadata = {
  title:
    "お問い合わせ完了｜株式会社テンミュー",

  description:
    "お問い合わせを受け付けました。内容を確認後、担当者よりご連絡いたします。",

  alternates: {
    canonical: "https://tenmew.jp/contact/complete",
  },

  openGraph: {
    title:
      "お問い合わせ完了｜株式会社テンミュー",

    description:
      "お問い合わせを受け付けました。内容を確認後、担当者よりご連絡いたします。",

    url: "https://tenmew.jp/contact/complete",

    images: [
      {
        url: "/img/contact/ogp_contact.jpg",
        width: 1200,
        height: 630,
        alt: "お問い合わせ完了｜株式会社テンミュー",
      },
    ],
  },
};

export default function CompletePage() {
  return (
    <main className={`${styles.CompletePage} ${styles.bg_yelgrn} ${styles.inner}`}>
      <section className={styles.complete}>
        <h1 className={styles.section_ttl}><span className={styles.en}>COMPLETE</span><span className={styles.ja}>送信完了</span></h1>
        <p className={styles.txt_box}>
          お問い合わせいただきありがとうございます。
          内容を確認後、担当者よりご連絡させていただきます。
        </p>
        <Link href="/" className={styles.top_lnk}>
        TOPへ戻る
      </Link>
      </section>
    </main>
  );
}