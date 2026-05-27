'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const html = document.documentElement;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      document
        .querySelectorAll('[data-reveal], [data-reveal-stagger], [data-reveal-toggle]')
        .forEach((el) => {
          el.classList.add('is-visible');
          el.classList.add('in-view');
        });
      return;
    }

    // ----- One-shot reveals (data-reveal, data-reveal-stagger) -----
    const oneShots = Array.from(
      document.querySelectorAll('[data-reveal], [data-reveal-stagger]')
    );
    const vh = window.innerHeight;
    const inViewNow = [];
    const offscreen = [];

    oneShots.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) inViewNow.push(el);
      else offscreen.push(el);
    });

    inViewNow.forEach((el) => el.classList.add('is-visible'));
    html.classList.add('reveals-on');

    const oneShotObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            oneShotObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    offscreen.forEach((el) => oneShotObserver.observe(el));

    // ----- Scroll-direction toggle reveals (data-reveal-toggle) -----
    // appears when scrolled into view going down, hides when leaving going up
    const toggles = Array.from(document.querySelectorAll('[data-reveal-toggle]'));
    toggles.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add('in-view');
    });

    const toggleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    );
    toggles.forEach((el) => toggleObserver.observe(el));

    return () => {
      oneShotObserver.disconnect();
      toggleObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
