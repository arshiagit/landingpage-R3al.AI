# Email Setup for Contact Form

This document provides instructions on how to set up the email functionality for the contact form.

## Prerequisites

1. A PrivateEmail.com account (arshia@r3al.ai)
2. Node.js and npm installed

## Setup Steps

### 1. Configure Environment Variables

1. Open the `.env.local` file in the root of your project.
2. Update the following variables:
   ```
   EMAIL_USER=arshia@r3al.ai
   EMAIL_PASSWORD=your_password
   ```
3. Save the file.

### 2. SMTP Configuration

The contact form is configured to use PrivateEmail.com's SMTP server with the following settings:

- Host: mail.privateemail.com
- Port: 465
- Secure: true (SSL)
- Authentication: Your PrivateEmail.com credentials

These settings are already configured in the API route and test script.

### 3. Test the Email Functionality

1. Run the test script to verify that emails can be sent:
   ```
   npm run test-email
   ```
   
2. If successful, you should see a confirmation message and receive a test email at arshia@r3al.ai.

### 4. Test the Contact Form

1. Start your development server:
   ```
   npm run dev
   ```
2. Navigate to the contact page.
3. Fill out the form and submit it.
4. Check that you receive the email at arshia@r3al.ai.

## Troubleshooting

If emails are not being sent:

1. Check that your PrivateEmail.com credentials are correct.
2. Verify that your PrivateEmail.com account is active and working.
3. Check the server logs for any error messages.
4. Try sending a test email directly from your PrivateEmail.com account.
5. Verify that the nodemailer package is installed:
   ```
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

## Production Deployment

For production, consider:

1. Storing your email credentials securely in your hosting platform's environment variables.
2. Using a dedicated email service like:
   - [SendGrid](https://sendgrid.com/)
   - [Mailgun](https://www.mailgun.com/)
   - [Amazon SES](https://aws.amazon.com/ses/)

These services provide better deliverability and monitoring capabilities.

## Security Considerations

- Never commit your `.env.local` file to version control.
- Consider using environment variables in your deployment platform instead of files.
- Regularly update your email password for better security.

## Support

If you encounter any issues, please contact the development team. 