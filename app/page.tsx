import type { Metadata } from "next";
import { client } from "@/lib/microcms";
import Image from "next/image";
import styles from "@/components/top.module.css";
import Header from "@/components/Header";
import Contact from "@/components/ContactLead";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title:
    "株式会社テンミュー｜人生に寄り添うキャリア・転職支援サービス",

  description:
    "テンミューは、「何それ面白そう。」があふれる社会を目指し、一人ひとりの可能性を行動へつなげるキャリア支援会社です。",

  alternates: {
    canonical: "https://tenmew.jp",
  },

  openGraph: {
    title:
      "株式会社テンミュー｜人生に寄り添うキャリア・転職支援サービス",

    description:
      "テンミューは、「何それ面白そう。」があふれる社会を目指し、一人ひとりの可能性を行動へつなげるキャリア支援会社です。",

    url: "https://tenmew.jp",

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

export default async function Home() {
  const data = await client.get({
    endpoint: "news",
  });

  return (
  <>
    <Header />
    <main>
      <section className={styles.hero}>
        <div className={styles.lead_ttl}>
          <p><span className={styles.gr}>「なにそれ面白そう。」</span>が</p><p>あふれる社会へ。</p>
        </div>
        <div className={styles.lead_txt}>
          <p>一人ひとりの可能性を、より良い未来へ。<br />私たちはその一歩に寄り添い、挑戦を後押しします。</p>
        </div>
        <h1><div><Image src="/img/basic/hero_img01.webp" alt="株式会社テンミュー" fill style={{ objectFit: "contain" }} /></div></h1>
      </section>
      <section className={styles.about}>
        <div className={styles.img}>
          <Image src="/img/top/top_img01.webp" alt="私たちについて" fill style={{ objectFit: "contain" }} />
        </div>
        <div className={styles.txtBox}>
          <h2><span className={styles.en}>ABOUT</span><span className={styles.ja}>私たちについて</span></h2>
          <p><span className={styles.big}>「なにそれ面白そう。」があふれる社会へ。</span>
          「よく分からないから、やめておく。」ではなく、「なにそれ面白そう。」と一歩踏み出せる人を増やしたい。
          テンミューは、人の可能性を広げ、挑戦を後押しする会社です。</p>
          <Button href="/about">もっと見る</Button>
        </div>
      </section>
      <section className={styles.service}>
        <div className={styles.img}>
          <Image src="/img/top/top_img02.webp" alt="サービス" fill style={{ objectFit: "contain" }} />
        </div>
        <div className={styles.txtBox}>
          <h2><span className={styles.en}>SERVICE</span><span className={styles.ja}>サービス</span></h2>
          <p>大手人材会社出身のキャリアアドバイザーが、新卒・中途を問わず、一人ひとりの人生に向き合うキャリア支援を行っています。
            あなた自身もまだ気づいていない才能や可能性を見つけ出し、趣味やライフプランも含めた「自分らしく働ける未来」を一緒に描きます。</p>
          <Button href="/service">もっと見る</Button>
        </div>
      </section>
      <Contact />
    </main>
    <Footer />
  </>
  );
}