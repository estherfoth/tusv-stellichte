import Hero from "@/app/components/ui/Hero";
import MapEmbed from "@/app/components/ui/MapEmbed";
import SponsorGrid from "@/app/components/ui/SponsorGrid";
import Link from "next/link";
import { getEventSponsors } from "@/data/eventSponsors";

const veranstaltungsdaten = [
  ["Veranstaltung", "Stellichter Straßenlauf 2026"],
  ["Datum", "Sonntag, 16.08.2026"],
  ["Start und Ziel", "Sportplatz Stellichte"],
  [
    "Anmeldung",
    "Für 10-km-Lauf per Internet. Für Walken und weitere Läufe per Internet oder am Veranstaltungstag am Sportplatz.",
  ],
  ["Siegerehrung", "ca.  12:30 Uhr"],
];

const strassenlaufRouten = [
  {
    name: "Straßenlauf - 1200 m",
    komootSrc:
      "https://www.komoot.com/tour/1769594506/embed?share_token=aMVbSVpz04mGw3zrPmVgPwfuj5E2kTfynB2JrGH7As03F2XuZB&layout=map",
    komootUrl: "https://www.komoot.com/tour/1769594506",
  },
  {
    name: "Straßenlauf - 2000 m",
    komootSrc:
      "https://www.komoot.com/tour/1769623358/embed?share_token=a9U6tFlHhYqzVUtUTYLAaRSZGI8zLPhvT85njINhzSqV4Q0Z5n&layout=map",
    komootUrl: "https://www.komoot.com/tour/1769623358",
  },
  {
    name: "Straßenlauf - 3500 m",
    komootSrc:
      "https://www.komoot.com/tour/1600863302/embed?share_token=aXwby3GZ2tP3HoNSdzc5i23Uzks2oMGJY6VJjocHqNG5Wm8muM&layout=map",
    komootUrl: "https://www.komoot.com/tour/1600863302",
  },
  {
    name: "Straßenlauf - 5000 m",
    komootSrc:
      "https://www.komoot.com/tour/1600830704/embed?share_token=aMPGy4i2ZbPvu48RolshuX8QUtGAVl77GDwIcBmFgamcwOlKVn&layout=map",
    komootUrl: "https://www.komoot.com/tour/1600830704",
  },
  {
    name: "Straßenlauf - 10.000 m",
    komootSrc:
      "https://www.komoot.com/tour/1600785912/embed?share_token=aUpP8fHk65PIXIlS0TeFZ1AI9novcUlMgK0Kr1bl5JeGhTjW6D&layout=map",
    komootUrl: "https://www.komoot.com/tour/1600785912",
  },
];

const strassenlaufDisziplinen = [
  ["Walken", "ab 10:00 Uhr", "ca. 7 km"],
  ["Kinderläufe (jahrgangsabhängig)", "vormittags", "ca. 0,4 km bis 2 km"],
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
                  {strassenlaufDisziplinen.map(([name, startzeit, strecke]) => (
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
          <div
            className="race-route-grid"
            aria-label="Straßenlauf Streckenkarten"
          >
            {strassenlaufRouten.map((route) => (
              <article className="race-route-card" key={route.name}>
                <MapEmbed src={route.komootSrc} title={route.name} />
                <div className="race-route-content">
                  <h3>{route.name}</h3>
                  <a
                    href={route.komootUrl}
                    className="card-external"
                    target="_blank"
                    rel="noreferrer"
                  >
                    In Komoot öffnen
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Datenschutzinformationen</h2>
          </div>
          <div className="card">
            <p>
              Mit Ihrer verbindlichen Anmeldung zum Stellichter Straßenlauf
              stimmen Sie zu, dass Ihre Daten sowie fotografische Aufnahmen
              Ihrer Person von dieser Veranstaltung in Print- und Digital-Medien
              veröffentlicht werden.
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
            <p style={{ marginTop: "12px" }}>
              Vielen Dank für Ihr Verständnis.
            </p>
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
          </div>

{/*           <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Eventbezogene Sponsoren</h2>
            <p>Unterstützer des Stellichter Straßenlaufs 2025.</p>
          </div>
          <SponsorGrid sponsors={strassenlaufEventSponsors} /> */}

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
