"use client";

import Link from "next/link";

export default function CookieFAB() {
  return (
    <Link
      href="/cookies"
      className="cookie-fab"
      aria-label="Cookie-Hinweise"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
        <path
          d="M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18z"
          fill="currentColor"
        />
        <path
          d="M18.5 6.5a3.6 3.6 0 0 1-2.6 3.4a3.3 3.3 0 0 1 2.1 3.1a3.4 3.4 0 0 1-3.4 3.4h-.3a3.6 3.6 0 0 1-3.5 3.2a3.7 3.7 0 0 1-3.6-3.1A3.7 3.7 0 0 1 4.3 14a3.5 3.5 0 0 1 3.3-3.4A3.6 3.6 0 0 1 7.2 6.8a3.4 3.4 0 0 1 3.4-3.4h.2"
          fill="currentColor"
        />
        <circle cx="9" cy="9" r="1.2" fill="#5a3300" />
        <circle cx="14.5" cy="9.5" r="1.1" fill="#5a3300" />
        <circle cx="11" cy="13.5" r="1.1" fill="#5a3300" />
        <circle cx="15.5" cy="13.2" r="1.0" fill="#5a3300" />
      </svg>
    </Link>
  );
}
