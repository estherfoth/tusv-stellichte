"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>TuSV Stellichte e.V.</h3>
          <p>
            Stellichte Nr. 136
            <br />
            29664 Walsrode
          </p>
          <p>
            Telefon: 05168 228998
            <br />
            E-Mail: u.b.rosewich@gmx.de
          </p>
        </div>
        <div>
          <h4>Links</h4>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
        <div>
          <h4>Weitere Links</h4>
          <a
            href="https://www.heim-dr-kruse.de/"
            target="_blank"
            rel="noreferrer"
          >
            Heim Dr. Kruse
          </a>
          <a
            href="https://www.facebook.com/people/TuSV-Stellichte/100057358903767/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook TuSV Stellichte
          </a>
          <a
            href="https://www.facebook.com/fgfuldestellichte/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook FGF Uelzen/Stellichte
          </a>
          <a
            href="https://www.mytischtennis.de/click-tt/verbaende"
            target="_blank"
            rel="noreferrer"
          >
            myTischtennis Verbaende
          </a>
        </div>
      </div>
      <div className="footer-bottom">© {currentYear} TuSV Stellichte e.V.</div>
    </footer>
  );
}
