import Hero from "@/app/components/ui/Hero";
import Vorstandsliste from "@/app/components/ui/Vorstandsliste";

export default function VereinPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Gemeinschaft & Engagement"
        title="Über unseren Verein"
        description="Der TuSV Stellichte e.V. verbindet Sport, Dorfleben und Gemeinschaft. Wir leben Fairness, Engagement und einen offenen Umgang – für alle, die Lust auf Bewegung haben."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Unser Vorstand</h2>
            <p>Kontaktieren Sie uns gern per Telefon oder E-Mail.</p>
          </div>
          <Vorstandsliste />
        </div>
      </section>
    </main>
  );
}
