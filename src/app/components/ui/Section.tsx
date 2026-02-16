import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  heading?: {
    title: string;
    description?: string;
    cta?: {
      text: string;
      href: string;
    };
  };
};

export default function Section({ children, className, heading }: SectionProps) {
  return (
    <section className={`section ${className || ""}`}>
      <div className="container">
        {heading && (
          <div className="section-head">
            <div>
              <h2>{heading.title}</h2>
              {heading.description && <p>{heading.description}</p>}
            </div>
            {heading.cta && (
              <a href={heading.cta.href} className="btn primary">
                {heading.cta.text}
              </a>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
