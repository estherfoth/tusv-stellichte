"use client";

import { useState } from "react";
import Image from "next/image";

type NewsSlide = {
  date: string;
  title: string;
  content: string;
  images?: {
    src: string;
    alt: string;
  }[];
};

type NewsCarouselProps = {
  slides: NewsSlide[];
};

export default function NewsCarousel({ slides }: NewsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="news-carousel" aria-label="Aktuelles im Karussell">
      <div className="news-carousel-track">
        {slides.map((slide, index) => (
          <article
            key={index}
            className={`news-slide ${index === currentSlide ? "is-active" : ""}`}
          >
            <p className="news-date">{slide.date}</p>
            <h3>{slide.title}</h3>
            {slide.images && slide.images.length > 0 && (
              <div className="news-slide-gallery">
                {slide.images.slice(0, 3).map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={150}
                    className="news-slide-image"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
            <p>{slide.content}</p>
          </article>
        ))}
      </div>
      <div className="news-carousel-controls">
        <button
          className="carousel-btn"
          onClick={prevSlide}
          aria-label="Vorheriger Beitrag"
        >
          ‹
        </button>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "is-active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Zu Beitrag ${index + 1} springen`}
            />
          ))}
        </div>
        <button
          className="carousel-btn"
          onClick={nextSlide}
          aria-label="Nächster Beitrag"
        >
          ›
        </button>
      </div>
    </div>
  );
}
