import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, organization, locationType, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }
    const emailTo = process.env.EMAIL_TO;
    if (!emailTo) {
      return NextResponse.json({ success: false, error: 'EMAIL_TO environment variable is not set' }, { status: 500 });
    }

    // Send notification to admin
    const { data: dataToAdmin, error: errorToAdmin } = await resend.emails.send({
      from: 'no-reply@thinkfridge.co',
      to: emailTo,
      subject: `New Partner Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Business/Organization: ${organization || 'Not provided'}
        Type of Location: ${locationType || 'Not provided'}
        Message: ${message}
      `,
    });

    // Send thank-you to sender
    const { data: dataToSender, error: errorToSender } = await resend.emails.send({
      from: 'no-reply@thinkfridge.co',
      to: email,
      subject: `Thank You for Your Inquiry, ${name}!`,
      text: `
        Hi ${name},

        Thank you for your interest in partnering with ThinkFridge! We’re excited to explore how we can collaborate to drive innovation and growth together. We’ve received your inquiry and will review it promptly.

        Details:
        - Email: ${email}
        - Organization: ${organization || 'Not provided'}
        - Location Type: ${locationType || 'Not provided'}
        - Message: ${message}

        A member of our team will reach out soon to discuss next steps. In the meantime, feel free to contact us at no-reply@thinkfridge.co.

        Best,
        The ThinkFridge Partnership Team
      `,
    });

    if (errorToAdmin || errorToSender) {
      console.error('Resend error to admin:', errorToAdmin, 'to sender:', errorToSender);
      return NextResponse.json({ success: false, error: errorToAdmin?.message || errorToSender?.message }, { status: 500 });
    }

    console.log('Emails sent successfully:', { dataToAdmin, dataToSender });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
