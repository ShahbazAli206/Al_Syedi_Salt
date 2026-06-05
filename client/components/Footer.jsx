'use client';
import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';

/* ── Newsletter ──────────────────────────────────────────── */
function NewsletterInline() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) setSent(true);
  }

  if (sent) return (
    <p className="ft-subscribed">Subscribed successfully!</p>
  );

  return (
    <form onSubmit={handleSubmit} className="ft-nl-form">
      <p className="ft-nl-desc">
        Market pricing trends, mine reports &amp;
        private-label tips — monthly to your inbox.
      </p>
      <div className="ft-nl-input-wrap">
        <span className="ft-nl-input-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/>
          </svg>
        </span>
        <input
          className="ft-nl-input"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="ft-nl-btn">
        Subscribe Now
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </form>
  );
}

/* ── Cert data ───────────────────────────────────────────── */
const CERTS = [
  { label: 'ISO',    sub: '22000',      bg: '#c62828' },
  { label: 'HACCP',  sub: 'Certified',  bg: '#2e7d32' },
  { label: 'BRC',    sub: 'AA+',        bg: '#1565c0' },
  { label: 'Halal',  sub: 'Certified',  bg: '#388e3c' },
  { label: 'Kosher', sub: 'Certified',  bg: '#00838f' },
  { label: 'FDA',    sub: 'Registered', bg: '#c62828' },
];

/* ── Footer ──────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="ft">

      {/* ── Top: 4-column grid ── */}
      <div className="ft-top">
        <div className="ft-grid">

          {/* 1 — Brand */}
          <div className="ft-brand">
            <div className="ft-logo-wrap"><Logo width={180} height={90} /></div>
            <p className="ft-tagline">HIMALAYAN SALT EXPERTS</p>
            <p className="ft-desc">
              Premium Himalayan Pink Salt — mined from the
              Khewra Salt Range. Trusted by 320+ B2B clients
              across 42+ countries.
            </p>
            <div className="ft-socials">
              <a href="#" className="ft-soc ft-soc-fb" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="ft-soc ft-soc-ig" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
              <a href="#" className="ft-soc ft-soc-li" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.36-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57z"/></svg>
              </a>
              <a href="https://wa.me/17809526108" target="_blank" rel="noopener noreferrer" className="ft-soc ft-soc-wa" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0-.4-.2-1.5-.5-2.8-1.7-1-.9-1.7-2.1-1.9-2.4-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.3.4-.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.2 4.6 1.8.8 2.5.8 3.4.7.5-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.7-.4zM12 22a10 10 0 01-5.3-1.5L2 22l1.6-4.5A10 10 0 1112 22z"/></svg>
              </a>
            </div>
          </div>

          {/* 2 — Quick Links */}
          <div className="ft-col">
            <h4 className="ft-col-title">QUICK LINKS</h4>
            <ul className="ft-links">
              <li><Link href="/#about">About Al Syedi</Link></li>
              <li><Link href="/#certifications">Certifications</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/products">Our Products</Link></li>
              <li><Link href="/contact">Request a Quote</Link></li>
            </ul>
          </div>

          {/* 3 — Contact */}
          <div className="ft-col">
            <h4 className="ft-col-title">GET IN TOUCH</h4>
            <div className="ft-contact-list">
              <div className="ft-ci">
                <span className="ft-ci-dot">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>Khewra Salt Range,<br/>District Jhelum, Punjab — Pakistan</span>
              </div>
              <div className="ft-ci">
                <span className="ft-ci-dot">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
                </span>
                <span>+92 323 538 3806</span>
              </div>
              <div className="ft-ci">
                <span className="ft-ci-dot">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
                </span>
                <span>sales@alsyedigroup.com</span>
              </div>
              <div className="ft-ci">
                <span className="ft-ci-dot">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </span>
                <span>Mon–Sat · 9 AM – 6 PM PKT</span>
              </div>
            </div>
          </div>

          {/* 4 — Newsletter card */}
          <div className="ft-nl-card">
            <div className="ft-nl-header">
              <span className="ft-nl-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/>
                </svg>
              </span>
              <h4 className="ft-nl-title">STAY UPDATED</h4>
            </div>
            <NewsletterInline />
          </div>

        </div>
      </div>

      {/* ── Bottom bar — dark with mountain ── */}
      <div className="ft-bar">
        <div className="ft-bar-mountain">
          <svg viewBox="0 0 600 160" preserveAspectRatio="xMinYMax slice">
            <defs>
              <linearGradient id="mg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d4786a"/>
                <stop offset="100%" stopColor="#a85040"/>
              </linearGradient>
              <linearGradient id="mg2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b85848"/>
                <stop offset="100%" stopColor="#7a3028"/>
              </linearGradient>
            </defs>
            <rect width="600" height="160" fill="#e8a090" opacity=".35"/>
            <path d="M0 100 L60 40 L100 65 L160 15 L210 55 L260 30 L310 70 L360 25 L420 60 L470 35 L530 75 L600 50 L600 160 L0 160Z" fill="url(#mg1)" opacity=".5"/>
            <path d="M0 120 L50 60 L90 85 L150 30 L200 70 L240 45 L300 80 L350 40 L410 75 L460 50 L520 90 L580 60 L600 70 L600 160 L0 160Z" fill="url(#mg2)" opacity=".6"/>
            <path d="M155 32 L160 15 L165 35" fill="rgba(255,255,255,.5)"/>
            <path d="M355 28 L360 25 L365 30" fill="rgba(255,255,255,.4)"/>
            <path d="M0 140 L80 110 L180 130 L280 105 L380 125 L480 100 L600 120 L600 160 L0 160Z" fill="#2c1810" opacity=".6"/>
          </svg>
        </div>
        <div className="ft-bar-inner">
          <div className="ft-bar-left">
            <p className="ft-bar-copy">© 2026 Al Syedi Group • مجموعة السيدي</p>
            <p className="ft-bar-sub">Pakistan • All Rights Reserved</p>
          </div>
          <div className="ft-bar-certs">
            {CERTS.map((c) => (
              <div className="ft-cert" key={c.label}>
                <span className="ft-cert-dot" style={{ background: c.bg }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
                  </svg>
                </span>
                <span className="ft-cert-lbl">
                  <strong>{c.label}</strong>
                  {c.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
