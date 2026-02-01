import styles from "./Eintrittserklärung.module.css";

export default function EintrittserklärungsFormular() {
  return (
    <form>
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
        ab dem <input type="date" lang="de-DE" />
      </p>
    </form>
  );
}
