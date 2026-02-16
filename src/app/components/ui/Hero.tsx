import Image from "next/image";
import Link from "next/link";

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
  }[];
};

type PageHeroProps = {
  variant: "page";
  eyebrow: string;
  title: string;
  description?: string;
};

type HeroProps = HeroGridProps | PageHeroProps;

export default function Hero(props: HeroProps) {
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
        {props.gallery && props.gallery.length > 0 && (
          <div className="hero-gallery">
            {props.gallery.map((photo, index) => (
              <figure key={index} className="hero-photo">
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
        )}
      </div>
    </section>
  );
}
