import type { Metadata } from "next";
import { client } from "@/lib/microcms";
import styles from "@/components/Privacy.module.css";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/ContactLead";

export const metadata: Metadata = {
  title:
    "プライバシーポリシー｜株式会社テンミュー",

  description:
    "テンミューの個人情報の取り扱いおよび管理方針についてご確認いただけます。",

  alternates: {
    canonical: "https://tenmew.jp/privacy_policy",
  },

  openGraph: {
    title:
      "プライバシーポリシー｜株式会社テンミュー",

    description:
      "テンミューの個人情報の取り扱いおよび管理方針についてご確認いただけます。",

    url: "https://tenmew.jp/privacy_policy",

    images: [
      {
        url: "/img/privacy_policy/ogp_privacy.jpg",
        width: 1200,
        height: 630,
        alt: "プライバシーポリシー｜株式会社テンミュー",
      },
    ],
  },
};

export default async function Home() {
  const data = await client.get({
    endpoint: "news",
  });

  return (
    <main className={styles.PrivacyPage}>
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />
      <section className={styles.hero}>
        <div className={styles.hero_lead}>
          <h1>
            <span className={styles.en}>PRIVACY POLICY</span>
            <span className={styles.ja}>プライバシーポリシー</span>
          </h1>
          <p className={styles.lead}>
            テンミュー（以下、「当社」といいます。）は、お客様からお預かりする個人情報の重要性を認識し、適切な管理・保護を行うため、以下のとおりプライバシーポリシーを定めます。
          </p>
        </div>
      </section>
      <section className={`${styles.privacy} ${styles.inner}`}>
        <ol className={styles.privacy_ol}>
          <li>
            <h2 className={styles.privacy_ttl}>1. 個人情報の取得</h2>
            <p>当社は、お問い合わせやサービスのご利用、お申し込み等に際して、氏名、メールアドレス、電話番号その他必要な個人情報を適正な方法により取得します。</p>
          </li>
          <li>
            <h2 className={styles.privacy_ttl}>2. 個人情報の利用目的</h2>
            <p>取得した個人情報は、以下の目的で利用します。</p>
            <ul>
              <li>お問い合わせへの対応</li>
              <li>キャリア支援サービスの提供</li>
              <li>ご本人確認</li>
              <li>サービスに関するご案内やご連絡</li>
              <li>サービス品質向上のための分析・改善</li>
              <li>その他、上記利用目的に付随する業務</li>
            </ul>
          </li>
          <li>
            <h2 className={styles.privacy_ttl}>3. 個人情報の管理</h2>
            <p>当社は、個人情報への不正アクセス、漏えい、紛失、改ざん等を防止するため、適切な安全管理措置を講じ、個人情報を適切に管理します。</p>
          </li>
          <li>
            <h2 className={styles.privacy_ttl}>4. 個人情報の第三者提供</h2>
            <p>当社は、次の場合を除き、ご本人の同意なく個人情報を第三者へ提供することはありません。</p>
            <ul>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
              <li>公的機関から法令に基づき開示を求められた場合</li>
              <li>その他、法令で認められる場合</li>
            </ul>
          </li>
          <li>
            <h2 className={styles.privacy_ttl}>5. 個人情報の開示・訂正・削除</h2>
            <p>ご本人から自己の個人情報について、開示、訂正、追加、削除、利用停止等のご請求があった場合には、ご本人確認のうえ、法令に従い適切に対応いたします。</p>
          </li>
          <li>
            <h2 className={styles.privacy_ttl}>6. Cookie（クッキー）について</h2>
            <p>当サイトでは、利便性の向上やアクセス解析のため、Cookieを利用する場合があります。
              Cookieによって取得される情報には、個人を特定できる情報は含まれません。
              ブラウザの設定により、Cookieの利用を拒否することも可能です。</p>
          </li>
          <li>
            <h2 className={styles.privacy_ttl}>7. アクセス解析ツールについて</h2>
            <p>当サイトでは、サービス向上のためアクセス解析ツールを利用する場合があります。
              これらのツールではCookieを利用して利用状況を収集することがありますが、個人を特定する情報は含まれません。</p>
          </li>
          <li>
            <h2 className={styles.privacy_ttl}>8. プライバシーポリシーの変更</h2>
            <p>本ポリシーの内容は、法令の改正やサービス内容の変更等に応じて適宜見直し、改善します。
              変更後のプライバシーポリシーは、本サイトに掲載した時点から効力を生じるものとします。</p>
          </li>
          <li>
            <h2 className={styles.privacy_ttl}>9. お問い合わせ</h2>
            <p>本ポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。</p>
          </li>
        </ol>
        <p className={styles.date}>制定日：2026年7月16日</p>
      </section>
      <Contact />
    </main>
  );
}