import Hero from "@/app/components/ui/Hero";

export default function SeniorengymnastikPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Fitness & Gymnastik"
        title="Seniorengymnastik"
        description="Sanfte Übungen für Mobilität, Kraft und Wohlbefinden – speziell für Senioren."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Was erwartet Dich?</h2>
            <p className="section-body">
              Unsere Seniorengymnastik bietet Dir wohltuende Bewegung, leichte
              Kräftigungsübungen und Mobilisation für den ganzen Körper. Das
              Training ist auf die Bedürfnisse im Alter abgestimmt und fördert
              Gesundheit, Sicherheit und Lebensfreude. Mit viel Spaß,
              Gemeinschaft und angepassten Übungen bleiben wir gemeinsam aktiv.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Übungs-/Kurszeiten</h2>
          </div>
          <p className="section-body">Dienstag von 15.00 Uhr bis 16.00 Uhr</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Übungs-/Kursleiter/in</h2>
          </div>
          <p className="section-body">Susanne von Wieding</p>

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
