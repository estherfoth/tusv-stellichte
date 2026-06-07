"use client";

import { useActionState } from "react";
import { sendKontakt, KontaktState } from "@/app/actions/sendKontakt";

type KontaktformularProps = {
  initialTopic?: string;
};

const initialState: KontaktState = { success: false };

export default function Kontaktformular({
  initialTopic = "",
}: KontaktformularProps) {
  const [state, formAction, isPending] = useActionState(
    sendKontakt,
    initialState,
  );

  return (
    <section className="section" id="kontaktformular">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2>Kontaktformular</h2>
            <p>
              Für allgemeine Anfragen und die Hallenmiete nutzen Sie bitte das
              folgende Formular.
            </p>
          </div>
        </div>

        {state.success && (
          <p style={{ color: "green", marginBottom: "16px" }}>
            Ihre Anfrage wurde erfolgreich gesendet. Sie erhalten in Kürze eine
            Bestätigung per E-Mail.
          </p>
        )}
        {state.error && (
          <p style={{ color: "red", marginBottom: "16px" }}>{state.error}</p>
        )}

        {!state.success && (
          <form className="contact-form" action={formAction}>
            <label>
              Vor- und Nachname *
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              E-Mail *
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Telefon
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              Anliegen *
              <select name="topic" required defaultValue={initialTopic}>
                <option value="">Bitte auswählen</option>
                <option value="allgemein">Allgemeine Anfrage</option>
                <option value="mitgliedschaft">Mitgliedschaft</option>
                <option value="training">Training / Sparten</option>
              </select>
            </label>
            <label>
              Nachricht *
              <textarea name="message" rows={8} required />
            </label>
            <label className="consent">
              <input type="checkbox" name="consent" required />
              Ich willige ein, dass meine Angaben zur Bearbeitung der Anfrage
              gespeichert und verarbeitet werden. *
            </label>
            <button className="btn primary" type="submit" disabled={isPending}>
              {isPending ? "Wird gesendet..." : "Anfrage senden"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
