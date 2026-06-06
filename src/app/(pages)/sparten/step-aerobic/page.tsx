import Hero from "@/app/components/ui/Hero";

export default function StepAerobicPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Fitness & Gymnastik"
        title="Step Aerobic mit Bauch Beine Po"
        description="Step Aerobic und gezielte Kräftigung als aktives Ganzkörpertraining."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Was erwartet Dich?</h2>
            <p className="section-body">
              Unsere Sparte verbindet Step Aerobic mit gezielten
              Bauch-Beine-Po-Übungen zu einem aktiven Ganzkörpertraining. Dich
              erwartet ein energiegeladenes Training mit einfachen Choreografien
              und effektiven Kräftigungsübungen.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Übungs-/Kurszeiten</h2>
          </div>
          <p className="section-body">Donnerstag von 19.00 Uhr bis 20.00 Uhr</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Übungs-/Kursleiter/in</h2>
          </div>
          <p className="section-body">Marleen Bünger</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Wo?</h2>
          </div>
          <p className="section-body">Gymnastikraum</p>

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
