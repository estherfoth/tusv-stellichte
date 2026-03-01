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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={manrope.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
