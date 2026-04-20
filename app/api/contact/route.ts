import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 320;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";

    // Honeypot field for bots
    if (company) {
      return NextResponse.json(
        { ok: true, message: "Message received." },
        { status: 200 }
      );
    }

    if (!name || name.length < MIN_NAME_LENGTH) {
      return NextResponse.json(
        { ok: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { ok: false, error: "Name is too long." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { ok: false, error: "Email address is too long." },
        { status: 400 }
      );
    }

    if (!message || message.length < MIN_MESSAGE_LENGTH) {
      return NextResponse.json(
        { ok: false, error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { ok: false, error: "Message is too long." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { ok: false, error: "Server email is not configured." },
        { status: 500 }
      );
    }

    if (!contactToEmail) {
      console.error("Missing CONTACT_TO_EMAIL");
      return NextResponse.json(
        { ok: false, error: "Server email recipient is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: `Bamboos Wind Services <${contactFromEmail}>`,
      to: [contactToEmail],
      replyTo: [email],
      subject: `New contact form message from ${name}`,
      text: [
        "New contact form message",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New contact form message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <div style="white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          ok: false,
          error: "Failed to send email. Please try again later.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Email was sent. We will come back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}