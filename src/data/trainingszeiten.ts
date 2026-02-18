import { ScheduleItem } from "@/app/components/ui/ScheduleDay";

export type WeekSchedule = {
  [key: string]: ScheduleItem[];
};

export const trainingszeiten: WeekSchedule = {
  Montag: [
    { time: "17:00 - 18:00", title: "Kinderturnen (4-6 Jahre)", location: "S" },
    { time: "18:00 - 19:00", title: "Kinderturnen (7-10 Jahre)", location: "S" },
    { time: "19:00 - 20:30", title: "Herrengymnastik", location: "G" },
    { time: "20:00 - 21:30", title: "Badminton", location: "S" },
  ],
  Dienstag: [
    { time: "17:30 - 18:30", title: "Yoga", location: "G" },
    { time: "18:00 - 19:30", title: "Fußball Jugend", location: "S" },
    { time: "19:00 - 20:00", title: "Step Aerobic", location: "G" },
    { time: "19:30 - 21:00", title: "Fußball Herren", location: "S" },
  ],
  Mittwoch: [
    { time: "16:00 - 17:00", title: "Kinderturnen (4-6 Jahre)", location: "H" },
    { time: "17:00 - 18:00", title: "Kinderturnen (7-10 Jahre)", location: "H" },
    { time: "18:00 - 19:00", title: "Pilates", location: "G" },
    { time: "19:00 - 20:30", title: "Damengymnastik", location: "G" },
    { time: "20:00 - 21:30", title: "Tischtennis", location: "S" },
  ],
  Donnerstag: [
    { time: "17:00 - 18:30", title: "Tango Argentino", location: "G" },
    { time: "18:00 - 19:30", title: "Fußball Jugend", location: "S" },
    { time: "19:00 - 20:00", title: "Bauch-Beine-Po", location: "G" },
    { time: "19:30 - 21:00", title: "Fußball Herren", location: "S" },
  ],
  Freitag: [
    { time: "17:00 - 18:00", title: "Energy Dance", location: "G" },
    { time: "18:00 - 19:00", title: "Seniorengymnastik", location: "G" },
    { time: "19:00 - 20:30", title: "Volleyball (Freizeit)", location: "S" },
  ],
  Samstag: [
    { time: "09:00 - 10:30", title: "Laufgruppe (Treffpunkt Sportplatz)", location: "S" },
    { time: "10:00 - 12:00", title: "Fußball Training & Spiele", location: "S" },
    { time: "14:00 - 16:00", title: "Tischtennis (Freies Spiel)", location: "S" },
  ],
  Sonntag: [
    { time: "09:00 - 11:00", title: "Radgruppe (Treffpunkt Sportplatz)", location: "S" },
    { time: "14:00 - 16:00", title: "Boule (bei gutem Wetter)", location: "S" },
  ],
};

export const locationLegend = {
  S: "Sporthalle Stellichte",
  H: "Grundschule Stellichte",
  G: "Gymnastikraum",
  T: "Tennishalle",
};
