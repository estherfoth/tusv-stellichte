import Hero from "@/app/components/ui/Hero";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Transparenz"
        title="Cookie-Hinweis"
        description="Hier erklären wir, welche Cookies wir verwenden."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Was sind Cookies?</h2>
          </div>
          <p>
            Cookies sind kleine Textdateien, die Ihr Browser speichert, um
            Webseitenfunktionen bereitzustellen und Einstellungen zu merken.
          </p>

          <div className="section-head" style={{ marginTop: "40px" }}>
            <h2>Aktueller Stand</h2>
            <p>Diese Übersicht wird aktuell aufgebaut.</p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Technisch notwendige Cookies</h3>
              <p>
                Diese Cookies sorgen für grundlegende Funktionen der Website
                und können nicht deaktiviert werden.
              </p>
            </article>
            <article className="card">
              <h3>Optionale Cookies</h3>
              <p>
                Zusätzliche Cookies setzen wir nur, wenn Sie ausdrücklich
                zustimmen. Aktuell sind keine optionalen Cookies aktiv.
              </p>
            </article>
          </div>
          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Datenschutz</h2>
          </div>
          <p>
            Weitere Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz">Datenschutzerklärung</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
