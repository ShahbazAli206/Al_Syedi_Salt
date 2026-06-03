import { Suspense } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import Chatbot from '@/components/Chatbot';
import SaltImage from '@/components/SaltImage';
import { PRODUCTS, VARIETIES } from '@/data/catalog';

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
      <div className="prod-trust-outer">
        <div className="container">
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
        </div>
      </div>

      {/* ── Salt Collections ── */}
      <section className="section" id="collections">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">Eight Specialist Ranges</div>
          <h2 className="section-title">Built for <span className="gold-word">Importers, Retailers &amp; Industry</span></h2>
          <p style={{ maxWidth: '720px', margin: '1.5rem auto 3rem', color: 'var(--text-dim)', fontSize: '.97rem' }}>
            Each Al Syedi Group collection is engineered for a specific channel — retail private label, food-service, wellness, hospitality interiors or heavy industry.
          </p>
        </div>
        <div className="container">
          <div className="brands-grid" data-reveal-toggle-stagger>
            {COLLECTIONS.map((b) => (
              <div className="brand-card" key={b.name}>
                <div className="brand-card-header">
                  <div className="brand-card-icon">
                    <CollectionIcon name={b.icon} />
                  </div>
                  <h3 dangerouslySetInnerHTML={{ __html: b.name }} />
                </div>
                <div className="brand-card-rule" />
                <p dangerouslySetInnerHTML={{ __html: b.description }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }} data-reveal-toggle="up">
            <Link href="/contact" className="btn btn-gold">Request a Collection Catalogue</Link>
          </div>
        </div>
      </section>

      {/* ── Salt Varieties ── */}
      <section className="ingredients" id="varieties">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">Explore Our Varieties</div>
          <h2 className="section-title">Every Grade, Every Grind, Every <span className="gold-word">Use Case</span></h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '.95rem', maxWidth: 560, margin: '.75rem auto 0' }}>
            From gourmet pink flakes to industrial de-icing salt, we deliver purity in every grain.
          </p>
        </div>
        <div className="ingredients-marquee-outer">
          <div className="ingredients-marquee-track">
            {[...VARIETIES, ...VARIETIES].map((ing, i) => (
              <div className="ingredient-card" key={i} aria-hidden={i >= VARIETIES.length}>
                <SaltImage kind={ing.kind || 'pink-fine'} alt={ing.name} />
                <div className="ingredient-label">
                  <div className="ingredient-badge">{ing.note}</div>
                  <h5>{ing.name}</h5>
                  <small>{ing.latin}</small>
                  <span className="ingredient-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="variety-features" data-reveal-toggle-stagger>
            {[
              { icon: 'leaf',     label: '100% Natural',      sub: 'Pure & Unrefined' },
              { icon: 'beaker',   label: 'Rich in Minerals',  sub: '84+ Trace Minerals' },
              { icon: 'mountain', label: 'Sustainable Source', sub: 'Ethically Mined' },
              { icon: 'shield',   label: 'Global Standards',  sub: 'ISO & HACCP Certified' },
            ].map((f) => (
              <div className="variety-feature" key={f.label}>
                <div className="vf-icon"><VarietyFeatureIcon name={f.icon} /></div>
                <div className="vf-text">
                  <strong>{f.label}</strong>
                  <span>{f.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grade Reference ── */}
      <section className="grades" id="grades">
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
            <GradeStep name="Powder" spec="&lt; 0.2 mm"    use="Seasoning blends, bakery, pharma"        dotCount={36} dotSize={1.4} />
            <GradeStep name="Fine"   spec="0.2–0.5 mm"     use="Table salt, retail jars, food service"   dotCount={24} dotSize={2.4} />
            <GradeStep name="Medium" spec="0.5–1.5 mm"     use="Cooking, brining, gourmet retail"        dotCount={16} dotSize={3.5} />
            <GradeStep name="Coarse" spec="1.5–3 mm"       use="Grinders, mills, BBQ rubs"               dotCount={9}  dotSize={5}   />
            <GradeStep name="Chunk"  spec="3 mm – 5 cm"    use="Lamps, bricks, halotherapy, lick blocks" dotCount={4}  dotSize={9}   />
          </div>
        </div>
      </section>

      {/* ── Packaging Options ── */}
      <section className="pkg-section" id="packaging">
        <div className="pkg-inner">
          <div className="pkg-header">
            <div className="pkg-header-text">
              <div className="pkg-eyebrow">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M5 12l5-5M5 12l5 5"/></svg>
                PACKAGING OPTIONS
              </div>
              <h2 className="pkg-title">From Mine Bag to<br/><span className="pkg-accent">Retail Shelf</span></h2>
              <p className="pkg-desc">Pick a packaging format that fits your supply chain —<br/>or hand us your brand brief and we&apos;ll design<br/>a custom solution.</p>
            </div>
            <div className="pkg-header-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/salt-bg.jpg" alt="" />
            </div>
          </div>

          <div className="pkg-grid">
            {[
              { icon:'fibc',      name:'FIBC Big Bag',       spec:'1,000 KG' },
              { icon:'ppbag',     name:'PP Woven Bag',        spec:'25 / 50 KG' },
              { icon:'jute',      name:'Jute Bag',            spec:'25 / 40 KG' },
              { icon:'carton',    name:'Master Carton',       spec:'10 × 1 KG' },
              { icon:'jar',       name:'Retail Glass Jar',    spec:'100 / 250 / 500 G' },
              { icon:'pouch',     name:'Stand-Up Pouch',      spec:'100 / 250 / 500 G' },
              { icon:'shaker',    name:'Salt Shaker',         spec:'50 / 100 G' },
              { icon:'grinder',   name:'Refillable Grinder',  spec:'120 G' },
              { icon:'giftbox',   name:'Gift Box',            spec:'3-PACK / 6-PACK' },
              { icon:'bulk',      name:'Bulk Lump',           spec:'AS-MINED CHUNKS' },
              { icon:'palletbox', name:'Pallet Box',          spec:'500–1000 KG' },
              { icon:'vac',       name:'Vacuum Pack',         spec:'200 G – 5 KG' },
            ].map((p) => (
              <div className="pkg-card" key={p.name}>
                <div className="pkg-card-icon"><PkgIcon name={p.icon} /></div>
                <div className="pkg-card-name">{p.name}</div>
                <div className="pkg-card-spec">{p.spec}</div>
              </div>
            ))}
          </div>

          <div className="pkg-feat-strip">
            {[
              { icon:'scissors',      label:'Custom Solutions', sub:'Tailored packaging to fit your brand.' },
              { icon:'shield-check',  label:'Premium Quality',  sub:'Food-grade, durable & export ready.' },
              { icon:'globe2',        label:'Global Standards', sub:'Compliant with international packaging norms.' },
              { icon:'truck',         label:'Secure Delivery',  sub:'Strong packaging for safe worldwide shipping.' },
            ].map((f) => (
              <div className="pkg-feat" key={f.label}>
                <div className="pkg-feat-icon"><PkgFeatIcon name={f.icon} /></div>
                <div className="pkg-feat-text">
                  <strong>{f.label}</strong>
                  <span>{f.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </>
  );
}

/* ── Collections data ── */
const COLLECTIONS = [
  { name: 'Pink Edible Range',        icon: 'mountain', description: 'Our flagship food-grade Himalayan Pink Salt — fine, coarse, granular and gourmet flakes. Lab-verified to 99.8% NaCl with the trace mineral signature that defines premium quality.' },
  { name: 'White Refined Range',      icon: 'crystal',  description: 'Iodized and non-iodized refined white salt for retail and food-service. Free-flowing, anti-caking treated where required, with consistent crystal size and full traceability from mine to pack.' },
  { name: 'Black Salt (Kala Namak)',  icon: 'mortar',   description: 'South-Asian culinary classic — sulfur-rich, smoky and pungent. Stone-mined, traditionally kiln-fired and ground to chef-grade specifications. Vegan egg-substitute favourite worldwide.' },
  { name: 'Bath &amp; Spa Collection',    icon: 'drop',     description: 'Therapeutic bath salts, foot soaks and scented blends with lavender, eucalyptus, rose and citrus. Manufactured in our cosmetic-grade facility with full INCI labeling and dermatological data sheets.' },
  { name: 'Lifestyle &amp; Lamps',        icon: 'lamp',     description: 'Hand-carved natural lamps, geometric pyramids, USB desk lamps, tealight holders and salt candleholders. Wired to UK / EU / US / AU standards with full CE / FCC certification.' },
  { name: 'Salt Bricks &amp; Tiles',      icon: 'brick',    description: 'Polished construction-grade salt bricks (8″×4″×2″) and tiles (6″×6″×1″) for halotherapy rooms, spa walls and decorative interiors. Custom dimensions cut to your architectural drawings.' },
  { name: 'Gourmet Salt Slabs',       icon: 'slab',     description: 'Restaurant-grade salt plates for cooking, serving and curing. Heat-rated to 500°C, hand-finished and packaged with care instructions. Bulk-supplied to gourmet retailers worldwide.' },
  { name: 'Industrial Salt Range',    icon: 'gear',     description: 'Animal lick salts, water-softener pellets, de-icing rock salt, chemical-grade NaCl and tanning salt. Container-load shipments for agricultural, municipal and industrial customers.' },
];

/* ── Helper components ── */
function CollectionIcon({ name }) {
  const paths = {
    mountain: <><path d="M2 22L9 8l4 5 3-6 6 15H2z"/><path d="M13 13l2-4" strokeOpacity=".5"/></>,
    crystal:  <><polygon points="12,2 19,8 16,21 8,21 5,8"/><line x1="12" y1="2" x2="12" y2="21"/><line x1="5" y1="8" x2="19" y2="8"/></>,
    mortar:   <><path d="M6 18h12a2 2 0 000-4H6a2 2 0 000 4z"/><path d="M8 14v-4a4 4 0 018 0v4"/><path d="M15 6l3-3"/><circle cx="18.5" cy="2.5" r="1" fill="currentColor"/></>,
    drop:     <><path d="M12 2c0 0-8 9-8 14a8 8 0 0016 0c0-5-8-14-8-14z"/><path d="M12 19a4 4 0 01-3.46-2" strokeOpacity=".45"/></>,
    lamp:     <><path d="M9.5 18h5l-1.2-8H10.7L9.5 18z"/><path d="M9.5 11a2.5 2.5 0 015 0"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="9.5" y1="22" x2="14.5" y2="22"/><line x1="12" y1="3" x2="12" y2="4.5"/><line x1="6.5" y1="5" x2="7.5" y2="6"/><line x1="17.5" y1="5" x2="16.5" y2="6"/></>,
    brick:    <><rect x="2" y="4"  width="20" height="4" rx="1.5"/><rect x="2" y="10" width="9"  height="4" rx="1.5"/><rect x="13" y="10" width="9" height="4" rx="1.5"/><rect x="2" y="16" width="20" height="4" rx="1.5"/></>,
    slab:     <><ellipse cx="12" cy="17" rx="9" ry="2.5"/><path d="M3 17v-3a9 2.5 0 0118 0v3"/><line x1="8" y1="9" x2="8" y2="14" strokeOpacity=".5"/><line x1="12" y1="7" x2="12" y2="14" strokeOpacity=".5"/><line x1="16" y1="9" x2="16" y2="14" strokeOpacity=".5"/></>,
    gear:     <><circle cx="12" cy="12" r="3"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8"/></>,
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] ?? paths.crystal}
    </svg>
  );
}

function VarietyFeatureIcon({ name }) {
  const paths = {
    leaf:     <><path d="M11 20A7 7 0 014 13c0-6 8-11 16-11 0 8-5 16-9 18a7 7 0 01-7-7zM11 13l9-9"/></>,
    beaker:   <><path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1l-6-11V3"/><path d="M6 16h12"/></>,
    mountain: <><path d="M3 20l6-12 5 8 3-4 4 8z"/><circle cx="17" cy="6" r="2"/></>,
    shield:   <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
  };
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      {paths[name]}
    </svg>
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
            <span key={i} style={{ left: `${d.x}%`, top: `${d.y}%`, width: `${d.size}px`, height: `${d.size}px`, transform: 'translate(-50%,-50%)' }} />
          ))}
        </div>
      </div>
      <div className="grade-name">{name}</div>
      <div className="grade-spec">{spec}</div>
      <div className="grade-use">{use}</div>
    </div>
  );
}

function PkgIcon({ name }) {
  const p = {
    fibc:      <><path d="M5 4h14l-1 4-5 1-2-1H6L5 4z"/><path d="M6 8l-1 12h14l-1-12"/><path d="M12 4v-2M9 2h6"/></>,
    ppbag:     <><path d="M5 6h14v14H5z"/><path d="M5 10h14M9 6v4M15 6v4"/></>,
    jute:      <><path d="M6 4h12l-1 4-4 1-3-1H7L6 4z"/><path d="M7 8l-1 12h12l-1-12"/><path d="M9 12l2 4M15 12l-2 4"/></>,
    carton:    <><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/></>,
    jar:       <><rect x="7" y="8" width="10" height="13" rx="1"/><path d="M9 8V5h6v3"/><rect x="8" y="12" width="8" height="5" fill="currentColor" opacity=".15"/></>,
    pouch:     <><path d="M7 4h10l-1 17H8L7 4z"/><path d="M9 4V2h6v2"/></>,
    shaker:    <><rect x="8" y="6" width="8" height="15" rx="2"/><circle cx="11" cy="9" r=".5" fill="currentColor"/><circle cx="13" cy="11" r=".5" fill="currentColor"/><circle cx="12" cy="13" r=".5" fill="currentColor"/></>,
    grinder:   <><path d="M9 3h6v3l1 2v3l-1 1v7H8v-7l-1-1V8l1-2V3z"/></>,
    giftbox:   <><rect x="3" y="9" width="18" height="12"/><path d="M3 9h18M12 9v12M8 9V6a3 3 0 013-3 3 3 0 011 3M16 9V6a3 3 0 00-3-3 3 3 0 00-1 3"/></>,
    bulk:      <><polygon points="12,4 18,12 22,20 2,20 6,12"/></>,
    palletbox: <><rect x="3" y="5" width="18" height="13"/><path d="M3 18h18M5 18v3M19 18v3M9 18v3M15 18v3"/></>,
    vac:       <><path d="M5 5h14v14H5z"/><path d="M5 9h14M8 13h8M9 17h6"/></>,
  };
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {p[name] || <rect x="4" y="4" width="16" height="16"/>}
    </svg>
  );
}

function PkgFeatIcon({ name }) {
  const p = {
    scissors:       <><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/></>,
    'shield-check': <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
    globe2:         <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>,
    truck:          <><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      {p[name]}
    </svg>
  );
}
