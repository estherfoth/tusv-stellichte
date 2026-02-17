import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

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
            <h2>Seniorengymnastik beim TuSV</h2>
            <p>
              Die Seniorengymnastik richtet sich an ältere Menschen, die ihre
              Beweglichkeit erhalten und ihre Gesundheit fördern möchten. Die
              Übungen sind schonend und werden individuell angepasst.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Mobilität erhalten</h3>
              <p>
                Gezielte Übungen zur Erhaltung und Verbesserung der
                Beweglichkeit in Alltag und Freizeit.
              </p>
            </article>
            <article className="card">
              <h3>Kraft & Balance</h3>
              <p>
                Sanftes Krafttraining und Gleichgewichtsübungen zur Sturzprävention und Stabilität.
              </p>
            </article>
            <article className="card">
              <h3>Gemeinschaft</h3>
              <p>
                Training in der Gruppe macht Freude und fördert den sozialen
                Austausch.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Für wen ist das Angebot?</h2>
          </div>
          <p>
            Das Angebot richtet sich an Senioren, die aktiv bleiben möchten.
            Auch Einsteiger ohne Vorerfahrung sind herzlich willkommen.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Trainingszeiten</h2>
          </div>
          <p>
            Die aktuellen Zeiten finden Sie auf der{" "}
            <Link href="/trainingszeiten">Trainingszeiten-Seite</Link>.
          </p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Mitmachen?</h2>
          </div>
          <p>
            Schnuppern Sie gern bei einer Trainingsstunde rein oder{" "}
            <Link href="/kontakt">kontaktieren Sie uns</Link>.
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
