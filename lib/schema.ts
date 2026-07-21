import { z } from "zod";

export const INQUIRY_TYPES = [
    { value: "career", label: "キャリア支援に関して" },
    { value: "recruit", label: "採用に関して" },
    { value: "other", label: "その他" },
] as const;

export const contactSchema = z.object({
    company: z.string().max(100).optional(),
    name: z.string().min(1, "お名前を入力してください").max(50),
    nameKana: z
        .string()
        .min(1, "フリガナを入力してください")
        .max(50)
        .regex(/^[ァ-ヶー\s　]+$/, "フリガナはカタカナで入力してください"),
    email: z.string().min(1, "メールアドレスを入力してください").email("メールアドレスの形式が正しくありません"),
    phone: z
        .string()
        .min(1, "電話番号を入力してください")
        .regex(/^[0-9()+\- ]{9,15}$/, "電話番号の形式が正しくありません"),
    inquiryType: z.enum(["career", "recruit", "other"], {
        message: "お問い合わせ種別を選択してください",
    }),
    message: z.string().min(1, "お問い合わせ内容を入力してください").max(2000),
    privacyAgreed: z.boolean().refine((val) => val === true, {
        message: "プライバシーポリシーに同意してください",
        }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;