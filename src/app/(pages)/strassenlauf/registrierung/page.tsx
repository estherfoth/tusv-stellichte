import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function RegistrierungPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Anmeldung"
        title="Straßenlauf Registrierung"
        description="Melden Sie sich jetzt für den Stellichter Straßenlauf 2025 an."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Online-Anmeldung</h2>
            <p>
              Füllen Sie das Anmeldeformular aus, um sich für den Straßenlauf
              zu registrieren.
            </p>
          </div>

          <form className="contact-form race-form" action="#" method="post">
            <label>
              Vor- und Nachname *
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              Straße, Nr.
              <input type="text" name="street" autoComplete="street-address" />
            </label>
            <label>
              Postleitzahl
              <input type="text" name="postalCode" autoComplete="postal-code" />
            </label>
            <label>
              Wohnort *
              <input type="text" name="city" autoComplete="address-level2" required />
            </label>
            <label>
              Geschlecht *
              <select name="gender" required defaultValue="">
                <option value="">-</option>
                <option value="weiblich">Weiblich</option>
                <option value="maennlich">Männlich</option>
                <option value="divers">Divers</option>
              </select>
            </label>
            <label>
              Jahrgang *
              <input type="number" name="birthyear" min="1900" max="2025" required />
            </label>
            <label>
              Verein
              <input type="text" name="team" autoComplete="organization" />
            </label>
            <label>
              Ihre E-Mail-Adresse
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Telefon
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              Gewünschte Laufstrecke *
              <select name="distance" required defaultValue="">
                <option value="">-</option>
                <option value="walk-5km">1. Walken (ohne Zeitnahme) - 10:00 Uhr - 5,0 km</option>
                <option value="kinder-2020-juenger">
                  2. Laufen - Kinder Jg. 2020 u. jünger - 10:10 Uhr - 0,4 km
                </option>
                <option value="kinder-2016-2019">
                  3. Laufen - Kinder Jg. 2016 bis 2019 - 10:20 Uhr - 1,2 km
                </option>
                <option value="kinder-2012-2015">
                  4. Laufen - Kinder Jg. 2012 bis 2015 - 10:25 Uhr - 2,0 km
                </option>
                <option value="erwachsene-35km">
                  5. Laufen - Erwachsene - 11:00 Uhr - 3,5 km
                </option>
                <option value="erwachsene-50km">
                  6. Laufen - Erwachsene - 11:00 Uhr - 5,0 km
                </option>
                <option value="erwachsene-100km">
                  7. Laufen - Erwachsene - 11:00 Uhr - 10,0 km
                </option>
              </select>
            </label>
            <label>
              Nachricht
              <textarea name="message" rows={8} />
            </label>
            <label className="consent">
              <input type="checkbox" name="privacy" required />
              Ich akzeptiere die{" "}
              <Link href="/datenschutz">Datenschutzerklärung</Link> *
            </label>
            <button type="submit" className="btn primary">
              Anmeldung absenden
            </button>
          </form>

          <div
            className="card"
            style={{
              marginTop: "32px",
              padding: "20px",
              background: "var(--bg-secondary)",
            }}
          >
            <p>
              <strong>Hinweis:</strong> Das Formular dient aktuell als
              Platzhalter. Die finale Anmeldefunktion wird rechtzeitig vor dem
              Event aktiviert.
            </p>
            <p style={{ marginTop: "12px" }}>
              Sie können sich alternativ auch direkt am Veranstaltungstag vor
              Ort anmelden.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Weitere Informationen</h2>
          </div>
          <p>
            Alle Details zum Straßenlauf finden Sie auf der{" "}
            <Link href="/strassenlauf">Straßenlauf-Infoseite</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
