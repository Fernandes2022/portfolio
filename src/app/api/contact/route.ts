import { z, ZodError } from 'zod'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const data = schema.parse(json)

    const toEmail = process.env.CONTACT_TO_EMAIL
    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    if (!toEmail || !gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        { ok: false, error: 'Email is not configured. Set GMAIL_USER, GMAIL_APP_PASSWORD, and CONTACT_TO_EMAIL.' },
        { status: 500 }
      )
    }

    const subject = `New portfolio contact from ${data.name}`
    const text = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px 0">New portfolio contact</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p style="white-space:pre-wrap">${data.message}</p>
      </div>
    `

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailAppPassword },
    })

    try {
      await transporter.sendMail({
        from: gmailUser,          
        to: toEmail,
        subject,
        replyTo: data.email,      
        text,
        html,
      })
    } catch (primaryError) {
      console.error('GMAIL_PRIMARY_SEND_FAILED', primaryError)
      const fallbackFrom = gmailUser
      if (data.email && data.email !== fallbackFrom) {
        await transporter.sendMail({
          from: fallbackFrom,
          to: toEmail,
          subject,
          replyTo: data.email,
          text,
          html,
        })
      } else {
        throw primaryError
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { ok: false, error: 'Validation error', issues: err.issues },
        { status: 422 }
      )
    }
    if (err instanceof Error) {
      return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
    }
    return NextResponse.json({ ok: false, error: 'Unknown error' }, { status: 500 })
  }
}

export const runtime = 'nodejs'


