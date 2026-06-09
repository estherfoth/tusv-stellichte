import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function TanzenPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Tanzen"
        title="Tanzen"
        description="Eleganz, Nähe und Improvisation – der klassische Paartanz aus Buenos Aires."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Tango Argentino beim TuSV</h2>
            <p className="section-body">
              Zur wunderschönen Tangomusik tanzen hier Paare mit Grund- und
              erweiterten Kenntnissen. Ohne einen professionellen Tanzkursleiter
              werden neue Schrittkombinationen per YouTube gelernt. Einmal im
              Jahr wird zusammen nach Bremen in einen der Tangosalons gefahren.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainingszeiten</h2>
          </div>
          <p className="section-body">Sonntag 15.30 - 17.00 Uhr</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Ansprechperson</h2>
          </div>
          <p className="section-body">Kerstin Pütting-Behrens</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wo?</h2>
          </div>
          <p className="section-body">Gymnastikraum (mit Spiegelwand)</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitmachen?</h2>
          </div>
          <p className="section-body">
            Probiere es aus! Schnupperstunden sind möglich –{" "}
            <Link href="/kontakt">kontaktiere uns</Link> für weitere
            Informationen.
            <br />
            <br />
            Kerstin Pütting-Behrens:{" "}
            <a href="tel:+495168918096">05168/918096</a>
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
