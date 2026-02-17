import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function StepAerobicPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Fitness & Gymnastik"
        title="Step Aerobic"
        description="Rhythmus, Ausdauer und Spaß in der Gruppe – Cardio-Training mit dem Step."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Step Aerobic beim TuSV</h2>
            <p>
              Step Aerobic ist ein dynamisches Ausdauertraining, das
              Koordination, Fitness und Beweglichkeit fördert. Zu motivierender
              Musik werden auf und ab dem Step vielfältige Schrittfolgen
              trainiert.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Cardio & Ausdauer</h3>
              <p>
                Effektives Herz-Kreislauf-Training zur Steigerung der
                Kondition und Fettverbrennung.
              </p>
            </article>
            <article className="card">
              <h3>Koordination</h3>
              <p>
                Die Schrittfolgen trainieren Koordination, Rhythmusgefühl und
                Konzentration.
              </p>
            </article>
            <article className="card">
              <h3>Spaß & Motivation</h3>
              <p>
                Energiegeladene Musik und Gruppenatmosphäre sorgen für Spaß und
                Motivation beim Training.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Für wen ist Step Aerobic geeignet?</h2>
          </div>
          <p>
            Step Aerobic ist für alle geeignet, die ihre Ausdauer verbessern
            und dabei Spaß haben möchten. Die Intensität kann individuell
            angepasst werden.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainingszeiten</h2>
          </div>
          <p>
            Die aktuellen Kurszeiten finden Sie auf der{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitmachen?</h2>
          </div>
          <p>
            Probieren Sie es aus! Schnupperstunden sind möglich – einfach
            vorbeikommen oder <Link href="/kontakt">Kontakt aufnehmen</Link>.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <Link href="/trainingszeiten" className="btn primary">
              Trainingszeiten ansehen
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
