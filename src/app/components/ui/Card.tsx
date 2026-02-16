import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type CardProps = {
  variant?: "default" | "course" | "kinderturnen";
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  icon?: ReactNode;
  link?: {
    href: string;
    text?: string;
    external?: boolean;
  };
  button?: {
    text: string;
    href: string;
    variant?: "primary" | "ghost";
  };
  children?: ReactNode;
};

export default function Card({
  variant = "default",
  title,
  description,
  image,
  icon,
  link,
  button,
  children,
}: CardProps) {
  const cardContent = (
    <div
      className={`card ${variant === "course" ? "card--course" : ""} ${
        variant === "kinderturnen" ? "card--kinderturnen" : ""
      }`}
    >
      {icon && <div className="card-icon">{icon}</div>}
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={400}
          height={300}
          className="card-image"
        />
      )}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {children}
      {button && (
        <Link href={button.href} className={`btn ${button.variant || "primary"}`}>
          {button.text}
        </Link>
      )}
      {link && !button && (
        <a
          href={link.href}
          className={link.external ? "card-external" : "card-cta"}
          {...(link.external && { target: "_blank", rel: "noreferrer" })}
        >
          {link.text || "Mehr erfahren →"}
        </a>
      )}
    </div>
  );

  if (link && !button) {
    return (
      <Link
        href={link.href}
        className={`card-link ${
          variant === "kinderturnen" ? "card-link--kinderturnen" : ""
        }`}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
