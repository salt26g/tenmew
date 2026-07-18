import Image from "next/image";
import styles from "./ServiceLead.module.css";
import Button from "@/components/Button";

export default function ServiceLead() {
  return (
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
  );
}