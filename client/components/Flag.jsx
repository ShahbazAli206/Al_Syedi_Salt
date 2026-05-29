// Tiny inline SVG flags — render identically on every browser/OS
// (Windows Chrome doesn't render regional-indicator emoji flag pairs natively).

export default function Flag({ code, width = 22, height = 16 }) {
  const inner = FLAGS[code] || FLAGS.gb;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 40"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        flexShrink: 0,
        borderRadius: 2,
        display: 'block',
        boxShadow: '0 0 0 1px rgba(0,0,0,.2)',
      }}
      aria-hidden="true"
    >
      {inner}
    </svg>
  );
}

const FLAGS = {
  gb: (
    <g>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="6" />
      <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="6" />
    </g>
  ),
  us: (
    <g>
      <rect width="60" height="40" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * 5.7} width="60" height="2.85" fill="#B22234" />
      ))}
      <rect width="24" height="20" fill="#3C3B6E" />
      {[3, 8, 13, 18].flatMap((x) =>
        [3, 8, 13, 18].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r=".9" fill="#fff" />
        ))
      )}
    </g>
  ),
  ca: (
    <g>
      <rect width="60" height="40" fill="#fff" />
      <rect width="15" height="40" fill="#D52B1E" />
      <rect x="45" width="15" height="40" fill="#D52B1E" />
      <path
        d="M30 8 L32 14 L38 13 L34 18 L38 21 L32 22 L31 28 L30 22 L29 22 L28 28 L27 22 L22 21 L26 18 L22 13 L28 14 Z"
        fill="#D52B1E"
      />
    </g>
  ),
  ae: (
    <g>
      <rect width="60" height="40" fill="#00732F" />
      <rect y="13.3" width="60" height="13.4" fill="#fff" />
      <rect y="26.7" width="60" height="13.3" fill="#000" />
      <rect width="15" height="40" fill="#FF0000" />
    </g>
  ),
  de: (
    <g>
      <rect width="60" height="40" fill="#000" />
      <rect y="13.3" width="60" height="13.4" fill="#DD0000" />
      <rect y="26.7" width="60" height="13.3" fill="#FFCE00" />
    </g>
  ),
  pk: (
    <g>
      <rect width="60" height="40" fill="#01411C" />
      <rect width="15" height="40" fill="#fff" />
      <circle cx="36" cy="20" r="9" fill="#fff" />
      <circle cx="38.5" cy="18.5" r="8" fill="#01411C" />
      <path
        d="M42 14 L43 18 L47 18 L44 20 L45 24 L42 22 L39 24 L40 20 L37 18 L41 18 Z"
        fill="#fff"
      />
    </g>
  ),
  au: (
    <g>
      <rect width="60" height="40" fill="#012169" />
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0 L30 20 M30 0 L0 20" stroke="#fff" strokeWidth="3" />
      <path d="M15 0 V20 M0 10 H30" stroke="#fff" strokeWidth="5" />
      <path d="M15 0 V20 M0 10 H30" stroke="#C8102E" strokeWidth="3" />
      <circle cx="49" cy="14" r="2" fill="#fff" />
      <circle cx="44" cy="22" r="1.5" fill="#fff" />
      <circle cx="52" cy="24" r="1.5" fill="#fff" />
      <circle cx="48" cy="30" r="2" fill="#fff" />
      <circle cx="55" cy="32" r="1.2" fill="#fff" />
    </g>
  ),
  sa: (
    <g>
      <rect width="60" height="40" fill="#006C35" />
      <text x="30" y="22" fontSize="7" fill="#fff" textAnchor="middle" fontFamily="Amiri,serif">
        ١٤
      </text>
      <line x1="14" y1="28" x2="46" y2="28" stroke="#fff" strokeWidth="1.5" />
    </g>
  ),
  fr: (
    <g>
      <rect width="20" height="40" fill="#002654" />
      <rect x="20" width="20" height="40" fill="#fff" />
      <rect x="40" width="20" height="40" fill="#CE1126" />
    </g>
  ),
  nl: (
    <g>
      <rect width="60" height="40" fill="#fff" />
      <rect width="60" height="13.3" fill="#AE1C28" />
      <rect y="26.7" width="60" height="13.3" fill="#21468B" />
    </g>
  ),
  jp: (
    <g>
      <rect width="60" height="40" fill="#fff" />
      <circle cx="30" cy="20" r="11" fill="#BC002D" />
    </g>
  ),
  sg: (
    <g>
      <rect width="60" height="40" fill="#fff" />
      <rect width="60" height="20" fill="#EF3340" />
      <circle cx="14" cy="10" r="6.5" fill="#fff" />
      <circle cx="17" cy="10" r="6.5" fill="#EF3340" />
    </g>
  ),
  za: (
    <g>
      <rect width="60" height="13.3" fill="#E03C31" />
      <rect y="13.3" width="60" height="13.4" fill="#fff" />
      <rect y="26.7" width="60" height="13.3" fill="#001489" />
      <polygon points="0,0 28,20 0,40" fill="#007749" />
      <polygon points="0,7 21,20 0,33" fill="#000" />
    </g>
  ),
};
