import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function LaufgruppePage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Ausdauer & Outdoor"
        title="Laufgruppe"
        description="Gemeinsam laufen, neue Strecken entdecken – an der frischen Luft unterwegs."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Laufgruppe beim TuSV</h2>
            <p>
              Unsere Laufgruppe trifft sich regelmäßig, um gemeinsam die
              Umgebung zu erkunden. Ob Einsteiger oder erfahrener Läufer – bei
              uns findet jeder sein Tempo und seine Distanz.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Verschiedene Tempogruppen</h3>
              <p>
                Wir laufen in verschiedenen Gruppen, sodass jeder in seinem
                Wohlfühltempo trainieren kann.
              </p>
            </article>
            <article className="card">
              <h3>Neue Strecken</h3>
              <p>
                Gemeinsam erkunden wir abwechslungsreiche Laufstrecken in und
                um Stellichte.
              </p>
            </article>
            <article className="card">
              <h3>Motivation & Gemeinschaft</h3>
              <p>
                Gemeinsam laufen macht mehr Spaß und motiviert, auch bei Wind
                und Wetter dabei zu bleiben.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Für wen ist die Laufgruppe geeignet?</h2>
          </div>
          <p>
            Unsere Laufgruppe ist offen für alle – von Laufanfängern bis zu
            Marathonläufern. Neue Mitglieder sind jederzeit herzlich
            willkommen.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Treffpunkt & Zeiten</h2>
          </div>
          <p>
            Die aktuellen Treffzeiten und -punkte finden Sie auf der{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitlaufen?</h2>
          </div>
          <p>
            Einfach vorbeikommen und mitlaufen! Bei Fragen können Sie uns gern
            über das <Link href="/kontakt">Kontaktformular</Link> erreichen.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <Link href="/trainingszeiten" className="btn primary">
              Laufzeiten ansehen
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
