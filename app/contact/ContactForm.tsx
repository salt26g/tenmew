"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "@/components/Contact.module.css";

type ContactFormData = {
  company: string;
  name: string;
  kana: string;
  email: string;
  tel: string;
  inquiry_type: string;
  message: string;
  privacy: boolean;
};

export default function ContactForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    sessionStorage.setItem("contact", JSON.stringify(data));
    router.push("/contact/confirm");
  };

  return (
    <form
      className={styles.contact_form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.form_group}>
        <label htmlFor="company">会社名</label>
        <input
          type="text"
          id="company"
          placeholder="株式会社テンミュー"
          {...register("company")}
        />
      </div>

      <div className={styles.form_group}>
        <label htmlFor="name">
          お名前 <span className={styles.required_mark}>*</span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="山田 太郎"
          {...register("name", {
            required: "お名前を入力してください",
          })}
        />
        {errors.name && (
          <p className={styles.error}>{errors.name.message}</p>
        )}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="kana">
          フリガナ <span className={styles.required_mark}>*</span>
        </label>
        <input
          type="text"
          id="kana"
          placeholder="ヤマダ タロウ"
          {...register("kana", {
            required: "フリガナを入力してください",
          })}
        />
        {errors.kana && (
          <p className={styles.error}>{errors.kana.message}</p>
        )}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="email">
          メールアドレス <span className={styles.required_mark}>*</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="tenmew@example.com"
          {...register("email", {
            required: "メールアドレスを入力してください",
            pattern: {
              value:
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "メールアドレスの形式が正しくありません",
            },
          })}
        />
        {errors.email && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="tel">
          電話番号 <span className={styles.required_mark}>*</span>
        </label>
        <input
          type="tel"
          id="tel"
          placeholder="000-0000-0000"
          {...register("tel", {
            required: "電話番号を入力してください",
          })}
        />
        {errors.tel && (
          <p className={styles.error}>{errors.tel.message}</p>
        )}
      </div>

      <div className={styles.form_group}>
        <span className={styles.form_label}>
          お問い合わせ種別 <span className={styles.required_mark}>*</span>
        </span>

        <div className={styles.radio_list}>
          <label className={styles.radio_item}>
            <input
              type="radio"
              value="career"
              {...register("inquiry_type", {
                required: "お問い合わせ種別を選択してください",
              })}
            />
            キャリア支援に関してご相談・質問
          </label>

          <label className={styles.radio_item}>
            <input
              type="radio"
              value="recruit"
              {...register("inquiry_type", {
                required: "お問い合わせ種別を選択してください",
              })}
            />
            採用に関してのご相談・質問
          </label>

          <label className={styles.radio_item}>
            <input
              type="radio"
              value="other"
              {...register("inquiry_type", {
                required: "お問い合わせ種別を選択してください",
              })}
            />
            その他
          </label>
        </div>

        {errors.inquiry_type && (
          <p className={styles.error}>
            {errors.inquiry_type.message}
          </p>
        )}
      </div>