import Hero from "@/app/components/ui/Hero";
import Card from "@/app/components/ui/Card";
import Link from "next/link";

export default function AngebotPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Sport für alle"
        title="Unser Angebot"
        description="Ob leistungsorientiert oder einfach zum Spaß – bei uns finden Kinder, Jugendliche und Erwachsene den passenden Sport."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Sparten & Kurse</h2>
            <p>Regelmäßige Trainingszeiten und offene Gruppen.</p>
          </div>

          {/* Kurse */}
          <div className="subsection-head">
            <h3>Kurse</h3>
            <p>Yoga, Energy Dance und Pilates als feste Kursangebote.</p>
          </div>
          <div className="card-grid">
            <Card
              variant="course"
              title="Yoga"
              description="Atmung, Beweglichkeit und Entspannung im Einklang."
              image={{ src: "/images/fitness.png", alt: "Yoga Kurs" }}
              link={{ href: "/kurse/yoga", text: "Mehr erfahren" }}
            />
            <Card
              variant="course"
              title="Energy Dance"
              description="Power, Rhythmus und Spaß mit energiegeladenen Moves."
              image={{ src: "/images/step_aerobic.png", alt: "Energy Dance Kurs" }}
              link={{ href: "/kurse/energy-dance", text: "Mehr erfahren" }}
            />
            <Card
              variant="course"
              title="Pilates"
              description="Kräftigung der Körpermitte und bewusste Haltung."
              image={{ src: "/images/bauch-beine-po.png", alt: "Pilates Kurs" }}
              link={{ href: "/kurse/pilates", text: "Mehr erfahren" }}
            />
          </div>

          {/* Ballsport */}
          <div className="subsection-head">
            <h3>Ballsport</h3>
            <p>Teamsport und schnelle Duelle.</p>
          </div>
          <div className="card-grid card-grid--tight card-grid--compact">
            <Card
              title="Fußball"
              description="Herren-, Jugend- und Freizeitteams mit Trainingsbetrieb."
              image={{ src: "/images/fussballer.png", alt: "Fußball" }}
              link={{ href: "/sparten/fussball", text: "Mehr erfahren" }}
            />
            <Card
              title="Tischtennis"
              description="Ambitioniertes Training und offene Spielzeiten."
              image={{ src: "/images/tischtennis.png", alt: "Tischtennis" }}
              link={{ href: "/sparten/tischtennis", text: "Mehr erfahren" }}
            />
            <Card
              title="Badminton"
              description="Spiel, Technik und Bewegung mit Schläger und Federball."
              image={{ src: "/images/badminton.png", alt: "Badminton" }}
              link={{ href: "/sparten/badminton", text: "Mehr erfahren" }}
            />
          </div>

          {/* Fitness & Gymnastik */}
          <div className="subsection-head">
            <h3>Fitness & Gymnastik</h3>
            <p>Kräftigung, Koordination und Gesundheit.</p>
          </div>
          <div className="card-grid">
            <Card
              title="Turnen & Fitness"
              description="Rückenfit, Bauch-Beine-Po und Kursangebote."
              image={{ src: "/images/fitness.png", alt: "Turnen und Fitness" }}
              link={{ href: "/sparten/fitness", text: "Mehr erfahren" }}
            />
            <Card
              title="Damengymnastik"
              description="Beweglichkeit, Kräftigung und gemeinsames Training."
              image={{ src: "/images/damengymnastik.png", alt: "Damengymnastik" }}
              link={{ href: "/sparten/damengymnastik", text: "Mehr erfahren" }}
            />
            <Card
              title="Herrengymnastik"
              description="Fitness, Stabilität und Ausgleich im Alltag."
              image={{ src: "/images/herrengymnastik.png", alt: "Herrengymnastik" }}
              link={{ href: "/sparten/herrengymnastik", text: "Mehr erfahren" }}
            />
            <Card
              title="Seniorengymnastik"
              description="Sanfte Übungen für Mobilität und Wohlbefinden."
              image={{ src: "/images/seniorengymnastik.png", alt: "Seniorengymnastik" }}
              link={{ href: "/sparten/seniorengymnastik", text: "Mehr erfahren" }}
            />
            <Card
              title="Step Aerobic"
              description="Rhythmus, Ausdauer und Spaß in der Gruppe."
              image={{ src: "/images/step_aerobic.png", alt: "Step Aerobic" }}
              link={{ href: "/sparten/step-aerobic", text: "Mehr erfahren" }}
            />
            <Card
              title="Bauch-Beine-Po"
              description="Gezieltes Training für die Körpermitte."
              image={{ src: "/images/bauch-beine-po.png", alt: "Bauch-Beine-Po" }}
              link={{ href: "/sparten/bauch-beine-po", text: "Mehr erfahren" }}
            />
          </div>

          {/* Kinder & Jugend */}
          <div className="subsection-head">
            <h3>Kinder & Jugend</h3>
            <p>Bewegung und Spaß von Anfang an.</p>
          </div>
          <div className="card-grid card-grid--compact card-grid--outdoor">
            <Link href="/sparten/kinderturnen" className="card-link card-link--narrow card-link--kinderturnen">
              <div className="card card--kinderturnen">
                <img className="card-image" src="/images/kinderturnen.png" alt="Kinderturnen" />
                <h3>Kinderturnen</h3>
                <p>Turnen, Klettern und Koordination für Kinder.</p>
                <span className="card-cta">Mehr erfahren</span>
              </div>
            </Link>
          </div>

          {/* Ausdauer & Outdoor */}
          <div className="subsection-head">
            <h3>Ausdauer & Outdoor</h3>
            <p>Unterwegs in der Region und an der frischen Luft.</p>
          </div>
          <div className="card-grid card-grid--compact card-grid--outdoor">
            <Link href="/sparten/laufgruppe" className="card-link card-link--narrow card-link--half">
              <div className="card">
                <img className="card-image" src="/images/laufgruppe.png" alt="Laufgruppe" />
                <h3>Laufgruppe</h3>
                <p>Gemeinsam laufen, neue Strecken entdecken.</p>
                <span className="card-cta">Mehr erfahren</span>
              </div>
            </Link>
            <Link href="/sparten/radfahren" className="card-link card-link--narrow card-link--shift-left card-link--half">
              <div className="card">
                <img className="card-image" src="/images/radfahren.png" alt="Radfahren" />
                <h3>Radfahren</h3>
                <p>Gemeinsam radeln und die Umgebung erkunden.</p>
                <span className="card-cta">Mehr erfahren</span>
              </div>
            </Link>
          </div>

          {/* Freizeit & Tanz */}
          <div className="subsection-head">
            <h3>Freizeit & Tanz</h3>
            <p>Bewegung, Rhythmus und Geselligkeit.</p>
          </div>
          <div className="card-grid card-grid--compact card-grid--outdoor">
            <Link href="/sparten/boule" className="card-link card-link--narrow card-link--half">
              <div className="card">
                <img className="card-image" src="/images/boule.png" alt="Boule" />
                <h3>Boule</h3>
                <p>Entspanntes Spiel unter freiem Himmel.</p>
                <span className="card-cta">Mehr erfahren</span>
              </div>
            </Link>
            <Link href="/sparten/tango-argentino" className="card-link card-link--narrow card-link--half">
              <div className="card">
                <img className="card-image" src="/images/tango.webp" alt="Tango Argentino" />
                <h3>Tango Argentino</h3>
                <p>Tanz, Haltung und musikalisches Gefühl.</p>
                <span className="card-cta">Mehr erfahren</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
