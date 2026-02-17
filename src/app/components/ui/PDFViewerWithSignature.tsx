"use client";

import { useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import SignatureCanvas from "react-signature-canvas";
import { PDFDocument } from "pdf-lib";
import styles from "./PDFViewerWithSignature.module.css";

// PDF.js Worker konfigurieren
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type PDFViewerWithSignatureProps = {
  pdfUrl: string;
  title: string;
};

export default function PDFViewerWithSignature({
  pdfUrl,
  title,
}: PDFViewerWithSignatureProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [showSignature, setShowSignature] = useState(false);
  const signatureRef = useRef<SignatureCanvas>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const clearSignature = () => {
    signatureRef.current?.clear();
  };

  const downloadSignedPDF = async () => {
    if (!signatureRef.current || signatureRef.current.isEmpty()) {
      alert("Bitte fügen Sie zuerst eine Unterschrift hinzu.");
      return;
    }

    try {
      // Original PDF laden
      const pdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(pdfBytes);

      // Unterschrift als PNG
      const signatureDataUrl = signatureRef.current.toDataURL("image/png");
      const signatureImageBytes = await fetch(signatureDataUrl).then((res) =>
        res.arrayBuffer()
      );
      const signatureImage = await pdfDoc.embedPng(signatureImageBytes);

      // Letzte Seite holen
      const pages = pdfDoc.getPages();
      const lastPage = pages[pages.length - 1];
      const { width, height } = lastPage.getSize();

      // Unterschrift einfügen (unten rechts)
      const signatureWidth = 150;
      const signatureHeight = 75;
      lastPage.drawImage(signatureImage, {
        x: width - signatureWidth - 50,
        y: 50,
        width: signatureWidth,
        height: signatureHeight,
      });

      // PDF speichern und herunterladen
      const signedPdfBytes = await pdfDoc.save();
      const blob = new Blob([signedPdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title}-signiert.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Fehler beim Signieren des PDFs:", error);
      alert("Fehler beim Signieren des PDFs. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <div className={styles.pdfViewer}>
      <div className={styles.pdfViewerHeader}>
        <h3>{title}</h3>
        <button
          className="btn primary"
          onClick={() => setShowSignature(!showSignature)}
        >
          {showSignature ? "Unterschrift ausblenden" : "Unterschreiben"}
        </button>
      </div>

      <div className={styles.pdfDocument}>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p>PDF wird geladen...</p>}
          error={<p>Fehler beim Laden des PDFs.</p>}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className={styles.pdfPage}
            />
          ))}
        </Document>
      </div>

      {showSignature && (
        <div className={styles.signatureSection}>
          <h4>Unterschrift hinzufügen</h4>
          <div className={styles.signatureCanvas}>
            <SignatureCanvas
              ref={signatureRef}
              canvasProps={{
                width: 400,
                height: 150,
                className: styles.signatureWrapper,
              }}
            />
          </div>
          <div className={styles.signatureActions}>
            <button
              type="button"
              onClick={clearSignature}
              className="btn ghost"
            >
              Unterschrift löschen
            </button>
            <button
              type="button"
              onClick={downloadSignedPDF}
              className="btn primary"
            >
              Signiertes PDF herunterladen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
