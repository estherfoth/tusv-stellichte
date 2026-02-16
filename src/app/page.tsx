import Hero from "./components/ui/Hero";
import NewsCarousel from "./components/ui/NewsCarousel";
import SponsorGrid from "./components/ui/SponsorGrid";
import MapEmbed from "./components/ui/MapEmbed";
import Link from "next/link";
import { newsSlides } from "@/data/news";
import { sponsors } from "@/data/sponsors";

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
            src: "/images/fussballer.png",
            alt: "Fußball beim TuSV Stellichte",
            caption: "Teamgeist auf dem Platz",
          },
          {
            src: "/images/laufgruppe.png",
            alt: "Laufgruppe in der Natur",
            caption: "Gemeinsam in Bewegung",
          },
          {
            src: "/images/kinderturnen.png",
            alt: "Kinderturnen in der Halle",
            caption: "Sportspaß für die Jüngsten",
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
              <p className="eyebrow">Straßenlauf 2026</p>
              <h2>Anmeldung für den Straßenlauf im August 2026</h2>
              <p>
                Melden Sie sich hier für den Straßenlauf an. Das Formular dient
                aktuell als Platzhalter.
              </p>
            </div>
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
              Telefonnummer
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              Strecke *
              <select name="distance" required>
                <option value="">Bitte auswählen</option>
                <option value="5km">5 km</option>
                <option value="10km">10 km</option>
                <option value="walk">Walking</option>
              </select>
            </label>
            <label>
              Verein / Team
              <input type="text" name="club" autoComplete="organization" />
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
            <h2>Unsere Sponsoren</h2>
            <p>Wir danken unseren Partnern für die Unterstützung.</p>
          </div>
          <SponsorGrid sponsors={sponsors} />
        </div>
      </section>
    </main>
  );
}
