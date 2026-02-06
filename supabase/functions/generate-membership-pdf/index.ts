/// <reference lib="deno.ns" />

import { createClient } from "@supabase/supabase-js";
import { PDFDocument } from "pdf-lib";
import "@supabase/functions-js/edge-runtime.d.ts";

function base64ToUint8Array(base64: string): Uint8Array {
  const cleaned = base64.replace(/^data:image\/png;base64,/, "");
  const binary = atob(cleaned);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes;
}

function formatGermanDate(iso?: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

Deno.serve(async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const {
      vorname,
      nachname,
      ort,
      datum,
      signature_member,
      signature_parent_1,
    } = await req.json();

    if (!vorname || !nachname || !signature_member) {
      return new Response("Missing required fields", { status: 400 });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: templateFile, error: templateError } = await supabase.storage
      .from("templates")
      .download("eintrittserklaerung.pdf");

    if (templateError || !templateFile) {
      return new Response("PDF template not found", { status: 500 });
    }

    const pdfDoc = await PDFDocument.load(await templateFile.arrayBuffer());

    const page = pdfDoc.getPages()[0];

    page.drawText(`${vorname} ${nachname}`, {
      x: 120,
      y: 650,
      size: 11,
    });

    page.drawText(ort ?? "", {
      x: 120,
      y: 620,
      size: 11,
    });

    page.drawText(formatGermanDate(datum), {
      x: 320,
      y: 620,
      size: 11,
    });

    const memberSig = await pdfDoc.embedPng(
      base64ToUint8Array(signature_member),
    );

    page.drawImage(memberSig, {
      x: 120,
      y: 570,
      width: 200,
      height: 80,
    });

    if (signature_parent_1) {
      const parentSig = await pdfDoc.embedPng(
        base64ToUint8Array(signature_parent_1),
      );

      page.drawImage(parentSig, {
        x: 120,
        y: 470,
        width: 200,
        height: 80,
      });
    }

    const finalPdfBytes = await pdfDoc.save();
    const filename = `eintritt_${crypto.randomUUID()}.pdf`;

    const { error: uploadError } = await supabase.storage
      .from("generated-pdfs")
      .upload(filename, finalPdfBytes, {
        contentType: "application/pdf",
      });

    if (uploadError) {
      return new Response("Failed to save PDF", { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, file: filename }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
    });
  }
});
