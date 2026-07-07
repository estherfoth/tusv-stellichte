import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function FussballPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Ballsport"
        title="Badminton"
        description="Lockeres Badminton ohne Leistungsdruck, aber mit viel Spaß."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Was erwartet dich?</h2>
            <div className="section-body">
              <p>
                Eine lockere -unambitionierte- Gemeinschaft, die sich zum
                Badminton-Spielen trifft, die eigenständig gerne dabei auch
                interne Maßnahmen gegen Durst und Hunger vornimmt – das
                Persönliche muss passen.
              </p>
            </div>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainingszeiten:</h2>
          </div>
          <p className="section-body">
            Aktuell donnerstags ab 19.00 Uhr (ggf. nach Absprache über
            WhatsApp)
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainer / Teamverantwortliche:</h2>
          </div>
          <p className="section-body">
            Fehlanzeige - die Beteiligten verbessern und coachen sich
            gegenseitig während der Teilnahme
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wo?</h2>
          </div>
          <p className="section-body">Sporthalle Stellichte</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitmachen?</h2>
          </div>
          <p className="section-body">
            Probiere es aus! Schnupperstunden sind möglich –{" "}
            <Link href="/kontakt">kontaktiere uns</Link> für weitere
            Informationen.
            <br />
            <br />
            Hartwig Lütjens: <a href="tel:+49516172468">
              05161 72468
            </a> &amp; <a href="tel:+491623230719">0162 3230719</a>
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
