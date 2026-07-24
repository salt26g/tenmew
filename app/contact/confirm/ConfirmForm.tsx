"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ContactFormValues, INQUIRY_TYPES } from "@/lib/schema";
import styles from "@/components/Confirm.module.css";

export default function ConfirmPage() {
  const router = useRouter();
  const [data, setData] = useState<ContactFormValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("contactFormData");
    if (!raw) {
      router.replace("/contact");
      return;
    }
    setData(JSON.parse(raw));
  }, [router]);

  const handleSubmit = async () => {
    if (!data) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("送信に失敗しました");
      sessionStorage.removeItem("contactFormData");
      router.push("/contact/complete");
    } catch {
      setError("送信中にエラーが発生しました。時間をおいて再度お試しください。");
      setIsSubmitting(false);
    }
  };

  if (!data) return null;

  const inquiryLabel = INQUIRY_TYPES.find((t) => t.value === data.inquiryType)?.label ?? "";

  return (
    <main className={`${styles.ConfirmPage} ${styles.bg_yelgrn}`}>
      <section className={`${styles.confirm} ${styles.inner}`}>
        <h1 className={styles.section_ttl}><span className={styles.en}>CONFIRM</span><span className={styles.ja}>入力内容のご確認</span></h1>
        <div className={styles.bg_wht_box}>
          <dl>
          {data.company && (
            <div className={styles.form_group}>
              <dt>会社名</dt>
              <dd>{data.company}</dd>
            </div>
            )}
            <div className={styles.form_group}>
              <dt>お名前</dt>
              <dd>{data.name}</dd>
            </div>
            <div className={styles.form_group}>
              <dt>フリガナ</dt>
              <dd>{data.nameKana}</dd>
            </div>
            <div className={styles.form_group}>
              <dt>メールアドレス</dt>
              <dd>{data.email}</dd>
            </div>
            <div className={styles.form_group}>
              <dt>電話番号</dt>
              <dd>{data.phone}</dd>
            </div>
            <div className={styles.form_group}>
              <dt>お問い合わせ種別</dt>
              <dd>{inquiryLabel}</dd>
            </div>
            <div className={styles.form_group}>
              <dt>お問い合わせ内容</dt>
              <dd >{data.message}</dd>
            </div>
          </dl>
          {error && <p className={styles.error_txt}>{error}</p>}
          <div className={styles.contactBtn}>
            <button
              onClick={() => router.push("/contact")}
              disabled={isSubmitting}
            >
              戻る
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "送信中..." : "送信する"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}