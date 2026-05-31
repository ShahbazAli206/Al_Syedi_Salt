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
        <div className="product-grid product-grid--animate">
          {visible.map((p) => (
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
          ))}
        </div>
      )}
    </>
  );
}
