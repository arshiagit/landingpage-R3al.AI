// Test script to verify email functionality
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Testing email functionality...');
  
  // Use environment variables if available, otherwise use defaults
  const emailUser = process.env.EMAIL_USER || 'arshia@r3al.ai';
  const emailPassword = process.env.EMAIL_PASSWORD || 'Arshia!123';
  
  console.log(`Using email: ${emailUser}`);
  
  try {
    // Create a transporter with PrivateEmail.com SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });
    
    // Email content
    const mailOptions = {
      from: `"R3al.AI Test" <${emailUser}>`,
      to: 'arshia@r3al.ai',
      subject: 'Test Email from R3al.AI Contact Form',
      text: 'This is a test email to verify that the email functionality is working correctly.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #2753FD;">Test Email</h2>
          <p>This is a test email to verify that the email functionality is working correctly.</p>
          <p>If you received this email, your email configuration is working!</p>
        </div>
      `,
    };
    
    console.log('Attempting to send email...');
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('Error sending email:', error);
    process.exit(1);
  }
}

testEmail(); 