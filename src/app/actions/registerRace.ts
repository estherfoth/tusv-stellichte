"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!,
);

const resend = new Resend(process.env.RESEND_API_KEY);

const DISTANCE_LABELS: Record<string, string> = {
  "walk-5km": "Walken (ohne Zeitnahme) – 10:00 Uhr – 5,0 km",
  "kinder-2021-juenger": "Kinder Jg. 2021 u. jünger – 10:10 Uhr – 0,4 km",
  "kinder-2017-2020": "Kinder Jg. 2017 bis 2020 – 10:20 Uhr – 1,2 km",
  "kinder-2013-2016": "Kinder Jg. 2013 bis 2016 – 10:25 Uhr – 2,0 km",
  "erwachsene-3,5km": "Erwachsene – 11:00 Uhr – 3,5 km",
  "erwachsene-5km": "Erwachsene – 11:00 Uhr – 5,0 km",
  "erwachsene-10km": "Erwachsene – 11:00 Uhr – 10,0 km",
};

export type RegisterRaceState = {
  success: boolean;
  error?: string;
};

export async function registerRace(
  _prevState: RegisterRaceState,
  formData: FormData,
): Promise<RegisterRaceState> {
  const name = formData.get("name") as string;
  const street = formData.get("street") as string;
  const postalCode = formData.get("postalCode") as string;
  const city = formData.get("city") as string;
  const gender = formData.get("gender") as string;
  const birthyear = parseInt(formData.get("birthyear") as string, 10);
  const team = formData.get("team") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const distance = formData.get("distance") as string;
  const message = formData.get("message") as string;

  const { error: dbError } = await supabase
    .from("strassenlauf_registrierungen_2026")
    .insert({
      name,
      street: street || null,
      postal_code: postalCode || null,
      city,
      gender,
      birthyear,
      team: team || null,
      email,
      phone: phone || null,
      distance,
      message: message || null,
    });

  if (dbError) {
    console.error("Supabase error:", dbError);
    return {
      success: false,
      error: "Datenbankfehler. Bitte versuche es erneut.",
    };
  }

  const distanceLabel = DISTANCE_LABELS[distance] ?? distance;
  const adminEmail = process.env.CONTACT_EMAIL!;

  await resend.emails.send({
    from: "Straßenlauf <noreply@mail.tusv-stellichte.de>",
    to: adminEmail,
    subject: `Neue Anmeldung Straßenlauf 2026: ${name}`,
    text: `Neue Anmeldung für den Stellichter Straßenlauf 2026

Name: ${name}
Wohnort: ${postalCode ? postalCode + " " : ""}${city}${street ? "\nStraße: " + street : ""}
Geschlecht: ${gender}
Jahrgang: ${birthyear}
Verein: ${team || "–"}
E-Mail: ${email}
Telefon: ${phone || "–"}
Strecke: ${distanceLabel}
${message ? "\nNachricht:\n" + message : ""}`,
  });

  await resend.emails.send({
    from: "TuSV Stellichte <noreply@mail.tusv-stellichte.de>",
    to: email,
    subject: "Anmeldebestätigung – Stellichter Straßenlauf 2026",
    text: `Hallo ${name},

vielen Dank für deine Anmeldung zum Stellichter Straßenlauf 2026!

Deine Anmeldung:
Strecke: ${distanceLabel}
Jahrgang: ${birthyear}
Verein: ${team || "–"}

Bei Fragen erreichst du uns unter ${adminEmail}.

Viele Grüße
TuSV Stellichte`,
  });

  return { success: true };
}
