import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function BauchBeinePoPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Fitness & Gymnastik"
        title="Bauch-Beine-Po"
        description="Gezieltes Training für die Körpermitte – straffe Muskeln und bessere Körperspannung."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Bauch-Beine-Po beim TuSV</h2>
            <p>
              Das BBP-Training konzentriert sich auf die klassischen
              Problemzonen: Bauch, Beine und Po. Mit gezielten Übungen werden
              diese Muskelgruppen gekräftigt und geformt.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Gezielte Kräftigung</h3>
              <p>
                Fokussierte Übungen für Bauch, Beine und Po – effektiv und
                intensiv.
              </p>
            </article>
            <article className="card">
              <h3>Körperspannung</h3>
              <p>
                Training der Core-Muskulatur für bessere Haltung und mehr
                Stabilität im Alltag.
              </p>
            </article>
            <article className="card">
              <h3>Für jedes Level</h3>
              <p>
                Die Übungen können an verschiedene Fitnesslevel angepasst
                werden – Einsteiger willkommen!
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Was wird trainiert?</h2>
          </div>
          <p>
            Neben Bauch, Beinen und Po wird auch die allgemeine Körperspannung
            und Ausdauer verbessert. Das Training kombiniert verschiedene
            Übungen mit und ohne Kleingeräte.
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
            Interesse am BBP-Training? Kommen Sie zu einer Probestunde oder{" "}
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
