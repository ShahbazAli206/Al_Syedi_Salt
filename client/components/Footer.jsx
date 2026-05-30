'use client';
import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';

/* ── Cert badges ──────────────────────────────────────────── */
const CERTS = [
  {
    icon: <><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></>,
    name: 'ISO', sub: '22000',
  },
  {
    icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
    name: 'HACCP', sub: 'Certified',
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><path d="M8 12c0-2.2 1.8-4 4-4M16 12v4"/></>,
    name: 'Halal', sub: 'Certified',
  },
  {
    icon: <><path d="M12 2l3 6 6 1-4.5 4 1 6L12 16l-5.5 3 1-6L3 9l6-1z"/></>,
    name: 'Kosher', sub: 'Certified',
  },
];

/* ── Nav data ──────────────────────────────────────────────── */
const NAV_COLS = [
  {
    title: 'Products',
    links: [
      { href: '/products',                      label: 'All Products' },
      { href: '/products?category=edible',      label: 'Edible Salts' },
      { href: '/products?category=bath',        label: 'Bath & Spa' },
      { href: '/products?category=lifestyle',   label: 'Lamps & Decor' },
      { href: '/products?category=construction',label: 'Bricks & Tiles' },
      { href: '/products?category=industrial',  label: 'Industrial Salt' },
      { href: '/brands',                        label: 'Salt Collections' },
      { href: '/#varieties',                    label: 'Salt Varieties' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/#about',          label: 'About Al Syedi' },
      { href: '/#benefits',       label: 'Health Benefits' },
      { href: '/#composition',    label: 'Mineral Composition' },
      { href: '/#process',        label: 'Mine-to-Market Process' },
      { href: '/#certifications', label: 'Certifications' },
      { href: '/#markets',        label: 'Global Markets' },
      { href: '/#partners',       label: 'Retail Partners' },
      { href: '/#brands-labeled', label: 'Private Label Brands' },
    ],
  },
  {
    title: 'B2B Info',
    links: [
      { href: '/#pricing',   label: 'Bulk Pricing Tiers' },
      { href: '/#grades',    label: 'Salt Grade Chart' },
      { href: '/#packaging', label: 'Packaging Options' },
      { href: '/#promise',   label: 'Quality Promise' },
      { href: '/#reviews',   label: 'Google Reviews' },
      { href: '/#faq',       label: 'FAQ' },
      { href: '/#insights',  label: 'B2B Insights' },
      { href: '/contact',    label: 'Request a Quote' },
    ],
  },
];

/* ── Newsletter form ─────────────────────────────────────── */
function NewsletterInline() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) { setSent(true); }
  }

  if (sent) return (
    <p style={{ color: 'var(--rose-soft)', fontSize: '.9rem', marginTop: '.5rem' }}>
      ✓ Subscribed — look out for your first issue!
    </p>
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="footer-nl-input"
        type="email"
        placeholder="your@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="footer-nl-btn">
        Subscribe
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
        </svg>
      </button>
    </form>
  );
}

/* ── Main component ──────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="footer">

      {/* ─── Top body: brand + nav + image ─── */}
      <div className="footer-main">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand">
            <div className="logo-wrap"><Logo width={120} height={64} /></div>
            <div className="footer-tagline">Himalayan Salt Experts</div>
            <p>
              ISO 22000 &amp; HACCP certified manufacturer and exporter of premium Himalayan
              Pink Salt, edible salts, bath blends, salt lamps and industrial salts —
              trusted by 320+ B2B clients across 42 countries.
            </p>

            {/* Cert badges */}
            <div className="footer-certs">
              {CERTS.map((c) => (
                <div className="footer-cert" key={c.name}>
                  <div className="footer-cert-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {c.icon}
                    </svg>
                  </div>
                  <div className="footer-cert-text">
                    <strong>{c.name}</strong>
                    {c.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="footer-social-lbl">Follow Us</div>
            <div className="socials">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.36-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57z"/>
                </svg>
              </a>
              <a href="https://wa.me/923235383806" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0-.4-.2-1.5-.5-2.8-1.7-1-.9-1.7-2.1-1.9-2.4-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.3.4-.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.2 4.6 1.8.8 2.5.8 3.4.7.5-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.7-.4zM12 22a10 10 0 01-5.3-1.5L2 22l1.6-4.5A10 10 0 1112 22z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <div key={col.title}>
              <div className="footer-nav-title">{col.title}</div>
              <ul className="footer-links">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Decorative salt image */}
          <div className="footer-decor">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1584683596603-61fbfa842a47?w=700&q=85"
              alt="Himalayan Pink Salt"
              className="footer-decor-img"
            />
          </div>
        </div>

        <hr className="footer-divider" />
      </div>

      {/* ─── Strip: Head Office | Newsletter | Global Reach ─── */}
      <div className="footer-strip">
        <div className="footer-strip-grid">

          {/* Head Office */}
          <div className="footer-panel">
            <div className="footer-panel-hd">
              <div className="footer-panel-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="footer-panel-title">Head Office</span>
            </div>
            <div className="footer-ci">
              <div className="footer-ci-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>Khewra Salt Range Office,<br />District Jhelum, Punjab — Pakistan</div>
            </div>
            <div className="footer-ci">
              <div className="footer-ci-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>+92 323 538 3806 (WhatsApp)</div>
            </div>
            <div className="footer-ci">
              <div className="footer-ci-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
                </svg>
              </div>
              <div>sales@alsyedigroup.com</div>
            </div>
            <div className="footer-ci">
              <div className="footer-ci-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>Mon–Sat · 9 AM – 6 PM PKT</div>
            </div>
          </div>

          {/* B2B Newsletter */}
          <div className="footer-panel">
            <div className="footer-panel-hd">
              <div className="footer-panel-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
                </svg>
              </div>
              <span className="footer-panel-title">B2B Salt Insights</span>
            </div>
            <p className="footer-nl-desc">
              Mine reports, market pricing trends &amp; private label tips — monthly newsletter to your inbox.
            </p>
            <NewsletterInline />
          </div>

          {/* Global Reach */}
          <div className="footer-panel footer-global">
            <div className="footer-panel-hd">
              <div className="footer-panel-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>
                </svg>
              </div>
            </div>
            {/* World map background */}
            <div className="footer-global-map">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" alt="" />
            </div>
            <div className="footer-global-lbl">Global Reach</div>
            <span className="footer-global-num">42+ Countries</span>
            <span className="footer-global-num">320+ B2B Clients</span>
          </div>

        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div className="footer-bottom">
        <p>© 2026 Al Syedi Group &nbsp;•&nbsp; مجموعة السيدي — Pakistan &nbsp;•&nbsp; All Rights Reserved</p>
        <div className="footer-badges">
          <span>ISO 22000</span>
          <span>HACCP</span>
          <span>BRC AA+</span>
          <span>Halal</span>
          <span>Kosher</span>
          <span>FDA Registered</span>
        </div>
      </div>

    </footer>
  );
}
