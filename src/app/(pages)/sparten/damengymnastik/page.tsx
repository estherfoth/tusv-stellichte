import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function DamengymnastikPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Fitness & Gymnastik"
        title="Damengymnastik"
        description="Beweglichkeit, Kräftigung und gemeinsames Training in geselliger Atmosphäre."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Damengymnastik beim TuSV</h2>
            <p>
              Unsere Damengymnastik bietet ein abwechslungsreiches Programm aus
              Kraft-, Ausdauer- und Koordinationsübungen. Gemeinsam trainieren
              wir in einer motivierenden und entspannten Gruppe.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Ganzkörpertraining</h3>
              <p>
                Übungen für Kraft, Beweglichkeit und Ausdauer – angepasst an
                verschiedene Fitnesslevel.
              </p>
            </article>
            <article className="card">
              <h3>Entspannung & Dehnung</h3>
              <p>
                Jede Einheit endet mit gezielten Dehnübungen und Entspannung
                für Körper und Geist.
              </p>
            </article>
            <article className="card">
              <h3>Gemeinschaft</h3>
              <p>
                Neben dem Training steht auch der Austausch und die
                Gemeinschaft im Vordergrund.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainingszeiten</h2>
          </div>
          <p>
            Wann wir trainieren, erfahren Sie auf der{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Neu dabei?</h2>
          </div>
          <p>
            Schnupperstunden sind jederzeit möglich. Melden Sie sich gern über
            unser <Link href="/kontakt">Kontaktformular</Link>.
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
