import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Explicit for Workspace
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.EMAIL_USER, // Update in Vercel to whartman@thinkfridge.co
      pass: process.env.EMAIL_PASS, // Your app password (regenerate if needed)
    },
  });
  try {
    // Email to YOU (ThinkFridge team)
    await transporter.sendMail({
      from: `"ThinkFridge" <no-reply@thinkfridge.co>`, // Use no-reply here too if you want
      to: process.env.EMAIL_TO, // Update in Vercel to whartman@thinkfridge.co
      subject: `New Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });
    // Auto-confirmation email to submitter
    await transporter.sendMail({
      from: `"ThinkFridge" <no-reply@thinkfridge.co>`, // Your new alias for no-reply
      to: email,
      subject: `Thanks for your interest in ThinkFridge!`,
      text: `Hi ${name},
Thanks for reaching out to ThinkFridge! We've received your inquiry and will get back to you shortly.
If you have any urgent questions, contact whartman@thinkfridge.co (this is a no-reply address).
Best,
The ThinkFridge Team`,
      html: `<p>Hi ${name},</p><p>Thanks for reaching out to ThinkFridge! We've received your inquiry and will get back to you shortly.</p><p>If you have any urgent questions, contact <a href="mailto:whartman@thinkfridge.co">whartman@thinkfridge.co</a> (this is a no-reply address).</p><p>Best,<br>The ThinkFridge Team</p>`, // HTML for better look
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email failed:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
