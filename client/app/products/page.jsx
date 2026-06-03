import { Suspense } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import Chatbot from '@/components/Chatbot';
import SaltImage from '@/components/SaltImage';
import { PRODUCTS } from '@/data/catalog';

export const metadata = { title: 'Salt Products — Al Syedi Group' };

const HERO_FEATURES = [
  { icon: <><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 6v6l4 2"/></>, label: '100% Natural', sub: 'Pure & Unrefined' },
  { icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>, label: 'Direct from Mines', sub: 'Khewra, Pakistan' },
  { icon: <><path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/></>, label: 'Bulk Supply', sub: 'Global Shipping' },
  { icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>, label: 'B2B Wholesale', sub: 'Best Market Prices' },
];

const TRUST_STRIP = [
  { icon: <><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M8 12l3 3 5-5"/></>, label: '100% Natural', sub: 'Pure & Unrefined' },
  { icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>, label: 'Khewra Origin', sub: 'Direct from Mines' },
  { icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>, label: 'B2B Wholesale', sub: 'Best Market Prices' },
  { icon: <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>, label: 'Worldwide Shipping', sub: 'Fast & Reliable' },
];

export default async function ProductsPage() {
  const products = PRODUCTS;

  return (
    <>
      <Navbar />

      {/* ── Products Hero Header ── */}
      <section className="products-hero">
        <div className="products-hero-inner">
          <div className="products-hero-text">
            <h1 className="products-hero-title">Salt Products</h1>
            <div className="products-hero-rule" />
            <p className="products-hero-desc">
              Premium Himalayan Pink Salt in multiple grades and forms,
              sourced directly from the Khewra Salt Mines.
            </p>
            <div className="products-hero-features">
              {HERO_FEATURES.map((f) => (
                <div className="products-hero-feat" key={f.label}>
                  <div className="products-hero-feat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">{f.icon}</svg>
                  </div>
                  <div>
                    <strong>{f.label}</strong>
                    <span>{f.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="products-hero-img" aria-hidden="true">
            <SaltImage kind="pink-coarse" alt="Himalayan Pink Salt" />
          </div>
        </div>
      </section>

      {/* ── Catalogue + Grid ── */}
      <section className="section products-catalogue">
        <div className="container" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="eyebrow">Our Catalogue</div>
          <h2 className="section-title">22+ SKUs · 5 Categories · <span className="gold-word">One Trusted Source</span></h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: 620, margin: '.75rem auto 0', fontSize: '.95rem' }}>
            Wholesale pricing per kg / unit (indicative FOB Karachi). Container-load discounts available —
            contact our team for FOB / CIF quotations to your nearest port.
          </p>
        </div>
        <div className="container">
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-mute)' }}>Loading…</div>}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </section>

      {/* ── Bulk Quotation CTA ── */}
      <section className="prod-bulk">
        <div className="prod-bulk-img" aria-hidden="true">
          <SaltImage kind="bath-lavender" alt="" />
        </div>
        <div className="prod-bulk-inner container">
          <div className="prod-bulk-left">
            <h2 className="prod-bulk-title">Need a Bulk Quotation?</h2>
            <p className="prod-bulk-desc">
              Get the best wholesale prices for bulk orders.
              Contact us today for FOB &amp; CIF quotations.
            </p>
            <Link href="/contact" className="btn btn-gold prod-bulk-btn">
              Request a Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="prod-bulk-cards">
            {[
              { icon: <><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M12 12h.01"/></>, title: 'Low MOQ', sub: 'Flexible minimum order quantity' },
              { icon: <><path d="M12 2l3 6 6 1-4.5 4 1 6L12 16l-5.5 3 1-6L3 9l6-1z"/></>, title: 'Best Pricing', sub: 'Competitive rates for bulk orders' },
              { icon: <><path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/></>, title: 'Long Term Supply', sub: 'Reliable supply for your business' },
            ].map((c) => (
              <div className="prod-bulk-card" key={c.title}>
                <div className="prod-bulk-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{c.icon}</svg>
                </div>
                <strong>{c.title}</strong>
                <span>{c.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <div className="prod-trust-strip">
        {TRUST_STRIP.map((t) => (
          <div className="prod-trust-item" key={t.label}>
            <div className="prod-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{t.icon}</svg>
            </div>
            <div>
              <strong>{t.label}</strong>
              <span>{t.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <Footer />
      <Chatbot />
    </>
  );
}
