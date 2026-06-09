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
            href: "/mitglied",
            variant: "primary",
          },
          {
            text: "Angebot entdecken",
            href: "/angebot",
            variant: "ghost",
          },
        ]}
        /*         gallery={[
          // Fußball
          [
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
          ],
          // Tischtennis
          [
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
          ],
          // Fußball 2
          [
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
          ],
        ]}*/
      />

      {/* News Section */}
      {/*   <section className="section news-section">
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
      </section> */}

      {/* Straßenlauf Section */}
      <section className="section" id="strassenlauf">
        <div className="container">
          <div className="section-head">
            <h2>Straßenlauf 2026</h2>
          </div>
          <div className="section-body">
            Auch dieses Jahr findet am <strong>Sonntag, 16. August 2026</strong>{" "}
            wieder einmal der Stellichter Straßenlauf statt!
            <br />
            Dieses Jahr geht es für die Läuferinnen und Läufer zum 40. Mal an
            den Start.
          </div>
          <br />
          <div className="hero-actions">
            <Link href="/strassenlauf/registrierung" className="btn primary">
              Zur Anmeldung
            </Link>
            <Link href="/strassenlauf" className="btn ghost">
              Mehr erfahren
            </Link>
          </div>
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
      {/*    <section className="section alt sponsors-section" id="sponsoren">
        <div className="container">
          <div className="section-head">
            <h2>Besondere Sponsoren</h2>
            <p>Wir danken unseren Partnern für die Unterstützung.</p>
          </div>
          <SponsorGrid sponsors={sponsors} />
        </div>
        </section> */}
    </main>
  );
}
