/// <reference lib="deno.ns" />

import { createClient } from "@supabase/supabase-js";
import { PDFDocument } from "pdf-lib";
import "@supabase/functions-js/edge-runtime.d.ts";

// TypeScript interface for complete payload
interface MembershipFormData {
  // Personal data
  geschlecht?: "männlich" | "weiblich" | "divers";
  vorname: string;
  nachname: string;
  strasse?: string;
  hausnummer?: string;
  plz?: string;
  ort?: string;
  geburtsdatum?: string;
  sparte?: string;
  telefonnummer?: string;
  email?: string;

  // Entry date
  eintrittsdatum?: string;

  // Member signature
  ort_mitglied?: string;
  datum_mitglied?: string;
  signature_member: string; // base64 PNG

  // Parent/Guardian 1
  ort_vertreter_1?: string;
  datum_vertreter_1?: string;
  signature_parent_1?: string | null;

  // Parent/Guardian 2
  ort_vertreter_2?: string;
  datum_vertreter_2?: string;
  signature_parent_2?: string | null;
}

// Validation function
function validatePayload(payload: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!payload.vorname?.trim()) errors.push("Vorname ist erforderlich");
  if (!payload.nachname?.trim()) errors.push("Nachname ist erforderlich");
  if (!payload.signature_member) {
    errors.push("Unterschrift des Mitglieds ist erforderlich");
  }

  // Validate signature format
  if (
    payload.signature_member &&
    !payload.signature_member.startsWith("data:image/png;base64,")
  ) {
    errors.push("Ungültiges Signaturformat (muss PNG sein)");
  }

  // Validate email format if provided
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push("Ungültige E-Mail-Adresse");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Helper to convert base64 to Uint8Array
function base64ToUint8Array(base64: string): Uint8Array {
  // Remove data URL prefix if present
  const base64Data = base64.includes(",") ? base64.split(",")[1] : base64;
  const binaryString = atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Helper to format dates in German format (DD.MM.YYYY)
function formatGermanDate(dateStr?: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE");
}

// Helper to sanitize filename for Supabase Storage
function sanitizeFilename(str: string): string {
  return str
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/Ä/g, "Ae")
    .replace(/Ö/g, "Oe")
    .replace(/Ü/g, "Ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/[^a-zA-Z0-9_.-]/g, ""); // Remove invalid characters
}

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Main handler
Deno.serve(async (req) => {
  const requestId = crypto.randomUUID();

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    console.log(`[${requestId}] Request received`, {
      method: req.method,
      url: req.url,
      contentType: req.headers.get("content-type"),
    });

    // Method check
    if (req.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: corsHeaders,
      });
    }

    // Content-Type check
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      console.error(`[${requestId}] Invalid Content-Type: ${contentType}`);
      return new Response(
        JSON.stringify({
          error: "Content-Type must be application/json",
          requestId,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Parse JSON with detailed error handling
    let payload: MembershipFormData;
    try {
      const rawBody = await req.text();
      console.log(`[${requestId}] Body size: ${rawBody.length} bytes`);

      if (rawBody.length === 0) {
        throw new Error("Request body is empty");
      }

      payload = JSON.parse(rawBody);
      console.log(
        `[${requestId}] Parsed payload fields:`,
        Object.keys(payload),
      );
    } catch (parseError) {
      console.error(`[${requestId}] JSON parse error:`, parseError);
      return new Response(
        JSON.stringify({
          error: "Invalid JSON in request body",
          details:
            parseError instanceof Error
              ? parseError.message
              : String(parseError),
          requestId,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate required fields
    const validation = validatePayload(payload);
    if (!validation.valid) {
      console.error(`[${requestId}] Validation failed:`, validation.errors);
      return new Response(
        JSON.stringify({
          error: "Validierung fehlgeschlagen",
          details: validation.errors,
          requestId,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    console.log(`[${requestId}] Starting PDF generation`);

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Load template from Supabase Storage
    console.log(`[${requestId}] Loading template from Storage`);
    const { data: templateFile, error: templateError } = await supabase.storage
      .from("templates")
      .download("Eintrittserklaerung.pdf");

    if (templateError || !templateFile) {
      console.error(`[${requestId}] Template error:`, templateError);
      throw new Error(
        `Failed to load template: ${templateError?.message || "File not found"}`,
      );
    }

    const templateBytes = await templateFile.arrayBuffer();
    console.log(
      `[${requestId}] Template loaded: ${templateBytes.byteLength} bytes`,
    );

    // Load PDF template
    const pdfDoc = await PDFDocument.load(templateBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();

    console.log(`[${requestId}] PDF page size: ${width}x${height}`);

    // Helper to draw text with safety check
    const drawText = (text: string, x: number, y: number, size = 11) => {
      if (text && text.trim()) {
        firstPage.drawText(text, { x, y, size });
      }
    };

    // NOTE: Coordinates adjusted based on actual PDF template
    // PDF coordinates start from bottom-left (y=0 at bottom)
    // A4 page is typically 595 x 842 points

    // Eintrittsdatum (after "ab dem")
    drawText(formatGermanDate(payload.eintrittsdatum), 395, 710, 10);

    // Geschlecht - mark the selected checkbox with an X
    if (payload.geschlecht === "männlich") {
      drawText("X", 165, 572, 10);
    } else if (payload.geschlecht === "weiblich") {
      drawText("X", 272, 572, 10);
    } else if (payload.geschlecht === "divers") {
      drawText("X", 377, 572, 10);
    }

    // Vorname (after "Vorname:")
    drawText(payload.vorname, 110, 547, 10);

    // Nachname (after "Nachname:" - same line, further right)
    drawText(payload.nachname, 365, 547, 10);

    // Straße, Hausnummer (after "Straße, Hausnummer:")
    drawText(
      `${payload.strasse || ""} ${payload.hausnummer || ""}`.trim(),
      173,
      520,
      10,
    );

    // PLZ, Ort (after "PLZ, Ort:" - same line, further right)
    drawText(`${payload.plz || ""} ${payload.ort || ""}`.trim(), 358, 520, 10);

    // Geburtsdatum (after "Geburtsdatum:")
    drawText(formatGermanDate(payload.geburtsdatum), 133, 493, 10);

    // Sparte (after "Sparte:" - same line, further right)
    drawText(payload.sparte || "", 350, 493, 10);

    // Telefonnummer (after "Telefonnummer (Festnetz/mobil):")
    drawText(payload.telefonnummer || "", 222, 466, 10);

    // E-Mail (after "E-Mail-Adresse:" - same line, further right)
    drawText(payload.email || "", 383, 466, 10);

    // Member Signature Section (bottom of page)
    // "Ort, Datum" and "Unterschrift" are side by side
    drawText(payload.ort_mitglied || "", 55, 145, 10);
    drawText(formatGermanDate(payload.datum_mitglied), 110, 145, 10);

    if (payload.signature_member) {
      const memberSig = await pdfDoc.embedPng(
        base64ToUint8Array(payload.signature_member),
      );
      firstPage.drawImage(memberSig, {
        x: 250,
        y: 140,
        width: 157,
        height: 35,
      });
    }

    // Parent/Guardian Signatures (below member signature)
    // "Ort, Datum" and "Unterschrift/Unterschriften der gesetzlichen Vertreter bei Minderjährigen"
    if (payload.signature_parent_1 || payload.signature_parent_2) {
      drawText(payload.ort_vertreter_1 || "", 55, 105, 10);
      drawText(formatGermanDate(payload.datum_vertreter_1), 110, 105, 10);

      if (payload.signature_parent_1) {
        const parent1Sig = await pdfDoc.embedPng(
          base64ToUint8Array(payload.signature_parent_1),
        );
        firstPage.drawImage(parent1Sig, {
          x: 250,
          y: 105,
          width: 120,
          height: 35,
        });
      }

      // Second parent signature (if exists) - place next to first
      if (payload.signature_parent_2) {
        const parent2Sig = await pdfDoc.embedPng(
          base64ToUint8Array(payload.signature_parent_2),
        );
        firstPage.drawImage(parent2Sig, {
          x: 430,
          y: 105,
          width: 120,
          height: 35,
        });
      }
    }

    // Save PDF
    const finalPdfBytes = await pdfDoc.save();
    console.log(`[${requestId}] PDF generated: ${finalPdfBytes.length} bytes`);

    // Generate unique filename (sanitize to avoid invalid characters)
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const sanitizedNachname = sanitizeFilename(payload.nachname);
    const sanitizedVorname = sanitizeFilename(payload.vorname);
    const filename = `Eintrittserklaerung_${sanitizedNachname}_${sanitizedVorname}_${timestamp}.pdf`;

    // Upload to Supabase Storage
    console.log(`[${requestId}] Uploading PDF to Storage: ${filename}`);
    const { error: uploadError } = await supabase.storage
      .from("generated-pdfs")
      .upload(filename, finalPdfBytes, {
        contentType: "application/pdf",
      });

    if (uploadError) {
      console.error(`[${requestId}] Upload error:`, uploadError);
      throw new Error(`Failed to upload PDF: ${uploadError.message}`);
    }

    // Generate public URL
    const { data: urlData } = supabase.storage
      .from("generated-pdfs")
      .getPublicUrl(filename);

    console.log(
      `[${requestId}] PDF uploaded successfully: ${urlData.publicUrl}`,
    );

    // Return success with download URL
    return new Response(
      JSON.stringify({
        success: true,
        filename,
        url: urlData.publicUrl,
        size: finalPdfBytes.length,
        requestId,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error(`[${requestId}] Unexpected error:`, err);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined,
        requestId,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
