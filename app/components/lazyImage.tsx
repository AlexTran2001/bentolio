export function LazyImage({
  src,
  alt,
  width = "100%",
  height = "100%",
  style = {},
}: {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      style={{ objectFit: "cover", ...style }}
    />
  );
}
