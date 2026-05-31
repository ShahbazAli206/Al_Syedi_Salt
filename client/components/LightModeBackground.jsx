'use client';

import { useEffect, useState } from 'react';

const PARTICLES = [
  { left: '4%',  size: 5, dur: 22, delay: 0  },
  { left: '10%', size: 4, dur: 28, delay: 5  },
  { left: '17%', size: 7, dur: 18, delay: 9  },
  { left: '24%', size: 4, dur: 32, delay: 2  },
  { left: '31%', size: 6, dur: 24, delay: 7  },
  { left: '38%', size: 4, dur: 20, delay: 13 },
  { left: '45%', size: 5, dur: 27, delay: 3  },
  { left: '52%', size: 7, dur: 22, delay: 10 },
  { left: '59%', size: 4, dur: 25, delay: 6  },
  { left: '65%', size: 6, dur: 19, delay: 16 },
  { left: '72%', size: 4, dur: 30, delay: 8  },
  { left: '78%', size: 5, dur: 23, delay: 14 },
  { left: '84%', size: 7, dur: 17, delay: 1  },
  { left: '90%', size: 4, dur: 26, delay: 11 },
  { left: '96%', size: 6, dur: 21, delay: 18 },
  { left: '14%', size: 5, dur: 29, delay: 20 },
  { left: '35%', size: 4, dur: 24, delay: 22 },
  { left: '55%', size: 6, dur: 20, delay: 15 },
  { left: '76%', size: 4, dur: 33, delay: 12 },
  { left: '48%', size: 5, dur: 26, delay: 24 },
];

export default function LightModeBackground() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sync = () => setActive(document.body.classList.contains('light-mode'));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  if (!active) return null;

  return (
    <>
      <div className="lm-aurora" aria-hidden="true" />
      <div className="lm-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="lm-particle"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
