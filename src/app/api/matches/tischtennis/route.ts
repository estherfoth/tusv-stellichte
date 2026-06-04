import ICAL from "ical.js";
import { NextResponse } from "next/server";

const ICS_URL =
  "https://www.mytischtennis.de/community/exportICSCalendar?teamIds=2977645";

function fixMojibake(str: string): string {
  return str
    .replace(/\u00c3\u00bc/g, "\u00fc") // ü
    .replace(/\u00c3\u00b6/g, "\u00f6") // ö
    .replace(/\u00c3\u00a4/g, "\u00e4") // ä
    .replace(/\u00c3\u009f/g, "\u00df") // ß
    .replace(/\u00c3\u0096/g, "\u00d6") // Ö
    .replace(/\u00c3\u0084/g, "\u00c4") // Ä
    .replace(/\u00c3\u009c/g, "\u00dc") // Ü
    .replace(/\u00c3\u009e/g, "\u00de")
    .replace(/\u00c3\u00bf/g, "\u00ff");
}

export async function GET() {
  const res = await fetch(ICS_URL, { next: { revalidate: 3600 } });
  const buffer = await res.arrayBuffer();
  const text = new TextDecoder("utf-8").decode(buffer);

  const jcal = ICAL.parse(text);
  const comp = new ICAL.Component(jcal);
  const vevents = comp.getAllSubcomponents("vevent");

  const TEAM_NAME = "TuSV Stellichte";

  const matches = vevents
    .map((vevent) => {
      const rawTitle =
        (vevent.getFirstPropertyValue("summary") as string) ?? "";
      const rawLocation =
        (vevent.getFirstPropertyValue("location") as string) ?? null;

      const title = fixMojibake(rawTitle);
      const location = rawLocation ? fixMojibake(rawLocation) : null;
      const isHome = title.startsWith(TEAM_NAME);
      const [home, away] = title.split(" vs ");

      const event = new ICAL.Event(vevent);

      return {
        home: home?.trim() ?? "",
        away: away?.trim() ?? "",
        isHome,
        start: event.startDate.toJSDate(),
        end: event.endDate.toJSDate(),
        location,
      };
    })
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  return NextResponse.json(matches);
}
