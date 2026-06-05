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
      <section className="svc-hero hp-odd">
        <div className="svc-hero-inner">
          <div className="svc-hero-text">
            <div className="eyebrow">Specialist Salt Services</div>
            <h1 className="svc-hero-title">Khewra-Sourced. Custom-Crafted. <span className="gold-word">World-Ready.</span></h1>
            <div className="svc-hero-rule" />
            <p className="svc-hero-desc">
              Custom grinds, private-label packaging, and container-load bulk supply — sourced directly from the Khewra Salt Range and delivered worldwide with full traceability.
            </p>
            <div className="svc-hero-actions">
              <Link href="#process" className="btn btn-outline">
                Our Process
              </Link>
            </div>
          </div>
          <div className="svc-hero-img" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/header_images/img6.png" alt="Salt supply" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'18px'}} />
          </div>
        </div>

        {/* Stats strip */}
        <div className="svc-stats">
          {[
            { num: '12+',    lbl: 'Packaging Formats' },
            { num: '7-Step', lbl: 'Quality Process' },
            { num: '48hr',   lbl: 'Quote Turnaround' },
            { num: 'FCL & LCL', lbl: 'Shipping Worldwide' },
          ].map((s) => (
            <div className="svc-stat" key={s.lbl}>
              <span className="svc-stat-num">{s.num}</span>
              <span className="svc-stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </section>


      {/* ── Packaging Options ── */}
      <section className="pkg-section hp-even" id="packaging">
        <div className="pkg-inner">
          <div className="pkg-header">
            <div className="pkg-header-text">
              <div className="pkg-eyebrow">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M5 12l5-5M5 12l5 5"/></svg>
                PACKAGING OPTIONS
              </div>
              <h2 className="pkg-title">From Mine Bag to<br/><span className="pkg-accent">Retail Shelf</span></h2>
              <p className="pkg-desc">Pick a packaging format that fits your supply chain — or hand us your brand brief and we&apos;ll design a custom solution.</p>
            </div>
            <div className="pkg-header-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/salt-bg.jpg" alt="" />
            </div>
          </div>
          <div className="brands-grid" data-reveal-toggle-stagger style={{gridTemplateColumns:'repeat(4,1fr)'}}>
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
            ].map((p, i) => (
              <div className="brand-card pkg-card-reveal" key={p.name} style={{ animationDelay: `${i * 0.3}s` }}>
                <div className="brand-card-header">
                  <div className="brand-card-icon">
                    <SvcPkgIcon name={p.icon} />
                  </div>
                  <h3>{p.name}</h3>
                </div>
                <div className="brand-card-rule" />
                <p>{p.spec}</p>
              </div>
            ))}
          </div>
          <div className="pkg-feat-strip">
            {[
              { icon:'scissors',     label:'Custom Solutions', sub:'Tailored packaging to fit your brand.' },
              { icon:'shield-check', label:'Premium Quality',  sub:'Food-grade, durable & export ready.' },
              { icon:'globe2',       label:'Global Standards', sub:'Compliant with international packaging norms.' },
              { icon:'truck',        label:'Secure Delivery',  sub:'Strong packaging for safe worldwide shipping.' },
            ].map((f) => (
              <div className="pkg-feat" key={f.label}>
                <div className="pkg-feat-icon"><SvcPkgFeatIcon name={f.icon} /></div>
                <div className="pkg-feat-text"><strong>{f.label}</strong><span>{f.sub}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mine-to-Market Process ── */}
      <section className="process hp-odd" id="process">
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
        </div>
      </section>

      {/* ── Retail Partners ── */}
      <section className="partners hp-even" id="partners">
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


<Footer />
      <Chatbot />
    </>
  );
}

/* ── Helper components ── */

function SvcBrandCard({ id, icon, title, desc }) {
  const icons = {
    cubes: <><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></>,
    box:   <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>,
    grind: <><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></>,
    lamp:  <><path d="M9 21h6M12 17v4M8 17h8l-1-6H9z"/><circle cx="12" cy="7" r="3"/></>,
  };
  return (
    <div className="brand-card" id={id}>
      <div className="brand-card-header">
        <div className="brand-card-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{icons[icon]}</svg>
        </div>
        <h3>{title}</h3>
      </div>
      <div className="brand-card-rule" />
      <p>{desc}</p>
      <Link href="/contact" className="cap-card-link" style={{ marginTop: '.75rem' }}>
        Get a Quote
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </Link>
    </div>
  );
}

function PromiseBrandCard({ icon, title, desc }) {
  const icons = {
    purity: <><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></>,
    grade:  <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>,
    price:  <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
    globe:  <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>,
  };
  return (
    <div className="brand-card">
      <div className="brand-card-header">
        <div className="brand-card-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{icons[icon]}</svg>
        </div>
        <h3>{title}</h3>
      </div>
      <div className="brand-card-rule" />
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

function SvcPkgIcon({ name }) {
  const p = {
    fibc:      <><path d="M5 4h14l-1 4-5 1-2-1H6L5 4z"/><path d="M6 8l-1 12h14l-1-12"/><path d="M12 4v-2M9 2h6"/></>,
    ppbag:     <><path d="M5 6h14v14H5z"/><path d="M5 10h14M9 6v4M15 6v4"/></>,
    jute:      <><path d="M6 4h12l-1 4-4 1-3-1H7L6 4z"/><path d="M7 8l-1 12h12l-1-12"/></>,
    carton:    <><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/></>,
    jar:       <><rect x="7" y="8" width="10" height="13" rx="1"/><path d="M9 8V5h6v3"/></>,
    pouch:     <><path d="M7 4h10l-1 17H8L7 4z"/><path d="M9 4V2h6v2"/></>,
    shaker:    <><rect x="8" y="6" width="8" height="15" rx="2"/><circle cx="11" cy="9" r=".5" fill="currentColor"/><circle cx="13" cy="11" r=".5" fill="currentColor"/></>,
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

function SvcPkgFeatIcon({ name }) {
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
