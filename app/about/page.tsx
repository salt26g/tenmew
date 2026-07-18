import type { Metadata } from "next";

import Image from "next/image";
import styles from "@/components/About.module.css";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import Contact from "@/components/ContactLead";

export const metadata: Metadata = {
  title:
    "私たちについて｜株式会社テンミュー",

  description:
    "「何それ面白そう。」があふれる社会を目指す、テンミューの想いやミッション、会社概要をご紹介します。",

  alternates: {
    canonical: "https://tenmew.jp/about",
  },

  openGraph: {
    title:
      "私たちについて｜株式会社テンミュー",

    description:
      "「何それ面白そう。」があふれる社会を目指す、テンミューの想いやミッション、会社概要をご紹介します。",

    url: "https://tenmew.jp/about",

    images: [
      {
        url: "/img/about/ogp_about.jpg",
        width: 1200,
        height: 630,
        alt: "私たちについて｜株式会社テンミュー",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className={styles.AboutPage}>
      <Breadcrumb items={[{ label: "私たちについて" }]} />
      <PageHero
        en="ABOUT"
        ja="私たちについて"
        lead={"テンミューが目指す社会やミッション、\n会社概要をご紹介します。"}
        image="/img/about/about_img01.webp"
        alt="私たちについて"
        links={[
          {
            href: "#vision",
            txt: "私たちについて",
          },
          {
            href: "#mission",
            txt: "ミッション",
          },
          {
            href: "#company",
            txt: "会社概要",
          },
        ]}
      />
      <section id="vision">
        <div className={`${styles.bg_grn} ${styles.inner}`}>
          <h2 className={styles.section_ttl}><span className={styles.en}>VISION</span><span className={styles.ja}>私たちの想い</span></h2>
          <p className={styles.txt_box}>
            <span className={styles.big}>「なにそれ面白そう。」があふれる社会へ。</span>
          </p>
          <p className={styles.txt_box}>
            人は自分の可能性を感じられたとき、初めて未来を想像し、「やってみたい」と行動します。
            一方で、自分の可能性に気づけず、「自分には無理」と挑戦を諦めてしまう人も少なくありません。
          </p>
          <p className={styles.txt_box}>
            だから私たちは、一人ひとりの挑戦を後押しし、一歩踏み出すきっかけをつくりたい。
            その一歩が、新しい出会いや可能性を生み、一人ひとりのより良い未来へとつながっていく。
          </p>
          <p className={styles.txt_box}>
            <span className={styles.bold}>「よく分からない。」だから、やめておく。</span>
            <span className={styles.bold}>そんな選択ではなく、</span>
            <span className={styles.bold}>「なにそれ面白そう。」だから、やってみる。</span>
          </p>
          <p className={styles.txt_box}>
            この選択が当たり前になる社会を、テンミューは目指しています。
          </p>
        </div>
        <div className={`${styles.bg_gry} ${styles.inner}`}>
          <h3 className={styles.section_sub_ttl}>テンミューが大切にしていること</h3>
          <p className={styles.txt_box}>
            私たちは、人は未来を想像できたとき、初めて夢や目標を持てると考えています。夢や目標があるから挑戦できる。挑戦を続けるから、新しい未来を実現できる。
          </p>
          <p className={styles.txt_box}>
            <span className={styles.bold}>「想像 → 挑戦 → 実現」</span>
          </p>
          <p className={styles.txt_box}>
            テンミューは、この循環こそが、人の可能性を広げる原動力だと信じています。
            だからこそ、一人ひとりが理想の未来を想像し、その一歩を踏み出すきっかけをつくる存在でありたいと考えています。
          </p>
          <div className={styles.bg_wht_box}>
            <p className={styles.quote}>
              「空を飛ぶことを可能にしたのは、<br />
              <span className={styles.right}>空を飛ぶことを夢見たからである。」</span>
              <span className={styles.name}>— カール・ポパー</span>
            </p>
            <p className={styles.quote}>
              「私は失敗したことはない。<br />
              <span className={styles.right}>ただ、うまくいかない方法を1万通り見つけただけだ。」</span>
              <span className={styles.name}>— トーマス・エジソン</span>
            </p>
            <p className={styles.quote}>
              「人間が想像できることは、必ず人間が実現できる。」
              <span className={styles.name}>— ジュール・ヴェルヌ</span>
            </p>
          </div>
        </div>
      </section>
      <section id="mission" className={styles.mission}>
        <div className={styles.img}>
          <Image src="/img/about/about_img02.webp" alt="ミッション" fill style={{ objectFit: "contain" }} />
        </div>
        <div className={`${styles.tra_box}`}>
          <h2 className={styles.section_ttl}><span className={styles.en}>MISSION</span><span className={styles.ja}>ミッション</span></h2>
          <p className={styles.txt_box}>
            <span className={styles.big}>可能性を、行動へ。</span>
          </p>
          <p className={styles.txt_box}>
            人は可能性を感じたとき、未来を想像し、行動したくなる。
          </p>
          <p className={styles.txt_box}>
            だから私たちは、人や仕事、企業、そして産業に眠る可能性を見つけ出し、<br />
            「自分にもできるかもしれない」<br />
            「それ、面白そう」<br />
            と思える気付きを届け、行動に至るまでのプロセスを支援します。
          </p>
          <p className={styles.txt_box}>
            可能性に気づくことが、行動につながる。行動が、新しい未来をつくる。
            私たちは、その最初の一歩を支え続けます。
          </p>
        </div>
      </section>
      <section id="company">
        <div className={styles.inner}>
          <h2 className={styles.section_ttl}><span className={styles.en}>COMPANY</span><span className={styles.ja}>会社概要</span></h2>
          <ul className={styles.company_info}>
            <li>
              <p><span>会社名</span>株式会社テンミュー</p>
            </li>
            <li>
              <p><span>住　所</span>東京都調布市仙川町1-1-2</p>
            </li>
            <li>
              <p><span>代表取締役</span>本川 篤</p>
            </li>
            <li>
              <p><span>設　立</span>令和8年2月16日</p>
            </li>
            <li>
              <p><span>資本金</span>300,000円</p>
            </li>
            <li>
              <p><span>事業内容</span>人材育成、研修及びコンサルティング業<br />
              有料職業紹介事業</p>
            </li>
          </ul>
        </div>
      </section>
      <Contact />
    </main>
  );
}