import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function YogaPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Kurse"
        title="Yoga"
        description="Atmung, Beweglichkeit und Entspannung im Einklang – für Körper und Geist."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Was erwartet dich?</h2>
            <p className="section-body">
              Praktiziert wird Hatha Yoga, ein ruhigerer Stil, bei dem das
              Gleichgewicht zwischen Körper und Geist durch körperliche Übungen,
              die bewusst gehalten werden (Asanas), und durch Atemübungen
              angestrebt wird. Ziele sind, die Gesundheit, Kraft und
              Gelenkigkeit des Körpers zu verbessern, den Gleichgewichtssinn und
              die Muskeln zu stärken und das Lungenvolumen und damit die
              Vitalität zu erhöhen.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kurszeiten:</h2>
          </div>
          <p className="section-body">
            Montag 18.00 bis 19.00 Uhr & Mittwoch 9.30 bis 11.00 Uhr
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kursleitung:</h2>
          </div>
          <p className="section-body">
            Anke Janowicz (Montag) & Luzia Limberg (Mittwoch)
          </p>

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
            Bettina Engel: <a href="tel:+4951681256">05168/1256</a>
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
