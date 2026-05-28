import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function EnergyDancePage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Kurse"
        title="ENERGY DANCE®"
        description="Power, Rhythmus und Spaß mit energiegeladenen Moves – tanzen und fit werden."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Was erwartet dich?</h2>
            <p>
              Frei nach dem Motto „Raus aus dem Kopf – rein in den Körper“
              kannst Du beim Energy Dance zu motivierender Musik und ohne Takte
              zu zählen in Bewegung kommen. Es beinhaltet eine Aufwärmphase, ein
              Standstretching, eine Intensivierungsphase und die Bodenarbeit mit
              Dehnungs- sowie Kräftigungsübungen und die Entspannungsphase. Da
              der Körper in einem harmonischen Bewegungsfluss und ohne
              plötzliche Wechsel bewegt wird, können auch Ungeübte leicht und
              unmittelbar folgen.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kurszeiten</h2>
          </div>
          <p>Mittwoch 18:00 bis 19:15 Uhr</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kursleitung</h2>
          </div>
          <p>Carmen Baumann</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wo?</h2>
          </div>
          <p>Sporthalle</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitmachen?</h2>
          </div>
          <p>
            Probieren Sie es aus! Schnupperstunden sind möglich –{" "}
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
