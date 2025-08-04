import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.TO_EMAIL;

export async function POST(req: NextRequest) {
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY environment variable" },
      { status: 500 }
    );
  }
  if (!TO_EMAIL) {
    return NextResponse.json(
      { error: "Missing TO_EMAIL environment variable" },
      { status: 500 }
    );
  }
  try {
    const { email, text } = await req.json();

    if (!email || !text) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>", // Use your verified sender email here
        to: TO_EMAIL, // Use the recipient email from your environment variable
        subject: "New Message",
        html: `<p>Message from: ${email}</p><div>${text}</div>`,
        reply_to: email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data.error || "Failed to send email: " + JSON.stringify(data),
        },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
