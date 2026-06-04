import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import SaltImage from '@/components/SaltImage';

export const metadata = { title: 'Services — Al Syedi Group' };

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="svc-hero">
        <div className="svc-hero-inner">
          <div className="svc-hero-text">
            <div className="eyebrow">Our Services</div>
            <h1 className="svc-hero-title">End-to-End <span className="gold-word">B2B Salt Solutions</span></h1>
            <div className="svc-hero-rule" />
            <p className="svc-hero-desc">
              From bulk container loads to private-label retail packaging — Al Syedi Group handles every step of your salt supply chain, direct from the Khewra mines.
            </p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-gold">
                Request a Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/products" className="btn btn-outline">
                View Products
              </Link>
            </div>
          </div>
          <div className="svc-hero-img" aria-hidden="true">
            <SaltImage kind="pink-coarse" alt="Salt supply" />
          </div>
        </div>

        {/* Stats strip */}
        <div className="svc-stats">
          {[
            { num: '25+',    lbl: 'Years Experience' },
            { num: '42+',    lbl: 'Countries Served' },
            { num: '320+',   lbl: 'B2B Clients' },
            { num: '18K+ MT',lbl: 'Shipped Annually' },
          ].map((s) => (
            <div className="svc-stat" key={s.lbl}>
              <span className="svc-stat-num">{s.num}</span>
              <span className="svc-stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="section capabilities" id="services">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow">What We Offer</div>
          <h2 className="section-title">Four Core <span className="gold-word">Service Areas</span></h2>
          <div className="title-rule"></div>
        </div>
        <div className="container">
          <div className="cap-grid">
            <SvcCapCard id="bulk" icon="cubes" title="Bulk Salt Supply"
              desc="High-volume edible & industrial salt from our Khewra-source mines. Container loads (20ft / 40ft FCL) shipped worldwide. MOQ from 1 metric ton." />
            <SvcCapCard id="private-label" icon="box" title="Private Label & Packaging"
              desc="Your brand, our salt. Custom retail jars, pouches, gift boxes & pallet packs. Full label design, barcoding & regulatory dossiers included." />
            <SvcCapCard id="custom" icon="grind" title="Custom Grinds & Blends"
              desc="Fine, medium, coarse, granular, powder & chunk — tailored to your industry. Blended with herbs, citrus zest or mineral notes on request." />
            <SvcCapCard id="lifestyle" icon="lamp" title="Salt Lamps, Bricks & Spa"
              desc="Hand-carved Himalayan salt lamps, polished salt tiles for halotherapy rooms, bath & spa salt blends — all manufactured to export standards." />
          </div>
          <div className="cap-features">
            {[
              { icon: 'mountain', label: 'Mine to Market',   sub: 'Full Traceability' },
              { icon: 'beaker',   label: 'Lab Tested',       sub: 'Every Batch' },
              { icon: 'ship',     label: 'Secure Shipping',  sub: 'Global Coverage' },
              { icon: 'support',  label: '24/7 B2B Support', sub: 'Dedicated Team' },
            ].map((f) => (
              <div className="cap-feature" key={f.label}>
                <div className="cap-feature-icon"><SvcFeatureIcon name={f.icon} /></div>
                <div className="cap-feature-text">
                  <strong>{f.label}</strong>
                  <span>{f.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mine-to-Market Process ── */}
      <section className="process" id="process">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Our Mine-to-Market Process</div>
          <h2 className="section-title">From the <span className="gold-word">Khewra Range</span> to Your Warehouse</h2>
        </div>
        <div className="container">
          <div className="process-steps">
            {[
              { num: '01', line1: 'Hand',       line2: 'Mining',     icon: 'pickaxe' },
              { num: '02', line1: 'Sorting &',  line2: 'Grading',    icon: 'sort' },
              { num: '03', line1: 'Crushing &', line2: 'Milling',    icon: 'mill' },
              { num: '04', line1: 'Lab',         line2: 'Testing',   icon: 'beaker' },
              { num: '05', line1: 'Custom',      line2: 'Packaging', icon: 'box' },
              { num: '06', line1: 'Container',   line2: 'Loading',   icon: 'container' },
              { num: '07', line1: 'Global',      line2: 'Delivery',  icon: 'ship' },
            ].map((s) => (
              <div className="step" key={s.num}>
                <span className="step-num">{s.num}</span>
                <div className="step-icon"><SvcProcessIcon name={s.icon} /></div>
                <div className="step-label">
                  <span>{s.line1}<br/></span>
                  <span>{s.line2}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="process-stats">
            {[
              { num: '25+',     lbl: 'Years of Expertise' },
              { num: '18K+ MT', lbl: 'Shipped Annually' },
              { num: '42+',     lbl: 'Countries Served' },
              { num: '320+',    lbl: 'Active B2B Clients' },
            ].map((s) => (
              <div className="process-stat" key={s.lbl}>
                <div>
                  <span className="process-stat-num">{s.num}</span>
                  <span className="process-stat-lbl">{s.lbl}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Promise ── */}
      <section className="section promise" id="promise">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Why Importers Choose Us</div>
          <h2 className="section-title">The <span className="gold-word">Al Syedi</span> Promise</h2>
          <div className="title-rule"></div>
        </div>
        <div className="container">
          <div className="promise-grid">
            <SvcPromiseCard icon="purity" title="99.8% Pure Crystal" desc="Hand-mined from the deepest seams of the Khewra Salt Range and lab-verified to deliver consistent purity batch after batch." />
            <SvcPromiseCard icon="grade"  title="Every Grade On Demand" desc="Powder, fine, medium, coarse, chunk, lump — milled and screened to your exact specification with full traceability." />
            <SvcPromiseCard icon="price"  title="Direct-from-Mine Pricing" desc="No middlemen. Vertical integration means margins for you and quality that the high-street can't match." />
            <SvcPromiseCard icon="globe"  title="Container Logistics" desc="FCL / LCL shipments via Karachi, Jebel Ali & Port Qasim — to any port worldwide, with full documentation handled." />
          </div>
        </div>
      </section>

      {/* ── Retail Partners ── */}
      <section className="partners" id="partners">
        <div className="eyebrow">Trusted by Distributors &amp; Retailers Worldwide</div>
        <h3>Powering Salt Brands Across the UK · USA · Canada · EU · MENA</h3>
        <div className="marquee">
          <div className="marquee-track">
            {[
              'WHOLEFOODS','TESCO','SAINSBURYS','WALMART','COSTCO','LOBLAWS','CARREFOUR',
              'METRO','SOBEYS','MORRISONS','LULU','SPINNEYS','IGA','ALDI','LIDL',
              'WHOLEFOODS','TESCO','SAINSBURYS','WALMART','COSTCO','LOBLAWS','CARREFOUR',
              'METRO','SOBEYS','MORRISONS','LULU','SPINNEYS','IGA','ALDI','LIDL',
            ].map((n, i) => <span key={i}>{n}</span>)}
          </div>
        </div>
        <div className="partners-note">Private Label &amp; Bulk Supply Partner — Names Indicate Retail Channels Served</div>
      </section>

      {/* ── CTA ── */}
      <section className="svc-cta">
        <div className="svc-cta-inner">
          <h2>Ready to Source Premium Salt at <span className="gold-word">Wholesale Prices?</span></h2>
          <p>Get a personalised quote within 24 business hours — FOB Karachi or CIF to your nearest port.</p>
          <Link href="/contact" className="btn btn-gold">
            Request a Quote Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </>
  );
}

/* ── Helper components ── */

function SvcCapCard({ id, icon, title, desc }) {
  const icons = {
    cubes: <><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></>,
    box:   <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>,
    grind: <><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></>,
    lamp:  <><path d="M9 21h6M12 17v4M8 17h8l-1-6H9z"/><circle cx="12" cy="7" r="3"/></>,
  };
  return (
    <div className="cap-card" id={id}>
      <div className="cap-card-icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{icons[icon]}</svg>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link href="/contact" className="cap-card-link">
        Get a Quote
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </Link>
    </div>
  );
}

function SvcPromiseCard({ icon, title, desc }) {
  const icons = {
    purity: <><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></>,
    grade:  <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>,
    price:  <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
    globe:  <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>,
  };
  return (
    <div className="promise-card">
      <div className="promise-icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{icons[icon]}</svg>
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function SvcFeatureIcon({ name }) {
  const paths = {
    mountain: <><path d="M3 20l6-12 5 8 3-4 4 8z"/><circle cx="17" cy="6" r="2"/></>,
    beaker:   <><path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1l-6-11V3"/><path d="M6 16h12"/></>,
    ship:     <><path d="M3 18l1.5-2L12 14l7.5 2L21 18M5 14V8h14v6M9 8V5h6v3"/><path d="M2 21h20"/></>,
    support:  <><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1v-7h3v5zM3 19a2 2 0 002 2h1v-7H3v5z"/></>,
  };
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">{paths[name]}</svg>
  );
}

function SvcProcessIcon({ name }) {
  const paths = {
    pickaxe:   <><path d="M14.5 3.5l6 6-13 13-6-6 13-13zM3 21l3-3M17 3l4 4"/></>,
    sort:      <><path d="M11 5h10M11 9h7M11 13h4M3 5l4 4-4 4"/></>,
    mill:      <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>,
    beaker:    <><path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1l-6-11V3"/><path d="M6 16h12"/></>,
    box:       <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>,
    container: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>,
    ship:      <><path d="M3 18l1.5-2L12 14l7.5 2L21 18M5 14V8h14v6M9 8V5h6v3"/><path d="M2 21h20"/></>,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{paths[name]}</svg>
  );
}
