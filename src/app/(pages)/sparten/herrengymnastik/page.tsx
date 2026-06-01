import Hero from "@/app/components/ui/Hero";

export default function HerrengymnastikPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Fitness & Gymnastik"
        title="Herrengymnastik"
        description="Fitness, Stabilität und Ausgleich im Alltag – für Männer jeden Alters."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Was erwartet Dich?</h2>
            <p className="section-body">
              Runter vom Sofa, rein in die Halle – bei unserer Herrengymnastik
              erwartet Dich ein abwechslungsreiches Training für den ganzen
              Körper, welches Fitness, Kraft, Koordination und Beweglichkeit
              fördert. In lockerer Runde gemeinsam aktiv sein, fit bleiben und
              mit Spaß in Bewegung kommen – darum geht es bei der
              Herrengymnastik.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Übungs-/Kurszeiten</h2>
          </div>
          <p className="section-body">Dienstag von 19.15 Uhr bis 20.15 Uhr</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Übungs-/Kursleiter/in</h2>
          </div>
          <p className="section-body">Annett Winter</p>

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
