'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import SaltImage from '@/components/SaltImage';
import Flag from '@/components/Flag';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ── About Al Syedi ── */}
      <section className="about abt-even" id="about">
        <div className="about-grid">
          <div className="about-text">
            <div className="about-eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
              About Our Company
            </div>
            <h2 className="about-heading">Syedi Salt is Pakistan&apos;s Leading <span className="gold-word">Premium Himalayan Pink Salt</span> Manufacturer &amp; Exporter Since 1998.</h2>
            <p className="about-desc">
              From the legendary Khewra Salt Range — the second-largest salt mine on Earth — we quarry, refine and export the world&apos;s purest Himalayan Pink Salt. Our vertically integrated mine-to-market operation serves 320+ B2B clients across 42 countries with consistent quality, competitive pricing and reliable container-load shipping.
            </p>
            <div className="about-features">
              {[
                { icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>, label: 'ISO & HACCP Certified' },
                { icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>, label: 'On-Time Global Delivery' },
                { icon: <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4"/></>, label: 'Custom Packaging Solutions' },
                { icon: <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></>, label: '24/7 Export Support' },
                { icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/></>, label: 'Private Label & White Label' },
                { icon: <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>, label: 'Container-Load Shipping' },
              ].map((f) => (
                <div className="about-feat" key={f.label}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{f.icon}</svg>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
            <div className="about-actions">
              <Link href="/contact" className="btn btn-gold">
                Contact Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
              <a href="tel:+18778983373" className="about-phone">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
                Toll Free: +1 (877) 898-3373
              </a>
            </div>
          </div>
          <div className="about-images">
            <div className="about-main-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about_us_image.png" alt="Syedi Salt — Premium Himalayan Pink Salt" className="about-hero-img" />
              <div className="about-stat-card">
                <div className="about-stat-num">320+</div>
                <div className="about-stat-lbl">Trusted B2B Clients</div>
                <div className="about-stat-sub">
                  <div><span className="about-stat-highlight">42+</span> Countries</div>
                  <div><span className="about-stat-highlight">18K+</span> Tons/Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Khewra Range ── */}
      <section className="process abt-odd" id="khewra">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Our Mine-to-Market Process</div>
          <h2 className="section-title">From the <span className="gold-word">Khewra Range</span> to Your Warehouse</h2>
        </div>
        <div className="container">
          <ProcessStepsAnimated />
          <div className="process-stats">
            {[
              { num: '25+',      lbl: 'Years of Expertise' },
              { num: '18K+ MT',  lbl: 'Shipped Annually' },
              { num: '42+',      lbl: 'Countries Served' },
              { num: '320+',     lbl: 'Active B2B Clients' },
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

      {/* ── Certifications ── */}
      <section className="certs-section abt-even" id="certifications">
        <div className="certs-inner">
          <div className="certs-header">
            <div className="certs-header-text">
              <div className="certs-eyebrow">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></svg>
                AUDITED &amp; CERTIFIED
              </div>
              <h2 className="certs-title">Compliance You Can<br /><span className="certs-accent">Stake Your Brand On</span></h2>
              <p className="certs-desc">We meet the world&apos;s most recognized food safety, quality and ethical standards — so you can sell with confidence.</p>
            </div>
            <div className="certs-header-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/salt-bg.jpg" alt="" />
            </div>
          </div>
          <div className="certs-grid">
            {[
              { type:'iso',    name:'ISO 22000',     sub:'Food Safety' },
              { type:'haccp',  name:'HACCP',          sub:'Hazard Analysis' },
              { type:'brc',    name:'BRC AA+',         sub:'Global Standard' },
              { type:'halal',  name:'Halal',           sub:'Certified' },
              { type:'kosher', name:'Kosher',          sub:'Certified' },
              { type:'usda',   name:'USDA Organic',    sub:'Approved' },
              { type:'fda',    name:'FDA Registered',  sub:'USA' },
              { type:'eu',     name:'EU Compliant',    sub:'REACH' },
              { type:'gmp',    name:'GMP',             sub:'Good Practice' },
              { type:'nongmo', name:'Non-GMO',         sub:'Verified' },
              { type:'vegan',  name:'Vegan Society',   sub:'Registered' },
              { type:'iso14k', name:'ISO 14001',       sub:'Environment' },
            ].map((c) => (
              <div className="cert-b-card" key={c.name}>
                <div className="cert-b-logo"><CertBadgeLogo type={c.type} /></div>
                <div className="cert-b-name">{c.name}</div>
                <div className="cert-b-sub">{c.sub}</div>
              </div>
            ))}
          </div>
          <div className="certs-cta-bar">
            <div className="certs-cta-left">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c8473a" strokeWidth="1.5" style={{flexShrink:0}}>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/>
              </svg>
              <p>Documentation, lab reports, and certificates available on request.</p>
            </div>
            <Link href="/contact" className="certs-dl-btn">
              DOWNLOAD DOCUMENTS
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </Link>
          </div>
          <div className="certs-trust-strip">
            {[
              { icon:<><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>, label:'Trusted by 320+', sub:'B2B Clients' },
              { icon:<><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>, label:'Exporting to 42+', sub:'Countries' },
              { icon:<><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>, label:'Consistent Quality', sub:'Every Batch' },
              { icon:<><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4"/></>, label:'Long-Term', sub:'Partnerships' },
            ].map((t) => (
              <div className="certs-trust-item" key={t.label}>
                <div className="certs-trust-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{t.icon}</svg>
                </div>
                <div><strong>{t.label}</strong><span>{t.sub}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Markets ── */}
      <section className="markets abt-odd" id="markets">
        <div className="markets-split">
          <div className="markets-left">
            <div className="eyebrow">Where We Ship</div>
            <h2>Active in <span className="gold-word">UK, USA &amp; Across Europe</span> —<br />Delivering to <span className="gold-word">42 Countries</span></h2>
            <p>Container-load shipments leave our facilities every week. Below are our top-volume markets.</p>
            <div className="markets-grid-new">
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
              <Link href="/contact" className="btn btn-gold">Enquire for Your Market</Link>
            </div>
          </div>
          <div className="markets-right markets-right--card">
            <div className="markets-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/42-countries.png" alt="Global shipping to 42+ countries" className="markets-card-img" />
              <div className="about-stat-card">
                <div className="about-stat-num">42+</div>
                <div className="about-stat-lbl">Countries Served</div>
                <div className="about-stat-sub">
                  <div><span className="about-stat-highlight">320+</span> Clients</div>
                  <div><span className="about-stat-highlight">25+</span> Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </>
  );
}

/* ── Helpers ── */

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

const PROCESS_STEPS = [
  { num: '01', line1: 'Hand',       line2: 'Mining',     icon: 'pickaxe' },
  { num: '02', line1: 'Sorting &',  line2: 'Grading',    icon: 'sort' },
  { num: '03', line1: 'Crushing &', line2: 'Milling',    icon: 'mill' },
  { num: '04', line1: 'Lab',        line2: 'Testing',    icon: 'beaker' },
  { num: '05', line1: 'Custom',     line2: 'Packaging',  icon: 'box' },
  { num: '06', line1: 'Container',  line2: 'Loading',    icon: 'container' },
  { num: '07', line1: 'Global',     line2: 'Delivery',   icon: 'ship' },
];

const easeInOut = (t) => t < 0.5 ? 2*t*t : -1+(4-2*t)*t;

function ProcessStepsAnimated() {
  const [activeStep, setActiveStep] = useState(0);
  const fillRef = useRef(null);

  useEffect(() => {
    const HOLD = 1500;
    const TRANSIT = 800;
    const N = PROCESS_STEPS.length;

    let rafId;
    let stepIdx = 0;
    let phaseStart = performance.now();
    let phase = 'hold';

    const setFill = (pct) => {
      if (fillRef.current) fillRef.current.style.setProperty('--p', pct.toFixed(3));
    };

    const tick = (now) => {
      const elapsed = now - phaseStart;
      if (phase === 'hold') {
        setFill((stepIdx / (N - 1)) * 100);
        if (elapsed >= HOLD) {
          if (stepIdx < N - 1) { phase = 'transit'; phaseStart = now; }
          else { stepIdx = 0; setActiveStep(0); setFill(0); phase = 'hold'; phaseStart = now; }
        }
      } else {
        const t = Math.min(elapsed / TRANSIT, 1);
        const from = (stepIdx / (N - 1)) * 100;
        const to   = ((stepIdx + 1) / (N - 1)) * 100;
        setFill(from + (to - from) * easeInOut(t));
        if (elapsed >= TRANSIT) { stepIdx += 1; setActiveStep(stepIdx); phase = 'hold'; phaseStart = now; }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="process-steps-anim">
      <div className="pstep-track" />
      <div className="pstep-fill" ref={fillRef} />
      {PROCESS_STEPS.map((s, i) => (
        <div
          key={s.num}
          className={`step pstep${i === activeStep ? ' pstep-active' : i < activeStep ? ' pstep-done' : ''}`}
        >
          <span className="step-num">{s.num}</span>
          <div className="step-icon"><AbtProcessIcon name={s.icon} /></div>
          <div className="step-label"><span>{s.line1}<br /></span><span>{s.line2}</span></div>
        </div>
      ))}
    </div>
  );
}

function AbtProcessIcon({ name }) {
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
