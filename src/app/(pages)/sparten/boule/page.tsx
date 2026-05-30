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
            <h2>Was erwartet dich?</h2>
            <p className="section-body">
              Wir sind eine Gruppe Erwachsener, die sich donnerstags
              ausschließlich zum Vergnügen zu ein paar Runden Boule treffen. Je
              nach Teilnehmerzahl spielen wir Double oder Triplette. Wer Lust
              auf „legen“, „schießen“ oder „Schweinchen treiben“ hat, ist
              jederzeit gerne gesehen.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kurszeiten:</h2>
          </div>
          <p className="section-body">Donnerstag ab 15:30 Uhr</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kursleitung:</h2>
          </div>
          <p className="section-body">Findet ohne Trainer statt</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wo?</h2>
          </div>
          <p className="section-body">
            An der Boule-Anlage zwischen Sporthalle Stellichte und Grillhütte
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitmachen?</h2>
          </div>
          <p className="section-body">
            Probiere es aus! Schnupperstunden sind möglich –{" "}
            <Link href="/kontakt">kontaktiere uns</Link> für weitere
            Informationen.
            <br />
            <br />
            Eckbert Meyer: <a href="tel:+495168536">05168/536</a>
            <br />
            Joachim Winkelmann: <a href="tel:+495168267">05168/267</a>
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
