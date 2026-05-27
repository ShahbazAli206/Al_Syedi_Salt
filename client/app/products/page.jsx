import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import PageHeader from '@/components/PageHeader';
import ProductGrid from '@/components/ProductGrid';
import Chatbot from '@/components/Chatbot';
import { fetchJSON } from '@/lib/api';

export const metadata = { title: 'Salt Products — Al Syedi Group' };

const FALLBACK_PRODUCTS = [
  // ----- Edible -----
  { name: 'Pink Salt Fine',          type: 'Edible · Table Grade',     category: 'edible',       kind: 'pink-fine',     price: '$0.65', unit: 'kg', featured: true },
  { name: 'Pink Salt Coarse',        type: 'Edible · Grinder Grade',   category: 'edible',       kind: 'pink-coarse',   price: '$0.55', unit: 'kg' },
  { name: 'Pink Salt Granular',      type: 'Edible · Cooking Grade',   category: 'edible',       kind: 'pink-granular', price: '$0.60', unit: 'kg' },
  { name: 'White Salt Refined',      type: 'Edible · Iodized',         category: 'edible',       kind: 'white-refined', price: '$0.40', unit: 'kg' },
  { name: 'Black Salt (Kala Namak)', type: 'Edible · Specialty',       category: 'edible',       kind: 'black-salt',    price: '$1.10', unit: 'kg' },
  { name: 'Pink Salt Flakes',        type: 'Gourmet · Hand-Harvested', category: 'edible',       kind: 'pink-flakes',   price: '$2.40', unit: 'kg', featured: true },
  { name: 'Sea Salt Flakes',         type: 'Gourmet · Natural',        category: 'edible',       kind: 'sea-flakes',    price: '$2.20', unit: 'kg' },

  // ----- Bath & Spa -----
  { name: 'Bath Salt Lavender',      type: 'Bath · Scented Blend',     category: 'bath',         kind: 'bath-lavender',   price: '$1.80', unit: 'kg' },
  { name: 'Bath Salt Eucalyptus',    type: 'Bath · Aromatherapy',      category: 'bath',         kind: 'bath-eucalyptus', price: '$1.95', unit: 'kg' },
  { name: 'Foot Soak Salt',          type: 'Spa · Therapeutic',        category: 'bath',         kind: 'foot-soak',       price: '$1.40', unit: 'kg' },
  { name: 'Pink Salt Body Scrub',    type: 'Spa · Exfoliating',        category: 'bath',         kind: 'body-scrub',      price: '$2.20', unit: 'kg', featured: true },

  // ----- Lifestyle -----
  { name: 'Natural Salt Lamp 3kg',   type: 'Lamp · Hand-Carved',       category: 'lifestyle',    kind: 'lamp-natural',    price: '$12.50', unit: 'unit', featured: true },
  { name: 'Geometric Salt Lamp',     type: 'Lamp · Pyramid Cut',       category: 'lifestyle',    kind: 'lamp-geometric',  price: '$18.90', unit: 'unit' },
  { name: 'USB Salt Lamp',           type: 'Lamp · Desktop',           category: 'lifestyle',    kind: 'lamp-usb',        price: '$8.40',  unit: 'unit' },
  { name: 'Salt Candle Holder',      type: 'Decor · Tealight',         category: 'lifestyle',    kind: 'candle-holder',   price: '$5.20',  unit: 'unit' },

  // ----- Construction -----
  { name: 'Salt Brick 8x4x2',        type: 'Construction · Polished',  category: 'construction', kind: 'salt-brick',     price: '$3.80', unit: 'pc' },
  { name: 'Salt Tile 6x6x1',         type: 'Construction · Sauna Wall', category: 'construction', kind: 'salt-tile',     price: '$2.95', unit: 'pc' },
  { name: 'Salt Slab Cooking',       type: 'Culinary · Plate',         category: 'construction', kind: 'salt-slab',       price: '$9.50', unit: 'pc', featured: true },

  // ----- Industrial -----
  { name: 'Animal Lick Salt 5kg',    type: 'Livestock · Mineral',      category: 'industrial',   kind: 'animal-lick',     price: '$1.50', unit: 'pc' },
  { name: 'Water Softener Pellets',  type: 'Industrial · Refined',     category: 'industrial',   kind: 'water-softener',  price: '$0.30', unit: 'kg' },
  { name: 'De-Icing Rock Salt',      type: 'Industrial · Winter',      category: 'industrial',   kind: 'de-icing',        price: '$0.18', unit: 'kg' },
  { name: 'Chemical Grade Salt',     type: 'Industrial · 99% NaCl',    category: 'industrial',   kind: 'chemical-grade',  price: '$0.22', unit: 'kg' },
];

async function getProducts() {
  try {
    const data = await fetchJSON('/products');
    return Array.isArray(data) && data.length > 0 ? data : FALLBACK_PRODUCTS;
  } catch {
    return FALLBACK_PRODUCTS;
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <PageHeader title="Salt Products" crumb="Products" />

      <section className="section">
        <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }} data-reveal="up">
          <div className="eyebrow">Our Catalogue</div>
          <h2 className="section-title">22+ SKUs · 5 Categories · <span className="gold-word">One Trusted Source</span></h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: 640, margin: '1rem auto 0', fontSize: '.95rem' }}>
            Wholesale pricing per kg / unit (indicative FOB Karachi). Container-load discounts available — contact our team for FOB / CIF quotations to your nearest port.
          </p>
        </div>
        <div className="container">
          <ProductGrid products={products} />
        </div>
      </section>

      <FinalCTA />
      <Footer />
      <Chatbot />
    </>
  );
}
