import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.lead}>
          <p>あなたの才能を発掘して</p><p><span className={styles.gr}>「働く」</span>が楽しみになる毎日を。</p>
        </div>
        <h1><Image src="/img/basic/hero_img01.webp" alt="株式会社テンミュー" fill style={{ objectFit: "contain" }} /></h1>
    </section>
  );
}