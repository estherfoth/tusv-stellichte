"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TOPIC_LABELS: Record<string, string> = {
  allgemein: "Allgemeine Anfrage",
  mitgliedschaft: "Mitgliedschaft",
  training: "Training / Sparten",
};

export type KontaktState = {
  success: boolean;
  error?: string;
};

export async function sendKontakt(
  _prevState: KontaktState,
  formData: FormData,
): Promise<KontaktState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const topic = formData.get("topic") as string;
  const message = formData.get("message") as string;

  const topicLabel = TOPIC_LABELS[topic] ?? topic;
  const adminEmail = process.env.CONTACT_EMAIL!;

  try {
    await resend.emails.send({
      from: "Kontaktformular <noreply@mail.tusv-stellichte.de>",
      to: adminEmail,
      subject: `Neue Kontaktanfrage: ${topicLabel} – ${name}`,
      text: `Neue Kontaktanfrage über das Kontaktformular

Name: ${name}
E-Mail: ${email}
Telefon: ${phone || "–"}
Anliegen: ${topicLabel}

Nachricht:
${message}`,
    });

    await resend.emails.send({
      from: "TuSV Stellichte <noreply@mail.tusv-stellichte.de>",
      to: email,
      subject: "Ihre Kontaktanfrage beim TuSV Stellichte ist eingegangen",
      text: `Hallo ${name},

vielen Dank für Ihre Nachricht! Wir haben Ihre Anfrage erhalten und melden uns so bald wie möglich bei Ihnen.

Ihre Angaben:
Anliegen: ${topicLabel}
Nachricht: ${message}

Viele Grüße
TuSV Stellichte`,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return {
      success: false,
      error: "Fehler beim Senden. Bitte versuchen Sie es erneut.",
    };
  }

  return { success: true };
}
