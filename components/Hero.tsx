import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.lead}>
          {/* <p>あなたの才能を発掘して</p><p><span className={styles.gr}>「働く」</span>が楽しみになる毎日を。</p>*/}
          <p><span>あ</span><span>な</span><span>た</span><span>の</span><span>才</span><span>能</span><span>を</span><span>発</span><span>掘</span><span>し</span><span>て</span></p>
          <p><div className={styles.gr}><span>「</span><span>働</span><span>く</span><span>」</span></div><span>が</span><span>楽</span><span>し</span><span>み</span><span>に</span><span>な</span><span>る</span><span>毎</span><span>日</span><span>を</span><span>。</span></p>
        </div>
        <h1><div><Image src="/img/basic/hero_img01.webp" alt="株式会社テンミュー" fill style={{ objectFit: "contain" }} /></div></h1>
    </section>
  );
}