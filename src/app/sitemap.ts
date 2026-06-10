import type { MetadataRoute } from "next";

const baseUrl = "https://tusv-stellichte.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/angebot",
    "/verein",
    "/vorstand",
    "/news",
    "/termine",
    "/trainingszeiten",
    "/strassenlauf",
    "/strassenlauf/registrierung",
    "/mitglied",
    "/eintrittserklaerung",
    "/satzung",
    "/kontakt",
    "/sparten/bauch-beine-po",
    "/sparten/boule",
    "/sparten/damengymnastik",
    "/sparten/eltern-kind-turnen",
    "/sparten/fitness",
    "/sparten/fussball",
    "/sparten/herrengymnastik",
    "/sparten/kinderturnen",
    "/sparten/seniorengymnastik",
    "/sparten/step-aerobic",
    "/sparten/tanzen",
    "/sparten/tischtennis",
    "/kurse/energy-dance",
    "/kurse/tango-argentino",
    "/kurse/trilo-chi",
    "/kurse/yoga",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
