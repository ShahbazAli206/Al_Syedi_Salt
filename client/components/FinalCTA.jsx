import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="eyebrow">Mined in Khewra · Shipped Worldwide</div>
      <h2>Let&apos;s build your<br />salt supply chain.</h2>
      <p>
        Bulk Himalayan Pink Salt, private label packaging, custom grinds &amp; spa blends — MOQ from 1 metric ton. First quote within 24 hours.
      </p>
      <div className="final-cta-actions">
        <Link href="/contact" className="btn btn-outline">Request a Quote</Link>
        <Link href="/products" className="btn btn-outline">Browse Products</Link>
      </div>
    </section>
  );
}
