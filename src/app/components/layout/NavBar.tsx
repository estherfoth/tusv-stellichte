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
            src="/images/Logo.png"
            alt="TuSV Stellichte Logo"
            width={78}
            height={78}
            className="brand-mark"
            priority
          />
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
          <Link href="/angebot" className={isActive("/angebot") ? "active" : ""}>
            Angebote
          </Link>
          <Link href="/verein" className={isActive("/verein") ? "active" : ""}>
            Vereinsmitglieder
          </Link>
          <Link href="/satzung" className={isActive("/satzung") ? "active" : ""}>
            Verein
          </Link>
          <Link href="/mitglied" className={isActive("/mitglied") ? "active" : ""}>
            Mitglied werden
          </Link>
          <Link href="/news" className={isActive("/news") ? "active" : ""}>
            Neuigkeiten
          </Link>
          <Link href="/kontakt" className="btn primary nav-cta">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
