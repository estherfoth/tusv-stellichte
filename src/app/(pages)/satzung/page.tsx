import Hero from "@/app/components/ui/Hero";
import styles from "./page.module.css";

export default function SatzungPage() {
  return (
    <main className={styles.satzung}>
      <Hero
        variant="page"
        eyebrow="Rechtliches"
        title="Vereinssatzung"
        description="Satzung des Turn- und Spielverein Stellichte von 1910 e. V. - Stand: 09. Februar 2019"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h1>Satzung des Turn- und Spielverein Stellichte von 1910 e. V.</h1>
      <h2>I. Allgemeine Bestimmungen</h2>
      <section>
        <h3>§ 1 Name und Sitz</h3>
        <ol>
          <li>
            Der Verein führt den Namen Turn- und Spielverein Stellichte e. V.
            und hat seinen Sitz in Stellichte, 29664 Walsrode.
          </li>
          <li>Gründungstag des Vereins ist der 11. Juli 1909.</li>
          <li>
            Der Verein ist in das Vereinsregister des zuständigen Amtsgerichts
            eingetragen.
          </li>
          <li>
            Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige
            Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke der
            Abgabenordnung“.
          </li>
        </ol>
      </section>
      <section>
        <h3>§ 2 Zweck</h3>
        <ol>
          <li>Zweck des Vereins ist die Förderung des Sports.</li>
          <li>
            Vornehmliche Aufgabe des Vereins ist es Sport zu ermöglichen und in
            seiner Gesamtheit zu fördern, wozu auch der Gesundheitssport, das
            orthopädische Turnen sowie die Herstellung und Unterhaltung der
            entsprechenden Sportstätten gehört.
          </li>
          <li>
            Der Verein ist politisch und religiös neutral sowie
            anti-rassistisch.
          </li>
          <li>
            Der Verein ist selbstlos tätig, er verfolgt nicht in erster Linie
            eigenwirtschaftliche Zwecke.
          </li>
          <li>
            Mittel des Vereins dürfen nur für Satzungszwecke verwendet werden.
            Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins.
          </li>
          <li>
            Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd
            sind oder durch unverhältnismäßig hohe Vergütungen begünstigt
            werden.
          </li>
        </ol>
      </section>
      <section>
        <h3>§ 3 Mitgliedschaft und Organisation</h3>
        <ol>
          <li>
            Der Verein ist Mitglied der zur Förderung und Durchführung des
            Sportes und des Vereinszweckes geschaffenen Landes- und
            Fachverbände.
          </li>
          <li>
            Der Verein regelt seine Angelegenheiten im Einklang mit den
            Satzungen und Ordnungen dieser Organisationen selbstständig.
          </li>
        </ol>
      </section>
      <section>
        <h3>§ 4 Rechtsgrundlagen</h3>
        <ol>
          <li>
            Die Rechte und Pflichten der Vereinsmitglieder sowie der
            Vereinsorgane werden durch diese Satzung geregelt.
          </li>
          <li>
            Satzungen, Ordnungen und Beschlüsse der Fachverbände und
            Organisationen gemäß § 3 Absatz 1 sind für Mitglieder und Organe des
            Vereins verbindlich.
          </li>
          <li>
            Für Streitigkeiten aus der Mitgliedschaft zum Verein und den damit
            zusammen-hängenden Angelegenheiten ist der ordentliche Rechtsweg nur
            mit Zustimmung des Vereinsvorstandes bzw. der zuständigen
            Organisation gem. § 3 möglich.
          </li>
        </ol>
      </section>
      <h2>II. Mitgliedschaft</h2>
      <section>
        <h3>§ 5 Erwerb der Mitgliedschaft</h3>
        <ol>
          <li>
            Die ordentliche Mitgliedschaft zum Verein kann von jeder natürlichen
            Person beantragt werden. Diese erkennt mit Eintritt diese Satzung
            mit ihren Ordnungen an. Der Eintritt muss in schriftlicher Form
            erfolgen und ist an den geschäftsführenden Vorstand zu richten.
          </li>
          <li>
            Juristische Personen oder Vereinigungen können eine außerordentliche
            und fördernde Mitgliedschaft beantragen.
          </li>
          <li>Die Mitgliedschaft ist freiwillig und nicht übertragbar.</li>
          <li>
            Personen, die sich nach dem Gesetz nicht selbst vertreten können,
            bedürfen der Erklärung des gesetzlichen Vertreters.
          </li>
          <li>Über den Aufnahmeantrag entscheidet der Vorstand.</li>
          <li>
            Die Mitgliedschaft beginnt mit der Annahme des Aufnahmeantrages.
          </li>
        </ol>
      </section>
      <section>
        <h3>§ 6 Beendigung der Mitgliedschaft</h3>
        <ol>
          <li>
            Die Mitgliedschaft endet
            <ol>
              <li>durch Austrittserklärung des Mitgliedes,</li>
              <li>durch Ausschluss,</li>
              <li>mit dem Tode des Mitgliedes.</li>
            </ol>
          </li>
          <li>Eine Austrittserklärung soll schriftlich erfolgen.</li>
          <li>
            Ein Ausschluss kann ausgesprochen werden:
            <ol>
              <li>
                durch den Vorstand, wenn das Mitglied grob und schuldhaft gegen
                die Satzung und Ordnungen des Vereins oder der übergeordneten
                Organisationen verstößt oder die Beiträge trotz mehrfacher
                Mahnung nicht bezahlt.
              </li>
              <li>
                bei schwerwiegender Verletzung dieser Satzung sowie bei
                Verstößen gegen Sitte, Anstand, Kameradschaft und Ehre.
              </li>
            </ol>
          </li>
          <li>
            Vor dem Ausschluss eines Mitgliedes soll diesem die Möglichkeit zur
            Stellungnahme gegeben werden.
          </li>
          <li>
            Die Mitgliedschaft endet bei Austritt mit Ablauf des 31.12. des
            laufenden Jahres und ist bis zum 31.12. des Jahres zu erklären.
          </li>
          <li>
            Die Mitgliedschaft durch Ausschluss endet am Tage des Ausschlusses.
          </li>
          <li>
            Die Beendigung der Mitgliedschaft durch Austritt oder Ausschluss
            berührt nicht die Verpflichtung zur Zahlung des rückständigen
            Mitgliedsbeitrages.
          </li>
        </ol>
      </section>

      <section>
        <h3>§ 7 Ehrenmitglieder</h3>
        <ol>
          <li>
            Personen, die sich um den Verein besondere Verdienste erworben
            haben, können von der Hauptversammlung zu Ehrenmitgliedern ernannt
            werden. Ehrenmitglieder haben die gleichen Rechte wie ordentliche
            Mitglieder, sind jedoch von der Beitragszahlung befreit.
          </li>
          <li>
            Mitglieder, die besonders maßgeblich für den Verein, seine
            Zielsetzungen und Repräsentanz gewirkt haben oder dem Verein
            langjährig angehören, können vom Vorstand oder der Hauptversammlung
            besonders geehrt werden.
          </li>
        </ol>
      </section>
      <h2>III. Rechte und Pflichten der Mitglieder</h2>
      <section>
        <h3>§ 8 Rechte der Mitglieder</h3>
        <ol>
          <li>
            Alle ordentlichen Mitglieder haben im Rahmen der Satzung und ihrer
            Ordnungen gleiche Rechte.
          </li>
          <li>
            Alle Mitglieder haben Anspruch auf die Benutzung aller Einrichtungen
            des Vereins nach Maßgabe der hierüber getroffenen Bestimmungen.
          </li>
          <li>
            Alle Mitglieder können an den Veranstaltungen des Vereins teilnehmen
            und in allen Sportarten mitwirken.
          </li>
          <li>
            Der Vereinsvorstand kann für einzelne Veranstaltungen Richtlinien
            bestimmen sofern dieses notwendig und zweckmäßig erscheint.
          </li>
          <li>
            Die Mitglieder können vom Verein einen möglichst ausreichenden
            Versicherungs-schutz gegen Sportunfälle und dergleichen verlangen.
          </li>
        </ol>
      </section>
      <section>
        <h3>§ 9 Pflichten der Mitglieder</h3>
        <ol>
          <li>
            Die Satzungen, Ordnungen und Beschlüsse des Vereins und der
            übergeordneten Organisationen müssen befolgt werden.
          </li>
          <li>Kein Mitglied darf gegen die Interessen des Vereins handeln.</li>
          <li>
            Jedes Mitglied soll nach Kräften an der Erfüllung der
            Vereinsaufgaben und –ziele mitwirken.
          </li>
          <li>Der Mitgliedsbeitrag soll pünktlich entrichtet werden.</li>
        </ol>
      </section>
      <section>
        <h3>§ 10 Mitglieder- und Beitragsordnung</h3>
        <ol>
          <li>
            Die Hauptversammlung beschließt über die Höhe des
            Mitgliedsbeitrages, der in unterschiedlicher Form und Höhe bestimmt
            werden kann.
          </li>
          <li>Eine Mitglieds- und Beitragsordnung kann Näheres regeln.</li>
        </ol>
      </section>
      <h2>IV. Gliederung des Vereins</h2>
      <section>
        <h3>§ 11 Abteilungen, Sparten</h3>
        <ol>
          <li>
            Soweit zweckmäßig oder notwendig können zur Durchführung der
            Vereins-aufgaben nach Interesse, Sportart, Alter oder Geschlecht
            Abteilungen bzw. Sparten gebildet werden.
          </li>
          <li>
            Jede Abteilung wählt dann in der Regel einen Fachwart sowie - wenn
            notwendig - einen Stellvertreter.
          </li>
          <li>
            Die Wahl soll mindestens zwei Wochen vor dem Termin der
            Hauptversammlung erfolgen, für eine Periode bis zu zwei Jahren
            gelten und von der Haupt-versammlung bestätigt werden.
          </li>
        </ol>
      </section>
      <section>
        <h3>§ 12 Ausschüsse</h3>
        <ol>
          <li>
            Zur Wahrung und Durchführung besonderer Aufgaben können vom Vorstand
            Ausschüsse gebildet werden.
          </li>
        </ol>
      </section>
      <h2>V. Vereinsorgane</h2>
      <section>
        <h3>§ 13 Hauptversammlung</h3>
        <ol>
          <li>
            Oberstes Organ des Vereins ist die Hauptversammlung, an der jedes
            ordentliche Mitglied teilnehmen kann. Der Vorstand kann
            außerordentliche bzw. fördernde Mitglieder sowie Gäste laden.
          </li>
          <li>
            Die Hauptversammlung soll jährlich im ersten Kalendervierteljahr
            stattfinden und ist vom Vorstand unter Bekanntgabe der Tagesordnung
            mindestens 14 Tage vorher durch ausreichende Bekanntmachung
            einzuberufen. Die Einberufung erfolgt durch Aushang im Flur der
            Turnhalle am schwarzen Brett neben dem Haupteingang an der linken
            Seite sowie an der Ortstafel Dorfmitte, Dorfstraße.
          </li>
          <li>
            Die Hauptversammlung wird vom Vorsitzenden oder einem Mitglied des
            geschäftsführenden Vorstandes geleitet.
          </li>
          <li>
            Die Tagesordnung der Hauptversammlung soll mindestens umfassen:
            <ol>
              <li>Feststellung der Ordnungsmäßigkeit der Einberufung,</li>
              <li>Rechenschaftsbericht des Vorstandes und der Fachwarte,</li>
              <li>Rechenschaftsbericht der Kassenprüfer,</li>
              <li>Beschlussfassung über die Entlastung,</li>
              <li>
                Wahlen zum Vorstand, der Kassenprüfer bei Ablauf der Amtsperiode
                sowie evtl. Bestätigung von Fachwarten,
              </li>
              <li>Anträge und Beschwerden.</li>
            </ol>
          </li>
          <li>
            Die Hauptversammlung beschließt in allen Vereinsangelegenheiten
            soweit diese nicht satzungsgemäß anderen Organen übertragen sind.
          </li>
          <li>
            Jede ordnungsgemäß einberufene Hauptversammlung ist beschlussfähig.
            Beschlüsse werden, sofern die Satzung nichts anderes bestimmt, mit
            einfacher Mehrheit gefasst. Im Falle einer Stimmengleichheit gilt
            ein Antrag als abgelehnt. Satzungsänderungen können nur mit einer
            Mehrheit von drei Vierteln der abgegebenen gültigen Stimmen
            beschlossen werden. Stimmenenthaltungen bleiben außer Betracht. § 19
            bleibt hiervon unberührt.
          </li>
          <li>
            Jedes ordentliche Mitglied, das sich nach dem Gesetz selbst
            vertreten kann, verfügt über eine Stimme. Eine Übertragung des
            Stimmrechts in Ausnahmefällen ist nur mit Zustimmung der
            Hauptversammlung möglich.
          </li>
          <li>
            Anträge und Beschwerden sollen dem Vorstand mit ausreichender
            Begründung mindestens fünf Tage vor der Hauptversammlung mitgeteilt
            werden. Die Zulassung nicht rechtzeitig eingegangener Anträge kann
            von der Zustimmung von mindestens zwei Dritteln der vertretenen
            Stimmen abhängig gemacht werden.
          </li>
          <li>
            Außerordentliche Hauptversammlungen können einberufen werden,
            <ol>
              <li>wenn es der Vereinsvorstand für notwendig hält,</li>
              <li>
                wenn mindestens ein Drittel der stimmberechtigten Mitglieder
                dieses wünscht. Für außerordentliche Hauptversammlungen können
                sich in dringenden Fällen die Einberufungs- und Antragsfristen
                um die Hälfte verkürzen.
              </li>
            </ol>
          </li>
          <li>
            Über jede Hauptversammlung wird eine Niederschrift (Protokoll)
            gefertigt, die den Wortlaut der gefassten Beschlüsse mit den
            jeweiligen Abstimmungs-ergebnissen enthalten und vom
            Versammlungsleiter und dem Protokollführer unterschrieben werden
            muss.
          </li>
        </ol>
      </section>
      <section>
        <h3>§ 14 Vereinsvorstand</h3>
        <ol>
          <li>
            Der Vereinsvorstand führt die Beschlüsse der Hauptversammlung aus
            und ist für eine ordnungsgemäße Geschäftsführung verantwortlich.
          </li>
          <li>
            Der Vereinsvorstand besteht aus
            <ol>
              <li>dem geschäftsführenden Vorstand,</li>
              <li>dem erweiterten Vorstand.</li>
            </ol>
            <p>Die Wahlperiode beträgt jeweils 2 Kalenderjahre.</p>
          </li>
          <li>
            Zum geschäftsführenden Vorstand gehören
            <ol>
              <li>der Vorsitzende,</li>
              <li>ein oder mehrere stellvertretende Vorsitzende,</li>
              <li>ein Kassenwart,</li>
              <li>ein Schriftführer.</li>
            </ol>
            <p>
              Ist a) nicht vorhanden, übernehmen die Führung des Vereins
              mindestens zwei gleichberechtigte Mitglieder des
              geschäftsführenden Vorstandes.
            </p>
          </li>
          <li>
            Zum erweiterten Vorstand gehören stellvertretender Kassenwart und
            stellvertretender Geschäftsführer soweit vorhanden und gewählt sowie
            alle Fachwarte und deren Stellvertreter aus § 11 dieser Satzung. Er
            kann durch weitere Personen ergänzt werden. Auch die Aufnahme von
            Beisitzern ist möglich. Sämtliche Mitglieder des Vorstandes haben
            gleiches Stimmrecht. Eine Wiederwahl ist zulässig.
          </li>
          <li>
            Nicht zum Vorstand gehören die zwei Kassenprüfer, die von der
            Hauptversammlung für zwei Jahre zu wählen sind. Hier ist keine
            Wiederwahl möglich.
          </li>
          <li>
            Beim vorzeitigen Ausscheiden oder dauernder Verhinderung eines
            Vorstands-mitgliedes oder Fachwartes kann dessen Amt vom Vorstand
            bis zur nächsten Hauptversammlung bzw. bis zum nächsten Wahltermin
            mit einem geeignet erscheinenden Vereinsmitglied kommissarisch
            besetzt werden.
          </li>
          <li>
            Geschlossen kann der Vorstand nur auf einer Jahreshauptversammlung
            zurücktreten. Entsteht durch Verletzung dieser Bestimmung oder durch
            dauernden Ausfall von Vorstandsmitgliedern ein Notfall, so ist der
            verbleibende Vorstand ermächtigt, einen kommissarischen Vorsitzenden
            bzw. Vorstand zu bestellen oder zu ergänzen. Der kommissarische
            Vorstand muss innerhalb eines Monats nach seiner Bestellung eine
            außerordentliche Hauptversammlung einberufen, wenn nicht innerhalb
            der nächsten drei Monate die ordentliche Hauptversammlung
            stattfindet.
          </li>
        </ol>
      </section>
      <h2>VI. Geschäftsführung</h2>
      <section>
        <h3>§ 15 Geschäftsordnung</h3>
        <ol>
          <li>
            Der Verein wird gemäß § 26 ff. BGB von dem Vorsitzenden allein, bei
            Verhinderung oder nicht Vorhandensein von zwei Mitgliedern des
            geschäfts-führenden Vorstandes vertreten.
          </li>
          <li>
            Der Vorstand kann sich eine Geschäftsordnung geben, mit der die
            Durchführung seiner Aufgaben näher geregelt wird. Soweit eine
            Geschäftsordnung nichts anderes bestimmt, regeln die einzelnen
            Vorstandsmitglieder im Rahmen der Satzung und Beschlüsse die
            Angelegenheiten des Aufgabenbereiches weitgehend selbstständig.
          </li>
          <li>
            Soweit in dringenden Fällen geboten sowie bei etwaiger
            Beschlussunfähigkeit des Vorstandes kann der Vorsitzende
            verbindliche Richtlinien erlassen, die alsbald durch einen
            ordnungsgemäßen Beschluss zu ersetzen sind.
          </li>
          <li>
            Der Vorstand kann zur Aufrechterhaltung der Sport- und
            Vereinsordnung Maßnahmen gegen einzelne Mitglieder in Form von
            zeitweiligen Ausschlüssen vom Sport- und Veranstaltungsbetrieb,
            Geldbußen bzw. -strafen und dergleichen beschließen. Hierbei sind
            die Bestimmungen der übergeordneten Organisationen zu beachten.
          </li>
          <li>
            Mittel des Vereins dürfen nur für die satzungsgemäßen Zwecke des
            Vereins verwandt werden. Die Mitglieder erhalten in ihrer
            Eigenschaft als solche keine Zuwendungen aus Mitteln des Vereins.
            Die Mitglieder der Vereinsorgane sind ehrenamtlich tätig. Eine
            Erstattung von Auslagen findet nur nach Maßgabe des Haushaltsplanes
            und mit Genehmigung des Vorstandes statt. Es darf keine Person durch
            Ausgaben, die dem Zweck des Vereins fremd sind oder durch
            unverhältnismäßig hohe Vergütungen begünstigt werden.
          </li>
          <li>
            Die Prüfung der Rechnungs- und Wirtschaftsführung sowie des
            Vereins-vermögens und aller damit zusammenhängenden Angelegenheiten
            obliegt mindestens zwei von der Hauptversammlung zu wählenden
            Kassenprüfern. Diese haben der nächsten Hauptversammlung Bericht zu
            erstatten.
          </li>
        </ol>
      </section>
      <section>
        <h3>§ 16 Beschlussfassung des Vorstandes</h3>
        <ol>
          <li>
            Der Vorstand ist beschlussfähig ohne Rücksicht auf die Zahl der
            erschienenen Mitglieder sofern die Einberufung mindestens acht Tage
            vorher bekannt geworden ist. Die Bestimmungen des § 13
            (Hauptversammlung) bleiben hiervon unberührt.
          </li>
          <li>
            Alle Beschlüsse werden mit einfacher Mehrheit gefasst.
            Stimmengleichheit gilt als Ablehnung eines Antrages.
          </li>
          <li>
            Der Versammlungsleiter kann die Bekanntgabe von Anträgen mindestens
            drei Tage vorher verlangen.
          </li>
          <li>
            Über die Versammlungen, insbesondere des Vorstandes, ist ein
            Protokoll in laufend nummerierter Folge zu führen, das die gefassten
            Beschlüsse mit dem Abstimmungsergebnis, Zahl und möglichst Namen der
            Erschienenen enthalten soll und vom Versammlungsleiter und dem
            Protokollführer zu unterschreiben ist.
          </li>
        </ol>
      </section>
      <h2>VII. Sonstiges und Schlussbestimmungen</h2>
      <section>
        <h3>§ 17 Geschäftsjahr</h3>
        <ol>
          <li>Das Geschäftsjahr ist das Kalenderjahr.</li>
        </ol>
      </section>
      <section>
        <h3>§ 18 Erfüllungsort und Gerichtsstand</h3>
        <ol>
          <li>Erfüllungsort ist Stellichte.</li>
          <li>
            Gerichtsstand ist der Ort der für Stellichte zuständigen
            ordentlichen Gerichte sofern die Gesetze nicht zwingend etwas
            anderes bestimmen.
          </li>
        </ol>
      </section>
      <section>
        <h3>§ 19 Auflösung des Vereins</h3>
        <ol>
          <li>
            Ein Beschluss über die Auflösung des Vereins kann nur gefasst
            werden, wenn der Antrag auf Auflösung rechtzeitig gemäß § 13
            bekanntgegeben worden ist und bei der Abstimmung mindestens drei
            Viertel der stimmberechtigten Mitglieder vertreten sind. Sind
            weniger vertreten, ist innerhalb von zwei Wochen eine neue
            Haupt-versammlung mit gleicher Tagesordnung einzuberufen. Diese ist
            ohne Rücksicht auf die Zahl der erschienenen stimmberechtigten
            Mitglieder beschlussfähig.
          </li>
          <li>
            Ein Beschluss über die Auflösung des Vereins erfordert eine
            Drei-Viertel-Mehrheit der abgegebenen gültigen Stimmen.
            Stimmenenthaltungen bleiben außer Betracht.
          </li>
          <li>
            Die Hauptversammlung hat zugleich über die Person oder Stelle der
            Abwicklung zu beschließen.
          </li>
          <li>
            Im Falle der Auflösung oder Aufhebung des Vereins oder bei Wegfall
            seines steuerbegünstigten Zwecks fällt das Vermögen an die Stadt
            Walsrode oder deren Rechtsnachfolger, die es unmittelbar und
            ausschließlich zu Gunsten gemeinnütziger Zwecke in der Ortschaft
            Stellichte zu verwenden hat.
          </li>
        </ol>
      </section>
      <br />
      <footer>
        <p>Stellichte, den 09. Februar 2019</p>
        <section id="unterzeichnet">
          <p>
            Joachim Winkelmann
            <br />
            (2. Vorsitzender)
          </p>
          <p>
            Friedlinde Rosenau-Bünger
            <br />
            (Schriftführerin)
          </p>
        </section>
      </footer>
        </div>
      </section>
    </main>
  );
}
