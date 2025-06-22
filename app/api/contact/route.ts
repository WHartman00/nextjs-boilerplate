import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Email to YOU (ThinkFridge team)
    await transporter.sendMail({
      from: `"ThinkFridge Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    // Auto-confirmation email to submitter
    await transporter.sendMail({
      from: `"ThinkFridge" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for your interest in ThinkFridge!`,
      text: `Hi ${name},

Thanks for reaching out to ThinkFridge! We've received your inquiry and will get back to you shortly.

If you have any urgent questions, feel free to reply to this email.

Best,  
The ThinkFridge Team`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email failed:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
