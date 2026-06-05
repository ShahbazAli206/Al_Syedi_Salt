'use client';
import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';

/* ── Newsletter form ─────────────────────────────────────── */
function NewsletterInline() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) { setSent(true); }
  }

  if (sent) return (
    <p className="ft-subscribed">
      ✓ Subscribed — look out for your first issue!
    </p>
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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
      </button>
    </form>
  );
}

/* ── Main component ──────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="ft">

      {/* ─── Main row: Brand | Quick Links | Contact | Newsletter ─── */}
      <div className="ft-main">
        <div className="ft-grid">

          {/* 1 — Brand */}
          <div className="ft-brand">
            <div className="ft-logo-wrap"><Logo width={180} height={90} /></div>
            <p className="ft-tagline">Himalayan Salt Experts</p>
            <p className="ft-desc">
              Premium Himalayan Pink Salt — mined from the Khewra Salt Range.
              Trusted by 320+ B2B clients across 42+ countries.
            </p>
            <div className="ft-socials">
              <a href="#" className="ft-social" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="ft-social" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="ft-social" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.36-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57z"/>
                </svg>
              </a>
              <a href="https://wa.me/17809526108" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0-.4-.2-1.5-.5-2.8-1.7-1-.9-1.7-2.1-1.9-2.4-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.3.4-.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.2 4.6 1.8.8 2.5.8 3.4.7.5-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.7-.4zM12 22a10 10 0 01-5.3-1.5L2 22l1.6-4.5A10 10 0 1112 22z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 2 — Quick Links */}
          <div className="ft-col">
            <h4 className="ft-col-title">Quick Links</h4>
            <ul className="ft-links">
              <li><Link href="/about#about">About Al Syedi</Link></li>
              <li><Link href="/about#certifications">Certifications</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/products">Our Products</Link></li>
              <li><Link href="/contact">Request a Quote</Link></li>
            </ul>
          </div>

          {/* 3 — Contact */}
          <div className="ft-col">
            <h4 className="ft-col-title">Get in Touch</h4>
            <div className="ft-contact-list">
              <div className="ft-ci">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Khewra Salt Range, District Jhelum, Punjab — Pakistan</span>
              </div>
              <div className="ft-ci">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>+92 323 538 3806</span>
              </div>
              <div className="ft-ci">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
                </svg>
                <span>sales@alsyedigroup.com</span>
              </div>
              <div className="ft-ci">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                <span>Mon–Sat · 9 AM – 6 PM PKT</span>
              </div>
            </div>
          </div>

          {/* 4 — Newsletter card */}
          <div className="ft-nl-card">
            <div className="ft-nl-header">
              <span className="ft-nl-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/>
                </svg>
              </span>
              <h4 className="ft-nl-title">STAY UPDATED</h4>
            </div>
            <span className="ft-nl-plane" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </span>
            <NewsletterInline />
          </div>

        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div className="ft-bottom">
        <div className="ft-bottom-inner">
          <p>© 2026 Al Syedi Group &nbsp;•&nbsp; مجموعة السيدي — Pakistan &nbsp;•&nbsp; All Rights Reserved</p>
          <div className="ft-badges">
            <span>ISO 22000</span>
            <span>HACCP</span>
            <span>BRC AA+</span>
            <span>Halal</span>
            <span>Kosher</span>
            <span>FDA Registered</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
