import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, INQUIRY_TYPES } from "@/lib/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const parsed = contactSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json({ error: "入力内容が正しくありません" }, { status: 400 });
        }

    const { company, name, nameKana, email, phone, inquiryType, message } = parsed.data;
    const inquiryLabel = INQUIRY_TYPES.find((t) => t.value === inquiryType)?.label ?? inquiryType;

    const { error } = await resend.emails.send({
        from: "お問い合わせフォーム <noreply@tenmew.co.jp>",
        to: "salt-626kg@ezweb.ne.jp",
        replyTo: email,
        subject: `【お問い合わせ】${inquiryLabel}`,
        text: [
            `会社名: ${company || "未入力"}`,
            `お名前: ${name}`,
            `フリガナ: ${nameKana}`,
            `メールアドレス: ${email}`,
            `電話番号: ${phone}`,
            `お問い合わせ種別: ${inquiryLabel}`,
            "",
            message,
        ].join("\n"),
    });

    if (error) {
        console.error(error);
        return NextResponse.json({ error: "メール送信に失敗しました" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "サーバーエラーが発生しました" }, { status: 500 });
    }
}