import Hero from "@/app/components/ui/Hero";
import ScheduleDay from "@/app/components/ui/ScheduleDay";
import { trainingszeiten, locationLegend } from "@/data/trainingszeiten";

export default function TrainingszeitenPage() {
  const weekdays = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ];

  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Kalender"
        title="Trainingszeiten"
        description="Alle Trainingszeiten und Kursangebote auf einen Blick – Woche für Woche."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Wochenplan</h2>
            <p>
              Hier finden Sie alle regelmäßigen Trainingszeiten unserer Sparten
              und Kurse.
            </p>
          </div>

          {/* Legende */}
          <div
            className="card"
            style={{ marginBottom: "32px", padding: "20px" }}
          >
            <h3 style={{ marginBottom: "16px", fontSize: "1.1rem" }}>
              Legende der Trainingsorte
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#2563eb",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                  }}
                >
                  S
                </div>
                <span>{locationLegend.S}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#16a34a",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                  }}
                >
                  H
                </div>
                <span>{locationLegend.H}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#ea580c",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                  }}
                >
                  G
                </div>
                <span>{locationLegend.G}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#9333ea",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                  }}
                >
                  T
                </div>
                <span>{locationLegend.T}</span>
              </div>
            </div>
          </div>

          {/* Wochenplan */}
          <div style={{ marginTop: "40px" }}>
            {weekdays.map((day) => (
              <ScheduleDay
                key={day}
                day={day}
                items={trainingszeiten[day] || []}
              />
            ))}
          </div>

          {/* Hinweise */}
          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Hinweise</h2>
          </div>
          <div className="card">
            <p>
              <strong>Schnupperstunden:</strong> Bei fast allen Angeboten sind
              Schnupperstunden möglich. Kommen Sie gern vorbei!
            </p>
            <p style={{ marginTop: "12px" }}>
              <strong>Änderungen:</strong> Kurzfristige Änderungen werden über
              unsere Aushänge und per E-Mail bekannt gegeben.
            </p>
            <p style={{ marginTop: "12px" }}>
              <strong>Ferien:</strong> In den Schulferien können abweichende
              Zeiten gelten.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
