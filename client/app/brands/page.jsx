import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHeader from '@/components/PageHeader';
import Chatbot from '@/components/Chatbot';
import { fetchJSON } from '@/lib/api';

export const metadata = { title: 'Salt Collections — Al Syedi Group' };

const FALLBACK_COLLECTIONS = [
  { name: 'Pink Edible Range',        icon: 'spoon',   description: 'Our flagship food-grade Himalayan Pink Salt — fine, coarse, granular and gourmet flakes. The cleanest pink crystal on the global market, lab-verified to 99.8% NaCl with the trace mineral signature that defines premium quality.' },
  { name: 'White Refined Range',      icon: 'crystal', description: 'Iodized and non-iodized refined white salt for retail and food-service. Free-flowing, anti-caking treated where required, with consistent crystal size and full traceability from mine to pack.' },
  { name: 'Black Salt (Kala Namak)',  icon: 'flask',   description: 'South-Asian culinary classic — sulfur-rich, smoky and pungent. Stone-mined, traditionally kiln-fired and ground to chef-grade specifications. Vegan egg-substitute favourite worldwide.' },
  { name: 'Bath &amp; Spa Collection',    icon: 'leaf',    description: 'Therapeutic bath salts, foot soaks and scented blends with lavender, eucalyptus, rose and citrus. Manufactured in our cosmetic-grade facility with full INCI labeling, MSDS and dermatological data sheets.' },
  { name: 'Lifestyle &amp; Lamps',        icon: 'lamp',    description: 'Hand-carved natural lamps, geometric pyramids, USB desk lamps, tealight holders and salt candleholders. Wired to UK / EU / US / AU standards on request, with full CE / FCC certification.' },
  { name: 'Salt Bricks &amp; Tiles',      icon: 'brick',   description: 'Polished construction-grade salt bricks (8&quot;x4&quot;x2&quot;) and tiles (6&quot;x6&quot;x1&quot;) for halotherapy rooms, spa walls and decorative interiors. Custom dimensions cut to your architectural drawings.' },
  { name: 'Gourmet Salt Slabs',       icon: 'plate',   description: 'Restaurant-grade salt plates for cooking, serving and curing. Heat-rated to 500°C, hand-finished and packaged with care instructions. Bulk-supplied to gourmet retailers worldwide.' },
  { name: 'Industrial Salt Range',    icon: 'gear',    description: 'Animal lick salts, water-softener pellets, de-icing rock salt, chemical-grade NaCl and tanning salt. Container-load shipments for agricultural, municipal and industrial customers.' },
];

async function getBrands() {
  try {
    const data = await fetchJSON('/brands');
    return Array.isArray(data) && data.length > 0 ? data : FALLBACK_COLLECTIONS;
  } catch {
    return FALLBACK_COLLECTIONS;
  }
}

export default async function BrandsPage() {
  const collections = await getBrands();

  return (
    <>
      <Navbar />
      <PageHeader title="Salt Collections" crumb="Collections" />

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }} data-reveal="up">
          <div className="eyebrow">Eight Specialist Ranges</div>
          <h2 className="section-title">Built for <span className="gold-word">Importers, Retailers &amp; Industry</span></h2>
          <p style={{ maxWidth: '720px', margin: '1.5rem auto 3rem', color: 'var(--text-dim)', fontSize: '.97rem' }}>
            Each Al Syedi Group collection is engineered for a specific channel — retail private label, food-service, wellness, hospitality interiors or heavy industry. All ranges are vertically integrated: we mine, refine, pack and ship under one roof.
          </p>
        </div>
        <div className="container">
          <div className="brands-grid" data-reveal-stagger>
            {collections.map((b, i) => (
              <div className="brand-card" key={b._id || b.name}>
                <div className="brand-card-icon">
                  <CollectionIcon name={b.icon || 'crystal'} />
                </div>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: b.name }} />
                  <div className="brand-card-rule"></div>
                  <p dangerouslySetInnerHTML={{ __html: b.description }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }} data-reveal="up">
            <Link href="/contact" className="btn btn-gold">Request a Collection Catalogue</Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
      <Chatbot />
    </>
  );
}

function CollectionIcon({ name }) {
  const paths = {
    spoon:   <><path d="M14 4a4 4 0 014 4c0 2.5-2 4-4 4v8h-2v-8c-2 0-4-1.5-4-4a4 4 0 014-4z"/></>,
    crystal: <><polygon points="12,2 20,9 16,22 8,22 4,9"/><path d="M12 2v20M4 9h16"/></>,
    flask:   <><path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1l-6-11V3"/></>,
    leaf:    <><path d="M11 20A7 7 0 014 13c0-6 8-11 16-11 0 8-5 16-9 18a7 7 0 01-7-7zM11 13l9-9"/></>,
    lamp:    <><path d="M9 21h6M12 17v4M8 17h8l-1-6H9z"/><circle cx="12" cy="7" r="3"/></>,
    brick:   <><rect x="3" y="5" width="18" height="4"/><rect x="3" y="11" width="18" height="4"/><rect x="3" y="17" width="18" height="4"/></>,
    plate:   <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></>,
    gear:    <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>,
  };
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {paths[name] || paths.crystal}
    </svg>
  );
}
