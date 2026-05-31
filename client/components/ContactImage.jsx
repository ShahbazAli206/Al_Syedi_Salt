'use client';

import { useState } from 'react';

// Tries your local file first (client/public/contact-hero.jpg).
// If it's not there yet, falls back to a hosted Himalayan-salt photo
// so an image always shows.
const FALLBACK = 'https://images.unsplash.com/photo-1584683596603-61fbfa842a47?w=700&q=85';

export default function ContactImage({ className = '' }) {
  const [src, setSrc] = useState('/contact-hero.jpg');
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Himalayan pink salt in a bowl"
      onError={() => { if (src !== FALLBACK) setSrc(FALLBACK); }}
      className={className}
      loading="lazy"
    />
  );
}
