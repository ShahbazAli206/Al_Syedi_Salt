'use client';

import { useState } from 'react';

const palette = [
  ['#3a1e1c', '#1f1212', '#0a0807'],
  ['#4a2120', '#2a1414', '#0a0807'],
  ['#3d1a18', '#241010', '#0a0807'],
  ['#2e1816', '#1a0e0d', '#100808'],
];

function placeholderURI(label = 'AL SYEDI', idx = 0) {
  const p = palette[idx % palette.length];
  const text = (label || 'AL SYEDI').toUpperCase().slice(0, 20);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p[0]}"/>
        <stop offset="50%" stop-color="${p[1]}"/>
        <stop offset="100%" stop-color="${p[2]}"/>
      </linearGradient>
      <radialGradient id="r" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#e8a5a0" stop-opacity=".28"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
      <linearGradient id="c" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fbe9e7"/>
        <stop offset="100%" stop-color="#e08a83"/>
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <rect width="400" height="400" fill="url(#r)"/>
    <g transform="translate(140,130)" opacity=".85">
      <polygon points="60,8 100,80 76,80 60,56 44,80 20,80" fill="url(#c)"/>
      <polygon points="60,20 84,76 60,52 36,76" fill="#e08a83" opacity=".75"/>
      <circle cx="88" cy="22" r="3" fill="#fff" opacity=".9"/>
      <circle cx="32" cy="30" r="2" fill="#fff" opacity=".7"/>
    </g>
    <text x="200" y="290" text-anchor="middle" font-family="Inter,sans-serif"
          font-size="14" letter-spacing="4" fill="#e8a5a0" opacity=".9">${text}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

let counter = 0;

export default function SafeImage({ src, alt = '', ...rest }) {
  const [errored, setErrored] = useState(false);
  const [idx] = useState(() => counter++);
  const finalSrc = errored ? placeholderURI(alt, idx) : src;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={finalSrc}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      {...rest}
    />
  );
}
