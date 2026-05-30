'use client';

import { useState } from 'react';

const ITEMS = [
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'For bulk salt (edible, industrial), our MOQ is 1 metric ton (1,000 kg). For salt lamps and bath products, MOQ starts at 100 units. For private-label packaged retail, MOQ is 5,000 units per SKU. We can be flexible on first-trial orders — just ask.',
  },
  {
    q: 'Where do you ship to, and how long does shipping take?',
    a: 'We ship to 42+ countries via FCL (20ft / 40ft container) and LCL groupage. Typical transit times from Karachi: UK & EU 21–28 days, USA East Coast 30–35 days, USA West Coast 35–40 days, Canada 32–38 days, UAE 7–10 days, Australia 28–32 days.',
  },
  {
    q: 'What Incoterms do you offer?',
    a: 'EXW Khewra mine-side, FOB Karachi / Port Qasim, CFR / CIF to your destination port, and DAP / DDP to your warehouse for select markets (UK, USA, Canada, UAE, Germany). All documentation (Phytosanitary, COA, MSDS, Certificate of Origin, Halal/Kosher where applicable) is included.',
  },
  {
    q: 'What payment terms do you accept?',
    a: '30% T/T advance and 70% against B/L copy is our standard. We also accept LC at sight (irrevocable, confirmed) for orders above $20,000, and recurring buyers can negotiate 30-day open terms after the third successful shipment.',
  },
  {
    q: 'Can I get product samples before placing a bulk order?',
    a: 'Yes. We send free 250 g – 500 g sample packs for evaluation. Lab analysis can be commissioned at cost. Customer pays courier (DHL / FedEx) — typical delivery 5–7 working days worldwide.',
  },
  {
    q: 'Do you offer private label packaging?',
    a: 'Yes — fully end-to-end. Your logo, your label artwork, your jar / pouch / box shape, your barcoding (GS1 / UPC / EAN) and your regulatory dossier. Our design team can also build the label artwork from scratch if you only have a brand name.',
  },
  {
    q: 'Are your salts genuinely from the Khewra Salt Range?',
    a: 'Yes — we mine and quarry directly from the Khewra Salt Range in District Jhelum, Pakistan (the world\'s second-largest salt mine). Each batch is traceable to its mining tunnel and date. We provide Certificate of Origin with every shipment.',
  },
  {
    q: 'What certifications do you hold?',
    a: 'ISO 22000 (Food Safety), HACCP, BRC AA+ Global Standard, GMP, ISO 14001 (Environment), Halal (JAKIM), Kosher (OU), FDA Registered (USA), USDA Organic (bath range), Non-GMO Project Verified, Vegan Society and Reach-compliant for EU markets.',
  },
  {
    q: 'Can I visit your facility?',
    a: 'Absolutely. We host buyer visits at the Khewra mine and our packing facility year-round. Visa invitation letters provided. Many of our long-term clients have visited at least once — we can also arrange virtual factory tours over WhatsApp / Zoom.',
  },
  {
    q: 'How do I request a formal quotation?',
    a: 'Email sales@alsyedigroup.com or WhatsApp +92 323 538 3806 with: (1) product / grade, (2) quantity per SKU, (3) destination port, (4) Incoterm preference. We respond with a formal proforma invoice within 24 business hours.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container" style={{ textAlign: 'center' }} data-reveal="up">
        <div className="eyebrow">Common Questions</div>
        <h2 className="section-title">Everything Importers <span className="gold-word">Need to Know</span></h2>
        <div className="title-rule"></div>
      </div>

      <div className="faq-wrap" data-reveal-stagger>
        {ITEMS.map((item, i) => (
          <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
            <button
              className="faq-q"
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              aria-expanded={openIdx === i}
            >
              <span>{item.q}</span>
              <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
