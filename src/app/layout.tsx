import "normalize.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "TuSV Stellichte e.V.",
  description:
    "TuSV Stellichte e.V. – Sportverein mit Fußball, Tischtennis, Fitness und mehr. Mitmachen, trainieren, Gemeinschaft erleben.",
  openGraph: {
    images: ["/images/openGraphLogo.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "TuSV Stellichte e.V.",
  url: "https://tusv-stellichte.de",
  logo: "https://tusv-stellichte.de/images/openGraphLogo.png",
  telephone: "+4951682289980",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stellichte 136",
    addressLocality: "Walsrode",
    postalCode: "29664",
    addressCountry: "DE",
  },
  sport: [
    "Fußball",
    "Tischtennis",
    "Badminton",
    "Fitness",
    "Turnen",
    "Tanzen",
    "Boule",
  ],
  sameAs: ["https://www.facebook.com/people/TuSV-Stellichte/100057358903767/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={manrope.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
