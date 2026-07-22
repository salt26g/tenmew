import Link from "next/link";
import styles from "./ContactLead.module.css";

export default function ContactLead() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact_txt}>
        <h2 className={styles.contactTtl}>CONTACT</h2>
        <p className={styles.contactTxt}>キャリア支援や採用に関してのご相談・ご質問等<br />こちらのフォームよりお問い合わせください。</p>
      </div>
      <div className={styles.contactBtn}>
        <Link href="/contact">お問い合わせ</Link>
        <Link href="/contact#recruit">採用に関して</Link>
      </div>
    </section>
  );
}