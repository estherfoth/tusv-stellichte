"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type HeroGridProps = {
  variant: "grid";
  eyebrow: string;
  title: string;
  leadText: string[];
  buttons?: {
    text: string;
    href: string;
    variant: "primary" | "ghost";
  }[];
  gallery?: {
    src: string;
    alt: string;
    caption: string;
  }[][];
};

type PageHeroProps = {
  variant: "page";
  eyebrow: string;
  title: string;
  description?: string;
};

type HeroProps = HeroGridProps | PageHeroProps;

const INTERVAL = 8000;
const FADE_DURATION = 400;

const ROTATIONS: number[][] = [
  [-3, 4, -1],
  [5, -7, 3],
  [-7, 1, -4],
];

export default function Hero(props: HeroProps) {
  const gallery = props.variant === "grid" ? (props.gallery ?? []) : [];
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fading, setFading] = useState(false);

  const navigate = (next: number) => {
    setFading(true);
    setTimeout(() => {
      setSlide(next);
      setFading(false);
    }, FADE_DURATION);
  };

  const prevSlide = () =>
    navigate((slide - 1 + gallery.length) % gallery.length);
  const nextSlide = () => navigate((slide + 1) % gallery.length);

  useEffect(() => {
    if (paused || gallery.length <= 1) return;
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setSlide((s) => (s + 1) % gallery.length);
        setFading(false);
      }, FADE_DURATION);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, gallery.length, slide]);

  if (props.variant === "page") {
    return (
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">{props.eyebrow}</p>
          <h1>{props.title}</h1>
          {props.description && <p>{props.description}</p>}
        </div>
      </section>
    );
  }

  const currentGroup = gallery[slide] ?? [];

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">{props.eyebrow}</p>
          <h1>{props.title}</h1>
          {props.leadText.map((text, index) => (
            <p key={index} className="lead">
              {text}
            </p>
          ))}
          {props.buttons && props.buttons.length > 0 && (
            <div className="hero-actions">
              {props.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`btn ${button.variant}`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          )}
        </div>
        {gallery.length > 0 && (
          <div className="hero-gallery-wrap">
            <div
              className={`hero-gallery${fading ? " hero-gallery--fading" : ""}`}
            >
              {currentGroup.map((photo, index) => (
                <figure
                  key={index}
                  className="hero-photo"
                  style={{
                    transform: `rotate(${(ROTATIONS[slide % ROTATIONS.length] ?? [])[index] ?? 0}deg)`,
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={360}
                    height={160}
                    className="hero-photo-img"
                  />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
            {gallery.length > 1 && (
              <div className="hero-gallery-controls">
                <button
                  className="carousel-btn"
                  onClick={prevSlide}
                  aria-label="Vorherige Gruppe"
                >
                  ‹
                </button>
                <div className="hero-gallery-progress">
                  <div
                    key={`${slide}-${paused}`}
                    className="hero-gallery-progress-bar"
                    style={{
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                </div>
                <button
                  className="carousel-btn"
                  onClick={() => setPaused((p) => !p)}
                  aria-label={paused ? "Fortsetzen" : "Pausieren"}
                >
                  {paused ? "▶" : "⏸"}
                </button>
                <button
                  className="carousel-btn"
                  onClick={nextSlide}
                  aria-label="Nächste Gruppe"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
