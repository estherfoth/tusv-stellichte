import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function StrassenlaufPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Veranstaltung"
        title="Stellichter Straßenlauf"
        description="39. Stellichter Straßenlauf 'Quer durch Stellichte' – Traditionslauf im August 2026."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Über den Straßenlauf</h2>
            <p>
              Der Stellichter Straßenlauf ist eine Tradition in unserer Region
              und findet jährlich im August statt. Die Strecke führt quer durch
              Stellichte und bietet eine landschaftlich reizvolle Route.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Distanzen</h3>
              <p>
                Verschiedene Strecken für alle Altersklassen – vom
                Kinderlauf über 5 km bis zur Hauptstrecke.
              </p>
            </article>
            <article className="card">
              <h3>Für alle geeignet</h3>
              <p>
                Ob ambitionierter Läufer oder Hobbyläufer – jeder ist
                willkommen. Auch Familien und Kinder können teilnehmen.
              </p>
            </article>
            <article className="card">
              <h3>Rahmenprogramm</h3>
              <p>
                Neben dem Lauf gibt es ein Rahmenprogramm mit Verpflegung,
                Musik und Siegerehrung.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Termin 2026</h2>
          </div>
          <div className="card">
            <p>
              <strong>Datum:</strong> August 2026 (genauer Termin wird noch
              bekannt gegeben)
            </p>
            <p style={{ marginTop: "12px" }}>
              <strong>Start:</strong> Sportplatz Stellichte
            </p>
            <p style={{ marginTop: "12px" }}>
              <strong>Anmeldung:</strong> Online oder vor Ort am Veranstaltungstag
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Anmeldung</h2>
          </div>
          <p>
            Die Anmeldung für den Straßenlauf 2026 ist ab sofort möglich.
            Nutzen Sie unser Online-Formular oder melden Sie sich direkt am
            Veranstaltungstag an.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <Link href="/strassenlauf/registrierung" className="btn primary">
              Jetzt anmelden
            </Link>
            <Link href="/#strassenlauf-anmeldung" className="btn ghost">
              Zum Anmeldeformular
            </Link>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kontakt & Fragen</h2>
          </div>
          <p>
            Bei Fragen zum Straßenlauf wenden Sie sich gern an uns über das{" "}
            <Link href="/kontakt">Kontaktformular</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
