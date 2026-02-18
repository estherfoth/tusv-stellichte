import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function SatzungPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Rechtliches"
        title="Vereinssatzung"
        description="Satzung des Turn- und Spielverein Stellichte von 1910 e. V."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Satzung des TuSV Stellichte</h2>
            <p>
              Hier können Sie die vollständige Satzung unseres Vereins einsehen.
              Stand: 09. Februar 2019.
            </p>
          </div>

          <div className="card">
            <h3>I. Allgemeine Bestimmungen</h3>
            <p>
              <strong>§ 1 Name und Sitz:</strong> Der Verein führt den Namen
              Turn- und Spielverein Stellichte e. V. und hat seinen Sitz in
              Stellichte, 29664 Walsrode. Gründungstag ist der 11. Juli 1909.
            </p>
            <p>
              <strong>§ 2 Zweck:</strong> Zweck des Vereins ist die Förderung
              des Sports in seiner Gesamtheit, einschließlich Gesundheitssport
              und orthopädischem Turnen.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Vollständige Satzung</h2>
          </div>
          <p>
            Die vollständige Satzung können Sie als PDF-Dokument herunterladen
            oder direkt im Browser einsehen.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <a href="/dokument/satzung.pdf" className="btn primary" download>
              Satzung herunterladen (PDF)
            </a>
            <Link href="/kontakt" className="btn ghost">
              Fragen zur Satzung?
            </Link>
          </div>

          <div
            className="card"
            style={{
              marginTop: "32px",
              padding: "20px",
              background: "var(--bg-secondary)",
            }}
          >
            <p>
              <strong>Hinweis:</strong> Die Satzung wurde zuletzt auf der
              Hauptversammlung am 09. Februar 2019 beschlossen und ist beim
              zuständigen Amtsgericht eingetragen.
            </p>
            <p style={{ marginTop: "12px" }}>
              Bei Fragen zur Satzung oder zur Mitgliedschaft wenden Sie sich
              gern an unseren <Link href="/vorstand">Vorstand</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
