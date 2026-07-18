import Link from "next/link";
import styles from "./ContactLead.module.css";

export default function ContactLead() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.contactTtl}>CONTACT</h2>
      <p className={styles.contactTxt}>こちらのフォームよりお問い合わせください。</p>
      <div className={styles.contactBtn}>
        <Link href="/contact">お問い合わせ</Link>
        <Link href="/contact#recruit">採用に関して</Link>
      </div>
    </section>
  );
}