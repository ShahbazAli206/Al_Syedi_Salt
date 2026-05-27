'use client';

import { useState } from 'react';
import SaltImage from './SaltImage';

const FILTERS = [
  { key: 'all',          label: 'All Products' },
  { key: 'edible',       label: 'Edible' },
  { key: 'bath',         label: 'Bath & Spa' },
  { key: 'lifestyle',    label: 'Lamps & Decor' },
  { key: 'construction', label: 'Bricks & Tiles' },
  { key: 'industrial',   label: 'Industrial' },
];

export default function ProductGrid({ products = [] }) {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <div className="product-filters" data-reveal="up">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${filter === f.key ? ' active' : ''}`}
            onClick={() => setFilter(f.key)}
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
        <div className="product-grid" data-reveal-stagger>
          {visible.map((p) => (
            <div className="product-card" key={p._id || p.name}>
              <div className="product-img">
                {p.featured && <div className="product-badge">Bestseller</div>}
                <SaltImage kind={p.kind || 'pink-fine'} alt={p.name} />
              </div>
              <div className="product-info">
                <h4>{p.name}</h4>
                <span>{p.type}</span>
                {p.price && (
                  <div className="price">
                    {p.price} <small>/ {p.unit || 'kg'}</small>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
