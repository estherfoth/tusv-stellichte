export type EventSponsor = {
  eventSlug: string;
  name: string;
  logo: string;
};

export const eventSponsors: EventSponsor[] = [
  {
    eventSlug: "strassenlauf-2025",
    name: "Event Sponsor Platzhalter A",
    logo: "/images/event-sponsor-1.svg",
  },
  {
    eventSlug: "strassenlauf-2025",
    name: "Event Sponsor Platzhalter B",
    logo: "/images/event-sponsor-2.svg",
  },
  {
    eventSlug: "strassenlauf-2025",
    name: "Event Sponsor Platzhalter C",
    logo: "/images/event-sponsor-3.svg",
  },
  {
    eventSlug: "strassenlauf-2025",
    name: "Event Sponsor Platzhalter D",
    logo: "/images/event-sponsor-1.svg",
  },
];

export function getEventSponsors(eventSlug: string) {
  return eventSponsors.filter((sponsor) => sponsor.eventSlug === eventSlug);
}
