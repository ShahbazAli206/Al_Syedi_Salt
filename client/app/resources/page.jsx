import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import SaltImage from '@/components/SaltImage';
import ContactImage from '@/components/ContactImage';

export const metadata = { title: 'Resources — Al Syedi Group' };

const HERO_FEATURES = [
  { icon: <><path d="M11 20A7 7 0 014 13c0-6 8-11 16-11 0 8-5 16-9 18a7 7 0 01-7-7zM11 13l9-9"/></>, label: '84 Trace Minerals', sub: 'Naturally Occurring' },
  { icon: <><path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1l-6-11V3"/><path d="M6 16h12"/></>, label: 'Lab Verified', sub: 'COA Every Shipment' },
  { icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>, label: '5 Grade Sizes', sub: 'Custom Grinds Available' },
  { icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>, label: 'ISO Certified', sub: 'HACCP · BRC · Halal' },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      {/* ── Resources Hero ── */}
      <section className="res-hero">
        <div className="res-hero-inner">
          <div className="res-hero-text">
            <div className="eyebrow">Knowledge Centre</div>
            <h1 className="res-hero-title">Salt Resources</h1>
            <div className="res-hero-rule" />
            <p className="res-hero-desc">
              Everything you need to know about Himalayan Pink Salt — from mineral
              composition and health benefits to grain specifications and private
              label partnerships.
            </p>
            <div className="res-hero-features">
              {HERO_FEATURES.map((f) => (
                <div className="res-hero-feat" key={f.label}>
                  <div className="res-hero-feat-icon">
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
          <div className="res-hero-img" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/header_images/img4.png" alt="Himalayan Pink Salt" className="res-hero-salt-img" />
          </div>
        </div>
      </section>

      {/* ── HEALTH BENEFITS — Why Pink Salt ── */}
      <section className="benefits res-section-pink" id="benefits">
        <div className="container benefits-inner">
          <div className="benefits-header" data-reveal="up">
            <div className="eyebrow">Why Himalayan Pink Salt</div>
            <h2 className="section-title benefits-title">The Difference is in the <span className="gold-word">Crystal</span></h2>
            <div className="title-rule benefits-rule"></div>
          </div>
          <div className="benefits-grid" data-reveal-toggle-stagger>
            <BenefitCard icon="crystal" num="84"    title="Trace Minerals"     desc="Naturally occurring trace elements including magnesium, potassium, calcium and iron — the source of the iconic pink hue." />
            <BenefitCard icon="beaker" num="0%"    title="Anti-Caking Agents" desc="No additives, no bleaches, no anti-caking chemicals. Just hand-mined, sun-dried crystal salt straight from the rock." />
            <BenefitCard icon="diamond" num="250M" title="Years Old"           desc="Sourced from ancient seabed deposits that crystallised 250+ million years ago — sealed away from modern pollution." />
            <BenefitCard icon="shield" num="99.8%" title="Pure NaCl"           desc="Laboratory verified to 99.8% sodium chloride with the remaining 0.2% being the precious trace mineral signature." />
          </div>
        </div>
      </section>

      {/* ── MINERAL COMPOSITION ── */}
      <section className="minerals res-section-white" id="composition">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">Typical Analysis</div>
          <h2 className="section-title">Mineral <span className="gold-word">Composition</span></h2>
          <div className="title-rule"></div>
          <p style={{ color: 'var(--text-dim)', maxWidth: 580, margin: '0 auto', fontSize: '.95rem' }}>
            Indicative composition of our standard food-grade Himalayan Pink Salt (per 100 g).<br />
            Full COA available on every shipment.
          </p>
        </div>
        <div className="container">
          <div className="minerals-wrap">
            <div className="mineral-visual" data-reveal-toggle="left">
              <SaltImage kind="pink-granular" alt="Himalayan Pink Salt crystals" />
            </div>
            <div className="mineral-table" data-reveal-toggle="right">
              <div className="mineral-row head">
                <span>Compound</span>
                <span></span>
                <span style={{ textAlign: 'right' }}>% by Weight</span>
              </div>
              {[
                { name: 'Sodium Chloride',    f: '(NaCl)',    pct: '98.55', w: 99 },
                { name: 'Calcium Sulfate',    f: '(CaSO₃)',   pct: '0.18',  w: 18 },
                { name: 'Magnesium Sulfate',  f: '(MgSO₃)',   pct: '0.12',  w: 12 },
                { name: 'Potassium Chloride', f: '(KCl)',     pct: '0.08',  w: 8  },
                { name: 'Iron Oxide',         f: '(Fe₂O₃)',   pct: '0.04',  w: 5  },
                { name: 'Moisture',           f: '(H₂O)',     pct: '0.03',  w: 3  },
              ].map((r) => (
                <div className="mineral-row" key={r.name}>
                  <div className="mineral-compound">
                    <span className="mineral-name">{r.name}</span>
                    <span className="mineral-formula">{r.f}</span>
                  </div>
                  <span className="mineral-bar"><span style={{ width: `${r.w}%` }} /></span>
                  <span className="mineral-pct">{r.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="minerals-stats" data-reveal-toggle-stagger>
            {[
              { icon: <><circle cx="12" cy="12" r="9"/><path d="M8 12l2 2 4-4M12 3v2M12 19v2M3 12h2M19 12h2"/></>, num: '84+',          lbl: 'Trace Minerals' },
              { icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,  num: '99.98%',       lbl: 'Pure NaCl' },
              { icon: <><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></>,                          num: 'Low Heavy',     lbl: 'Metals · Tested & Certified' },
              { icon: <><path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1l-6-11V3"/><path d="M6 16h12"/></>, num: 'Lab',        lbl: 'Verified · COA Provided' },
            ].map((s) => (
              <div className="minerals-stat" key={s.lbl}>
                <div className="minerals-stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{s.icon}</svg>
                </div>
                <div className="minerals-stat-text">
                  <strong>{s.num}</strong>
                  <span>{s.lbl}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALT GRADE REFERENCE CHART ── */}
      <section className="grades res-section-pink" id="grades">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">Grain Size Reference</div>
          <h2 className="section-title">Pick Your <span className="gold-word">Grade</span></h2>
          <div className="title-rule"></div>
          <p style={{ color: 'var(--text-dim)', maxWidth: 620, margin: '0 auto', fontSize: '.95rem' }}>
            Five standard grain sizes, milled to spec on our calibrated lines. Custom grinds available on request.
          </p>
        </div>
        <div className="container">
          <div className="grade-bar" data-reveal-toggle-stagger>
            <GradeStep name="Powder"  spec="< 0.2 mm"   use="Seasoning blends, bakery, pharma" dotCount={36} dotSize={1.4} />
            <GradeStep name="Fine"    spec="0.2–0.5 mm" use="Table salt, retail jars, food service" dotCount={24} dotSize={2.4} />
            <GradeStep name="Medium"  spec="0.5–1.5 mm" use="Cooking, brining, gourmet retail" dotCount={16} dotSize={3.5} />
            <GradeStep name="Coarse"  spec="1.5–3 mm"   use="Grinders, mills, BBQ rubs" dotCount={9} dotSize={5} />
            <GradeStep name="Chunk"   spec="3 mm – 5 cm" use="Lamps, bricks, halotherapy, lick blocks" dotCount={4} dotSize={9} />
          </div>
        </div>
      </section>

      {/* ── BRAND STRIP ── */}
      <section className="brand-strip res-section-white" id="brands-labeled" data-reveal-toggle="fade">
        <div className="brand-strip-title">Brands We&apos;ve Privately Labelled For</div>
        <div className="brand-strip-track" data-reveal-toggle-stagger>
          {[
            { name: 'PINK PEAK',      region: 'London, UK' },
            { name: 'CRYSTAL CO.',    region: 'New York, USA' },
            { name: 'Salt Atelier',   region: 'Toronto, Canada', italic: true },
            { name: 'KHEWRA HOUSE',   region: 'Dubai, UAE' },
            { name: 'Pure Mineral',   region: 'Berlin, Germany', italic: true },
          ].map((b) => (
            <div className="brand-box" key={b.name}>
              <div className="brand-name" style={b.italic ? { fontStyle: 'italic' } : undefined}>{b.name}</div>
              <div className="brand-region">{b.region}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="res-cta res-section-pink">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to <span className="gold-word">Partner</span> With Us?</h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: 560, margin: '1rem auto 2rem', fontSize: '.95rem' }}>
            Whether you need bulk supply, private labelling, or custom grinds — our team
            responds within 24 business hours.
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

function BenefitCard({ icon, num, title, desc }) {
  const icons = {
    crystal: <><polygon points="12,2 20,9 16,22 8,22 4,9"/><path d="M12 2v20M4 9h16"/></>,
    beaker:  <><path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1l-6-11V3"/><path d="M6 16h12"/></>,
    diamond: <><polygon points="12,2 22,9 18,20 6,20 2,9"/><line x1="2" y1="9" x2="22" y2="9"/></>,
    shield:  <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
  };
  return (
    <div className="benefit-card">
      <div className="benefit-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {icons[icon] || icons.crystal}
        </svg>
      </div>
      <div className="benefit-num">{num}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function GradeStep({ name, spec, use, dotCount, dotSize }) {
  const dots = Array.from({ length: dotCount }).map((_, i) => {
    const seed = i * 31 + dotCount * 7;
    const x = (seed * 17) % 100;
    const y = (seed * 23) % 100;
    return { x, y, size: dotSize + ((seed * 11) % 3) - 1 };
  });
  return (
    <div className="grade-step">
      <div className="grade-circle">
        <div className="grade-dots">
          {dots.map((d, i) => (
            <span key={i} style={{
              left: `${d.x}%`,
              top:  `${d.y}%`,
              width:  `${d.size}px`,
              height: `${d.size}px`,
              transform: 'translate(-50%,-50%)',
            }} />
          ))}
        </div>
      </div>
      <div className="grade-name">{name}</div>
      <div className="grade-spec">{spec}</div>
      <div className="grade-use">{use}</div>
    </div>
  );
}
