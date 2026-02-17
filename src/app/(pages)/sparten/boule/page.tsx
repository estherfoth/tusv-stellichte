import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function BoulePage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Freizeit & Tanz"
        title="Boule"
        description="Entspanntes Spiel unter freiem Himmel – Präzision und Geselligkeit."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Boule beim TuSV</h2>
            <p>
              Boule (auch Pétanque genannt) ist ein geselliges Kugel-Spiel, das
              Präzision, Taktik und Konzentration erfordert. Bei uns wird in
              entspannter Atmosphäre gespielt – für Jung und Alt.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Präzision & Taktik</h3>
              <p>
                Boule trainiert Zielsicherheit, räumliches Denken und
                strategisches Spielen.
              </p>
            </article>
            <article className="card">
              <h3>Entspannt & gesellig</h3>
              <p>
                Das Spiel findet in lockerer Atmosphäre statt – perfekt für
                einen gemütlichen Nachmittag.
              </p>
            </article>
            <article className="card">
              <h3>Für alle Altersgruppen</h3>
              <p>
                Boule ist einfach zu lernen und für alle geeignet – ob jung
                oder alt.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wie wird gespielt?</h2>
          </div>
          <p>
            Beim Boule versuchen zwei Teams, ihre Kugeln möglichst nah an eine
            Zielkugel (Cochonnet) zu platzieren. Gespielt wird auf
            Sand- oder Kiesflächen im Freien.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Spielzeiten</h2>
          </div>
          <p>
            Die aktuellen Spielzeiten finden Sie auf der{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitspielen?</h2>
          </div>
          <p>
            Lust auf Boule? Kommen Sie vorbei und spielen Sie mit! Für
            Rückfragen <Link href="/kontakt">kontaktieren Sie uns</Link>.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <Link href="/trainingszeiten" className="btn primary">
              Spielzeiten ansehen
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
