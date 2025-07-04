import { Resend } from 'resend';

const resend = new Resend('re_LY1zPXKo_PMBJab6PasF5kpRhLty46k6e');

async function sendTest() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'omharsule09@gmail.com',
      subject: 'Test from Resend',
      html: '<p>This is a test email</p>',
    });
    console.log('✅ Success:', data);
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

sendTest();