'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './Logo';

/* ============================================================
   Sitemap — every meaningful section on every page is here.
   ============================================================ */
const NAV = [
  { type: 'link', label: 'Home', href: '/' },

  {
    type: 'mega',
    label: 'Products',
    columns: [
      {
        title: 'By Category',
        items: [
          { href: '/products',                         icon: 'grid',    title: 'All Products',     desc: '22+ salt SKUs across 5 categories' },
          { href: '/products?category=edible',        icon: 'spoon',   title: 'Edible Salts',     desc: 'Pink, white &amp; black — fine to flake' },
          { href: '/products?category=bath',           icon: 'leaf',    title: 'Bath &amp; Spa',       desc: 'Therapeutic &amp; scented salt blends' },
          { href: '/products?category=lifestyle',      icon: 'lamp',    title: 'Lamps &amp; Decor',    desc: 'Hand-carved Himalayan lamps' },
          { href: '/products?category=construction',   icon: 'brick',   title: 'Bricks &amp; Tiles',   desc: 'Halotherapy &amp; construction grade' },
          { href: '/products?category=industrial',     icon: 'gear',    title: 'Industrial Salt',  desc: 'Lick, softener, de-icing, chemical' },
        ],
      },
      {
        title: 'Featured',
        items: [
          { href: '/products#collections', icon: 'crystal', title: 'Salt Collections', desc: 'Our 8 specialist ranges' },
          { href: '/products#varieties',   icon: 'sparkle', title: 'Salt Varieties',   desc: 'Browse 10+ salt types' },
          { href: '/products#grades',      icon: 'chart',   title: 'Grade Reference',  desc: 'Powder → chunk · grain sizes' },
          { href: '/products#packaging',   icon: 'box',     title: 'Packaging Options', desc: 'FIBC, PP, jute, retail jars' },
        ],
      },
    ],
  },

  {
    type: 'mega',
    label: 'Services',
    columns: [
      {
        title: 'What We Do',
        items: [
          { href: '/#services',      icon: 'cubes', title: 'Bulk Salt Supply',         desc: 'Container loads · FCL &amp; LCL' },
          { href: '/#private-label', icon: 'box',   title: 'Private Label',            desc: 'Your brand, our salt — full packaging' },
          { href: '/#custom',        icon: 'grind', title: 'Custom Grinds &amp; Blends',   desc: 'Powder, fine, coarse — to your spec' },
          { href: '/#lifestyle',     icon: 'lamp',  title: 'Lamps, Bricks &amp; Spa',      desc: 'Hand-carved decor &amp; halotherapy' },
        ],
      },
      {
        title: 'How We Work',
        items: [
          { href: '/#process',  icon: 'pickaxe', title: 'Mine-to-Market Process', desc: '7-step quality flow from mine to port' },
          { href: '/#promise',  icon: 'shield',  title: 'Quality Promise',        desc: 'What every Al Syedi shipment guarantees' },
          { href: '/#partners', icon: 'tag',     title: 'Retail Partners',        desc: 'Brands we supply across the world' },
          { href: '/#brands-labeled', icon: 'sparkle', title: 'Private Label Brands', desc: 'Selected names we&apos;ve manufactured for' },
        ],
      },
    ],
  },

  {
    type: 'mega',
    label: 'About Us',
    columns: [
      {
        title: 'Our Story',
        items: [
          { href: '/#about',       icon: 'mountain', title: 'About Al Syedi',         desc: 'Our mine-to-market story since 1998' },
          { href: '/#benefits',    icon: 'leaf',     title: 'Health Benefits',        desc: '84 trace minerals — pink salt advantage' },
          { href: '/#composition', icon: 'beaker',   title: 'Mineral Composition',    desc: 'Typical lab analysis · NaCl, CaSO₄, MgSO₄' },
          { href: '/#process',     icon: 'pickaxe',  title: 'The Khewra Range',       desc: 'Hand-mined · 2nd-largest salt mine on Earth' },
        ],
      },
      {
        title: 'Compliance',
        items: [
          { href: '/#certifications', icon: 'shield', title: 'Certifications',  desc: 'ISO, HACCP, BRC, Halal, Kosher &amp; more' },
          { href: '/#markets',        icon: 'globe',  title: 'Global Markets',  desc: '42 countries served — and growing' },
        ],
      },
    ],
  },

  {
    type: 'mega',
    label: 'B2B',
    columns: [
      {
        title: 'Commercial',
        items: [
          { href: '/#pricing',   icon: 'chart',  title: 'Bulk Pricing Tiers', desc: 'Trial · Standard · Container · Enterprise' },
          { href: '/#packaging', icon: 'box',    title: 'Packaging Options',  desc: '12 formats from FIBC to retail jar' },
          { href: '/#grades',    icon: 'grind',  title: 'Salt Grade Chart',   desc: 'Pick the right grain size for your line' },
          { href: '/contact',    icon: 'mail',   title: 'Request a Quote',    desc: 'First quote within 24 business hours' },
        ],
      },
      {
        title: 'Logistics',
        items: [
          { href: '/#markets',   icon: 'globe',   title: 'Shipping Markets',  desc: 'FCL / LCL to 42 countries' },
          { href: '/#promise',   icon: 'shield',  title: 'Quality Promise',   desc: 'COA · MSDS · COO with every shipment' },
        ],
      },
    ],
  },

  {
    type: 'mega',
    label: 'Resources',
    href: '/resources',
    columns: [
      {
        title: 'Resources',
        items: [
          { href: '/resources#benefits',       icon: 'leaf',    title: 'Health Benefits',      desc: 'Why pink Himalayan salt' },
          { href: '/resources#composition',    icon: 'beaker',  title: 'Mineral Composition',  desc: 'Trace-mineral breakdown' },
          { href: '/resources#grades',         icon: 'chart',   title: 'Salt Grade Chart',     desc: 'Grain sizes &amp; uses' },
          { href: '/resources#brands-labeled', icon: 'sparkle', title: 'Private Label Brands', desc: 'Brands we manufacture for' },
        ],
      },
    ],
  },

  { type: 'link', label: 'Contact', href: '/contact' },
];

/* ============================================================
   Navbar component
   ============================================================ */
export default function Navbar() {
  const [open, setOpen] = useState(false);            // mobile drawer
  const [activeMega, setActiveMega] = useState(null); // which mega is open inline on mobile
  const [activeDesktop, setActiveDesktop] = useState(null); // which desktop dropdown is open
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(true);

  // Init theme + scroll listener
  useEffect(() => {
    const saved = localStorage.getItem('alsyedi-theme');
    if (saved === 'dark') {
      document.body.classList.remove('light-mode');
      setLight(false);
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('alsyedi-theme', 'light');
      setLight(true);
    }
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) document.body.classList.add('no-scroll');
    else      document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  function toggleTheme() {
    const next = !light;
    document.body.classList.toggle('light-mode', next);
    localStorage.setItem('alsyedi-theme', next ? 'light' : 'dark');
    setLight(next);
  }

  function closeAll() {
    setOpen(false);
    setActiveMega(null);
    setActiveDesktop(null);
  }

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    if (activeDesktop === null) return;
    function handleClick(e) {
      if (!e.target.closest('.has-mega')) setActiveDesktop(null);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [activeDesktop]);

  return (
    <header className="site-header">
      {/* ===== Top bar stripe ===== */}
      <div className="top-bar">
        <div className="top-bar-left">
          <a href="mailto:sales@alsyedigroup.com" className="top-bar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
            </svg>
            sales@alsyedigroup.com
          </a>
          <a href="tel:+17809526108" className="top-bar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.37 1.6.7 2.36a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.76.33 1.55.57 2.36.7A2 2 0 0122 16.92z"/>
            </svg>
            +1 (780) 952-6108
          </a>
        </div>
        <div className="top-bar-right">
          <a href="#" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="X / Twitter">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.36-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57z"/>
            </svg>
          </a>
          <a href="https://wa.me/17809526108" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0-.4-.2-1.5-.5-2.8-1.7-1-.9-1.7-2.1-1.9-2.4-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.3.4-.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.2 4.6 1.8.8 2.5.8 3.4.7.5-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.7-.4zM12 22a10 10 0 01-5.3-1.5L2 22l1.6-4.5A10 10 0 1112 22z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ===== Main nav ===== */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="logo" aria-label="Al Syedi Group home" onClick={closeAll}>
          <Logo />
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-links desktop-nav">
          {NAV.map((item, i) => {
            if (item.type === 'link') {
              return (
                <li key={i}>
                  <Link href={item.href} onClick={closeAll}>{item.label}</Link>
                </li>
              );
            }
            return (
              <li
                key={i}
                className={`has-dropdown has-mega${activeDesktop === i ? ' mega-open' : ''}`}
                onMouseEnter={() => setActiveDesktop(i)}
                onMouseLeave={() => setActiveDesktop(null)}
              >
                {item.href ? (
                  <Link href={item.href} onClick={() => { setActiveDesktop(null); closeAll(); }}>
                    {item.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </Link>
                ) : (
                  <button onClick={() => setActiveDesktop(activeDesktop === i ? null : i)}>
                    {item.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                )}
                <div className="dropdown mega">
                  {item.columns.map((col, j) => (
                    <div className="mega-col" key={j}>
                      <div className="mega-col-title">{col.title}</div>
                      <ul>
                        {col.items.map((it, k) => (
                          <li key={k}>
                            <Link href={it.href}>
                              <span className="dropdown-icon"><MegaIcon name={it.icon} /></span>
                              <span>
                                <span className="dropdown-title" dangerouslySetInnerHTML={{ __html: it.title }} />
                                <span className="dropdown-desc"  dangerouslySetInnerHTML={{ __html: it.desc }} />
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          {/* Theme toggle */}
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

          <Link href="/contact" className="quote-btn">
            Request a Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </Link>
          <button
            className={`menu-toggle${open ? ' active' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ===== Mobile drawer (slide-in from right) ===== */}
      <aside className={`mobile-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mobile-drawer-head">
          <Logo width={110} height={56} />
          <button className="mobile-drawer-close" onClick={closeAll} aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <ul>
            {NAV.map((item, i) => {
              if (item.type === 'link') {
                return (
                  <li key={i}>
                    <Link href={item.href} onClick={closeAll} className="m-link">
                      {item.label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </Link>
                  </li>
                );
              }
              const isActive = activeMega === i;
              return (
                <li key={i} className={`m-group${isActive ? ' open' : ''}`}>
                  <button
                    className="m-link m-toggle"
                    onClick={() => setActiveMega(isActive ? null : i)}
                    aria-expanded={isActive}
                  >
                    {item.label}
                    <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className="m-sub">
                    {item.columns.map((col, j) => (
                      <div className="m-sub-col" key={j}>
                        <div className="m-sub-title">{col.title}</div>
                        <ul>
                          {col.items.map((it, k) => (
                            <li key={k}>
                              <Link href={it.href} onClick={closeAll}>
                                <span className="dropdown-icon"><MegaIcon name={it.icon} /></span>
                                <span className="dropdown-title" dangerouslySetInnerHTML={{ __html: it.title }} />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-drawer-foot">
          <Link href="/contact" className="btn btn-gold" onClick={closeAll}>
            Request a Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="mobile-contact-row">
            <a href="https://wa.me/17809526108" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0-.4-.2-1.5-.5-2.8-1.7-1-.9-1.7-2.1-1.9-2.4-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.3.4-.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.2 4.6 1.8.8 2.5.8 3.4.7.5-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.7-.4zM12 22a10 10 0 01-5.3-1.5L2 22l1.6-4.5A10 10 0 1112 22z" />
              </svg>
              WhatsApp
            </a>
            <a href="mailto:sales@alsyedigroup.com">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile drawer */}
      <div className={`mobile-backdrop${open ? ' active' : ''}`} onClick={closeAll} aria-hidden="true" />
    </header>
  );
}

/* ============================================================
   Icon set for dropdown items
   ============================================================ */
function MegaIcon({ name }) {
  const paths = {
    grid:     <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    spoon:    <><path d="M14 4a4 4 0 014 4c0 2.5-2 4-4 4v8h-2v-8c-2 0-4-1.5-4-4a4 4 0 014-4z"/></>,
    leaf:     <><path d="M11 20A7 7 0 014 13c0-6 8-11 16-11 0 8-5 16-9 18a7 7 0 01-7-7zM11 13l9-9"/></>,
    lamp:     <><path d="M9 21h6M12 17v4M8 17h8l-1-6H9z"/><circle cx="12" cy="7" r="3"/></>,
    brick:    <><rect x="3" y="5" width="18" height="4"/><rect x="3" y="11" width="18" height="4"/><rect x="3" y="17" width="18" height="4"/></>,
    gear:     <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>,
    crystal:  <><polygon points="12,2 20,9 16,22 8,22 4,9"/><path d="M12 2v20M4 9h16"/></>,
    sparkle:  <><path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></>,
    chart:    <><path d="M3 21V11M9 21V7M15 21V13M21 21V3"/></>,
    box:      <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>,
    cubes:    <><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></>,
    grind:    <><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></>,
    pickaxe:  <><path d="M3 21l8-8M11 13l5-5M14 4l6 6M18 8l-2-2"/></>,
    shield:   <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
    tag:      <><path d="M20.59 13.41L13.42 20.58a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5"/></>,
    mountain: <><path d="M3 20l6-12 5 8 3-4 4 8z"/><circle cx="17" cy="6" r="2"/></>,
    beaker:   <><path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1l-6-11V3"/><path d="M6 16h12"/></>,
    globe:    <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>,
    star:     <><path d="M12 2l3 6 6 1-4.5 4 1 6L12 16l-5.5 3 1-6L3 9l6-1z"/></>,
    help:     <><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/></>,
    book:     <><path d="M4 4h16v16H4z"/><path d="M4 8h16M8 4v16"/></>,
    mail:     <><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></>,
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {paths[name] || <circle cx="12" cy="12" r="9" />}
    </svg>
  );
}
