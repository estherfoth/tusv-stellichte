import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function TerminePage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Kalender"
        title="Termine & Trainingszeiten"
        description="Alle Termine, Trainingszeiten und Veranstaltungen auf einen Blick."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Trainingszeiten</h2>
            <p>Regelmäßige Trainingszeiten für alle Sparten.</p>
          </div>
          <div className="hero-actions">
            <Link href="/trainingszeiten" className="btn primary">
              Zu den Trainingszeiten
            </Link>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kommende Veranstaltungen</h2>
            <p>Diese Übersicht wird aktuell aufgebaut.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="tag">Aug</div>
              <div>
                <h3>Straßenlauf 2026</h3>
                <p>39. Stellichter Straßenlauf "Quer durch Stellichte"</p>
                <Link href="/#strassenlauf-anmeldung" className="card-cta">
                  Zur Anmeldung →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
