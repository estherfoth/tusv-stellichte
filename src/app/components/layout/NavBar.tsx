"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <Image
            src="/images/Logo_TuSV.svg"
            alt="TuSV Stellichte Logo"
            width={78}
            height={78}
            className="brand-mark"
            priority
          />
          {/* <span className="brand-text">Hier trifft man sich.</span> */}
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={toggleMenu}
        >
          Menü
        </button>
        <nav id="site-nav" className={`site-nav ${isOpen ? "open" : ""}`}>
          <Link
            href="/angebot"
            className={isActive("/angebot") ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Angebote
          </Link>
          <Link
            href="/strassenlauf"
            className={isActive("/strassenlauf") ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Straßenlauf
          </Link>
          <Link
            href="/verein"
            className={isActive("/verein") ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Vorstandsmitglieder
          </Link>
          <Link
            href="/satzung"
            className={isActive("/satzung") ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Satzung
          </Link>
          <Link
            href="/mitglied"
            className={isActive("/mitglied") ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Mitglied werden
          </Link>
          {/*           <Link href="/news" className={isActive("/news") ? "active" : ""}>
            Neuigkeiten
          </Link> */}
          <Link
            href="/kontakt"
            className="btn primary nav-cta"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
