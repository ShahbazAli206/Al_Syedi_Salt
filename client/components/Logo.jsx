export default function Logo({ width = 132, height = 60 }) {
  const id = `asgrad-${Math.random().toString(36).slice(2, 8)}`;
  const id2 = `asgrad2-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <svg width={width} height={height} viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4c7c2" />
          <stop offset="45%" stopColor="#e08a83" />
          <stop offset="100%" stopColor="#a84848" />
        </linearGradient>
        <linearGradient id={id2} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fbe9e7" />
          <stop offset="100%" stopColor="#e08a83" />
        </linearGradient>
      </defs>

      {/* Salt-crystal mountain mark */}
      <g transform="translate(10,12)">
        <polygon
          points="30,4 50,40 38,40 30,28 22,40 10,40"
          fill={`url(#${id2})`}
          opacity="0.95"
        />
        <polygon
          points="30,12 42,38 30,26 18,38"
          fill={`url(#${id})`}
        />
        {/* Sparkle */}
        <circle cx="44" cy="14" r="1.6" fill="#fff" opacity=".9" />
        <circle cx="16" cy="18" r="1.2" fill="#fff" opacity=".7" />
        <path
          d="M30 50 Q15 55 10 65 M30 50 Q45 55 50 65"
          stroke={`url(#${id})`}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          opacity=".8"
        />
      </g>

      {/* AL SYEDI wordmark */}
      <text
        x="78"
        y="42"
        fontFamily="Playfair Display, serif"
        fontSize="26"
        fontWeight="700"
        fill={`url(#${id})`}
        letterSpacing="2"
      >
        AL SYEDI
      </text>

      {/* GROUP — small tracking line */}
      <text
        x="78"
        y="62"
        fontFamily="Inter, sans-serif"
        fontSize="9"
        fontWeight="600"
        letterSpacing="7"
        fill={`url(#${id})`}
      >
        SALT GROUP
      </text>

      {/* Arabic line */}
      <text
        x="78"
        y="84"
        fontFamily="Amiri, serif"
        fontSize="14"
        fontWeight="700"
        fill={`url(#${id})`}
        opacity=".85"
      >
        مجموعة السيدي
      </text>
    </svg>
  );
}
