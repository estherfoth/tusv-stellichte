import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function TriloCHiPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Kurse"
        title="TriloCHi®"
        description="Eine harmonische Kombination aus Yoga, Tai Chi und Qigong für mehr Ruhe und Vitalität."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Was erwartet dich?</h2>
            <p className="section-body">
              TriloCHi ist ein ganzheitliches Fitness- und Entspannungskonzept,
              das westliche Trainingsmethoden mit fernöstlichen Bewegungslehren
              verbindet. Ziel ist es, Körper, Geist und Seele in Einklang zu
              bringen, Stress abzubauen und die eigene Körpermitte zu finden.
            </p>
            <div className="section-body">
              TriloChi besteht aus drei Säulen:
              <ol>
                <li>
                  ChiYoga: Yoga- und Pilates Übungen für Rücken und Beckenboden
                </li>
                <li>
                  PowerChi: Meridianaktivierung und Herzkreislauf-Anregung
                </li>
                <li>
                  ChiFlowMotion: Entspannungsübungen inspiriert duch Tai Ji und
                  Qi Gong.
                </li>
              </ol>
            </div>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kurszeiten:</h2>
          </div>
          <p className="section-body">Donnerstag 17.00 bis 18.00 Uhr</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Kursleitung:</h2>
          </div>
          <p className="section-body">Anett Winter</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wo?</h2>
          </div>
          <p className="section-body">Gymnastikraum</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitmachen?</h2>
          </div>
          <p className="section-body">
            Probiere es aus! Schnupperstunden sind möglich –{" "}
            <Link href="/kontakt">kontaktiere uns</Link> für weitere
            Informationen.
          </p>
          <p className="section-body">
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
