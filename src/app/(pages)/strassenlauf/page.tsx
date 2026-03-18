import Hero from "@/app/components/ui/Hero";
import SponsorGrid from "@/app/components/ui/SponsorGrid";
import Link from "next/link";
import { getEventSponsors } from "@/data/eventSponsors";

const veranstaltungsdaten = [
  ["Veranstaltung", "Stellichter Straßenlauf 2025"],
  ["Datum", "Sonntag, 17.08.2025"],
  ["Start und Ziel", "Sportplatz Stellichte"],
  [
    "Anmeldung",
    "Für 10-km-Lauf per Internet. Für Walken und weitere Läufe per Internet oder am Veranstaltungstag am Sportplatz.",
  ],
  ["Siegerehrung", "ca. 12:30 Uhr"],
];

const disziplinen = [
  ["Walken", "ab 10:00 Uhr", "ca. 7 km"],
  ["Kinderläufe (jahrgangsabhängig)", "vormittags", "ca. 1 km bis 2 km"],
  ["Erwachsenenläufe", "ab 11:00 Uhr", "ca. 3,5 km bis 10 km"],
];

const strassenlaufEventSponsors = getEventSponsors("strassenlauf-2025");

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
            <h2>Straßenlauf im Überblick</h2>
            <p>
              Der Stellichter Straßenlauf ist eine feste Größe in der Region.
              Nachfolgend finden Sie die wichtigsten Eckdaten und Hinweise aus
              der Ausschreibung in strukturierter Form.
            </p>
          </div>

          <div className="card">
            <h3>Eckdaten zur Veranstaltung</h3>
            <div className="table-wrap">
              <table className="race-table">
                <thead>
                  <tr>
                    <th>Bereich</th>
                    <th>Information</th>
                  </tr>
                </thead>
                <tbody>
                  {veranstaltungsdaten.map(([bereich, info]) => (
                    <tr key={bereich}>
                      <td>{bereich}</td>
                      <td>{info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Disziplinen und Distanzen</h2>
          </div>
          <div className="card">
            <p>
              Die Läufe sind in verschiedene Klassen gegliedert und reichen von
              Kinderstrecken bis zu den längeren Erwachsenenläufen.
            </p>
            <div className="table-wrap" style={{ marginTop: "14px" }}>
              <table className="race-table">
                <thead>
                  <tr>
                    <th>Disziplin</th>
                    <th>Startzeit</th>
                    <th>Strecke</th>
                  </tr>
                </thead>
                <tbody>
                  {disziplinen.map(([name, startzeit, strecke]) => (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>{startzeit}</td>
                      <td>{strecke}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Datenschutzinformationen</h2>
          </div>
          <div className="card">
            <p>
              Mit Ihrer verbindlichen Anmeldung zum Stellichter Straßenlauf
              stimmen Sie zu, dass Ihre Daten sowie fotografische Aufnahmen
              Ihrer Person von dieser Veranstaltung in Print- und
              Digital-Medien veröffentlicht werden.
            </p>
            <p style={{ marginTop: "12px" }}>
              Außerdem werden Ergebnislisten und fotografische Aufnahmen des
              Stellichter Straßenlaufes auf der Homepage des TuSV Stellichte
              veröffentlicht.
            </p>
            <p style={{ marginTop: "12px" }}>
              Sollten Sie damit nicht einverstanden sein, muss der Widerspruch
              schriftlich erfolgen.
            </p>
            <p style={{ marginTop: "12px" }}>Vielen Dank für Ihr Verständnis.</p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Anmeldung</h2>
          </div>
          <p>
            Die Online-Anmeldung ist weiterhin möglich. Über den folgenden Link
            gelangen Sie direkt zum Formular.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <Link href="/strassenlauf/registrierung" className="btn primary">
              Hier geht es zur Anmeldung
            </Link>
            <Link href="/#strassenlauf-anmeldung" className="btn ghost">
              Zum Anmeldeformular
            </Link>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Eventbezogene Sponsoren</h2>
            <p>Unterstützer des Stellichter Straßenlaufs 2025.</p>
          </div>
          <SponsorGrid sponsors={strassenlaufEventSponsors} />

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
