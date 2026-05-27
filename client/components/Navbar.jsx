'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('alsyedi-theme');
    if (saved === 'light') {
      document.body.classList.add('light-mode');
      setLight(true);
    }
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function toggleTheme() {
    const next = !light;
    document.body.classList.toggle('light-mode', next);
    localStorage.setItem('alsyedi-theme', next ? 'light' : 'dark');
    setLight(next);
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="logo" aria-label="Al Syedi Group home">
        <Logo />
      </Link>

      <ul className={`nav-links${open ? ' active' : ''}`}>
        <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li className="has-dropdown">
          <button>
            Services{' '}
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <ul className="dropdown">
            <DropdownItem href="/#services" title="Bulk Salt Supply" desc="Container-load Himalayan Pink, white &amp; black salt" />
            <DropdownItem href="/#private-label" title="Private Label" desc="Your brand, our salt — full packaging service" />
            <DropdownItem href="/#custom" title="Custom Grinds &amp; Blends" desc="Powder, fine, coarse, chunk — to your spec" />
            <DropdownItem href="/#lifestyle" title="Lamps, Bricks &amp; Spa" desc="Hand-carved decor &amp; halotherapy supplies" />
          </ul>
        </li>
        <li className="has-dropdown">
          <button>
            Company{' '}
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <ul className="dropdown">
            <DropdownItem href="/#about" title="About Al Syedi" desc="Our mine-to-market story since 1998" />
            <DropdownItem href="/#certifications" title="Certifications" desc="ISO, HACCP, BRC, Halal, Kosher &amp; more" />
            <DropdownItem href="/#markets" title="Global Markets" desc="42 countries served — and growing" />
            <DropdownItem href="/#reviews" title="Reviews" desc="What 320+ B2B clients say about us" />
            <DropdownItem href="/contact" title="Contact" desc="UK · US · Canada · UAE · Pakistan offices" />
          </ul>
        </li>
        <li><Link href="/products" onClick={() => setOpen(false)}>Products</Link></li>
        <li><Link href="/brands" onClick={() => setOpen(false)}>Collections</Link></li>
        <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>

      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {light ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
        <Link href="/contact" className="btn btn-gold">Request a Quote</Link>
        <button
          className={`menu-toggle${open ? ' active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}

function DropdownItem({ href, title, desc }) {
  return (
    <li>
      <Link href={href}>
        <span className="dropdown-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12,2 20,9 16,22 8,22 4,9" />
          </svg>
        </span>
        <span>
          <div className="dropdown-title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="dropdown-desc" dangerouslySetInnerHTML={{ __html: desc }} />
        </span>
      </Link>
    </li>
  );
}
