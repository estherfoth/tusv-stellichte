import Hero from "@/app/components/ui/Hero";

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
            <h2>Was erwartet Dich?</h2>
            <p className="section-body">
              Beim Kinderturnen erwartet Euch ein abwechslungsreiches
              Bewegungsangebot mit Spielen, Übungen und Geräteaufbauten.
              Spielerisch werden Koordination, Beweglichkeit, Kraft und
              Teamgeist gefördert.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Übungs-/Kurszeiten</h2>
          </div>
          <p className="section-body">Mittwoch von 16.30 Uhr bis 17.30 Uhr</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Übungs-/Kursleiter/in</h2>
          </div>
          <p className="section-body">Nadine Rohleder</p>

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
