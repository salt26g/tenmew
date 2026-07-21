import type { Metadata } from "next";
import { client } from "@/lib/microcms";
import styles from "@/components/Contact.module.css";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "お問い合わせ・採用情報｜株式会社テンミュー",

  description:
    "テンミューのサービスに関するご相談や採用に関するお問い合わせはこちら。お気軽にご連絡ください。",

  alternates: {
    canonical: "https://tenmew.jp/contact",
  },

  openGraph: {
    title:
      "お問い合わせ・採用情報｜株式会社テンミュー",

    description:
      "テンミューのサービスに関するご相談や採用に関するお問い合わせはこちら。お気軽にご連絡ください。",

    url: "https://tenmew.jp/contact",

    images: [
      {
        url: "/img/contact/ogp_contact.jpg",
        width: 1200,
        height: 630,
        alt: "お問い合わせ・採用情報｜株式会社テンミュー",
      },
    ],
  },
};

export default async function Home() {
  const data = await client.get({
    endpoint: "news",
  });

  return (
  <>
    <Header />
    <main className={styles.ContactPage}>
      <Breadcrumb items={[{ label: "お問い合わせ・採用情報" }]} />
      <PageHero
        en="CONTACT・RECRUIT"
        ja="お問い合わせ・採用情報"
        lead={"サービスや採用に関するご質問やご相談など、\nお気軽にお問い合わせください。"}
        image="/img/contact/contact_img01.webp"
        alt="お問い合わせ・採用情報"
        links={[
          {
            href: "#contact",
            txt: "お問い合わせ",
          },
          {
            href: "#recruit",
            txt: "採用情報",
          },
        ]}
      />
      <section id="contact" className={styles.contact}>
        <div className={`${styles.bg_yelgrn} ${styles.inner}`}>
          <h2 className={styles.section_ttl}><span className={styles.en}>CONTACT</span><span className={styles.ja}>お問い合わせ</span></h2>
          <p className={styles.txt_box}>
            下記フォームにご記入いただいた内容に基づき、担当者より折り返しご連絡させていただきます。
            お問い合わせの内容によっては、ご回答までにお時間をいただく場合がございます。ご了承ください。
          </p>
          <div className={styles.bg_wht_box}>
            <p className={styles.required_note}>
              「<span className={styles.required_mark}>*</span>」のマークは必須項目です。　
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
      <section id="recruit">
        <div className={`${styles.bg_grn} ${styles.inner}`}>
          <h2 className={styles.section_ttl}><span className={styles.en}>RECRUIT</span><span className={styles.ja}>採用情報</span></h2>
          <p className={styles.txt_box}>
            <span className={styles.big}>「なにそれ面白そう。」を、一緒につくる。</span>
          </p>
          <p className={styles.txt_box}>
            現在、積極的な採用活動は行っていません。
            ただ、テンミューの想いや事業に興味を持っていただけた方とのご縁は大切にしたいと考えています。
            「一緒に挑戦してみたい。」と感じていただけたら、上記お問い合わせフォームよりお気軽にお問い合わせください。
          </p>
          <div className={styles.btn}><a href="#contact">お問い合わせする</a></div>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}