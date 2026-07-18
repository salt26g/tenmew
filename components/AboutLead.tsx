import Image from "next/image";
import styles from "./AboutLead.module.css";
import Button from "@/components/Button";

export default function AboutLead() {
  return (
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
  );
}