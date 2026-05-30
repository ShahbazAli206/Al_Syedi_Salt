import nodemailer from 'nodemailer';

export async function POST(request) {
  const { email } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  if (!process.env.CONTACT_EMAIL_USER || !process.env.CONTACT_EMAIL_PASS) {
    console.log('--- Newsletter subscriber (email not configured):', email);
    return Response.json({ success: true, message: "You're subscribed! Expect our next issue soon." });
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
    subject: `New Newsletter Subscriber — ${email}`,
    html: `<p>New newsletter subscriber: <strong>${email}</strong></p><p>Add to your mailing list.</p>`,
  });

  return Response.json({ success: true, message: "You're subscribed! Expect our next issue soon." });
}
