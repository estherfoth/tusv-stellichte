"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type RaceRoute = {
  name: string;
  imageSrc: string;
  imageAlt: string;
};

type RaceRouteGalleryProps = {
  routes: RaceRoute[];
};

export default function RaceRouteGallery({ routes }: RaceRouteGalleryProps) {
  const [activeRoute, setActiveRoute] = useState<RaceRoute | null>(null);

  useEffect(() => {
    if (!activeRoute) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveRoute(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeRoute]);

  return (
    <>
      <div className="race-route-grid" aria-label="Straßenlauf Streckenkarten">
        {routes.map((route) => (
          <article className="race-route-card" key={route.name}>
            <button
              type="button"
              className="race-route-trigger"
              onClick={() => setActiveRoute(route)}
              aria-label={`${route.name} in Vollansicht öffnen`}
            >
              <div className="race-route-image-wrap">
                <Image
                  src={route.imageSrc}
                  alt={route.imageAlt}
                  width={1600}
                  height={900}
                  className="race-route-image"
                />
              </div>
              <div className="race-route-content">
                <h3>{route.name}</h3>
                <p>Zum Vergrößern anklicken</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {activeRoute && (
        <div
          className="race-route-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeRoute.name}
          onClick={() => setActiveRoute(null)}
        >
          <div
            className="race-route-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="race-route-lightbox-close"
              onClick={() => setActiveRoute(null)}
              aria-label="Vollansicht schließen"
            >
              Schließen
            </button>
            <div className="race-route-lightbox-image-wrap">
              <Image
                src={activeRoute.imageSrc}
                alt={activeRoute.imageAlt}
                width={1600}
                height={900}
                className="race-route-lightbox-image"
                priority
              />
            </div>
            <p className="race-route-lightbox-title">{activeRoute.name}</p>
          </div>
        </div>
      )}
    </>
  );
}
