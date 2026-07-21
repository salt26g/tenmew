"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { contactSchema, ContactFormValues, INQUIRY_TYPES } from "@/lib/schema";
import Button from "@/components/Button";
import styles from "@/components/ContactForm.module.css";

export default function ContactPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues:
      typeof window !== "undefined" && sessionStorage.getItem("contactFormData")
        ? JSON.parse(sessionStorage.getItem("contactFormData")!)
        : { privacyAgreed: false },
  });

  const onSubmit = (data: ContactFormValues) => {
    sessionStorage.setItem("contactFormData", JSON.stringify(data));
    router.push("/contact/confirm");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contact_form}>
      <div className={styles.form_group}>
        <label>会社名</label>
        <input {...register("company")} placeholder="株式会社テンミュー" />
        {errors.company && <p className={styles.error_txt}>{errors.company.message}</p>}
      </div>
      <div className={styles.form_group}>
        <label>お名前 <span className={styles.required_mark}>*</span></label>
        <input {...register("name")} placeholder="山田 太郎"/>
        {errors.name && <p className={styles.error_txt}>{errors.name.message}</p>}
      </div>
      <div className={styles.form_group}>
        <label>フリガナ <span className={styles.required_mark}>*</span></label>
        <input {...register("nameKana")} placeholder="ヤマダ タロウ"/>
        {errors.nameKana && <p className={styles.error_txt}>{errors.nameKana.message}</p>}
      </div>
      <div className={styles.form_group}>
        <label>メールアドレス <span className={styles.required_mark}>*</span></label>
        <input {...register("email")} placeholder="tenmew@example.com" />
        {errors.email && <p className={styles.error_txt}>{errors.email.message}</p>}
      </div>
      <div className={styles.form_group}>
        <label>電話番号 <span className={styles.required_mark}>*</span></label>
        <input {...register("phone")} placeholder="03-1234-5678" />
        {errors.phone && <p className={styles.error_txt}>{errors.phone.message}</p>}
      </div>
      <div className={styles.form_group}>
        <span className={styles.form_label}>お問い合わせ種別 <span className={styles.required_mark}>*</span></span>
        <div className={styles.radio_list}>
          {INQUIRY_TYPES.map((type) => (
            <label key={type.value} className={styles.radio_item}>
            <input type="radio" value={type.value} {...register("inquiryType")} />
              {type.label}
            </label>
          ))}
        </div>
        {errors.inquiryType && <p className={styles.error_txt}>{errors.inquiryType.message}</p>}
      </div>
      <div className={styles.form_group}>
        <label>お問い合わせ内容 <span className={styles.required_mark}>*</span></label>
        <textarea {...register("message")} rows={6} className={styles.message_box} placeholder="お問い合わせ内容をご入力ください" />
        {errors.message && <p className={styles.error_txt}>{errors.message.message}</p>}
      </div>

      <div className={`${styles.form_group} ${styles.checkbox_group}`}>
        <label className={styles.privacy_policy}>
        <input type="checkbox" {...register("privacyAgreed")} className={styles.privacy_check} />
          <a href="/privacy_policy" target="_blank">プライバシーポリシー</a>に同意する。
        </label>
        {errors.privacyAgreed && (
          <p className={styles.error_txt}>{errors.privacyAgreed.message}</p>
        )}
      </div>

      <Button type="submit">入力内容を確認する</Button>
    </form>
  );
}