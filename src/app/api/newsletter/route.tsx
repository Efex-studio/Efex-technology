import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let email: string | null = null

    if (contentType.includes('application/json')) {
      const body = await request.json()
      email = body.email ?? null
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const bodyText = await request.text()
      const bodyParams = new URLSearchParams(bodyText)
      email = bodyParams.get('email')
    } else {
      // Attempt to handle other body types gracefully
      try {
        const body = await request.json()
        email = body.email ?? null
      } catch {
        const bodyText = await request.text()
        const bodyParams = new URLSearchParams(bodyText)
        email = bodyParams.get('email')
      }
    }

    if (!email) {
      return NextResponse.json({ message: 'Please provide an email address.' }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const receiverEmail = process.env.RECEIVER_EMAIL

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !receiverEmail) {
      console.error('Missing SMTP settings', {
        smtpHost: !!smtpHost,
        smtpPort: !!smtpPort,
        smtpUser: !!smtpUser,
        smtpPass: !!smtpPass,
        receiverEmail: !!receiverEmail,
      })
      return NextResponse.json(
        { message: 'The newsletter mail settings are not configured yet.' },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: `"Newsletter Signup" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: 'New Newsletter Signup',
      html: `
        <h2>Newsletter Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
      `,
    })

    return NextResponse.json({ success: true, message: 'Thanks for subscribing!' })
  } catch (error) {
    console.error('Newsletter error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { message: 'Unable to subscribe at this time. Please try again later.', detail: message },
      { status: 500 },
    )
  }
}
