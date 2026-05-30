'use client';

// SaltImage — tries a real photographic image first; falls back to a themed SVG
// illustration if the photo fails to load. Every "kind" maps to either a verified
// Unsplash photo URL (preferred) or a procedurally drawn salt-themed SVG.

import { useState } from 'react';

/* ============ Photo URLs (verified via Unsplash search) ============ */
// Photos chosen to look like the salt category they represent. Width 700, q=80.
const PHOTOS = {
  'pink-fine':        'https://images.unsplash.com/photo-1614759258004-39da973d3268?w=700&q=80',
  'pink-coarse':      'https://images.unsplash.com/photo-1584683596603-61fbfa842a47?w=700&q=80',
  'burst-crystal':    'https://images.unsplash.com/photo-1614163977904-62b4f8a8d898?w=1400&q=90',
  'pink-granular':    'https://images.unsplash.com/photo-1605705712924-ab42d6bb9de7?w=700&q=80',
  'pink-flakes':      'https://images.unsplash.com/photo-1645007489014-235185d38791?w=700&q=80',
  'crystal-display':  'https://images.unsplash.com/photo-1612708043745-7a5526b5f7c0?w=700&q=80',
  'white-refined':    'https://images.unsplash.com/photo-1606588347049-62bfd0c118d5?w=700&q=80',
  'black-salt':       'https://images.unsplash.com/photo-1660728684136-0cdf1a0c2e02?w=700&q=80',
  'sea-flakes':       'https://images.unsplash.com/photo-1632167004850-5b4666ae03cb?w=700&q=80',
  'bath-lavender':    'https://images.unsplash.com/photo-1550623685-2227f7bbef18?w=700&q=80',
  'bath-eucalyptus':  'https://images.unsplash.com/photo-1550407665-942ceef4bf37?w=700&q=80',
  'foot-soak':        'https://images.unsplash.com/photo-1634612831148-03a8550e1d52?w=700&q=80',
  'body-scrub':       'https://images.unsplash.com/photo-1630501439385-a55dada3f46b?w=700&q=80',
  'lamp-natural':     'https://images.unsplash.com/photo-1623241923490-5b2fd532828f?w=700&q=80',
  'lamp-geometric':   'https://images.unsplash.com/photo-1579101450453-c9fb7b8a490d?w=700&q=80',
  'lamp-usb':         'https://images.unsplash.com/photo-1623241923490-5b2fd532828f?w=700&q=80&fit=crop&crop=center',
  'candle-holder':    'https://images.unsplash.com/photo-1606791450998-d3859ac80814?w=700&q=80',
  'salt-brick':       'https://images.unsplash.com/photo-1598598218968-47720f64c360?w=700&q=80',
  'salt-tile':        'https://images.unsplash.com/photo-1620230706457-73fb9ad60ce7?w=700&q=80',
  'salt-slab':        'https://images.unsplash.com/photo-1604697976327-4f28ff459803?w=700&q=80',
  'animal-lick':      'https://images.unsplash.com/photo-1598598218968-47720f64c360?w=700&q=80&fit=crop&crop=top',
  'water-softener':   'https://images.unsplash.com/photo-1596226310268-f76b50d14a4a?w=700&q=80',
  'de-icing':         'https://images.unsplash.com/photo-1546608135-e5de34abc308?w=700&q=80',
  'chemical-grade':   'https://images.unsplash.com/photo-1597620151878-d76c8bc01b44?w=700&q=80',
};

/* ============ SVG fallback configuration ============ */
const BG = {
  dark:    { c1: '#1f1517', c2: '#3a2123', c3: '#0a0807' },
  darker:  { c1: '#15100f', c2: '#241718', c3: '#070405' },
  rose:    { c1: '#3a1a1e', c2: '#5a2a2a', c3: '#1a0a0d' },
  warm:    { c1: '#2e1c1a', c2: '#4a2a26', c3: '#0f0807' },
  spa:     { c1: '#1a2024', c2: '#2a3540', c3: '#0a1015' },
  natural: { c1: '#22171a', c2: '#3a2024', c3: '#0d0709' },
};

const SALT = {
  'pink-light': { hi: '#ffe3df', mid: '#f4c7c2', lo: '#e08a83' },
  'pink':       { hi: '#f4c7c2', mid: '#e08a83', lo: '#a84848' },
  'pink-deep':  { hi: '#e08a83', mid: '#a84848', lo: '#6e2e2e' },
  'white':      { hi: '#ffffff', mid: '#f0e8e2', lo: '#c9b7ad' },
  'cream':      { hi: '#faf2e8', mid: '#e2d2c0', lo: '#b09784' },
  'black':      { hi: '#5a4a4c', mid: '#2a1f21', lo: '#0a0708' },
  'grey':       { hi: '#d8cccc', mid: '#9a8a8a', lo: '#5a4d4d' },
  'mineral':    { hi: '#e8a5a0', mid: '#b25a55', lo: '#5e2828' },
};

const VARIANTS = {
  'pink-fine':       { bg: 'dark',   salt: 'pink-light', pattern: 'mound' },
  'pink-coarse':     { bg: 'dark',   salt: 'pink',       pattern: 'chunks' },
  'pink-granular':   { bg: 'dark',   salt: 'pink',       pattern: 'granules' },
  'pink-flakes':     { bg: 'dark',   salt: 'pink-light', pattern: 'flakes' },
  'crystal-display': { bg: 'dark',   salt: 'pink',       pattern: 'chunks', accent: 'sparkle' },
  'burst-crystal':   { bg: 'dark',   salt: 'pink',       pattern: 'chunks', accent: 'sparkle' },
  'white-refined':   { bg: 'darker', salt: 'white',      pattern: 'mound' },
  'black-salt':      { bg: 'darker', salt: 'black',      pattern: 'chunks', accent: 'smoke' },
  'sea-flakes':      { bg: 'spa',    salt: 'white',      pattern: 'flakes', accent: 'wave' },
  'bath-lavender':   { bg: 'rose',   salt: 'pink',       pattern: 'bowl', accent: 'lavender' },
  'bath-eucalyptus': { bg: 'spa',    salt: 'pink-light', pattern: 'bowl', accent: 'eucalyptus' },
  'foot-soak':       { bg: 'warm',   salt: 'pink',       pattern: 'bowl' },
  'body-scrub':      { bg: 'rose',   salt: 'pink',       pattern: 'jar' },
  'lamp-natural':    { bg: 'darker', salt: 'pink-deep',  pattern: 'lamp', accent: 'glow' },
  'lamp-geometric':  { bg: 'darker', salt: 'pink-deep',  pattern: 'pyramid', accent: 'glow' },
  'lamp-usb':        { bg: 'darker', salt: 'pink-deep',  pattern: 'lamp-small' },
  'candle-holder':   { bg: 'darker', salt: 'pink-deep',  pattern: 'candle' },
  'salt-brick':      { bg: 'natural', salt: 'pink',      pattern: 'brick' },
  'salt-tile':       { bg: 'natural', salt: 'pink-light', pattern: 'tile' },
  'salt-slab':       { bg: 'natural', salt: 'pink',      pattern: 'slab' },
  'animal-lick':     { bg: 'warm',   salt: 'mineral',    pattern: 'block' },
  'water-softener':  { bg: 'darker', salt: 'white',      pattern: 'pellets' },
  'de-icing':        { bg: 'spa',    salt: 'grey',       pattern: 'scatter' },
  'chemical-grade':  { bg: 'darker', salt: 'white',      pattern: 'cone' },
};

export default function SaltImage({ kind = 'pink-fine', alt = '', className = '', style }) {
  const [errored, setErrored] = useState(false);
  const photo = PHOTOS[kind];

  // Prefer real photo; fall back to themed SVG on load error.
  if (photo && !errored) {
    return (
      <div className={`salt-img ${className}`} style={style} role="img" aria-label={alt}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }

  return <SaltSvgFallback kind={kind} alt={alt} className={className} style={style} />;
}

/* ============ SVG Fallback Component ============ */

function SaltSvgFallback({ kind = 'pink-fine', alt = '', className = '', style }) {
  const config = VARIANTS[kind] || VARIANTS['pink-fine'];
  const bg = BG[config.bg] || BG.dark;
  const salt = SALT[config.salt] || SALT.pink;
  const uid = kind + '-' + Math.random().toString(36).slice(2, 7);

  return (
    <div className={`salt-img ${className}`} style={style} role="img" aria-label={alt}>
      <svg
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"  stopColor={bg.c1} />
            <stop offset="55%" stopColor={bg.c2} />
            <stop offset="100%" stopColor={bg.c3} />
          </linearGradient>
          <radialGradient id={`glow-${uid}`} cx="50%" cy="45%" r="55%">
            <stop offset="0%"  stopColor={salt.hi} stopOpacity=".25" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id={`salt-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"  stopColor={salt.hi} />
            <stop offset="50%" stopColor={salt.mid} />
            <stop offset="100%" stopColor={salt.lo} />
          </linearGradient>
          <linearGradient id={`salt2-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"  stopColor={salt.mid} />
            <stop offset="100%" stopColor={salt.lo} />
          </linearGradient>
        </defs>

        <rect width="600" height="600" fill={`url(#bg-${uid})`} />
        <rect width="600" height="600" fill={`url(#glow-${uid})`} />

        {renderPattern(config.pattern, uid, salt)}
        {config.accent && renderAccent(config.accent, uid, salt)}
      </svg>
    </div>
  );
}

/* ============ Pattern renderers ============ */

function renderPattern(name, uid, salt) {
  switch (name) {
    case 'mound':     return moundPattern(uid);
    case 'chunks':    return chunksPattern(uid);
    case 'granules':  return granulesPattern(uid);
    case 'flakes':    return flakesPattern(uid);
    case 'bowl':      return bowlPattern(uid, salt);
    case 'jar':       return jarPattern(uid, salt);
    case 'lamp':      return lampPattern(uid, salt);
    case 'pyramid':   return pyramidPattern(uid, salt);
    case 'lamp-small': return lampSmallPattern(uid, salt);
    case 'candle':    return candlePattern(uid, salt);
    case 'brick':     return brickPattern(uid);
    case 'tile':      return tilePattern(uid);
    case 'slab':      return slabPattern(uid);
    case 'block':     return blockPattern(uid, salt);
    case 'pellets':   return pelletsPattern(uid);
    case 'scatter':   return scatterPattern(uid);
    case 'cone':      return conePattern(uid, salt);
    default:          return moundPattern(uid);
  }
}

function moundPattern(uid) {
  return (
    <g>
      <ellipse cx="300" cy="430" rx="220" ry="40" fill="#000" opacity=".35" />
      <path d="M120 430 Q300 230 480 430 Z" fill={`url(#salt-${uid})`} opacity=".95" />
      <path d="M170 430 Q300 280 430 430 Z" fill={`url(#salt2-${uid})`} opacity=".55" />
      {Array.from({ length: 60 }).map((_, i) => {
        const x = 130 + Math.random() * 340;
        const y = 280 + Math.random() * 150;
        const r = 1 + Math.random() * 2.2;
        return <circle key={i} cx={x} cy={y} r={r} fill="#fff" opacity={.5 + Math.random() * .4} />;
      })}
      <circle cx="240" cy="320" r="3" fill="#fff" opacity=".9" />
      <circle cx="360" cy="340" r="2" fill="#fff" opacity=".7" />
      <circle cx="300" cy="290" r="2.5" fill="#fff" opacity=".85" />
    </g>
  );
}

function chunksPattern(uid) {
  const crystals = [
    { x: 200, y: 330, s: 90, r: 12 },
    { x: 320, y: 280, s: 120, r: -8 },
    { x: 410, y: 340, s: 80, r: 18 },
    { x: 160, y: 410, s: 70, r: -5 },
    { x: 380, y: 420, s: 95, r: 22 },
    { x: 260, y: 410, s: 75, r: -15 },
  ];
  return (
    <g>
      <ellipse cx="300" cy="470" rx="240" ry="35" fill="#000" opacity=".4" />
      {crystals.map((c, i) => (
        <g key={i} transform={`translate(${c.x},${c.y}) rotate(${c.r})`}>
          <polygon
            points={`-${c.s/2},${c.s*.35} 0,-${c.s*.5} ${c.s/2},${c.s*.35} ${c.s*.25},${c.s*.5} -${c.s*.25},${c.s*.5}`}
            fill={`url(#salt-${uid})`}
            opacity=".95"
          />
          <polygon
            points={`-${c.s*.35},${c.s*.2} 0,-${c.s*.35} ${c.s*.2},${c.s*.1}`}
            fill="#fff"
            opacity=".25"
          />
        </g>
      ))}
    </g>
  );
}

function granulesPattern(uid) {
  const grains = Array.from({ length: 28 }).map(() => ({
    x: 130 + Math.random() * 340,
    y: 280 + Math.random() * 160,
    r: 8 + Math.random() * 18,
  }));
  return (
    <g>
      <ellipse cx="300" cy="465" rx="230" ry="35" fill="#000" opacity=".4" />
      {grains.map((g, i) => (
        <g key={i} transform={`translate(${g.x},${g.y})`}>
          <circle r={g.r} fill={`url(#salt-${uid})`} opacity=".95" />
          <circle r={g.r * .5} cx={-g.r * .25} cy={-g.r * .25} fill="#fff" opacity=".2" />
        </g>
      ))}
    </g>
  );
}

function flakesPattern(uid) {
  const flakes = [
    { x: 200, y: 330, s: 70, r: 15 },
    { x: 310, y: 290, s: 90, r: -10 },
    { x: 410, y: 360, s: 80, r: 25 },
    { x: 170, y: 410, s: 65, r: -20 },
    { x: 380, y: 430, s: 85, r: 12 },
    { x: 270, y: 410, s: 75, r: -30 },
  ];
  return (
    <g>
      <ellipse cx="300" cy="475" rx="230" ry="30" fill="#000" opacity=".4" />
      {flakes.map((f, i) => (
        <g key={i} transform={`translate(${f.x},${f.y}) rotate(${f.r})`}>
          <polygon
            points={`-${f.s*.55},${f.s*.1} 0,-${f.s*.35} ${f.s*.55},${f.s*.1} ${f.s*.3},${f.s*.25} -${f.s*.3},${f.s*.25}`}
            fill={`url(#salt-${uid})`}
            opacity=".95"
          />
        </g>
      ))}
    </g>
  );
}

function bowlPattern(uid, salt) {
  return (
    <g>
      <ellipse cx="300" cy="490" rx="200" ry="20" fill="#000" opacity=".4" />
      <path d="M150 350 Q150 470 300 480 Q450 470 450 350 Z" fill={salt.lo} opacity=".9" />
      <ellipse cx="300" cy="350" rx="150" ry="20" fill={salt.mid} opacity=".95" />
      <ellipse cx="300" cy="348" rx="145" ry="16" fill={`url(#salt-${uid})`} />
    </g>
  );
}

function jarPattern(uid, salt) {
  return (
    <g>
      <ellipse cx="300" cy="500" rx="160" ry="15" fill="#000" opacity=".4" />
      <rect x="220" y="170" width="160" height="40" rx="6" fill={salt.lo} />
      <rect x="210" y="210" width="180" height="270" rx="14" fill="rgba(255,255,255,.06)" stroke={salt.mid} strokeWidth="2" />
      <rect x="215" y="260" width="170" height="215" rx="10" fill={`url(#salt-${uid})`} opacity=".92" />
    </g>
  );
}

function lampPattern(uid, salt) {
  return (
    <g>
      <ellipse cx="300" cy="300" rx="200" ry="180" fill={salt.mid} opacity=".18" />
      <rect x="220" y="460" width="160" height="30" rx="3" fill="#3a2418" />
      <path
        d="M260 460 Q230 360 250 280 Q280 200 300 180 Q320 200 350 280 Q370 360 340 460 Z"
        fill={`url(#salt-${uid})`}
        opacity=".95"
      />
      <ellipse cx="300" cy="370" rx="40" ry="60" fill={salt.hi} opacity=".4" />
      <circle cx="300" cy="180" r="6" fill="#fff" opacity=".5" />
    </g>
  );
}

function pyramidPattern(uid, salt) {
  return (
    <g>
      <ellipse cx="300" cy="300" rx="200" ry="180" fill={salt.mid} opacity=".15" />
      <rect x="220" y="460" width="160" height="28" rx="3" fill="#3a2418" />
      <polygon points="300,200 380,460 220,460" fill={`url(#salt-${uid})`} />
      <ellipse cx="300" cy="400" rx="55" ry="40" fill={salt.hi} opacity=".35" />
    </g>
  );
}

function lampSmallPattern(uid, salt) {
  return (
    <g>
      <ellipse cx="300" cy="320" rx="120" ry="100" fill={salt.mid} opacity=".15" />
      <path d="M480 460 Q420 470 380 460" stroke="#5a3a26" strokeWidth="4" fill="none" />
      <rect x="240" y="430" width="120" height="22" rx="3" fill="#3a2418" />
      <path
        d="M280 430 Q260 360 280 300 Q295 250 300 240 Q305 250 320 300 Q340 360 320 430 Z"
        fill={`url(#salt-${uid})`}
      />
      <ellipse cx="300" cy="360" rx="22" ry="36" fill={salt.hi} opacity=".4" />
    </g>
  );
}

function candlePattern(uid, salt) {
  return (
    <g>
      <ellipse cx="300" cy="490" rx="160" ry="18" fill="#000" opacity=".4" />
      <path
        d="M220 480 Q200 380 220 340 Q240 320 300 320 Q360 320 380 340 Q400 380 380 480 Z"
        fill={`url(#salt-${uid})`}
      />
      <ellipse cx="300" cy="340" rx="65" ry="14" fill="#1a0e0d" />
      <rect x="288" y="295" width="24" height="45" rx="2" fill="#f4ece6" />
      <path d="M300 260 Q294 275 297 285 Q300 290 303 285 Q306 275 300 260 Z" fill="#f5b339" />
      <ellipse cx="300" cy="275" rx="40" ry="22" fill="#f5b339" opacity=".15" />
    </g>
  );
}

function brickPattern(uid) {
  return (
    <g>
      <ellipse cx="300" cy="470" rx="220" ry="22" fill="#000" opacity=".4" />
      <path d="M140 240 L460 240 L490 220 L170 220 Z" fill={`url(#salt2-${uid})`} opacity=".8" />
      <path d="M460 240 L460 440 L490 420 L490 220 Z" fill={`url(#salt2-${uid})`} opacity=".55" />
      <rect x="140" y="240" width="320" height="200" fill={`url(#salt-${uid})`} />
    </g>
  );
}

function tilePattern(uid) {
  const tiles = [[120, 180], [310, 180], [120, 340], [310, 340]];
  return (
    <g>
      {tiles.map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <rect width="170" height="140" rx="4" fill={`url(#salt-${uid})`} />
          <rect width="170" height="140" rx="4" fill="none" stroke="rgba(0,0,0,.35)" strokeWidth="2" />
        </g>
      ))}
    </g>
  );
}

function slabPattern(uid) {
  return (
    <g>
      <ellipse cx="300" cy="445" rx="240" ry="20" fill="#000" opacity=".4" />
      <path d="M90 300 L510 300 L530 285 L110 285 Z" fill={`url(#salt2-${uid})`} opacity=".7" />
      <rect x="90" y="300" width="420" height="110" fill={`url(#salt-${uid})`} />
    </g>
  );
}

function blockPattern(uid, salt) {
  return (
    <g>
      <ellipse cx="300" cy="465" rx="180" ry="22" fill="#000" opacity=".4" />
      <path d="M180 250 L420 250 L450 230 L210 230 Z" fill={`url(#salt2-${uid})`} opacity=".7" />
      <rect x="180" y="250" width="240" height="190" fill={`url(#salt-${uid})`} />
      <circle cx="300" cy="270" r="10" fill="#1a0d0b" />
    </g>
  );
}

function pelletsPattern(uid) {
  const pellets = Array.from({ length: 26 }).map(() => ({
    x: 140 + Math.random() * 320,
    y: 290 + Math.random() * 160,
    r: 14 + Math.random() * 10,
  }));
  return (
    <g>
      <ellipse cx="300" cy="465" rx="220" ry="28" fill="#000" opacity=".4" />
      {pellets.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={p.r} fill={`url(#salt-${uid})`} />
          <circle cx={p.x - p.r * .3} cy={p.y - p.r * .3} r={p.r * .4} fill="#fff" opacity=".4" />
        </g>
      ))}
    </g>
  );
}

function scatterPattern(uid) {
  const bits = Array.from({ length: 60 }).map(() => ({
    x: 80 + Math.random() * 440,
    y: 280 + Math.random() * 200,
    s: 6 + Math.random() * 14,
    r: Math.random() * 60,
  }));
  return (
    <g>
      <rect x="0" y="430" width="600" height="170" fill="#1a1517" opacity=".55" />
      {bits.map((b, i) => (
        <g key={i} transform={`translate(${b.x},${b.y}) rotate(${b.r})`}>
          <polygon
            points={`-${b.s/2},${b.s*.3} 0,-${b.s*.45} ${b.s/2},${b.s*.3} ${b.s*.25},${b.s*.45} -${b.s*.25},${b.s*.45}`}
            fill={`url(#salt-${uid})`}
            opacity=".9"
          />
        </g>
      ))}
    </g>
  );
}

function conePattern(uid, salt) {
  return (
    <g>
      <ellipse cx="300" cy="465" rx="200" ry="25" fill="#000" opacity=".4" />
      <path d="M120 460 Q300 240 480 460 Z" fill={`url(#salt-${uid})`} />
      {Array.from({ length: 80 }).map((_, i) => {
        const x = 130 + Math.random() * 340;
        const y = 280 + Math.random() * 160;
        const r = 0.7 + Math.random() * 1.5;
        return <circle key={i} cx={x} cy={y} r={r} fill={salt.hi} opacity={.4 + Math.random() * .5} />;
      })}
    </g>
  );
}

/* ============ Accents ============ */
function renderAccent(name, uid, salt) {
  switch (name) {
    case 'glow':       return <ellipse cx="300" cy="300" rx="260" ry="220" fill={salt.hi} opacity=".05" />;
    case 'sparkle':    return sparkleAccent();
    case 'smoke':      return smokeAccent();
    case 'wave':       return waveAccent();
    case 'lavender':   return lavenderAccent();
    case 'eucalyptus': return eucalyptusAccent();
    default: return null;
  }
}

function sparkleAccent() {
  return (
    <g>
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 80 + Math.random() * 440;
        const y = 80 + Math.random() * 200;
        return (
          <g key={i} transform={`translate(${x},${y})`}>
            <path d="M0 -8 L1 -1 L8 0 L1 1 L0 8 L-1 1 L-8 0 L-1 -1 Z" fill="#fff" opacity={.5 + Math.random() * .4} />
          </g>
        );
      })}
    </g>
  );
}

function smokeAccent() {
  return (
    <g>
      <path d="M260 200 Q255 160 270 130 Q275 100 260 80" stroke="#aaa" strokeWidth="2" fill="none" opacity=".25" />
      <path d="M310 190 Q320 150 305 120 Q295 90 310 65" stroke="#aaa" strokeWidth="2" fill="none" opacity=".22" />
    </g>
  );
}

function waveAccent() {
  return (
    <g opacity=".25">
      <path d="M0 200 Q150 175 300 200 T600 200" stroke="#9bc4d0" strokeWidth="2" fill="none" />
      <path d="M0 230 Q150 210 300 230 T600 230" stroke="#9bc4d0" strokeWidth="1.5" fill="none" />
    </g>
  );
}

function lavenderAccent() {
  return (
    <g>
      {[{x:180,y:280},{x:440,y:290},{x:130,y:380},{x:490,y:380}].map((p, i) => (
        <g key={i} transform={`translate(${p.x},${p.y})`}>
          <line x1="0" y1="0" x2="0" y2="40" stroke="#5a7a3a" strokeWidth="2" />
          <ellipse cx="0" cy="-5" rx="3" ry="6" fill="#9b7ec4" />
          <ellipse cx="0" cy="-15" rx="3" ry="6" fill="#a98bd4" />
        </g>
      ))}
    </g>
  );
}

function eucalyptusAccent() {
  return (
    <g opacity=".7">
      {[{x:130,y:320},{x:480,y:320}].map((p, i) => (
        <g key={i} transform={`translate(${p.x},${p.y})`}>
          <line x1="0" y1="0" x2="0" y2="60" stroke="#6a8a5a" strokeWidth="1.5" />
          <ellipse cx="-8" cy="15" rx="6" ry="11" fill="#88b078" />
          <ellipse cx="8"  cy="35" rx="6" ry="11" fill="#a3c692" />
        </g>
      ))}
    </g>
  );
}

export { VARIANTS as SALT_VARIANTS, PHOTOS as SALT_PHOTOS };
