type MapEmbedProps = {
  src: string;
  title?: string;
};

export default function MapEmbed({
  src,
  title = "Streckenkarte",
}: MapEmbedProps) {
  return (
    <iframe
      src={src}
      title={title}
      width="100%"
      height="540"
      frameBorder={0}
      scrolling="no"
      allowFullScreen
      loading="lazy"
      style={{ display: "block", border: 0 }}
    />
  );
}
