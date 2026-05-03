import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  const { date, lieu, prenoms, email, message } = data;

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Email de confirmation au couple
    // Note : tant que le domaine n'est pas vérifié sur Resend,
    // l'adresse "from" doit être onboarding@resend.dev
    await resend.emails.send({
      from:    'Nerium Photographie <onboarding@resend.dev>',
      to:      [email],
      subject: `Merci ${prenoms} — Votre demande pour le ${date}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1208; padding: 40px 24px;">
          <h1 style="font-size: 28px; font-weight: 300; margin-bottom: 8px;">Merci ${prenoms?.split('&')[0]?.trim()}</h1>
          <p style="color: #c9a057; font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 32px;">
            Nerium Photographie
          </p>
          <p style="font-size: 17px; line-height: 1.8; color: #4a3e2c;">
            Votre message a bien été reçu. Je reviendrai vers vous très prochainement
            pour vous partager mes disponibilités.
          </p>
          <div style="border-left: 2px solid #c9a057; padding: 20px 24px; margin: 32px 0; background: #f9f5ee;">
            <p style="margin: 0 0 8px; font-size: 14px;"><strong>Date :</strong> ${date}</p>
            <p style="margin: 0 0 8px; font-size: 14px;"><strong>Lieu :</strong> ${lieu}</p>
            <p style="margin: 0;     font-size: 14px;"><strong>Prénoms :</strong> ${prenoms}</p>
          </div>
          <p style="font-size: 15px; line-height: 1.8; color: #4a3e2c; font-style: italic;">
            "${message}"
          </p>
          <hr style="border: none; border-top: 1px solid #e8d8c0; margin: 32px 0;"/>
          <p style="font-size: 13px; color: #9a8a7a;">
            Karsten · Nerium Photographie · Deux-Sèvres (79) · France & International
          </p>
        </div>
      `,
    });

    // Notification à Karsten sur Gmail
    await resend.emails.send({
      from:    'Nerium Photographie <onboarding@resend.dev>',
      to:      ['karsten.walraet@gmail.com'],
      subject: `Nouvelle demande — ${prenoms} — ${date} à ${lieu}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 32px 24px;">
          <h2 style="font-weight: 300;">Nouvelle demande de contact</h2>
          <p><strong>Prénoms :</strong> ${prenoms}</p>
          <p><strong>Date :</strong> ${date}</p>
          <p><strong>Lieu :</strong> ${lieu}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <hr/>
          <p><strong>Message :</strong><br/>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
