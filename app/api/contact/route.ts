import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, business, location_type, message } = await request.json();

  // Configure transporter (ensure env vars are set)
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email to YOU (ThinkFridge team)
  await transporter.sendMail({
    from: `"ThinkFridge Inquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Inquiry from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Business/Organization: ${business}
      Type of Location: ${location_type}
      Message: ${message}
    `,
    html: `
      <h3>New Inquiry from ${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Business/Organization:</strong> ${business}</p>
      <p><strong>Type of Location:</strong> ${location_type}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
}

// Type definition for the request body
interface InquiryData {
  name: string;
  email: string;
  business: string;
  location_type: string;
  message: string;
}
