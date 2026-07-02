import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, phone, message, consent } = body;

    if (!name || !email || !message || !consent) {
      return NextResponse.json(
        { message: "Please fill in your name, email, message, and consent to continue." },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !receiverEmail) {
      console.error("Missing SMTP settings", {
        smtpHost: !!smtpHost,
        smtpPort: !!smtpPort,
        smtpUser: !!smtpUser,
        smtpPass: !!smtpPass,
        receiverEmail: !!receiverEmail,
      });
      return NextResponse.json(
        { message: "The contact form mail settings are not configured yet." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Contact Form Submission${subject ? ` - ${subject}` : ""}`,
      html: `
        <h2>New Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        message: "Unable to send your message right now. Please try again later.",
        detail: message,
      },
      { status: 500 },
    );
  }
}