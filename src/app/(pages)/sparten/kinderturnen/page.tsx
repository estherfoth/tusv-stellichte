import Hero from "@/app/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";

export default function KinderturnenPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Kinder & Jugend"
        title="Kinderturnen"
        description="Turnen, Klettern und Koordination für Kinder – Bewegung und Spaß von Anfang an."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Kinderturnen beim TuSV</h2>
            <p>
              Beim Kinderturnen entdecken die Kleinen spielerisch ihre
              motorischen Fähigkeiten. Klettern, Balancieren, Springen und
              Rollen – hier werden Bewegungsfreude und Koordination gefördert.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Motorische Entwicklung</h3>
              <p>
                Vielfältige Bewegungsformen fördern Koordination,
                Gleichgewicht und Körperwahrnehmung.
              </p>
            </article>
            <article className="card">
              <h3>Spielerisches Lernen</h3>
              <p>
                Durch Spiele und Parcours werden Bewegungsabläufe gelernt und
                gefestigt – mit viel Spaß.
              </p>
            </article>
            <article className="card">
              <h3>Soziales Miteinander</h3>
              <p>
                In der Gruppe lernen Kinder Rücksichtnahme, Zusammenarbeit und
                gegenseitige Unterstützung.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Für welches Alter?</h2>
          </div>
          <p>
            Unser Kinderturnen richtet sich an Kinder verschiedener
            Altersgruppen. Die Übungen werden altersgerecht angepasst, sodass
            jedes Kind gefördert wird.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainingszeiten</h2>
          </div>
          <p>
            Die aktuellen Zeiten für Kinderturnen finden Sie auf der{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Interesse?</h2>
          </div>
          <p>
            Ihr Kind möchte mitmachen? Schnupperstunden sind jederzeit möglich.{" "}
            <Link href="/kontakt">Kontaktieren Sie uns</Link> für weitere
            Informationen.
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
