import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function PilatesPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Kurse"
        title="Pilates"
        description="Kräftigung der Körpermitte und bewusste Haltung – für einen starken Core."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Pilates beim TuSV</h2>
            <p>
              Pilates ist ein ganzheitliches Körpertraining, das besonders die
              tiefliegende Muskulatur der Körpermitte stärkt. Durch kontrollierte
              Bewegungen und bewusste Atmung werden Kraft, Flexibilität und
              Körperhaltung verbessert.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Core-Stärkung</h3>
              <p>
                Gezieltes Training der tiefliegenden Bauch- und
                Rückenmuskulatur für eine starke Körpermitte.
              </p>
            </article>
            <article className="card">
              <h3>Haltung & Beweglichkeit</h3>
              <p>
                Pilates fördert eine aufrechte Haltung und verbessert die
                Beweglichkeit der Wirbelsäule.
              </p>
            </article>
            <article className="card">
              <h3>Körperbewusstsein</h3>
              <p>
                Durch konzentrierte, fließende Bewegungen wird das
                Körperbewusstsein geschult.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Was macht Pilates besonders?</h2>
          </div>
          <p>
            Im Pilates steht die Qualität der Bewegung im Vordergrund. Jede
            Übung wird präzise und kontrolliert ausgeführt, begleitet von
            bewusster Atmung. Das Training ist gelenkschonend und für alle
            Fitnesslevel geeignet.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kurszeiten</h2>
          </div>
          <p>
            Die aktuellen Kurszeiten finden Sie auf der{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Interesse?</h2>
          </div>
          <p>
            Schnupperstunden sind möglich.{" "}
            <Link href="/kontakt">Kontaktieren Sie uns</Link> für weitere
            Informationen.
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
