import { client } from "@/lib/microcms";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/Service.module.css";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import Contact from "@/components/ContactLead";

export default async function Home() {
  const data = await client.get({
    endpoint: "news",
  });

  return (
    <main className={styles.ServicePage}>
      <Breadcrumb items={[{ label: "サービス" }]} />
      <PageHero
        en="SERVICE"
        ja="サービス"
        lead={"「なにそれ面白そう。」を行動につなげる、\nテンミューのサービスをご紹介します。"}
        image="/img/service/service_img01.webp"
        alt="サービス"
        links={[
          {
            href: "#support",
            txt: "キャリア支援",
          },
          {
            href: "#reasons",
            txt: "選ばれる理由",
          },
        ]}
      />
      <section id="support" className={styles.support}>
        <div className={`${styles.bg_yelgrn} ${styles.inner}`}>
          <h2 className={styles.section_ttl}><span className={styles.en}>SUPPORT</span><span className={styles.ja}>キャリア支援</span></h2>
          <p className={styles.txt_box}>
            <span className={styles.big}>人に寄り添うキャリア支援</span>
          </p>
          <p className={styles.txt_box}>
            大手人材会社出身のキャリアアドバイザーが、新卒・中途を問わず、一人ひとりの人生に寄り添ったキャリア支援を行います。
          </p>
          <p className={styles.txt_box}>
            あなた自身もまだ気づいていない強みや才能、可能性を発掘し、本当に自分らしく活躍できる仕事の斡旋をお手伝い。
          </p>
          <p className={styles.txt_box}>
            仕事のみだけでなく、結婚や子育てなどのライフイベント、趣味との両立、キャリアアップ、マネジメント、
            経営者としてのキャリアなど、一人ひとりが思い描く人生に合わせて、最適な選択を一緒に考えます。
          </p>
        </div>
        <div className={styles.img}>
          <Image src="/img/service/service_img02.webp" alt="キャリア支援" fill style={{ objectFit: "contain" }} />
        </div>
      </section>
      <section id="reasons" className={styles.inner}>
        <h2 className={styles.section_sub_ttl}>テンミューが選ばれる<span className={`${styles.big} ${styles.yelgrn}`}>3</span>つの理由</h2>
        <ol className={styles.reasons_ol}>
          <li>
            <h3 className={styles.reasons_ttl}>
              <span className={styles.nb}></span>
              <span className={styles.txt}>コーチングで、<br />まだ見えていない可能性を引き出す</span>
            </h3>
            <div className={styles.img}>
              <Image src="/img/service/service_img03.webp" alt="コーチング" fill style={{ objectFit: "contain" }} />
            </div>
            <p>
              約10年間、キャリア面談を重ねて培ったコーチング力を活かし、あなた自身もまだ気づいていない強みや可能性を引き出します。<br />
              答えを押し付けるのではなく、対話を通じて「自分にもできるかもしれない」と思える未来を一緒に描きます。
            </p>
          </li>
          <li>
            <h3 className={styles.reasons_ttl}>
              <span className={styles.nb}></span>
              <span className={styles.txt}>約2万社の企業理解を活かした<br />サポート</span>
            </h3>
            <div className={styles.img}>
              <Image src="/img/service/service_img04.webp" alt="「事業内容への理解」「企業理念への共感」「仕事内容で強みを発揮できるか」" fill style={{ objectFit: "contain" }} />
            </div>
            <p>
              これまで約2万社の企業と関わってきた経験をもとに、「事業内容への理解」「企業理念への共感」「仕事内容で強みを発揮できるか」の3つを大切にしたキャリア支援を行っています。<br />
              企業を深く理解した上で、本当に自分らしく活躍できる環境を一緒に見つけます。
            </p>
          </li>
          <li>
            <h3 className={styles.reasons_ttl}>
              <span className={styles.nb}></span>
              <span className={styles.txt}>仕事だけではなく<br />人生を見据えたキャリア相談</span>
            </h3>
            <div className={styles.img}>
              <Image src="/img/service/service_img05.webp" alt="人生を見据えたキャリア相談" fill style={{ objectFit: "contain" }} />
            </div>
            <p>
              キャリアは、仕事だけで決まるものではありません。<br />
              結婚や子育て、趣味との両立、キャリアアップ、マネジメント、起業など、一人ひとりが思い描く人生に合わせて、最適な選択をサポートします。
            </p>
          </li>
        </ol>
      </section>
      <Contact />
    </main>
  );
}