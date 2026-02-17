import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function BadmintonPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Ballsport"
        title="Badminton"
        description="Spiel, Technik und Bewegung mit Schläger und Federball."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Badminton beim TuSV</h2>
            <p>
              Badminton ist ein schneller, anspruchsvoller Sport, der
              Ausdauer, Reaktion und Koordination trainiert. Bei uns spielen
              Mitglieder jeden Alters – vom Einsteiger bis zum
              Wettkampfspieler.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Training & Technik</h3>
              <p>
                Regelmäßiges Training hilft dabei, Schlagtechnik,
                Laufverhalten und Spieltaktik zu verbessern.
              </p>
            </article>
            <article className="card">
              <h3>Spielrunden</h3>
              <p>
                Offene Spielzeiten bieten Raum für freies Spiel, Doppel und
                Mixed ohne Wettkampfdruck.
              </p>
            </article>
            <article className="card">
              <h3>Für Einsteiger geeignet</h3>
              <p>
                Auch Anfänger sind herzlich willkommen – Schläger können
                ausgeliehen werden, und die Gruppe hilft gern weiter.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wann wird gespielt?</h2>
          </div>
          <p>
            Die aktuellen Spielzeiten finden Sie auf unserer{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Interesse?</h2>
          </div>
          <p>
            Lust auf Badminton? Kommen Sie zum Schnuppertraining oder
            kontaktieren Sie uns über das{" "}
            <Link href="/kontakt">Kontaktformular</Link>.
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
