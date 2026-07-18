import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "salt.626kg@gmail.com",
      subject: "【テスト】Resendからメール送信",
      html: `
        <h2>メール送信テスト</h2>
        <p>Resendの設定が成功しました！🎉</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { success: false, error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}