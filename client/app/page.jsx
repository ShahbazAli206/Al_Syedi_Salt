import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import SaltImage from '@/components/SaltImage';
import Flag from '@/components/Flag';
import Chatbot from '@/components/Chatbot';
import FAQ from '@/components/FAQ';
import { VARIETIES } from '@/data/catalog';

export default async function Home() {
  const varieties = VARIETIES;

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
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
          <div className="hero-tag">
            <span>Premium</span>
            <span className="pill">Himalayan Pink Salt</span>
            <span>Since 1998</span>
          </div>
          <h1>
            Bulk Salt Manufacturing<br />
            <span className="gold-word">&amp;</span> Global<br />
            <span className="gold-word">Wholesale Supply</span>
          </h1>
          <p>
            Al Syedi Group is a trusted manufacturer and exporter of premium Himalayan Pink Salt, edible salts, bath &amp; spa salts, decorative salt lamps, salt bricks and industrial-grade salts — shipped in bulk to clients across the UK, US, Canada, Europe and the Middle East.
          </p>
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
      <section className="showcase" id="products-overview">
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

      {/* CAPABILITIES */}
      <section className="section capabilities" id="services">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">What We Offer</div>
          <h2 className="section-title">End-to-End <span className="gold-word">B2B Salt Solutions</span></h2>
          <div className="title-rule"></div>
        </div>
        <div className="container">
          <div className="cap-grid" data-reveal-toggle-stagger>
            <CapCard id="bulk" icon="cubes" title="Bulk Salt Supply"
              desc="High-volume edible &amp; industrial salt from our Khewra-source mines. Container loads (20ft / 40ft FCL) shipped worldwide. MOQ from 1 metric ton." />
            <CapCard id="private-label" icon="box" title="Private Label &amp; Packaging"
              desc="Your brand, our salt. Custom retail jars, pouches, gift boxes &amp; pallet packs. Full label design, barcoding &amp; regulatory dossiers included." />
            <CapCard id="custom" icon="grind" title="Custom Grinds &amp; Blends"
              desc="Fine, medium, coarse, granular, powder &amp; chunk — tailored to your industry. Blended with herbs, citrus zest or mineral notes on request." />
            <CapCard id="lifestyle" icon="lamp" title="Salt Lamps, Bricks &amp; Spa"
              desc="Hand-carved Himalayan salt lamps, polished salt tiles for halotherapy rooms, bath &amp; spa salt blends — all manufactured to export standards." />
          </div>
          {/* Feature strip inside capabilities */}
          <div className="cap-features" data-reveal-toggle-stagger>
            {[
              { icon: 'mountain', label: 'Mine to Market',  sub: 'Full Traceability' },
              { icon: 'beaker',   label: 'Lab Tested',      sub: 'Every Batch' },
              { icon: 'ship',     label: 'Secure Shipping', sub: 'Global Coverage' },
              { icon: 'support',  label: '24/7 B2B Support',sub: 'Dedicated Team' },
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

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-grid">
          <div className="about-text" data-reveal-toggle="left">
            <div className="eyebrow">About Al Syedi Group</div>
            <h2>From the Khewra Salt Range to <span className="gold-word">Kitchens &amp; Spas Worldwide</span></h2>
            <p>
              For over two decades, Al Syedi Group has been a trusted name in the global salt trade — quarrying, refining and exporting the world&apos;s purest Himalayan Pink Salt from the legendary Khewra Salt Range, the second-largest salt mine on Earth.
            </p>
            <p>
              From a single mine-side operation to a vertically integrated supplier serving 320+ B2B clients across 42 countries, our promise has never changed: premium purity, consistent grades and uncompromising service.
            </p>
            <ul className="checklist">
              {[
                'Vertically Integrated Mine-to-Market',
                'In-House Lab &amp; Quality Control',
                'ISO 22000, HACCP, BRC, Halal &amp; Kosher Certified',
                'Container-Load Shipping to 42 Countries',
              ].map((t) => (
                <li key={t}>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: t }} />
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-gold">Partner With Us</Link>
          </div>
          <div className="about-images" data-reveal-toggle="right">
            <div className="about-main-img">
              <SaltImage kind="crystal-display" alt="Khewra Pink Salt Crystals" />
              <div className="about-overlay-cards">
                <div className="about-overlay-card">
                  <div className="aoc-thumb">
                    <SaltImage kind="pink-coarse" alt="Raw Himalayan Salt" />
                  </div>
                  <div>
                    <div className="aoc-label">Raw Himalayan Salt</div>
                    <div className="aoc-sub">Direct from Khewra Mines</div>
                  </div>
                </div>
                <div className="about-overlay-card">
                  <div className="aoc-thumb">
                    <SaltImage kind="lamp-natural" alt="Salt Lamps & Decor" />
                  </div>
                  <div>
                    <div className="aoc-label">Salt Lamps &amp; Decor</div>
                    <div className="aoc-sub">Handcrafted Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH BENEFITS — Why Pink Salt */}
      <section className="benefits" id="benefits">
        {/* Decorative crystal photo — bleeds from the right edge */}
        <div className="benefits-crystal" aria-hidden="true">
          <SaltImage kind="pink-coarse" alt="" />
        </div>
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

      {/* MINERAL COMPOSITION */}
      <section className="minerals" id="composition">
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
            {/* Left — product photo */}
            <div className="mineral-visual" data-reveal-toggle="left">
              <SaltImage kind="pink-granular" alt="Himalayan Pink Salt crystals" />
            </div>

            {/* Right — compound table */}
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

          {/* Bottom 4-stat strip */}
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

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">Our Mine-to-Market Process</div>
          <h2 className="section-title">From the <span className="gold-word">Khewra Range</span> to Your Warehouse</h2>
        </div>
        <div className="container">
          <div className="process-steps" data-reveal-toggle-stagger>
            {[
              { num: '01', line1: 'Hand',       line2: 'Mining',    icon: 'pickaxe' },
              { num: '02', line1: 'Sorting &',  line2: 'Grading',   icon: 'sort' },
              { num: '03', line1: 'Crushing &', line2: 'Milling',   icon: 'mill' },
              { num: '04', line1: 'Lab',         line2: 'Testing',  icon: 'beaker' },
              { num: '05', line1: 'Custom',      line2: 'Packaging',icon: 'box' },
              { num: '06', line1: 'Container',   line2: 'Loading',  icon: 'container' },
              { num: '07', line1: 'Global',      line2: 'Delivery', icon: 'ship' },
            ].map((s) => (
              <div className="step" key={s.num}>
                <span className="step-num">{s.num}</span>
                <div className="step-icon"><ProcessIcon name={s.icon} /></div>
                <div className="step-label">
                  <span>{s.line1}<br/></span>
                  <span>{s.line2}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stats strip */}
          <div className="process-stats" data-reveal-toggle-stagger>
            {[
              { num: '25+',   lbl: 'Years\nof Expertise' },
              { num: '18K+ MT', lbl: 'Shipped\nAnnually' },
              { num: '42+',   lbl: 'Countries\nServed' },
              { num: '320+',  lbl: 'Active\nB2B Clients' },
            ].map((s) => (
              <div className="process-stat" key={s.lbl}>
                <div>
                  <span className="process-stat-num">{s.num}</span>
                  <span className="process-stat-lbl">{s.lbl.replace('\n', ' ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALT GRADE REFERENCE CHART */}
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
            <GradeStep name="Powder"  spec="< 0.2 mm"   use="Seasoning blends, bakery, pharma" dotCount={36} dotSize={1.4} />
            <GradeStep name="Fine"    spec="0.2–0.5 mm" use="Table salt, retail jars, food service" dotCount={24} dotSize={2.4} />
            <GradeStep name="Medium"  spec="0.5–1.5 mm" use="Cooking, brining, gourmet retail" dotCount={16} dotSize={3.5} />
            <GradeStep name="Coarse"  spec="1.5–3 mm"   use="Grinders, mills, BBQ rubs" dotCount={9} dotSize={5} />
            <GradeStep name="Chunk"   spec="3 mm – 5 cm" use="Lamps, bricks, halotherapy, lick blocks" dotCount={4} dotSize={9} />
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="partners" id="partners" data-reveal-toggle="fade">
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
      <section className="houses" id="collections">
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
              { name: 'Edible Range',  icon: 'spoon',   kind: 'pink-fine',       desc: 'Food grade pink, white & black salts in fine, coarse & gourmet variants.' },
              { name: 'Pink Crystal',  icon: 'crystal', kind: 'crystal-display', desc: 'Premium Himalayan rock crystal salt for grinders & retail.' },
              { name: 'Bath & Spa',    icon: 'leaf',    kind: 'bath-lavender',   desc: 'Therapeutic bath salts, soak & spa-grade blends.' },
              { name: 'Lifestyle',     icon: 'lamp',    kind: 'lamp-natural',    desc: 'Himalayan salt lamps, USB lamps & candle holders.' },
              { name: 'Construction',  icon: 'brick',   kind: 'salt-brick',      desc: 'Polished salt bricks & tiles for halotherapy rooms & salt walls.' },
              { name: 'Industrial',    icon: 'gear',    kind: 'animal-lick',     desc: 'Animal lick salts, water softener pellets & de-icing salt.' },
            ].map((h) => (
              <div className="house-card" key={h.name}>
                <div className="house-card-top">
                  <div className="house-icon"><CollectionIcon name={h.icon} /></div>
                </div>
                <div className="house-card-img">
                  <SaltImage kind={h.kind} alt={h.name} />
                </div>
                <div className="house-card-body">
                  <h4>{h.name}</h4>
                  <p>{h.desc}</p>
                  <span className="house-card-arrow">→</span>
                </div>
              </div>
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
            {[...varieties, ...varieties].map((ing, i) => (
              <div className="ingredient-card" key={i} aria-hidden={i >= varieties.length}>
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

      {/* PACKAGING OPTIONS — redesigned */}
      <section className="pkg-section" id="packaging">
        {/* Top: text left + decorative image right */}
        <div className="pkg-top">
          <div className="pkg-top-left" data-reveal-toggle="left">
            <div className="pkg-eyebrow">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M5 12l5-5M5 12l5 5"/></svg>
              PACKAGING OPTIONS
            </div>
            <h2 className="pkg-title">From Mine Bag to<br/><span className="pkg-accent">Retail Shelf</span></h2>
            <p className="pkg-desc">Pick a packaging format that fits your supply chain — or hand us your brand brief and we&apos;ll design a custom solution.</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="pkg-bg-img" src="/salt-bg.jpg" alt="" aria-hidden="true" />
        </div>

        {/* Card grid */}
        <div className="pkg-grid-wrap">
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

        {/* Bottom feature strip */}
        <div className="pkg-features">
          {[
            { icon:'scissors',    label:'Custom Solutions',  sub:'Tailored packaging to fit your brand.' },
            { icon:'shield-check',label:'Premium Quality',   sub:'Food-grade, durable & export ready.' },
            { icon:'globe2',      label:'Global Standards',  sub:'Compliant with international packaging norms.' },
            { icon:'truck',       label:'Secure Delivery',   sub:'Strong packaging for safe worldwide shipping.' },
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
      </section>

      {/* BULK PRICING TIERS */}
      <section className="pricing" id="pricing">
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

      {/* PROMISE */}
      <section className="section promise" id="promise">
        <div className="container" style={{ textAlign: 'center' }} data-reveal-toggle="up">
          <div className="eyebrow">Why Importers Choose Us</div>
          <h2 className="section-title">The <span className="gold-word">Al Syedi</span> Promise</h2>
          <div className="title-rule"></div>
        </div>
        <div className="container">
          <div className="promise-grid" data-reveal-toggle-stagger>
            <PromiseCard icon="purity" title="99.8% Pure Crystal" desc="Hand-mined from the deepest seams of the Khewra Salt Range and lab-verified to deliver consistent purity batch after batch." />
            <PromiseCard icon="grade" title="Every Grade On Demand" desc="Powder, fine, medium, coarse, chunk, lump — milled and screened to your exact specification with full traceability." />
            <PromiseCard icon="price" title="Direct-from-Mine Pricing" desc="No middlemen. Vertical integration means margins for you and quality that the high-street can&apos;t match." />
            <PromiseCard icon="globe" title="Container Logistics" desc="FCL / LCL shipments via Karachi, Jebel Ali &amp; Port Qasim — to any port worldwide, with full documentation handled." />
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS — redesigned */}
      <section className="certs-section" id="certifications">
        {/* Top: text left + decorative image right */}
        <div className="certs-top">
          <div className="certs-top-left" data-reveal-toggle="left">
            <div className="certs-eyebrow">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></svg>
              AUDITED &amp; CERTIFIED
            </div>
            <h2 className="certs-title">Compliance You Can<br/><span className="certs-accent">Stake Your Brand On</span></h2>
            <p className="certs-desc">We meet the world&apos;s most recognized food safety, quality and ethical standards — so you can sell with confidence.</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="certs-bg-img" src="/salt-bg.jpg" alt="" aria-hidden="true" />
        </div>

        {/* Cert badge grid */}
        <div className="certs-grid-wrap">
          {[
            { type:'iso',    name:'ISO 22000',      sub:'Food Safety' },
            { type:'haccp',  name:'HACCP',           sub:'Hazard Analysis' },
            { type:'brc',    name:'BRC AA+',          sub:'Global Standard' },
            { type:'halal',  name:'Halal',            sub:'Certified' },
            { type:'kosher', name:'Kosher',           sub:'Certified' },
            { type:'usda',   name:'USDA Organic',     sub:'Approved' },
            { type:'fda',    name:'FDA Registered',   sub:'USA' },
            { type:'eu',     name:'EU Compliant',     sub:'REACH' },
            { type:'gmp',    name:'GMP',              sub:'Good Practice' },
            { type:'nongmo', name:'Non-GMO',          sub:'Verified' },
            { type:'vegan',  name:'Vegan Society',    sub:'Registered' },
            { type:'iso14k', name:'ISO 14001',        sub:'Environment' },
          ].map((c) => (
            <div className="cert-b-card" key={c.name}>
              <div className="cert-b-logo"><CertBadgeLogo type={c.type} /></div>
              <div className="cert-b-name">{c.name}</div>
              <div className="cert-b-sub">{c.sub}</div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="certs-cta-bar">
          <div className="certs-cta-left">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{flexShrink:0,color:'#c8473a'}}>
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/>
            </svg>
            <p>Documentation, lab reports, and certificates available on request.</p>
          </div>
          <Link href="/contact" className="certs-dl-btn">
            DOWNLOAD DOCUMENTS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </Link>
        </div>

        {/* Trust strip */}
        <div className="certs-trust-strip">
          {[
            { icon:<><path d="M17 11H7a5 5 0 000 10h10a5 5 0 000-10z"/><path d="M12 11V4M9 7l3-3 3 3"/></>, label:'Trusted by 320+ B2B Clients' },
            { icon:<><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>, label:'Exporting to 42+ Countries' },
            { icon:<><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>, label:'Consistent Quality Every Batch' },
            { icon:<><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4"/></>, label:'Long-Term Partnerships' },
          ].map((t) => (
            <div className="certs-trust-item" key={t.label}>
              <div className="certs-trust-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">{t.icon}</svg>
              </div>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL MARKETS — split with world map */}
      <section className="markets" id="markets">
        <div className="markets-split">
          <div className="markets-left" data-reveal-toggle="left">
            <div className="eyebrow">Where We Ship</div>
            <h2>Active in <span className="gold-word">UK, USA &amp; Across Europe</span> —<br/>Delivering to <span className="gold-word">42 Countries</span></h2>
            <p>Container-load shipments leave our facilities every week. Below are our top-volume markets.</p>
            <div className="markets-grid-new" data-reveal-toggle-stagger>
              <MarketCard code="gb" country="United Kingdom" meta="London, Manchester, Birmingham" />
              <MarketCard code="us" country="United States"  meta="New York, Chicago, Los Angeles" />
              <MarketCard code="de" country="Germany"        meta="Berlin, Hamburg, Frankfurt" />
              <MarketCard code="fr" country="France"         meta="Paris, Lyon, Marseille" />
              <MarketCard code="nl" country="Netherlands"    meta="Rotterdam, Amsterdam" />
              <MarketCard code="it" country="Italy"          meta="Milan, Rome" />
              <MarketCard code="es" country="Spain"          meta="Madrid, Barcelona" />
              <MarketCard code="pl" country="Poland"         meta="Warsaw" />
              <MarketCard code="se" country="Sweden"         meta="Stockholm" />
            </div>
            <div className="markets-btn" style={{ marginTop: '1.75rem' }}>
              <Link href="/#markets" className="btn btn-gold">View All Markets</Link>
            </div>
          </div>

          {/* World map panel */}
          <div className="markets-right" data-reveal-toggle="right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
              alt="Global shipping network"
              className="markets-map-img"
            />
            <div className="markets-map-overlay" />
            <div className="markets-stat-panel">
              <div className="markets-stat-num">42+</div>
              <div className="markets-stat-lbl">Countries Covered</div>
              <div className="markets-tagline">
                Global Reach.<br />
                <span className="gold-word">Local Commitment.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="testimonials" id="reviews">
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

      {/* BRAND STRIP */}
      <section className="brand-strip" id="brands-labeled" data-reveal-toggle="fade">
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

      {/* MID CTA */}
      <section className="cta-section" data-reveal-toggle="scale">
        <h2>Looking for a <span className="gold-word">Reliable</span> Salt Supplier?</h2>
        <p>Partner with Al Syedi Group for direct-from-mine pricing, private label flexibility and a logistics partner who actually picks up the phone.</p>
        <Link href="/contact" className="btn btn-gold">Request a Quote Now</Link>
      </section>

      {/* DUAL COL 1 — Naturally Sourced */}
      <section className="dual-col">
        <div className="text-side" data-reveal-toggle="left">
          <div className="eyebrow">Naturally Sourced</div>
          <h3 className="serif">From a 250 Million-Year-Old <span className="gold-word">Salt Range</span></h3>
          <p>
            Every grain we ship is hand-mined from the Khewra Salt Range in Pakistan — the world&apos;s second-largest salt mine and the source of the original, fossilized seabed deposits that give Himalayan Pink its iconic rose hue.
          </p>
          <Link href="/products" className="btn btn-gold">
            Explore Our Range
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>
        </div>
        <div className="image-side" data-reveal-toggle="right">
          <SaltImage kind="crystal-display" alt="Pink salt display" />
          <SaltImage kind="pink-coarse"     alt="Pink coarse crystals" />
          <SaltImage kind="lamp-natural"    alt="Hand-carved salt lamp" />
        </div>
      </section>

      {/* DUAL COL 2 — Global Export */}
      <section className="dual-col">
        <div className="image-side" data-reveal-toggle="left">
          <SaltImage kind="salt-brick" alt="Salt bricks" />
          <SaltImage kind="bath-lavender" alt="Bath salt with lavender" />
          <SaltImage kind="salt-tile" alt="Salt tiles" />
        </div>
        <div className="text-side cream" data-reveal-toggle="right">
          <div className="eyebrow">Global Export</div>
          <h3 className="serif">FCL &amp; LCL Shipping to <span className="gold-word">42 Countries</span></h3>
          <p>
            From small trial shipments to weekly 40ft container loads, our in-house logistics team handles customs, certifications, port handling and last-mile distribution — so your warehouse simply sees deliveries arrive on time.
          </p>
          <Link href="/contact" className="btn btn-gold">
            Discuss Your Volume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* FROM OUR MINE — insights teaser */}
      <section className="insights" id="insights">
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

function CapCard({ id, title, desc, icon }) {
  return (
    <div className="cap-card" id={id}>
      <div className="cap-icon-circle"><CapIcon name={icon} /></div>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
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
    <div className="promise-card">
      <div className="promise-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          {paths[icon]}
        </svg>
      </div>
      <h4 dangerouslySetInnerHTML={{ __html: title }} />
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
