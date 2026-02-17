import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function TischtennisPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Ballsport"
        title="Tischtennis"
        description="Ambitioniertes Training und offene Spielzeiten für Jung und Alt."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Tischtennis beim TuSV</h2>
            <p>
              Tischtennis verbindet Schnelligkeit, Präzision und Taktik. Bei
              uns trainieren Anfänger und Fortgeschrittene gemeinsam und können
              sich in Wettkämpfen oder freien Spielrunden messen.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Wettkampfteams</h3>
              <p>
                Unsere Teams spielen in regionalen Ligen und trainieren
                regelmäßig, um Technik und Taktik zu verbessern.
              </p>
            </article>
            <article className="card">
              <h3>Freies Spiel</h3>
              <p>
                Offene Spielzeiten ermöglichen es, ohne Wettkampfdruck zu
                spielen und neue Schläge auszuprobieren.
              </p>
            </article>
            <article className="card">
              <h3>Jugendförderung</h3>
              <p>
                Wir bieten gezieltes Training für Kinder und Jugendliche, um
                den Nachwuchs zu fördern.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainingszeiten</h2>
          </div>
          <p>
            Die aktuellen Trainings- und Spielzeiten finden Sie auf unserer{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitspielen?</h2>
          </div>
          <p>
            Interesse am Tischtennis? Schauen Sie beim Training vorbei oder
            schreiben Sie uns über das{" "}
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
