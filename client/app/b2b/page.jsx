import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import SaltImage from '@/components/SaltImage';

export const metadata = { title: 'B2B — Al Syedi Group' };

export default function B2BPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="svc-hero svc-odd">
        <div className="svc-hero-inner">
          <div className="svc-hero-text">
            <div className="eyebrow">B2B Trade Hub</div>
            <h1 className="svc-hero-title">Your Global <span className="gold-word">Salt Partner</span></h1>
            <div className="svc-hero-rule" />
            <p className="svc-hero-desc">
              Transparent volume pricing, end-to-end salt solutions, and market insights — everything your B2B buying desk needs, direct from the Khewra mines.
            </p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-gold">
                Request a Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#pricing" className="btn btn-outline">
                View Pricing
              </Link>
            </div>
          </div>
          <div className="svc-hero-img" aria-hidden="true">
            <SaltImage kind="pink-granular" alt="Himalayan Pink Salt bulk supply" />
          </div>
        </div>

        {/* Stats strip */}
        <div className="svc-stats">
          {[
            { num: '320+',    lbl: 'Active B2B Clients' },
            { num: '42',      lbl: 'Countries Served' },
            { num: '18k+ MT', lbl: 'Tons Shipped / Yr' },
            { num: '24h',     lbl: 'Quote Turnaround' },
          ].map((s) => (
            <div className="svc-stat" key={s.lbl}>
              <span className="svc-stat-num">{s.num}</span>
              <span className="svc-stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── End-to-End B2B Salt Solutions ── */}
      <section className="section capabilities svc-even" id="services">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">What We Offer</div>
          <h2 className="section-title">End-to-End <span className="gold-word">B2B Salt Solutions</span></h2>
          <div className="title-rule"></div>
        </div>
        <div className="container">
          <div className="brands-grid" data-reveal-toggle-stagger>
            <B2BBrandCard id="bulk" icon="cubes" title="Bulk Salt Supply"
              desc="High-volume edible & industrial salt from our Khewra-source mines. Container loads (20ft / 40ft FCL) shipped worldwide. MOQ from 1 metric ton." />
            <B2BBrandCard id="private-label" icon="box" title="Private Label & Packaging"
              desc="Your brand, our salt. Custom retail jars, pouches, gift boxes & pallet packs. Full label design, barcoding & regulatory dossiers included." />
            <B2BBrandCard id="custom" icon="grind" title="Custom Grinds & Blends"
              desc="Fine, medium, coarse, granular, powder & chunk — tailored to your industry. Blended with herbs, citrus zest or mineral notes on request." />
            <B2BBrandCard id="lifestyle" icon="lamp" title="Salt Lamps, Bricks & Spa"
              desc="Hand-carved Himalayan salt lamps, polished salt tiles for halotherapy rooms, bath & spa salt blends — all manufactured to export standards." />
          </div>
          <div className="cap-features" data-reveal-toggle-stagger>
            {[
              { icon: 'mountain', label: 'Mine to Market',   sub: 'Full Traceability' },
              { icon: 'beaker',   label: 'Lab Tested',       sub: 'Every Batch' },
              { icon: 'ship',     label: 'Secure Shipping',  sub: 'Global Coverage' },
              { icon: 'support',  label: '24/7 B2B Support', sub: 'Dedicated Team' },
            ].map((f) => (
              <div className="cap-feature" key={f.label}>
                <div className="cap-feature-icon"><FeatureIcon name={f.icon} /></div>
                <div className="cap-feature-text">
                  <strong>{f.label}</strong>
                  <span>{f.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Volume Tiers FOB Karachi ── */}
      <section className="pricing svc-odd" id="pricing">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">Indicative Bulk Pricing</div>
          <h2 className="section-title">Volume Tiers <span className="gold-word">FOB Karachi</span></h2>
          <div className="title-rule"></div>
          <p style={{ color: 'var(--text-dim)', maxWidth: 640, margin: '0 auto', fontSize: '.95rem' }}>
            Standard Pink Salt Fine, FOB Port Qasim. Pricing valid for the current quarter — final quote depends on grade, packaging and destination.
          </p>
        </div>
        <div className="container">
          <div className="pricing-grid" data-reveal-toggle-stagger>
            <PriceTier
              name="Trial Order"
              vol="1 – 5 MT"
              price="$0.85"
              sub="per kg · LCL groupage"
              feats={['LCL shipping included', '25 kg PP bags', 'Standard packaging', 'Standard COA & MSDS']}
            />
            <PriceTier
              name="Standard"
              vol="5 – 20 MT"
              price="$0.72"
              sub="per kg · 20ft FCL"
              feats={['20ft FCL container', '25 / 50 kg bags', 'Customisable labels', 'Free samples · 5 SKU']}
            />
            <PriceTier
              featured
              name="Container Load"
              vol="20 – 40 MT"
              price="$0.58"
              sub="per kg · 40ft FCL"
              feats={['40ft FCL container', 'Mix-load up to 6 SKU', 'Private label included', 'Priority production slot', 'Dedicated account manager']}
            />
            <PriceTier
              name="Enterprise"
              vol="40+ MT / month"
              price="Bespoke"
              sub="contract pricing"
              feats={['Recurring monthly shipments', 'Locked-in quarterly rates', 'Full private label suite', 'Direct mine traceability', 'On-site QC support']}
            />
          </div>
        </div>
      </section>

      {/* ── B2B Salt Insights ── */}
      <section className="insights svc-even" id="insights">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">From Our Mine</div>
          <h2 className="section-title">B2B Salt <span className="gold-word">Insights</span></h2>
          <div className="title-rule"></div>
        </div>
        <div className="container">
          <div className="insights-grid" data-reveal-toggle-stagger>
            <InsightCard
              kind="pink-coarse"
              tag="Market Report"
              title="Himalayan Pink Salt Demand Hits Record High in EU"
              body="Q1 export volumes from Pakistan to EU markets grew 18% year-on-year, driven by retail private-label launches and halotherapy growth."
              meta="6 min read · April 2026"
            />
            <InsightCard
              kind="salt-brick"
              tag="Spec Sheet"
              title="A Buyer's Guide to Salt Bricks for Halotherapy Rooms"
              body="Everything UK and US wellness developers need to know about sourcing, dimensions, sealing, mortar, lighting and lifetime."
              meta="9 min read · March 2026"
            />
            <InsightCard
              kind="lamp-natural"
              tag="Quality"
              title="Why Some Pink Salt Lamps Sweat — and How to Prevent It"
              body="Hygroscopy, packaging, transit humidity, and the three packaging tweaks that have eliminated 99% of moisture complaints."
              meta="5 min read · February 2026"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="res-cta svc-odd">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to <span className="gold-word">Partner</span> With Us?</h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: 560, margin: '1rem auto 2rem', fontSize: '.95rem' }}>
            Whether you need bulk supply, private labelling, or custom grinds — our team responds within 24 business hours.
          </p>
          <Link href="/contact" className="btn btn-gold">
            Request a Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </>
  );
}

/* ── Helper Components ── */

function FeatureIcon({ name }) {
  const paths = {
    mountain: <><path d="M3 20l6-12 5 8 3-4 4 8z"/><circle cx="17" cy="6" r="2"/></>,
    beaker:   <><path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1l-6-11V3"/><path d="M6 16h12"/></>,
    box:      <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>,
    ship:     <><path d="M3 18l1.5-2L12 14l7.5 2L21 18M5 14V8h14v6M9 8V5h6v3"/><path d="M2 21h20"/></>,
    support:  <><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1v-7h3v5zM3 19a2 2 0 002 2h1v-7H3v5z"/></>,
  };
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      {paths[name]}
    </svg>
  );
}

function CapIcon({ name }) {
  const paths = {
    cubes: <><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></>,
    box:   <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>,
    grind: <><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></>,
    lamp:  <><path d="M9 21h6M12 17v4M8 17h8l-1-6H9z"/><circle cx="12" cy="7" r="3"/></>,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {paths[name] || <circle cx="12" cy="12" r="9" />}
    </svg>
  );
}

function B2BBrandCard({ id, title, desc, icon }) {
  return (
    <div className="brand-card" id={id}>
      <div className="brand-card-header">
        <div className="brand-card-icon">
          <CapIcon name={icon} />
        </div>
        <h3>{title}</h3>
      </div>
      <div className="brand-card-rule" />
      <p>{desc}</p>
    </div>
  );
}

function PriceTier({ name, vol, price, sub, feats, featured }) {
  return (
    <div className={`pricing-card${featured ? ' featured' : ''}`}>
      <div className="pricing-tier-name">{name}</div>
      <div className="pricing-tier-vol">{vol}</div>
      <div className="pricing-tier-price">
        {price}{price.startsWith('$') && <small> / kg</small>}
      </div>
      <div className="pricing-tier-sub">{sub}</div>
      <ul className="pricing-tier-feats">
        {feats.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <div className="pricing-tier-cta">
        <Link href="/contact">Get this quote</Link>
      </div>
    </div>
  );
}

function InsightCard({ kind, tag, title, body, meta }) {
  return (
    <article className="insight-card">
      <div className="insight-img"><SaltImage kind={kind} alt={title} /></div>
      <div className="insight-body">
        <div className="insight-tag">{tag}</div>
        <h4>{title}</h4>
        <p>{body}</p>
        <div className="insight-meta">{meta}</div>
      </div>
    </article>
  );
}
