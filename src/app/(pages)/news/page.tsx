import Hero from "@/app/components/ui/Hero";
import { newsSlides } from "@/data/news";
import Link from "next/link";
import Image from "next/image";

// TODO: In Phase 4+ durch Contentful getNews() ersetzen
export default function NewsPage() {
  return (
    <main>
      <Hero
        variant="page"
        eyebrow="Aktuelles"
        title="Neuigkeiten"
        description="Alle News und Termine rund um den TuSV Stellichte e.V."
      />

      <section className="section">
        <div className="container">
          <div className="news-grid">
            {newsSlides.map((article, index) => (
              <article key={index} className="news-card">
                {article.images && article.images.length > 0 && (
                  <Image
                    src={article.images[0].src}
                    alt={article.images[0].alt}
                    width={400}
                    height={300}
                    className="news-image"
                  />
                )}
                <p className="news-date">{article.date}</p>
                <h3>{article.title}</h3>
                <p>{article.content.substring(0, 150)}...</p>
                {/* TODO: Link zu /news/[slug] wenn Contentful integriert ist */}
                <span className="card-cta">Mehr lesen →</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
