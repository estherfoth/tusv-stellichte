import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function FitnessPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Fitness & Gymnastik"
        title="Turnen & Fitness"
        description="Rückenfit, Bauch-Beine-Po und vielseitige Kursangebote für alle Fitnesslevel."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Fitness beim TuSV</h2>
            <p>
              Unsere Fitnessangebote kombinieren Kraft, Ausdauer und
              Beweglichkeit. Von gezieltem Muskelaufbau bis zu ganzheitlichen
              Workouts – hier findet jeder das passende Training.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Rückenfit</h3>
              <p>
                Gezieltes Training zur Stärkung der Rückenmuskulatur und
                Verbesserung der Haltung.
              </p>
            </article>
            <article className="card">
              <h3>Bauch-Beine-Po</h3>
              <p>
                Intensives Training für die Problemzonen – für straffe Muskeln
                und eine bessere Körperspannung.
              </p>
            </article>
            <article className="card">
              <h3>Ganzkörpertraining</h3>
              <p>
                Abwechslungsreiche Übungen für den gesamten Körper mit und ohne
                Geräte.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Für wen ist das Angebot geeignet?</h2>
          </div>
          <p>
            Unsere Fitnesskurse richten sich an alle, die ihre körperliche
            Fitness verbessern möchten – unabhängig vom Alter oder
            Trainingslevel. Die Übungen werden individuell angepasst.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainingszeiten</h2>
          </div>
          <p>
            Die aktuellen Kurszeiten finden Sie auf unserer{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitmachen?</h2>
          </div>
          <p>
            Interesse? Kommen Sie zu einer Probestunde oder{" "}
            <Link href="/kontakt">kontaktieren Sie uns</Link>.
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
