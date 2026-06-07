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
    name: "Straßenlauf - 3500 m",
    embedSrc:
      "https://www.google.com/maps/d/embed?mid=1CnYuHQcZOswOEqd8cDw44eZMDee4Szg&ehbc=2E312F&noprof=1",
    mapsUrl:
      "https://www.google.com/maps/d/edit?mid=1CnYuHQcZOswOEqd8cDw44eZMDee4Szg&usp=sharing",
  },
  {
    name: "Straßenlauf - 5000 m",
    embedSrc:
      "https://www.google.com/maps/d/embed?mid=13RbupbezGCR1Bl5PIBFuprnlOL1dDmE&ehbc=2E312F&noprof=1",
    mapsUrl:
      "https://www.google.com/maps/d/edit?mid=13RbupbezGCR1Bl5PIBFuprnlOL1dDmE&usp=sharing",
  },
  {
    name: "Straßenlauf - 10.000 m",
    embedSrc:
      "https://www.google.com/maps/d/embed?mid=1Hb9_pgauBuS-N90KGo5don4iHKTN0js&ehbc=2E312F&noprof=1",
    mapsUrl:
      "https://www.google.com/maps/d/edit?mid=1Hb9_pgauBuS-N90KGo5don4iHKTN0js&usp=sharing",
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
