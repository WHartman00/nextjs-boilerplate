import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, business, location_type, message } = await request.json();

  // Configure transporter using a service (e.g., Gmail)
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail', // Use env var or default to gmail
    auth: {
      user: process.env.EMAIL_USER, // e.g., your-email@gmail.com
      pass: process.env.EMAIL_PASS, // e.g., app-specific password
    },
  } as nodemailer.TransportOptions); // Type assertion to satisfy TypeScript

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
