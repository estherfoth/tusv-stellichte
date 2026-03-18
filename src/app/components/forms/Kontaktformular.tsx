type KontaktformularProps = {
  initialTopic?: string;
};

export default function Kontaktformular({
  initialTopic = "",
}: KontaktformularProps) {
  return (
    <section className="section" id="kontaktformular">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2>Kontaktformular</h2>
            <p>
              Für allgemeine Anfragen und die Hallenmiete nutzen Sie bitte das
              folgende Formular.
            </p>
          </div>
        </div>

        <form className="contact-form" action="#" method="post">
          <label>
            Vor- und Nachname *
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            E-Mail *
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Telefon
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
          <label>
            Anliegen *
            <select name="topic" required defaultValue="">
              <option value="">Bitte auswählen</option>
              <option value="allgemein">Allgemeine Anfrage</option>
              <option value="mitgliedschaft">Mitgliedschaft</option>
              <option value="training">Training / Sparten</option>
              <option value="hallenmiete">Hallenmiete</option>
            </select>
          </label>
          <label>
            Gewünschtes Datum (bei Hallenmiete)
            <input type="date" name="rentalDate" />
          </label>
          <label>
            Gewünschte Uhrzeit von
            <input type="time" name="rentalTimeFrom" />
          </label>
          <label>
            Gewünschte Uhrzeit bis
            <input type="time" name="rentalTimeTo" />
          </label>
          <label>
            Erwartete Personenzahl
            <input type="number" name="participants" min="1" />
          </label>
          <label>
            Nachricht *
            <textarea name="message" rows={8} required />
          </label>
          <label className="consent">
            <input type="checkbox" name="consent" required />
            Ich willige ein, dass meine Angaben zur Bearbeitung der Anfrage
            gespeichert und verarbeitet werden. *
          </label>
          <button className="btn primary" type="submit">
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
}
