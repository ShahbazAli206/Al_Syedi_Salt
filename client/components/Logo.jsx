export default function Logo({ width = 140, height = 56 }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/web_logo_img.jpeg"
      alt="Al Syedi Salt Group"
      width={width}
      height={height}
      style={{ objectFit: 'contain', display: 'block' }}
    />
  );
}
