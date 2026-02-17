import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function RadfahrenPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Ausdauer & Outdoor"
        title="Radfahren"
        description="Gemeinsam radeln und die Umgebung erkunden – auf zwei Rädern unterwegs."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Radfahren beim TuSV</h2>
            <p>
              Unsere Radgruppe trifft sich regelmäßig zu gemeinsamen Touren.
              Ob entspannte Feierabendrunde oder längere Wochenendtour – hier
              ist für jeden etwas dabei.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Verschiedene Touren</h3>
              <p>
                Von kurzen Feierabendrunden bis zu ausgedehnten Tagestouren –
                die Strecken sind abwechslungsreich.
              </p>
            </article>
            <article className="card">
              <h3>Region entdecken</h3>
              <p>
                Gemeinsam erkunden wir die schöne Umgebung rund um Stellichte
                auf dem Fahrrad.
              </p>
            </article>
            <article className="card">
              <h3>Gemeinschaft</h3>
              <p>
                Radfahren in der Gruppe macht Spaß, motiviert und sorgt für
                gesellige Runden.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Für wen ist die Radgruppe geeignet?</h2>
          </div>
          <p>
            Unsere Radgruppe ist offen für alle, die gern in Gesellschaft
            radeln. Egal ob Tourenrad, Rennrad oder E-Bike – jeder ist
            willkommen.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Treffpunkt & Zeiten</h2>
          </div>
          <p>
            Die aktuellen Treffzeiten und -punkte finden Sie auf der{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitfahren?</h2>
          </div>
          <p>
            Einfach zum Treffpunkt kommen und mitfahren! Bei Fragen{" "}
            <Link href="/kontakt">kontaktieren Sie uns</Link>.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <Link href="/trainingszeiten" className="btn primary">
              Tourzeiten ansehen
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
