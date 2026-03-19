const MAPS_HEADER_HEIGHT = 60;
const MAPS_FOOTER_HEIGHT = 12;

type MapEmbedProps = {
  src: string;
  title?: string;
};

export default function MapEmbed({
  src,
  title = "Standort Karte",
}: MapEmbedProps) {
  return (
    <div
      className="map-card"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <iframe
        src={src}
        className="map-embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        style={{
          position: "absolute",
          top: -MAPS_HEADER_HEIGHT,
          left: 0,
          width: "100%",
          height: `calc(100% + ${MAPS_HEADER_HEIGHT}px + ${MAPS_FOOTER_HEIGHT}px)`,
          border: 0,
        }}
      />
    </div>
  );
}
