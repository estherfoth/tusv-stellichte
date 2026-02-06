import { ImpressumContent } from "../../../types/contentful";
import { getImpressum } from "@/lib/contentful";
import styles from "./ImpressumComponent.module.css";

export default async function ImpressumComponent() {
  const impressum: ImpressumContent = await getImpressum();

  return (
    <section>
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>Vorstand TuSV Stellichte e.V.</p>

      <h2>Kontakt:</h2>
      <p>
        Telefon: {impressum.fields.kontaktTelefon}
        <br />
        E-Mail: {impressum.fields.kontaktEmail}
      </p>

      <h2>Registereintrag:</h2>
      <p>
        Eintragung im Vereinsregister.
        <br />
        Registergericht: {impressum.fields.registereintragRegistergericht}
        <br />
        Registernummer: {impressum.fields.registereintragRegisternummer}
      </p>

      <h2>Umsatzsteuer:</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:{" "}
        {impressum.fields.umsatzsteuerIdentifikationsnummer}
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr">
          https://ec.europa.eu/consumers/odr
        </a>
        .
        <br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
        <br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        <br />
        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
        Tätigkeit hinweisen.
      </p>

      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        <br />
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich.
        <br />
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
        Inhalte umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen.
        <br />
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
        oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
        zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
        <br />
        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
        erkennbar.
      </p>

      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
        ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
        <br />
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
        umgehend entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht.
        <br />
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
        schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        <br />
        Downloads und Kopien dieser Seite sind nur für den privaten, nicht
        kommerziellen Gebrauch gestattet.
      </p>

      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet.
        <br />
        Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten
        Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
        wir um einen entsprechenden Hinweis.
        <br />
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
        umgehend entfernen.
      </p>
    </section>
  );
}
