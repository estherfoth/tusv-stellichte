import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function TangoArgentinoPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Freizeit & Tanz"
        title="Tango Argentino"
        description="Tanz, Haltung und musikalisches Gefühl – Leidenschaft auf der Tanzfläche."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Tango Argentino beim TuSV</h2>
            <p>
              Tango Argentino ist mehr als nur ein Tanz – er ist Ausdruck,
              Improvisation und Verbindung. Bei uns lernen Sie die Grundlagen
              und tauchen in die faszinierende Welt des Tangos ein.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Technik & Haltung</h3>
              <p>
                Wir vermitteln die Grundlagen der Tanzhaltung, Führung und
                Schrittfolgen des Tango Argentino.
              </p>
            </article>
            <article className="card">
              <h3>Musikalität & Improvisation</h3>
              <p>
                Tango lebt von der Musik und der Improvisation – jeder Tanz ist
                einzigartig.
              </p>
            </article>
            <article className="card">
              <h3>Verbindung & Ausdruck</h3>
              <p>
                Im Tango geht es um die Verbindung zwischen den Tanzpartnern
                und den Ausdruck von Emotionen.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Für wen ist Tango geeignet?</h2>
          </div>
          <p>
            Tango Argentino ist für alle geeignet, die Freude am Tanzen und an
            Musik haben. Vorkenntnisse sind nicht erforderlich – wir vermitteln
            die Grundlagen Schritt für Schritt.
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
            Lust auf Tango? Schnupperstunden sind möglich –{" "}
            <Link href="/kontakt">kontaktieren Sie uns</Link> für weitere
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
