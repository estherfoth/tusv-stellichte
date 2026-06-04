import ICAL from "ical.js";
import { NextResponse } from "next/server";

const ICS_URL =
  "https://www.fussball.de/export.ics/-/id/011MIAHPVO000000VTVG0001VTR8C1K7";

export async function GET() {
  const res = await fetch(ICS_URL, { next: { revalidate: 3600 } });
  const text = await res.text();

  const jcal = ICAL.parse(text);
  const comp = new ICAL.Component(jcal);
  const vevents = comp.getAllSubcomponents("vevent");

  const now = new Date();

  const matches = vevents
    .map((vevent) => {
      const event = new ICAL.Event(vevent);
      return {
        title: event.summary,
        start: event.startDate.toJSDate(),
        end: event.endDate.toJSDate(),
        location: event.location ?? null,
      };
    })
    .filter((m) => m.start >= now)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  return NextResponse.json(matches);
}