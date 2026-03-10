import Hero from "./components/ui/Hero";
import NewsCarousel from "./components/ui/NewsCarousel";
import SponsorGrid from "./components/ui/SponsorGrid";
import MapEmbed from "./components/ui/MapEmbed";
import Link from "next/link";
import { newsSlides } from "@/data/news";
import { sponsors } from "@/data/sponsors";
import { getEventSponsors } from "@/data/eventSponsors";

const strassenlaufRouten = [
  {
    name: "Straßenlauf - 1200 m",
    embedSrc:
      "https://www.google.com/maps?q=Stra%C3%9Fenlauf%201200%20m%20Stellichte&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Stra%C3%9Fenlauf%201200%20m%20Stellichte",
  },
  {
    name: "Straßenlauf - 2000 m",
    embedSrc:
      "https://www.google.com/maps?q=Stra%C3%9Fenlauf%202000%20m%20Stellichte&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Stra%C3%9Fenlauf%202000%20m%20Stellichte",
  },
  {
    name: "Straßenlauf - 3500 m",
    embedSrc:
      "https://www.google.com/maps?q=Stra%C3%9Fenlauf%203500%20m%20Stellichte&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Stra%C3%9Fenlauf%203500%20m%20Stellichte",
  },
];

const strassenlaufInfos = [
  ["Veranstaltung", "Stellichter Straßenlauf 2025"],
  ["Datum", "Sonntag, 17.08.2025"],
  ["Start und Ziel", "Sportplatz Stellichte"],
  [
    "Anmeldung",
    "Für 10-km-Lauf per Internet. Für Walken und weitere Läufe per Internet oder am Veranstaltungstag am Sportplatz.",
  ],
  ["Siegerehrung", "ca. 12:30 Uhr"],
];

const strassenlaufDisziplinen = [
  ["Walken", "ab 10:00 Uhr", "ca. 7 km"],
  ["Kinderläufe (jahrgangsabhängig)", "vormittags", "ca. 1 km bis 2 km"],
  ["Erwachsenenläufe", "ab 11:00 Uhr", "ca. 3,5 km bis 10 km"],
];

const strassenlaufEventSponsors = getEventSponsors("strassenlauf-2025");

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="grid"
        eyebrow="Unser Sportverein in Stellichte"
        title="Willkommen auf der Internetseite des TuSV Stellichte!"
        leadText={[
          "Hier finden Sie alles Wissenswerte über unseren Verein.",
          "Informieren Sie sich über die Aktivitäten in unseren Sparten und Kursen. Über die Menüpunkte in der oberen Zeile gelangen Sie schnell dorthin.",
          "Aktuelles und einen Kalender mit allen Terminen gleich hier weiter unten.",
          "Viel Spaß beim Stöbern!",
          "Der Vorstand des TuSV Stellichte",
        ]}
        buttons={[
          {
            text: "Jetzt Mitglied werden",
            href: "/kontakt#kontaktformular",
            variant: "primary",
          },
          {
            text: "Angebot entdecken",
            href: "/angebot",
            variant: "ghost",
          },
        ]}
        gallery={[
          {
            src: "/images/fg-spielplan-1.svg",
            alt: "Spielplan FG Fulde-Stellichte - Termin 1",
            caption: "Sa, 23.08.2025 | Stellichte | 15:00 Uhr",
          },
          {
            src: "/images/fg-spielplan-2.svg",
            alt: "Spielplan FG Fulde-Stellichte - Termin 2",
            caption: "So, 31.08.2025 | Walsrode | 13:00 Uhr",
          },
          {
            src: "/images/fg-spielplan-3.svg",
            alt: "Spielplan FG Fulde-Stellichte - Termin 3",
            caption: "So, 07.09.2025 | Fulde | 14:00 Uhr",
          },
        ]}
      />

      {/* News Section */}
      <section className="section news-section">
        <div className="container">
          <div className="hero-card hero-card--news">
            <div className="hero-card-inner">
              <h2>Aktuelles</h2>
              <NewsCarousel slides={newsSlides} />
              <Link href="/news" className="btn ghost">
                Alle News anzeigen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Straßenlauf Anmeldung */}
      <section className="section alt" id="strassenlauf-anmeldung">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Straßenlauf 2025</p>
              <h2>Anmeldung zum Straßenlauf 2025</h2>
              <p>
                Melden Sie sich hier für den Straßenlauf an. Das Formular dient
                aktuell als Platzhalter.
              </p>
            </div>
          </div>
          <div className="race-route-grid" aria-label="Straßenlauf Streckenkarten">
            {strassenlaufRouten.map((route) => (
              <article className="race-route-card" key={route.name}>
                <MapEmbed src={route.embedSrc} title={route.name} />
                <div className="race-route-content">
                  <h3>{route.name}</h3>
                  <a
                    href={route.mapsUrl}
                    className="card-external"
                    target="_blank"
                    rel="noreferrer"
                  >
                    In Google Maps öffnen
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="card" style={{ marginBottom: "20px" }}>
            <h3>Eckdaten zum Straßenlauf</h3>
            <div className="table-wrap">
              <table className="race-table">
                <thead>
                  <tr>
                    <th>Bereich</th>
                    <th>Information</th>
                  </tr>
                </thead>
                <tbody>
                  {strassenlaufInfos.map(([bereich, info]) => (
                    <tr key={bereich}>
                      <td>{bereich}</td>
                      <td>{info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: "14px" }}>
              Mit Ihrer verbindlichen Anmeldung stimmen Sie zu, dass Daten sowie
              fotografische Aufnahmen in Print- und Digital-Medien sowie auf
              der Homepage des TuSV Stellichte veröffentlicht werden können.
              Ein schriftlicher Widerspruch ist möglich.
            </p>
          </div>
          <div className="card" style={{ marginBottom: "24px" }}>
            <h3>Disziplinen und Distanzen</h3>
            <div className="table-wrap">
              <table className="race-table">
                <thead>
                  <tr>
                    <th>Disziplin</th>
                    <th>Startzeit</th>
                    <th>Strecke</th>
                  </tr>
                </thead>
                <tbody>
                  {strassenlaufDisziplinen.map(([disziplin, startzeit, strecke]) => (
                    <tr key={disziplin}>
                      <td>{disziplin}</td>
                      <td>{startzeit}</td>
                      <td>{strecke}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="section-head" style={{ marginTop: "24px" }}>
            <h3>Eventbezogene Sponsoren</h3>
            <p>Diese Partner unterstützen gezielt den Straßenlauf 2026.</p>
          </div>
          <SponsorGrid sponsors={strassenlaufEventSponsors} />
          <form className="contact-form race-form race-form--spaced" action="#" method="post">
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
              <input type="text" name="club" autoComplete="organization" />
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
              <input type="checkbox" name="consent" required />
              Ich willige ein, dass meine Angaben zur Anmeldung gespeichert und
              verarbeitet werden. *
            </label>
            <p className="form-note">
              Pflichtfelder sind mit * gekennzeichnet. Details in der{" "}
              <Link href="/datenschutz">Datenschutzerklärung</Link>.
            </p>
            <button className="btn primary" type="submit">
              Anmeldung abschicken
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section" id="anfahrt">
        <div className="container">
          <div className="section-head">
            <h2>Anfahrt</h2>
            <p>So finden Sie unsere Sportanlagen in Stellichte.</p>
          </div>
          <MapEmbed
            src="https://www.google.com/maps?q=Stellichte%20Nr.%20136,%2029664%20Walsrode&output=embed"
            title="TuSV Stellichte e.V. – Sportanlagen"
          />
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section alt sponsors-section" id="sponsoren">
        <div className="container">
          <div className="section-head">
            <h2>Besondere Sponsoren</h2>
            <p>Wir danken unseren Partnern für die Unterstützung.</p>
          </div>
          <SponsorGrid sponsors={sponsors} />
        </div>
      </section>
    </main>
  );
}
