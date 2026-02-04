"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Signatur from "./Signatur";
import styles from "./Eintrittserklärung.module.css";

export default function EintrittserklärungsFormular() {
  const memberSigRef = useRef<SignatureCanvas | null>(null);
  const parentSig1Ref = useRef<SignatureCanvas | null>(null);
  const parentSig2Ref = useRef<SignatureCanvas | null>(null);

  const [signatureError, setSignatureError] = useState(false);
  const [birthDate, setBirthDate] = useState<string>("");

  const isAdult = (() => {
    if (!birthDate) return false;
    const dob = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age >= 18;
  })();

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    setSignatureError(false);

    if (!memberSigRef.current || memberSigRef.current.isEmpty()) {
      setSignatureError(true);
      return;
    }

    const isMinor = Boolean(birthDate) && !isAdult;
    const parent1Empty =
      !parentSig1Ref.current || parentSig1Ref.current.isEmpty();
    const parent2Empty =
      !parentSig2Ref.current || parentSig2Ref.current.isEmpty();

    if (isMinor && parent1Empty && parent2Empty) {
      setSignatureError(true);
      return;
    }

    const memberSignature = memberSigRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    const parentSignature1 =
      parentSig1Ref.current && !parentSig1Ref.current.isEmpty()
        ? parentSig1Ref.current.getTrimmedCanvas().toDataURL("image/png")
        : null;

    const parentSignature2 =
      parentSig2Ref.current && !parentSig2Ref.current.isEmpty()
        ? parentSig2Ref.current.getTrimmedCanvas().toDataURL("image/png")
        : null;

    const formData = new FormData(e.currentTarget);

    formData.append("signature_member", memberSignature);

    if (parentSignature1) {
      formData.append("signature_parent_1", parentSignature1);
    }

    if (parentSignature2) {
      formData.append("signature_parent_2", parentSignature2);
    }

    console.log(Object.fromEntries(formData.entries()));
  }

  return (
    <form onSubmit={handleSubmit} className={styles.eintrittserklärungFormular}>
      <header className={styles.headline}>
        <h1>
          Turn- und Spielverein Stellichte
          <br />
          von 1910 e.V.
        </h1>
      </header>
      <p>
        Fußball - Tischtennis - Damen-, Herren- und Senioren-Gymnastik -
        Mutter-Kind-Turnen - Badminton - Radfahren - Tango Argentino - Boule -
        wechselnde Kursangebote
      </p>
      <p>
        Hiermit beantrage ich die Mitgliedschaft im{" "}
        <strong>
          Turn- und Spielverein Stellichte e.V. mit allen Rechten und Pflichten
        </strong>{" "}
        ab dem{" "}
        <input
          className={styles.eintrittsInput}
          name="eintrittsdatum"
          type="date"
          lang="de-DE"
        />
      </p>
      <fieldset>
        <legend>Persönliche Daten</legend>
        <input
          className={styles.eintrittsRadioInput}
          id="männlichWahl"
          name="geschlecht"
          type="radio"
        />
        <label className={styles.eintrittsRadioLabel} htmlFor="männlichWahl">
          männlich
        </label>
        <input
          className={styles.eintrittsRadioInput}
          id="weiblichWahl"
          name="geschlecht"
          type="radio"
        />
        <label className={styles.eintrittsRadioLabel} htmlFor="weiblichWahl">
          weiblich
        </label>
        <input
          className={styles.eintrittsRadioInput}
          id="diversWahl"
          name="geschlecht"
          type="radio"
        />
        <label className={styles.eintrittsRadioLabel} htmlFor="diversWahl">
          divers
        </label>
        <br />
        <label className={styles.eintrittsLabel} htmlFor="vorname">
          Vorname
        </label>
        <input
          className={styles.eintrittsInput}
          name="vorname"
          type="text"
        ></input>
        <label className={styles.eintrittsLabel} htmlFor="nachname">
          Nachname
        </label>
        <input
          className={styles.eintrittsInput}
          name="nachname"
          type="text"
        ></input>
        <br />
        <label className={styles.eintrittsLabel} htmlFor="straße">
          Straße
        </label>
        <span>,</span>
        <label className={styles.eintrittsLabel} htmlFor="hausnummer">
          Hausnummer
        </label>
        <input
          className={styles.eintrittsInput}
          name="straße"
          type="text"
        ></input>
        <span>, </span>
        <input
          className={styles.eintrittsInput}
          name="hausnummer"
          type="text"
        ></input>
        <br />
        <label className={styles.eintrittsLabel} htmlFor="plz">
          PLZ
        </label>
        <span>,</span>
        <label className={styles.eintrittsLabel} htmlFor="ort">
          Wohnort
        </label>
        <input
          className={styles.eintrittsInput}
          name="plz"
          type="number"
        ></input>
        <span>, </span>
        <input className={styles.eintrittsInput} name="ort" type="text"></input>
        <br />
        <label className={styles.eintrittsLabel} htmlFor="geburtsdatum">
          Geburtsdatum
        </label>
        <input
          className={styles.eintrittsInput}
          name="geburtsdatum"
          type="date"
          lang="de-DE"
          required
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <label className={styles.eintrittsLabel} htmlFor="sparte">
          Sparte
        </label>
        <input
          className={styles.eintrittsInput}
          name="sparte"
          type="text"
        ></input>
        <br />
        <label className={styles.eintrittsLabel} htmlFor="telefonnummer">
          Telefonnummer
        </label>
        <input
          className={styles.eintrittsInput}
          name="telefonnummer"
          type="phone"
        ></input>
        <label className={styles.eintrittsLabel} htmlFor="email">
          E-Mail
        </label>
        <input
          className={styles.eintrittsInput}
          name="email"
          type="email"
        ></input>
      </fieldset>
      <p>
        Mit meiner Unterschrift erkenne ich die Satzung und Ordnungen des
        Vereins in der jeweils gültigen Fassung an. Mir ist bekannt, dass ein
        Austritt nur <strong>schriftlich zum Jahresende</strong> erfolgen kann
        Eine Herausgabe des Spielerpasses beinhaltet <strong>keine</strong>{" "}
        Kündigung der Mitgliedschaft.
      </p>
      <p>
        Ich bin damit einverstanden, dass die vorgenannten Kontaktdaten zu
        Vereinszwecken durch den Verein genutzt und hierfür auch an andere
        Mitglieder des Vereins (z.B. zur Bildung von Fahrgemeinschaften)
        weitergegeben werden dürfen.
      </p>
      <p>
        <strong>
          Mir ist bekannt, dass die Einwilligung in die Datenverarbeitung der
          vorbenannten Angaben freiwillig erfolgt und jederzeit durch mich ganz
          oder teilweise mit Wirkung für die Zukunft widerrufen werden kann.
        </strong>
      </p>
      <p>
        <small>
          Bei der Verarbeitung der Personendaten beachtet der TuSV Stellichte
          u.a. die Vorschriften der Datenschutzgrundverordnung. Wir nutzen die
          Daten zur Verwaltung der Mitgliedschaft. Die
          Datenschutzgrundverordnung regelt auch alle Rechte, u.a. das
          Beschwerderecht bei uns und bei der Datenschutzaufsichtsbehörde.
          Ausführliche Informationen sind als Anlage 1 beigefügt.
        </small>
      </p>
      <p>
        Die als Anlage 1 und 2 beigefügten{" "}
        <strong>Informationspflichten gemäß Artikel 13 und 14 DS-GVO</strong>{" "}
        bzw.{" "}
        <strong>
          Einwilligung in die Veröffentlichung von Personenbildnissen
        </strong>{" "}
        sowie{" "}
        <strong>
          Einwilligung in die freie Gestaltung der Übungseinheiten bei
          minderjährigen Mitgliedern
        </strong>{" "}
        habe ich gelesen und zur Kenntnis genommen.
      </p>
      <Signatur
        ref={memberSigRef}
        legend="Ort, Datum und Unterschrift (Mitglied)"
        placeName="ort_mitglied"
        dateName="datum_mitglied"
        clearLabel="Unterschrift löschen"
        onClear={() => memberSigRef.current?.clear()}
      />
      {!isAdult && birthDate && (
        <section className={styles.minorSignatures}>
          <Signatur
            ref={parentSig1Ref}
            legend="Gesetzliche Vertreter"
            title="Unterschrift gesetzlicher Vertreter 1"
            placeName="ort_vertreter_1"
            dateName="datum_vertreter_1"
            clearLabel="Vertreter 1 löschen"
            onClear={() => parentSig1Ref.current?.clear()}
          />
          <Signatur
            ref={parentSig2Ref}
            legend="Gesetzliche Vertreter"
            title="Unterschrift gesetzlicher Vertreter 2"
            placeName="ort_vertreter_2"
            dateName="datum_vertreter_2"
            clearLabel="Vertreter 2 löschen"
            onClear={() => parentSig2Ref.current?.clear()}
          />
        </section>
      )}
      {signatureError && (
        <p role="alert">
          Bitte unterschreiben: Mitglied verpflichtend, bei Minderjährigen
          mindestens ein gesetzlicher Vertreter.
        </p>
      )}
      <button type="submit" className={styles.submitButton}>
        Eintritt beantragen
      </button>
    </form>
  );
}
