type MapEmbedProps = {
  src: string;
  title?: string;
};

export default function MapEmbed({ src, title = "Standort Karte" }: MapEmbedProps) {
  return (
    <div className="map-card">
      <iframe
        src={src}
        className="map-embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
}
