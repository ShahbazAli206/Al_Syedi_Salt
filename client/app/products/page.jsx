import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ProductGrid from '@/components/ProductGrid';
import Chatbot from '@/components/Chatbot';
import { PRODUCTS } from '@/data/catalog';

export const metadata = { title: 'Salt Products — Al Syedi Group' };

export default async function ProductsPage() {
  const products = PRODUCTS;

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
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-mute)' }}>Loading…</div>}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </>
  );
}
