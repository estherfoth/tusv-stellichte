"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Signatur from "./Signatur";
import styles from "./Eintrittserklärung.module.css";
import { supabase } from "@/lib/supabase";

export default function EintrittserklärungsFormular() {
  const memberSigRef = useRef<SignatureCanvas | null>(null);
  const parentSig1Ref = useRef<SignatureCanvas | null>(null);
  const parentSig2Ref = useRef<SignatureCanvas | null>(null);

  const [signatureError, setSignatureError] = useState(false);
  const [birthDate, setBirthDate] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSignatureError(false);
    setSubmitError(null);

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

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      // Personal data
      geschlecht: String(formData.get("geschlecht") ?? ""),
      vorname: String(formData.get("vorname") ?? ""),
      nachname: String(formData.get("nachname") ?? ""),
      strasse: String(formData.get("straße") ?? ""),
      hausnummer: String(formData.get("hausnummer") ?? ""),
      plz: String(formData.get("plz") ?? ""),
      ort: String(formData.get("ort") ?? ""),
      geburtsdatum: birthDate,
      sparte: String(formData.get("sparte") ?? ""),
      telefonnummer: String(formData.get("telefonnummer") ?? ""),
      email: String(formData.get("email") ?? ""),

      // Entry date
      eintrittsdatum: String(formData.get("eintrittsdatum") ?? ""),

      // Member signature
      ort_mitglied: String(formData.get("ort_mitglied") ?? ""),
      datum_mitglied: String(formData.get("datum_mitglied") ?? ""),
      signature_member: memberSigRef
        .current!.getTrimmedCanvas()
        .toDataURL("image/png"),

      // Parent/Guardian 1
      ort_vertreter_1: String(formData.get("ort_vertreter_1") ?? ""),
      datum_vertreter_1: String(formData.get("datum_vertreter_1") ?? ""),
      signature_parent_1:
        parentSig1Ref.current && !parentSig1Ref.current.isEmpty()
          ? parentSig1Ref.current.getTrimmedCanvas().toDataURL("image/png")
          : null,

      // Parent/Guardian 2
      ort_vertreter_2: String(formData.get("ort_vertreter_2") ?? ""),
      datum_vertreter_2: String(formData.get("datum_vertreter_2") ?? ""),
      signature_parent_2:
        parentSig2Ref.current && !parentSig2Ref.current.isEmpty()
          ? parentSig2Ref.current.getTrimmedCanvas().toDataURL("image/png")
          : null,
    };

    const { data, error } = await supabase.functions.invoke(
      "generate-membership-pdf",
      {
        body: payload, // <-- MUSS ein plain Object sein
      },
    );

    setLoading(false);

    if (error) {
      console.error("Edge function error:", error);
      setSubmitError(`Fehler beim Generieren der PDF: ${error.message}`);
      return;
    }

    if (data?.success && data?.url) {
      console.log("PDF generated successfully:", data);

      // Open PDF in new tab
      window.open(data.url, "_blank");

      // Optional: Also trigger download
      const link = document.createElement("a");
      link.href = data.url;
      link.download = data.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSuccess(true);
      setSubmitError(null);
    } else {
      setSubmitError("PDF wurde generiert, aber keine URL erhalten.");
    }
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
          value="männlich"
        />
        <label className={styles.eintrittsRadioLabel} htmlFor="männlichWahl">
          männlich
        </label>
        <input
          className={styles.eintrittsRadioInput}
          id="weiblichWahl"
          name="geschlecht"
          type="radio"
          value="weiblich"
        />
        <label className={styles.eintrittsRadioLabel} htmlFor="weiblichWahl">
          weiblich
        </label>
        <input
          className={styles.eintrittsRadioInput}
          id="diversWahl"
          name="geschlecht"
          type="radio"
          value="divers"
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
          required
        ></input>
        <label className={styles.eintrittsLabel} htmlFor="nachname">
          Nachname
        </label>
        <input
          className={styles.eintrittsInput}
          name="nachname"
          type="text"
          required
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
          required
        ></input>
        <span>, </span>
        <input
          className={styles.eintrittsInput}
          name="hausnummer"
          type="text"
          required
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
          required
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
          required
        ></input>
        <br />
        <label className={styles.eintrittsLabel} htmlFor="telefonnummer">
          Telefonnummer
        </label>
        <input
          className={styles.eintrittsInput}
          name="telefonnummer"
          type="phone"
          required
        ></input>
        <label className={styles.eintrittsLabel} htmlFor="email">
          E-Mail
        </label>
        <input
          className={styles.eintrittsInput}
          name="email"
          type="email"
          required
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
        required={!isAdult ? false : true}
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
            required={false}
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
      {submitError && (
        <div role="alert" className={styles.errorMessage}>
          <strong>Fehler beim Absenden</strong>
          <p>{submitError}</p>
        </div>
      )}
      {success && (
        <div role="status" className={styles.successMessage}>
          <strong>Erfolgreich!</strong>
          <p>
            Ihre Eintrittserklärung wurde erfolgreich generiert. Die PDF wurde
            automatisch heruntergeladen und in einem neuen Tab geöffnet.
          </p>
        </div>
      )}
      {loading && (
        <div className={styles.loadingOverlay}>
          <p>PDF wird generiert... Bitte warten.</p>
        </div>
      )}
      <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? "Wird generiert..." : "Eintritt beantragen"}
      </button>
    </form>
  );
}
