import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function HerrengymnastikPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Fitness & Gymnastik"
        title="Herrengymnastik"
        description="Fitness, Stabilität und Ausgleich im Alltag – für Männer jeden Alters."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Herrengymnastik beim TuSV</h2>
            <p>
              Die Herrengymnastik bietet ein vielseitiges Programm zur
              Verbesserung von Kraft, Ausdauer und Beweglichkeit. Ideal als
              Ausgleich zum Arbeitsalltag.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Krafttraining</h3>
              <p>
                Gezielte Übungen zur Stärkung der Muskulatur und Verbesserung
                der Körperspannung.
              </p>
            </article>
            <article className="card">
              <h3>Mobilität & Stabilität</h3>
              <p>
                Übungen für mehr Beweglichkeit, Balance und Stabilität im
                Alltag.
              </p>
            </article>
            <article className="card">
              <h3>Gruppendynamik</h3>
              <p>
                Gemeinsam trainieren macht mehr Spaß – Motivation und Austausch
                inklusive.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wann trainieren wir?</h2>
          </div>
          <p>
            Die aktuellen Trainingszeiten finden Sie auf unserer{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Interesse?</h2>
          </div>
          <p>
            Probieren Sie es aus! Kommen Sie vorbei oder{" "}
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
