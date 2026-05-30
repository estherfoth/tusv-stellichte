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
            <h2>Was erwartet dich?</h2>
            <p className="section-body">
              Die Tischtennissparte im TuSV Stellichte besteht seit 1983.
              Zurzeit nehmen zwei Mannschaften, (Damen und Herren gemischt), am
              Punktspielbetrieb teil. Wer Lust hat, am Trainings- oder gerne
              auch am Punktspielbetrieb teilzunehmen ist herzlich eingeladen, in
              der Halle vorbeizuschauen. Tischtennis ist in jedem Alter ein
              geeigneter Sport, den Körper beweglich und in Schwung zu halten.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kurszeiten:</h2>
          </div>
          <p className="section-body">Montag ab 19:30 Uhr</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kursleitung:</h2>
          </div>
          <p className="section-body">Joachim Winkelmann</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wo?</h2>
          </div>
          <p className="section-body">Sporthalle</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitmachen?</h2>
          </div>
          <p className="section-body">
            Probiere es aus! Schnupperstunden sind möglich –{" "}
            <Link href="/kontakt">kontaktiere uns</Link> für weitere
            Informationen.
            <br />
            <br />
            Joachim Winkelmann: <a href="tel:+495168267">05168/267</a>
            <br />
            Karin Höfer: <a href="tel:+4951681298">05168/1298</a>
            <br />
            Jupp Schätzmüller: <a href="tel:+4951681237">05168/1237</a>
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
