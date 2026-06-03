'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import SaltImage from './SaltImage';

const FILTERS = [
  { key: 'all',          label: 'All Products' },
  { key: 'edible',       label: 'Edible' },
  { key: 'bath',         label: 'Bath & Spa' },
  { key: 'lifestyle',    label: 'Lamps & Decor' },
  { key: 'construction', label: 'Bricks & Tiles' },
  { key: 'industrial',   label: 'Industrial' },
];

const VALID_KEYS = new Set(FILTERS.map((f) => f.key));

function ProductCard({ p }) {
  return (
    <div className="product-card" key={p._id || p.name}>
      <div className="product-img">
        {p.featured && <div className="product-badge">Bestseller</div>}
        <SaltImage kind={p.kind || 'pink-fine'} alt={p.name} />
      </div>
      <div className="product-info">
        <h4>{p.name}</h4>
        <span className="product-type">{p.type}</span>
        {p.desc && <p className="product-desc">{p.desc}</p>}
        {p.price && (
          <div className="price">
            {p.price} <small>/ {p.unit || 'kg'}</small>
          </div>
        )}
        <div className="product-actions">
          <Link href="/contact" className="product-view-btn">
            View Details
          </Link>
          <Link href="/contact" className="product-cart-btn" aria-label="Request quote">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/>
              <circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ products = [] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const raw = searchParams.get('category') || 'all';
  const filter = VALID_KEYS.has(raw) ? raw : 'all';

  function selectFilter(key) {
    const params = new URLSearchParams(searchParams.toString());
    if (key === 'all') {
      params.delete('category');
    } else {
      params.set('category', key);
    }
    const q = params.toString();
    router.push(pathname + (q ? `?${q}` : ''), { scroll: false });
  }

  const visible = filter === 'all' ? products : products.filter((p) => p.category === filter);

  // Determine number of rows based on product count
  let rowCount = 3;
  if (visible.length <= 12) rowCount = 2;
  if (visible.length <= 6) rowCount = 1;

  // Distribute products evenly across rows
  const itemsPerRow = Math.ceil(visible.length / rowCount);
  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    rows.push(visible.slice(i * itemsPerRow, (i + 1) * itemsPerRow));
  }

  return (
    <>
      <div className="product-filters">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${filter === f.key ? ' active' : ''}`}
            onClick={() => selectFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-mute)', padding: '3rem 0' }}>
          No products in this category.
        </p>
      ) : (
        <div className="product-marquee-rows">
          {rows.map((row, idx) => {
            const isRtl = idx % 2 === 1; // Row 2 (index 1) is RTL
            return (
              <div className="marquee-row" key={idx}>
                <div className={`pcard-track ${isRtl ? 'pcard-track--rtl' : 'pcard-track--ltr'}`}>
                  {/* Original cards */}
                  {row.map((p) => (
                    <ProductCard key={`${p._id || p.name}-0`} p={p} />
                  ))}
                  {/* Duplicate for seamless loop */}
                  {row.map((p) => (
                    <ProductCard key={`${p._id || p.name}-1`} p={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
