import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Chatbot from '@/components/Chatbot';
export const metadata = { title: 'Salt Collections — Al Syedi Group' };

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

export default async function BrandsPage() {
  const collections = COLLECTIONS;

  return (
    <>
      <Navbar />
      <PageHeader title="Salt Collections" crumb="Collections" />

      <section className="section brands-section">
        <div className="container" style={{ textAlign: 'center' }} data-reveal="up">
          <div className="eyebrow">Eight Specialist Ranges</div>
          <h2 className="section-title">Built for <span className="gold-word">Importers, Retailers &amp; Industry</span></h2>
          <p style={{ maxWidth: '680px', margin: '1.25rem auto 2.5rem', color: 'var(--text-dim)', fontSize: '.93rem' }}>
            Each Al Syedi Group collection is engineered for a specific channel — retail private label, food-service,
            wellness, hospitality interiors or heavy industry. All ranges are vertically integrated: we mine, refine,
            pack and ship under one roof.
          </p>
        </div>
        <div className="container">
          <div className="brands-grid" data-reveal-stagger>
            {collections.map((b) => (
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

          <div style={{ textAlign: 'center', marginTop: '3rem' }} data-reveal="up">
            <Link href="/contact" className="btn btn-gold">Request a Collection Catalogue</Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </>
  );
}

function CollectionIcon({ name }) {
  const paths = {
    mountain: <>
      <path d="M2 22L9 8l4 5 3-6 6 15H2z" />
      <path d="M13 13l2-4" strokeOpacity=".5" />
    </>,
    crystal: <>
      <polygon points="12,2 19,8 16,21 8,21 5,8" />
      <line x1="12" y1="2" x2="12" y2="21" />
      <line x1="5" y1="8" x2="19" y2="8" />
    </>,
    mortar: <>
      <path d="M6 18h12a2 2 0 000-4H6a2 2 0 000 4z" />
      <path d="M8 14v-4a4 4 0 018 0v4" />
      <path d="M15 6l3-3" />
      <circle cx="18.5" cy="2.5" r="1" fill="currentColor" />
    </>,
    drop: <>
      <path d="M12 2c0 0-8 9-8 14a8 8 0 0016 0c0-5-8-14-8-14z" />
      <path d="M12 19a4 4 0 01-3.46-2" strokeOpacity=".45" />
    </>,
    lamp: <>
      <path d="M9.5 18h5l-1.2-8H10.7L9.5 18z" />
      <path d="M9.5 11a2.5 2.5 0 015 0" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="9.5" y1="22" x2="14.5" y2="22" />
      <line x1="12" y1="3" x2="12" y2="4.5" />
      <line x1="6.5" y1="5" x2="7.5" y2="6" />
      <line x1="17.5" y1="5" x2="16.5" y2="6" />
    </>,
    brick: <>
      <rect x="2" y="4"  width="20" height="4" rx="1.5" />
      <rect x="2" y="10" width="9"  height="4" rx="1.5" />
      <rect x="13" y="10" width="9" height="4" rx="1.5" />
      <rect x="2" y="16" width="20" height="4" rx="1.5" />
    </>,
    slab: <>
      <ellipse cx="12" cy="17" rx="9" ry="2.5" />
      <path d="M3 17v-3a9 2.5 0 0118 0v3" />
      <line x1="8"  y1="9" x2="8"  y2="14" strokeOpacity=".5" />
      <line x1="12" y1="7" x2="12" y2="14" strokeOpacity=".5" />
      <line x1="16" y1="9" x2="16" y2="14" strokeOpacity=".5" />
    </>,
    gear: <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" />
    </>,
  };
  return (
    <svg
      width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
    >
      {paths[name] ?? paths.crystal}
    </svg>
  );
}
