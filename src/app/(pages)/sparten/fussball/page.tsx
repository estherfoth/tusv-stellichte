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
            <h2>Über unsere Fußballabteilung</h2>
            <p>
              Fußball hat beim TuSV Stellichte eine lange Tradition. Ob
              Wettkampf oder Freizeitfußball – bei uns finden Spieler jeden
              Alters und Niveaus eine passende Mannschaft.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Herrenmannschaften</h3>
              <p>
                Unsere Herrenteams trainieren regelmäßig und spielen in
                regionalen Ligen. Neue Spieler sind jederzeit willkommen.
              </p>
            </article>
            <article className="card">
              <h3>Jugendteams</h3>
              <p>
                Wir fördern den Nachwuchs mit gezieltem Training und Spielspaß
                in verschiedenen Altersklassen.
              </p>
            </article>
            <article className="card">
              <h3>Freizeitfußball</h3>
              <p>
                Für alle, die ohne Wettkampfdruck kicken möchten – lockeres
                Training und freundschaftliche Spiele.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Training & Zeiten</h2>
          </div>
          <p>
            Die aktuellen Trainingszeiten für alle Mannschaften finden Sie auf
            unserer{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Interesse?</h2>
          </div>
          <p>
            Lust mitzuspielen? Kommen Sie einfach zum Probetraining vorbei oder
            kontaktieren Sie uns über unser{" "}
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
