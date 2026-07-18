import { client } from "@/lib/microcms";
import Link from "next/link";
import styles from "@/components/Contact.module.css";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

export default async function Home() {
  const data = await client.get({
    endpoint: "news",
  });

  return (
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
            <form className={styles.contact_form}>
              <div className={styles.form_group}>　
                <label htmlFor="company">会社名</label>
                <input type="text" id="company" name="company" placeholder="株式会社テンミュー" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="name">お名前 <span className={styles.required_mark}>*</span></label>
                <input type="text" id="name" name="name" placeholder="山田 太郎" required />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="kana">フリガナ <span className={styles.required_mark}>*</span></label>
                <input type="text" id="kana" name="kana" placeholder="ヤマダ タロウ" required />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="email">メールアドレス <span className={styles.required_mark}>*</span></label>
                <input type="email" id="email" name="email" placeholder="tenmew@example.com" required />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="tel">電話番号 <span className={styles.required_mark}>*</span></label>
                <input type="tel" id="tel" name="tel" placeholder="000-0000-0000" required />
              </div>
              <div className={styles.form_group}>
                <span className={styles.form_label}>
                  お問い合わせ種別 <span className={styles.required_mark}>*</span>
                </span>
                <div className={styles.radio_list}>
                  <label className={styles.radio_item}>
                    <input type="radio" name="inquiry_type" value="career" required />
                    キャリア支援に関してご相談・質問
                  </label>
                  <label className={styles.radio_item}>
                    <input type="radio" name="inquiry_type" value="recruit" required />
                    採用に関してのご相談・質問
                  </label>
                  <label className={styles.radio_item}>
                    <input type="radio" name="inquiry_type" value="other" required />
                    その他
                  </label>
                </div>
              </div>
              <div className={styles.form_group}>
                <label htmlFor="message">お問い合わせ内容 <span className={styles.required_mark}>*</span></label>
                <textarea id="message" name="message" required rows={8} className={styles.message_box} placeholder="お問い合わせ内容をご入力ください"/>
              </div>
                <div className={`${styles.form_group} ${styles.checkbox_group}`}>
                  <label className={styles.privacy_policy}>
                    <input type="checkbox" name="privacy" required className={styles.privacy_check}/>
                    <Link href="/privacy_policy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</Link>に同意する。
                  </label>
                </div>
              <Button type="submit">入力内容を確認する</Button>
            </form>
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
  );
}