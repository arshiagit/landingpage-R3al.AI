import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    // Create a transporter with PrivateEmail.com SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER || 'arshia@r3al.ai',
        pass: process.env.EMAIL_PASSWORD || 'Arshia!123',
      },
    });

    // Email content
    const mailOptions = {
      from: `"R3al.AI Contact Form" <${process.env.EMAIL_USER || 'arshia@r3al.ai'}>`,
      to: 'arshia@r3al.ai',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #2753FD;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
} 