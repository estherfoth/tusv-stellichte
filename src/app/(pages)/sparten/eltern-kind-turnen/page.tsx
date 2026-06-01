import Hero from "@/app/components/ui/Hero";

export default function ElternKindTurnenPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Kinder & Jugend"
        title="Eltern-Kind-Turnen"
        description="Gemeinsam bewegen, entdecken und spielerisch wachsen."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Was erwartet Dich?</h2>
            <p className="section-body">
              Beim Eltern-Kind-Turnen erwartet Euch eine fröhliche
              Bewegungsstunde mit kleinen Spielen, Turnlandschaften und vielen
              Möglichkeiten zum Entdecken und Ausprobieren. In liebevoller
              Atmosphäre fördern wir spielerisch Motorik, Koordination und
              Freude an Bewegung
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Übungs-/Kurszeiten</h2>
          </div>
          <p className="section-body">
            Donnerstag von 17.00 Uhr bis 18.00 Uhr
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Übungs-/Kursleiter/in</h2>
          </div>
          <p className="section-body">Marleen Bünger</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wo?</h2>
          </div>
          <p className="section-body">Sporthalle</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Information und Anmeldung bei:</h2>
          </div>
          <p className="section-body">
            Marleen Bünger, Tel. <a href="tel:+495168558">05168/558</a>
          </p>
        </div>
      </section>
    </main>
  );
}
