'use client';

import { useEffect, useState } from 'react';

const IMAGES = [
  '/header_images/img1.png',
  '/header_images/img2.png',
  '/header_images/img3.png',
  '/header_images/img4.png',
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slideshow" aria-hidden="true">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}
