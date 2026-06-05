import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SaltImage from '@/components/SaltImage';
import Flag from '@/components/Flag';
import Chatbot from '@/components/Chatbot';
import FAQ from '@/components/FAQ';
import HeroSlideshow from '@/components/HeroSlideshow';
import { VARIETIES } from '@/data/catalog';

export default async function Home() {
  const varieties = VARIETIES;

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero hp-odd">
        <HeroSlideshow />
        <div className="sparkles" aria-hidden="true">
          <span className="orb"></span><span className="orb"></span>
          <span className="orb"></span><span className="orb"></span>
          <span className="orb"></span><span className="orb"></span>
          <span className="dust"></span><span className="dust"></span>
          <span className="dust"></span><span className="dust"></span>
          <span className="dust"></span><span className="dust"></span>
          <span className="dust"></span><span className="dust"></span>
        </div>

        <div className="hero-content" data-reveal-stagger>
          <h1>
            Bulk Salt Manufacturing<br />
            <span className="gold-word">&amp;</span> Global<br />
            <span className="gold-word">Wholesale Supply</span>
          </h1>
          <div className="hero-actions">
            <Link href="/products" className="btn btn-outline">
              View Salt Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="num">25+</div><div className="lbl">Years of Trust</div></div>
            <div className="hero-stat"><div className="num">42</div><div className="lbl">Countries Served</div></div>
            <div className="hero-stat"><div className="num">18k+</div><div className="lbl">Tons Shipped / Yr</div></div>
            <div className="hero-stat"><div className="num">320+</div><div className="lbl">Active B2B Clients</div></div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE — Our Salt. Your Brand. Worldwide. */}
      <section className="showcase hp-even" id="products-overview">
        <div className="container">
          <h2 className="showcase-title" data-reveal-toggle="up">
            <span className="t1">Our Salt. </span>
            <span className="t2">Your Brand. Worldwide.</span>
          </h2>
          <p className="showcase-sub" data-reveal-toggle="up">
            From edible to industrial — tailored salt solutions for every business need.
          </p>
          <div className="showcase-grid" data-reveal-toggle-stagger>
            {[
              { kind:'pink-fine',      name:'Himalayan Pink Salt', cat:'Edible Salt',     href:'/products?category=edible' },
              { kind:'bath-lavender',  name:'Bath & Spa',          cat:'Bath & Spa',       href:'/products?category=bath' },
              { kind:'lamp-natural',   name:'Salt Lamps & Decor',  cat:'Home & Decor',    href:'/products?category=lifestyle' },
              { kind:'de-icing',       name:'Industrial Salt',     cat:'Industrial Use',   href:'/products?category=industrial' },
              { kind:'salt-brick',     name:'Salt Bricks & Tiles', cat:'Construction',    href:'/products?category=construction' },
              { kind:'pink-granular',  name:'Salt Collections',    cat:'Gifting & Retail', href:'/products' },
            ].map((p) => (
              <Link href={p.href} className="showcase-card" key={p.name}>
                <div className="showcase-img">
                  <SaltImage kind={p.kind} alt={p.name} />
                  <div className="showcase-img-overlay" />
                </div>
                <div className="showcase-body">
                  <div className="showcase-name">{p.name}</div>
                  <div className="showcase-cat">{p.cat}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* B2B features strip */}
          <div className="showcase-b2b" data-reveal-toggle-stagger>
            {[
              { icon: <><path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/></>, label:'Bulk & Wholesale Pricing', sub:'From 1 MT · FCL & LCL' },
              { icon: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 17h7M17 14v7"/></>, label:'Private Label & OEM Services', sub:'Full brand suite' },
              { icon: <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>, label:'Custom Packaging Solutions', sub:'12 formats available' },
              { icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>, label:'Global Shipping Support', sub:'42 countries · FCL & LCL' },
            ].map((f) => (
              <div className="showcase-b2b-item" key={f.label}>
                <div className="showcase-b2b-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{f.icon}</svg>
                </div>
                <div className="showcase-b2b-text">
                  <strong>{f.label}</strong>
                  <span>{f.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="showcase-cta" data-reveal-toggle="up">
            <Link href="/products" className="btn btn-gold">
              View All Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="partners hp-even" id="partners" data-reveal-toggle="fade">
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

      {/* SALT COLLECTIONS */}
      <section className="houses hp-odd" id="collections">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">Our Salt Collections</div>
          <h2 className="section-title">Six Specialist Ranges, <span className="gold-word">One Source</span></h2>
          <p className="section-subtitle" style={{ color:'var(--text-dim)',maxWidth:560,margin:'.75rem auto 0',fontSize:'.95rem' }}>
            Premium Himalayan Pink Salt for every industry, application, and lifestyle.
          </p>
        </div>
        <div className="container">
          <div className="houses-carousel" data-reveal-toggle-stagger>
            {[
              { name: 'Edible Range',  icon: 'spoon',   kind: 'pink-fine',       badge: 'Premium Quality',  cta: 'Explore Edible Range',  desc: 'Food grade pink, white & black salts in fine, coarse & gourmet variants.' },
              { name: 'Pink Crystal',  icon: 'crystal', kind: 'crystal-display', badge: '100% Natural',     cta: 'Discover Pink Crystal', desc: 'Premium Himalayan rock crystal salt for grinders & retail.' },
              { name: 'Bath & Spa',    icon: 'leaf',    kind: 'bath-lavender',   badge: 'Spa Grade',        cta: 'Explore Bath & Spa',    desc: 'Therapeutic bath salts, soak & spa-grade blends.' },
              { name: 'Lifestyle',     icon: 'lamp',    kind: 'lamp-natural',    badge: 'Handcrafted',      cta: 'Browse Lifestyle',      desc: 'Himalayan salt lamps, USB lamps & candle holders.' },
              { name: 'Construction',  icon: 'brick',   kind: 'salt-brick',      badge: 'Export Ready',     cta: 'View Construction',     desc: 'Polished salt bricks & tiles for halotherapy rooms & salt walls.' },
              { name: 'Industrial',    icon: 'gear',    kind: 'animal-lick',     badge: 'Bulk Supply',      cta: 'Explore Industrial',    desc: 'Animal lick salts, water softener pellets & de-icing salt.' },
            ].map((h) => (
              <Link href="/products" className="house-card" key={h.name}>
                <div className="house-card-img">
                  <SaltImage kind={h.kind} alt={h.name} />
                  <div className="house-card-badge">{h.badge}</div>
                </div>
                <div className="house-card-body">
                  <h4>{h.name}</h4>
                  <p>{h.desc}</p>
                  <span className="house-card-link">
                    <span className="house-card-arrow">→</span>
                    {h.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="houses-cta">
            <Link href="/products" className="btn btn-gold">
              View All Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SALT VARIETIES */}
      <section className="ingredients hp-even" id="varieties">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">Explore Our Varieties</div>
          <h2 className="section-title">Every Grade, Every Grind, Every <span className="gold-word">Use Case</span></h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '.95rem', maxWidth: 560, margin: '.75rem auto 0' }}>
            From gourmet pink flakes to industrial de-icing salt, we deliver purity in every grain.
          </p>
        </div>
        <div className="ingredients-marquee-outer">
          <div className="ingredients-marquee-track">
            {[...varieties, ...varieties].map((ing, i) => (
              <Link href="/products" className="ingredient-card" key={i} aria-hidden={i >= varieties.length}>
                <SaltImage kind={ing.kind || 'pink-fine'} alt={ing.name} />
                <div className="ingredient-label">
                  <div className="ingredient-badge">{ing.note}</div>
                  <h5>{ing.name}</h5>
                  <small>{ing.latin}</small>
                  <span className="ingredient-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="container">
          {/* Bottom feature trust strip */}
          <div className="variety-features" data-reveal-toggle-stagger>
            {[
              { icon: 'leaf',    label: '100% Natural',      sub: 'Pure & Unrefined' },
              { icon: 'beaker',  label: 'Rich in Minerals',  sub: '84+ Trace Minerals' },
              { icon: 'mountain',label: 'Sustainable Source', sub: 'Ethically Mined' },
              { icon: 'shield',  label: 'Global Standards',  sub: 'ISO & HACCP Certified' },
            ].map((f) => (
              <div className="variety-feature" key={f.label}>
                <div className="vf-icon"><FeatureIcon name={f.icon} /></div>
                <div className="vf-text">
                  <strong>{f.label}</strong>
                  <span>{f.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="section promise hp-even" id="promise">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">Why Importers Choose Us</div>
          <h2 className="section-title">The <span className="gold-word">Al Syedi</span> Promise</h2>
          <div className="title-rule"></div>
        </div>
        <div className="container">
          <div className="brands-grid" data-reveal-toggle-stagger>
            <PromiseCard icon="purity" title="99.8% Pure Crystal" desc="Hand-mined from the deepest seams of the Khewra Salt Range and lab-verified to deliver consistent purity batch after batch." />
            <PromiseCard icon="grade" title="Every Grade On Demand" desc="Powder, fine, medium, coarse, chunk, lump — milled and screened to your exact specification with full traceability." />
            <PromiseCard icon="price" title="Direct-from-Mine Pricing" desc="No middlemen. Vertical integration means margins for you and quality that the high-street can&apos;t match." />
            <PromiseCard icon="globe" title="Container Logistics" desc="FCL / LCL shipments via Karachi, Jebel Ali &amp; Port Qasim — to any port worldwide, with full documentation handled." />
          </div>
        </div>
      </section>


      {/* GOOGLE REVIEWS */}
      <section className="testimonials hp-odd" id="reviews">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">What Our B2B Clients Say</div>
          <h2 className="section-title">Trusted by Importers <span className="gold-word">Across 4 Continents</span></h2>
          <div className="title-rule"></div>
          <div className="reviews-summary">
            <div>
              <div className="rating-big">4.9</div>
              <small style={{ display: 'block', fontSize: '.75rem', color: 'var(--text-mute)', letterSpacing: '.18em', textTransform: 'uppercase' }}>Average · 287 reviews</small>
            </div>
            <div className="rating-meta">
              <div className="stars-big">★ ★ ★ ★ ★</div>
              <small>Verified on Google · Trustpilot · Alibaba</small>
            </div>
          </div>
        </div>
        <div className="reviews-marquee-outer">
          <div className="reviews-marquee-track">
            {[...reviews, ...reviews].map((t, i) => (
              <div className="review-card" key={i} aria-hidden={i >= reviews.length}>
                {/* Top row: stars + Google badge */}
                <div className="rc-top">
                  <div className="rc-stars">{'★'.repeat(5)}</div>
                  <div className="rc-google">
                    <svg width="13" height="13" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span>Google</span>
                  </div>
                </div>
                {/* Quote */}
                <p className="rc-quote">&ldquo;{t.quote}&rdquo;</p>
                {/* Author */}
                <div className="rc-author">
                  <ReviewAvatar name={t.name} />
                  <div className="rc-author-info">
                    <span className="rc-name">{t.name}</span>
                    <span className="rc-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      <Footer />
      <Chatbot />
    </>
  );
}

/* ============ Icons ============ */

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


function ProcessIcon({ name }) {
  const paths = {
    pickaxe:   <><path d="M3 21l8-8M11 13l5-5M14 4l6 6M18 8l-2-2"/></>,
    sort:      <><path d="M3 6h13M3 12h9M3 18h5"/><path d="M19 9l3 3-3 3"/></>,
    mill:      <><circle cx="12" cy="12" r="7"/><path d="M12 5v14M5 12h14"/></>,
    beaker:    <><path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1l-6-11V3"/></>,
    box:       <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4"/></>,
    container: <><rect x="3" y="6" width="18" height="12"/><path d="M7 6v12M11 6v12M15 6v12M19 6v12"/></>,
    ship:      <><path d="M3 18l1.5-2L12 14l7.5 2L21 18M5 14V8h14v6M9 8V5h6v3"/></>,
  };
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      {paths[name] || <circle cx="12" cy="12" r="9" />}
    </svg>
  );
}

function CollectionIcon({ name }) {
  const paths = {
    spoon:   <><path d="M14 4a4 4 0 014 4c0 2.5-2 4-4 4v8h-2v-8c-2 0-4-1.5-4-4a4 4 0 014-4z"/></>,
    crystal: <><polygon points="12,2 20,9 16,22 8,22 4,9"/><path d="M12 2v20M4 9h16"/></>,
    leaf:    <><path d="M11 20A7 7 0 014 13c0-6 8-11 16-11 0 8-5 16-9 18a7 7 0 01-7-7zM11 13l9-9"/></>,
    lamp:    <><path d="M9 21h6M12 17v4M8 17h8l-1-6H9z"/><circle cx="12" cy="7" r="3"/></>,
    brick:   <><rect x="3" y="5" width="18" height="4"/><rect x="3" y="11" width="18" height="4"/><rect x="3" y="17" width="18" height="4"/></>,
    gear:    <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>,
  };
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      {paths[name] || <circle cx="12" cy="12" r="9" />}
    </svg>
  );
}


function PromiseCard({ title, desc, icon }) {
  const paths = {
    purity: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
    grade:  <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    price:  <><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
    globe:  <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>,
  };
  return (
    <div className="brand-card">
      <div className="brand-card-header">
        <div className="brand-card-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {paths[icon]}
          </svg>
        </div>
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className="brand-card-rule" />
      <p dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}

function CertCard({ icon, name, desc }) {
  const paths = {
    iso:    <><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></>,
    haccp:  <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
    brc:    <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 12h10M12 7v10"/></>,
    halal:  <><circle cx="12" cy="12" r="10"/><path d="M8 12c0-2.2 1.8-4 4-4M16 12v4"/></>,
    kosher: <><path d="M12 2l3 6 6 1-4.5 4 1 6L12 16l-5.5 3 1-6L3 9l6-1z"/></>,
    usda:   <><path d="M12 2C7 2 5 6 5 10c0 5 7 12 7 12s7-7 7-12c0-4-2-8-7-8z"/><circle cx="12" cy="10" r="3"/></>,
    fda:    <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h6M8 17h4"/></>,
    ce:     <><circle cx="12" cy="12" r="10"/><path d="M16 8a5 5 0 100 8M14 12h-3"/></>,
    gmp:    <><path d="M3 21V11a2 2 0 012-2h14a2 2 0 012 2v10M3 21h18M8 21V9"/></>,
    'non-gmo': <><circle cx="12" cy="12" r="10"/><path d="M5 5l14 14"/></>,
    vegan:  <><path d="M11 20A7 7 0 014 13c0-6 8-11 16-11 0 8-5 16-9 18a7 7 0 01-7-7z"/></>,
    iso14k: <><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
  };
  return (
    <div className="cert-card">
      <div className="cert-icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {paths[icon]}
        </svg>
      </div>
      <div className="cert-name">{name}</div>
      <div className="cert-desc">{desc}</div>
    </div>
  );
}

function MarketCard({ code, country, meta }) {
  return (
    <div className="market-card">
      <div className="market-flag"><Flag code={code} width={36} height={26} /></div>
      <div className="market-info">
        <div className="market-country">{country}</div>
        <div className="market-meta">{meta}</div>
      </div>
    </div>
  );
}

function PackCard({ icon, name, spec }) {
  const paths = {
    fibc:     <><path d="M5 4h14l-1 4-5 1-2-1H6L5 4z"/><path d="M6 8l-1 12h14l-1-12"/><path d="M12 4v-2M9 2h6"/></>,
    ppbag:    <><path d="M5 6h14v14H5z"/><path d="M5 10h14M9 6v4M15 6v4"/></>,
    jute:     <><path d="M6 4h12l-1 4-4 1-3-1H7L6 4z"/><path d="M7 8l-1 12h12l-1-12"/><path d="M9 12l2 4M15 12l-2 4"/></>,
    carton:   <><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/></>,
    jar:      <><rect x="7" y="8" width="10" height="13" rx="1"/><path d="M9 8V5h6v3"/><rect x="8" y="12" width="8" height="5" fill="currentColor" opacity=".3"/></>,
    pouch:    <><path d="M7 4h10l-1 17H8L7 4z"/><path d="M9 4V2h6v2"/></>,
    shaker:   <><rect x="8" y="6" width="8" height="15" rx="2"/><circle cx="11" cy="9" r=".5" fill="currentColor"/><circle cx="13" cy="11" r=".5" fill="currentColor"/><circle cx="12" cy="13" r=".5" fill="currentColor"/></>,
    grinder:  <><path d="M9 3h6v3l1 2v3l-1 1v7H8v-7l-1-1V8l1-2V3z"/></>,
    giftbox:  <><rect x="3" y="9" width="18" height="12"/><path d="M3 9h18M12 9v12M8 9V6a3 3 0 013-3 3 3 0 011 3M16 9V6a3 3 0 00-3-3 3 3 0 00-1 3"/></>,
    bulk:     <><polygon points="12,4 18,12 22,20 2,20 6,12"/></>,
    palletbox: <><rect x="3" y="5" width="18" height="13"/><path d="M3 18h18M5 18v3M19 18v3M9 18v3M15 18v3"/></>,
    vac:      <><path d="M5 5h14v14H5z"/><path d="M5 9h14M8 13h8M9 17h6"/></>,
  };
  return (
    <div className="pack-card">
      <div className="pack-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          {paths[icon] || <rect x="4" y="4" width="16" height="16" />}
        </svg>
      </div>
      <div className="pack-name">{name}</div>
      <div className="pack-spec">{spec}</div>
    </div>
  );
}


/* Avatar — deterministic gradient circle with initials */
function ReviewAvatar({ name }) {
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
  const hue = ((name.charCodeAt(0) * 7) + name.length * 13) % 60;
  return (
    <div style={{
      width: 40, height: 40, borderRadius: '50%',
      background: `linear-gradient(135deg, hsl(${hue + 340}, 60%, 70%), hsl(${hue + 340}, 55%, 45%))`,
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '.9rem',
      border: '2px solid var(--rose)',
      flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

/* ── Packaging icon SVGs ── */
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
    scissors:     <><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/></>,
    'shield-check': <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
    globe2:       <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>,
    truck:        <><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      {p[name]}
    </svg>
  );
}

/* ── Cert badge logos ── */
function CertBadgeLogo({ type }) {
  const logos = {
    iso:    <><circle cx="12" cy="12" r="11" fill="#1565C0" opacity=".12"/><circle cx="12" cy="12" r="11" fill="none" stroke="#1565C0" strokeWidth="1.5"/><text x="12" y="11" textAnchor="middle" fontSize="6" fontWeight="800" fill="#1565C0" fontFamily="Arial">ISO</text><text x="12" y="17" textAnchor="middle" fontSize="4.5" fontWeight="700" fill="#1565C0" fontFamily="Arial">22000</text></>,
    haccp:  <><circle cx="12" cy="12" r="11" fill="#00695C" opacity=".1"/><circle cx="12" cy="12" r="11" fill="none" stroke="#00695C" strokeWidth="1.5"/><path d="M7 12l3.5 3.5L17 8.5" stroke="#00695C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><text x="12" y="20" textAnchor="middle" fontSize="3.5" fontWeight="700" fill="#00695C" fontFamily="Arial">HACCP</text></>,
    brc:    <><circle cx="12" cy="12" r="11" fill="#E65100" opacity=".1"/><circle cx="12" cy="12" r="11" fill="none" stroke="#E65100" strokeWidth="1.5"/><text x="12" y="11" textAnchor="middle" fontSize="5.5" fontWeight="800" fill="#E65100" fontFamily="Arial">BRGS</text><text x="12" y="17" textAnchor="middle" fontSize="4" fontWeight="600" fill="#E65100" fontFamily="Arial">AA+</text></>,
    halal:  <><circle cx="12" cy="12" r="11" fill="#2E7D32" opacity=".1"/><circle cx="12" cy="12" r="11" fill="none" stroke="#2E7D32" strokeWidth="1.5"/><path d="M16 9a5 5 0 11-7.5 4.3" stroke="#2E7D32" strokeWidth="1.8" fill="none"/><circle cx="15" cy="8" r="1.2" fill="#2E7D32"/><text x="12" y="20" textAnchor="middle" fontSize="3.8" fontWeight="700" fill="#2E7D32" fontFamily="Arial">HALAL</text></>,
    kosher: <><circle cx="12" cy="12" r="11" fill="#1A237E" opacity=".1"/><circle cx="12" cy="12" r="11" fill="none" stroke="#1A237E" strokeWidth="1.5"/><polygon points="12,4.5 13.5,9 18,9 14.2,11.5 15.7,16 12,13.5 8.3,16 9.8,11.5 6,9 10.5,9" fill="none" stroke="#1A237E" strokeWidth="1.2"/></>,
    usda:   <><circle cx="12" cy="12" r="11" fill="#2E7D32" opacity=".12"/><circle cx="12" cy="12" r="11" fill="none" stroke="#2E7D32" strokeWidth="1.5"/><text x="12" y="10" textAnchor="middle" fontSize="4.5" fontWeight="800" fill="#2E7D32" fontFamily="Arial">USDA</text><text x="12" y="15" textAnchor="middle" fontSize="3.5" fontWeight="600" fill="#2E7D32" fontFamily="Arial">ORGANIC</text></>,
    fda:    <><circle cx="12" cy="12" r="11" fill="#0D47A1" opacity=".1"/><circle cx="12" cy="12" r="11" fill="none" stroke="#0D47A1" strokeWidth="1.5"/><text x="12" y="11.5" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#0D47A1" fontFamily="Arial">FDA</text><text x="12" y="17" textAnchor="middle" fontSize="3.5" fontWeight="600" fill="#0D47A1" fontFamily="Arial">Registered</text></>,
    eu:     <><circle cx="12" cy="12" r="11" fill="#1565C0" opacity=".12"/><circle cx="12" cy="12" r="11" fill="none" stroke="#1565C0" strokeWidth="1.5"/>{[0,1,2,3,4,5,6,7,8,9,10,11].map(i=><circle key={i} cx={12+7.5*Math.cos(i*Math.PI/6-Math.PI/2)} cy={12+7.5*Math.sin(i*Math.PI/6-Math.PI/2)} r="1" fill="#1565C0"/>)}</>,
    gmp:    <><circle cx="12" cy="12" r="11" fill="#00695C" opacity=".1"/><circle cx="12" cy="12" r="11" fill="none" stroke="#00695C" strokeWidth="1.5"/><text x="12" y="14" textAnchor="middle" fontSize="7" fontWeight="800" fill="#00695C" fontFamily="Arial">GMP</text></>,
    nongmo: <><circle cx="12" cy="12" r="11" fill="#558B2F" opacity=".12"/><circle cx="12" cy="12" r="11" fill="none" stroke="#558B2F" strokeWidth="1.5"/><path d="M12 18s-5-4-5-8a5 5 0 0110 0c0 4-5 8-5 8z" fill="#558B2F" opacity=".25"/><path d="M12 18s-5-4-5-8a5 5 0 0110 0c0 4-5 8-5 8z" stroke="#558B2F" strokeWidth="1.2" fill="none"/><line x1="12" y1="10" x2="12" y2="18" stroke="#558B2F" strokeWidth="1.2"/></>,
    vegan:  <><circle cx="12" cy="12" r="11" fill="#2E7D32" opacity=".1"/><circle cx="12" cy="12" r="11" fill="none" stroke="#2E7D32" strokeWidth="1.5"/><path d="M12 18C8 14 6 10 8 7c2-2 4 0 4 3 0-3 2-5 4-3 2 3 0 7-4 11z" fill="#2E7D32" opacity=".3"/><path d="M12 18C8 14 6 10 8 7c2-2 4 0 4 3 0-3 2-5 4-3 2 3 0 7-4 11z" stroke="#2E7D32" strokeWidth="1.3" fill="none"/></>,
    iso14k: <><circle cx="12" cy="12" r="11" fill="#1565C0" opacity=".1"/><circle cx="12" cy="12" r="11" fill="none" stroke="#1565C0" strokeWidth="1.5"/><text x="12" y="10" textAnchor="middle" fontSize="4.5" fontWeight="800" fill="#1565C0" fontFamily="Arial">ISO</text><text x="12" y="15.5" textAnchor="middle" fontSize="4" fontWeight="700" fill="#1565C0" fontFamily="Arial">14001</text></>,
  };
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {logos[type]}
    </svg>
  );
}

const reviews = [
  { quote: "Al Syedi has been our pink salt supplier for four years now. Container after container — same purity, same color, same lead time. They simply do not miss.", name: 'James Holloway', role: 'Procurement Director, Pink Peak Foods · UK' },
  { quote: "We trialled three Pakistani suppliers before signing with Al Syedi. The difference in lab consistency and packaging quality was night-and-day. They are now our sole source for retail private label.", name: 'Sarah Mitchell', role: 'Founder, Crystal Co. Wellness · USA' },
  { quote: "Their team understood our Canadian labeling and bilingual French requirements without us having to explain twice. Documents, COA, MSDS — everything was ready before the container left port.", name: 'David Tremblay', role: 'Operations Manager, Salt Atelier · Canada' },
  { quote: "From hand-carved lamps to coarse grinder crystals, they handle our entire 12-SKU range. Order minimums are reasonable and the WhatsApp support is genuinely 24/7.", name: 'Amira Saleh', role: 'Category Buyer, Khewra House · UAE' },
  { quote: "We were nervous switching suppliers mid-season. Al Syedi pulled a sample shipment together in 6 days and a full container in 21. The salt itself is the cleanest pink we have ever stocked.", name: 'Hans Becker', role: 'CEO, Pure Mineral GmbH · Germany' },
  { quote: "Bath salt blends with our private fragrance — they handled the formulation, the packaging design and the FDA registration. It just works.", name: 'Isabella Romano', role: 'Brand Director, Spa Atelier · Italy' },
  { quote: "Reliable, transparent and competitively priced. Their direct-from-mine model translates into real margin on the retail shelf.", name: 'Rajesh Kapoor', role: 'CEO, Aroma Distributors · India' },
  { quote: "Halotherapy room project — 6 tons of polished pink salt bricks. Cut to spec, sealed, palletized and dispatched on schedule. Highly recommended.", name: 'Layla Hassan', role: 'Project Lead, Velvet Wellness · Saudi Arabia' },
  { quote: "Three years in, no shipment issue, no quality complaint. That is the highest praise a B2B partner can earn.", name: 'Daniel Park', role: 'Export Manager, Mirage Foods · South Korea' },
];
