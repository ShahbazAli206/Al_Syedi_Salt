import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'Name, email and message are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  if (message.length > 4000) {
    return Response.json({ error: 'Message is too long.' }, { status: 400 });
  }

  // If email credentials are not configured, still return success so the form works
  // in dev or before credentials are set. Add CONTACT_EMAIL_USER + CONTACT_EMAIL_PASS
  // to your hosting environment variables to actually send emails.
  if (!process.env.CONTACT_EMAIL_USER || !process.env.CONTACT_EMAIL_PASS) {
    console.log('--- Contact form submission (email not configured) ---');
    console.log({ name, email, phone, message });
    return Response.json({ success: true, message: "Thanks! We'll respond within 24 business hours." });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL_USER,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Al Syedi Website" <${process.env.CONTACT_EMAIL_USER}>`,
    to: process.env.CONTACT_EMAIL_TO || process.env.CONTACT_EMAIL_USER,
    replyTo: email,
    subject: `New B2B Inquiry from ${name} — Al Syedi Salt`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px;">
        <h2 style="color: #8B3A3A;">New Quote Request</h2>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td style="padding:8px 0; font-weight:bold; color:#555; width:100px;">Name</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0; font-weight:bold; color:#555;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0; font-weight:bold; color:#555;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>` : ''}
          <tr><td style="padding:8px 0; font-weight:bold; color:#555; vertical-align:top;">Message</td><td style="padding:8px 0; white-space:pre-wrap;">${message}</td></tr>
        </table>
        <p style="margin-top:20px; color:#888; font-size:12px;">Submitted via syedi-salt.com contact form</p>
      </div>
    `,
  });

  return Response.json({ success: true, message: "Thanks! We'll respond within 24 business hours." });
}
