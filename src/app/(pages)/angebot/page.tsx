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
            <p>
              Yoga, Energy Dance, Tango Argentino und Pilates als feste
              Kursangebote.
            </p>
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
              title="ENERGY DANCE®"
              description="Power, Rhythmus und Spaß mit energiegeladenen Moves."
              image={{
                src: "/images/step_aerobic.png",
                alt: "Energy Dance Kurs",
              }}
              link={{ href: "/kurse/energy-dance", text: "Mehr erfahren" }}
            />
            <Card
              variant="course"
              title="Tango Argentino"
              description="Eleganz, Nähe und Improvisation – der klassische Paartanz aus Buenos Aires."
              image={{
                src: "/images/step_aerobic.png",
                alt: "Tango Argentino Kurs",
              }}
              link={{ href: "/kurse/tango-argentino", text: "Mehr erfahren" }}
            />
            <Card
              variant="course"
              title="TriloCHi®"
              description="Eine harmonische Kombination aus Yoga, Tai Chi und Qigong für mehr Ruhe und Vitalität."
              image={{ src: "/images/bauch-beine-po.png", alt: "Pilates Kurs" }}
              link={{ href: "/kurse/trilo-chi", text: "Mehr erfahren" }}
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
          </div>

          {/* Fitness & Gymnastik */}
          <div className="subsection-head">
            <h3>Fitness & Gymnastik</h3>
            <p>Kräftigung, Koordination und Gesundheit.</p>
          </div>
          <div className="card-grid">
            <Card
              title="Damengymnastik"
              description="Beweglichkeit, Kräftigung und gemeinsames Training."
              image={{
                src: "/images/damengymnastik.png",
                alt: "Damengymnastik",
              }}
              link={{ href: "/sparten/damengymnastik", text: "Mehr erfahren" }}
            />
            <Card
              title="Herrengymnastik"
              description="Fitness, Stabilität und Ausgleich im Alltag."
              image={{
                src: "/images/herrengymnastik.png",
                alt: "Herrengymnastik",
              }}
              link={{ href: "/sparten/herrengymnastik", text: "Mehr erfahren" }}
            />
            <Card
              title="Seniorengymnastik"
              description="Sanfte Übungen für Mobilität und Wohlbefinden."
              image={{
                src: "/images/seniorengymnastik.png",
                alt: "Seniorengymnastik",
              }}
              link={{
                href: "/sparten/seniorengymnastik",
                text: "Mehr erfahren",
              }}
            />
            <Card
              title="Step Aerobic mit Bauch Beine Po"
              description="Step Aerobic und gezielte Kräftigung als aktives Ganzkörpertraining."
              image={{ src: "/images/step_aerobic.png", alt: "Step Aerobic" }}
              link={{ href: "/sparten/step-aerobic", text: "Mehr erfahren" }}
            />
          </div>

          {/* Kinder & Jugend */}
          <div className="subsection-head">
            <h3>Kinder & Jugend</h3>
            <p>Bewegung und Spaß von Anfang an.</p>
          </div>
          <div className="card-grid card-grid--compact card-grid--outdoor">
            <Card
              title="Kinderturnen"
              description="Turnen, Klettern und Koordination für Kinder."
              image={{ src: "/images/kinderturnen.png", alt: "Kinderturnen" }}
              link={{ href: "/sparten/kinderturnen", text: "Mehr erfahren" }}
            />
            <Card
              title="Eltern-Kind-Turnen"
              description="Gemeinsame Bewegung, Spiele und Turnlandschaften."
              image={{
                src: "/images/kindersport.png",
                alt: "Eltern-Kind-Turnen",
              }}
              link={{
                href: "/sparten/eltern-kind-turnen",
                text: "Mehr erfahren",
              }}
            />
          </div>

          {/* Vereinsservice */}
          {/*           <div className="subsection-head">
            <h3>Vereinsservice</h3>
            <p>Zusätzliche Angebote rund um unsere Sportanlagen.</p>
          </div>
          <div className="card-grid">
            <Card
              title="Halle mieten"
              description="Sie möchten unsere Halle für Training, Sportgruppen oder ein Event anfragen? Stellen Sie Ihre Anfrage direkt über das Kontaktformular."
              image={{ src: "/images/hallenmiete.svg", alt: "Halle mieten" }}
              link={{
                href: "/kontakt#kontaktformular",
                text: "Jetzt anfragen",
              }}
            />
          </div> */}
        </div>
      </section>
    </main>
  );
}
