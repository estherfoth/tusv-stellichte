import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function FussballPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Ballsport"
        title="Fußball"
        description="Herren-, Jugend- und Freizeitteams mit Trainingsbetrieb – für Anfänger und Fortgeschrittene."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Was erwartet dich?</h2>
            <div className="section-body">
              <ul>
                <li>Ambitionierter Kreisligafußball</li>
                <li>
                  Kreisklassenfußball, eine Kombination aus Spaß und Ehrgeiz
                </li>
                <li>Altherrenfußball ab einem Alter von (28) 32 Jahren</li>
                <li>Altligafußball ab einem Alter von (38) 40 Jahren</li>
                <li>
                  Andere Altersklassen auf Anfrage (Jugend-, Mädchen- und
                  Damenfußball, Senioren S50 / S65)
                </li>
                <br />
                in einem vom Ehrenamt geprägtem Umfeld
              </ul>
            </div>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainingszeiten:</h2>
          </div>
          <p className="section-body">
            Aktuell dienstags und freitags ab 19.00 Uhr – in Vorbereitungsphasen
            dynamisch
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainer / Teamverantwortliche:</h2>
          </div>
          <div className="section-body">
            <b>1. Herren:</b> Axel Fröhlich – Sascha Bernholz – Hartwig Lütjens
            <br />
            <b>2. Herren</b> Domenic Eiding – René Adamski
            <br />
            <b>Altherren:</b> Jan-Hendrik Buchholz
            <br />
            <b>Altliga:</b> Daniel Rose – Florian Podlech
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wo?</h2>
          </div>
          <p className="section-body">
            Sportplatz Stellichte (Lehrdestadion)
            <br />
            Sportplatz Fulde (Zentralstadion)
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitmachen?</h2>
          </div>
          <p className="section-body">
            Probiere es aus! Schnupperstunden sind möglich –{" "}
            <Link href="/kontakt">kontaktiere uns</Link> für weitere
            Informationen.
            <br />
            <br />
            Hartwig Lüjens: <a href="tel:+49516872468">
              05168/72468
            </a> &amp; <a href="tel:+491623230719">0162 3230719</a>
            <br />
            Marte Köhler: <a href="tel:+4915123098778">0151 23098778</a>
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <Link href="/trainingszeiten" className="btn primary">
              Kurszeiten ansehen
            </Link>
            <Link href="/kontakt" className="btn ghost">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
