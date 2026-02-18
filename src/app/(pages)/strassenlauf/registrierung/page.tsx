import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function RegistrierungPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Anmeldung"
        title="Straßenlauf Registrierung"
        description="Melden Sie sich jetzt für den Stellichter Straßenlauf 2026 an."
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
              Geburtsjahr *
              <input
                type="number"
                name="birthyear"
                min="1900"
                max="2026"
                required
              />
            </label>
            <label>
              E-Mail *
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Distanz *
              <select name="distance" required>
                <option value="">Bitte wählen</option>
                <option value="kids">Kinderlauf (1 km)</option>
                <option value="5km">5 km</option>
                <option value="10km">10 km (Hauptstrecke)</option>
              </select>
            </label>
            <label>
              Verein / Team (optional)
              <input type="text" name="team" />
            </label>
            <label className="checkbox-label">
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
