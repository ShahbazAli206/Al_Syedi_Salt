// ============================================================
//  Al Syedi Group — Product & Variety Catalog
//  Edit this file to update products, prices, or varieties.
//  Then commit & push — changes go live automatically.
// ============================================================

export const PRODUCTS = [
  // ----- Edible -----
  { name: 'Pink Salt Fine',          type: 'Edible · Table Grade',      category: 'edible',       kind: 'pink-fine',       price: '$0.65', unit: 'kg',   featured: true,  desc: 'Finely ground for everyday cooking and seasoning. 99.8% pure NaCl with 84 trace minerals.' },
  { name: 'Pink Salt Coarse',        type: 'Edible · Grinder Grade',    category: 'edible',       kind: 'pink-coarse',     price: '$0.55', unit: 'kg',                    desc: 'Perfect grain size for grinders and mill refills. Retains full mineral profile.' },
  { name: 'Pink Salt Granular',      type: 'Edible · Cooking Grade',    category: 'edible',       kind: 'pink-granular',   price: '$0.60', unit: 'kg',                    desc: 'Granular crystals ideal for cooking and food processing. Consistent grade.' },
  { name: 'White Salt Refined',      type: 'Edible · Iodized',          category: 'edible',       kind: 'white-refined',   price: '$0.40', unit: 'kg',                    desc: 'High-purity refined salt, processed and iodized. Ideal for food manufacturing.' },
  { name: 'Black Salt (Kala Namak)', type: 'Edible · Specialty',        category: 'edible',       kind: 'black-salt',      price: '$1.10', unit: 'kg',                    desc: 'Sulfurous volcanic salt with distinctive flavour. Popular in South Asian cuisine.' },
  { name: 'Pink Salt Flakes',        type: 'Gourmet · Hand-Harvested',  category: 'edible',       kind: 'pink-flakes',     price: '$2.40', unit: 'kg',   featured: true,  desc: 'Delicate hand-harvested flakes for finishing dishes. Premium gourmet grade.' },
  { name: 'Sea Salt Flakes',         type: 'Gourmet · Natural',         category: 'edible',       kind: 'sea-flakes',      price: '$2.20', unit: 'kg',                    desc: 'Natural sea-salt flakes with a clean, bright flavour. Ideal for retail packaging.' },

  // ----- Bath & Spa -----
  { name: 'Bath Salt Lavender',      type: 'Bath · Scented Blend',      category: 'bath',         kind: 'bath-lavender',   price: '$1.80', unit: 'kg',                    desc: 'Soothing lavender-infused bath salt blend. Promotes relaxation and skin softness.' },
  { name: 'Bath Salt Eucalyptus',    type: 'Bath · Aromatherapy',       category: 'bath',         kind: 'bath-eucalyptus', price: '$1.95', unit: 'kg',                    desc: 'Refreshing eucalyptus aromatherapy blend. Ideal for spa and wellness retail.' },
  { name: 'Foot Soak Salt',          type: 'Spa · Therapeutic',         category: 'bath',         kind: 'foot-soak',       price: '$1.40', unit: 'kg',                    desc: 'Therapeutic foot soak formula. Relieves fatigue and softens skin effectively.' },
  { name: 'Pink Salt Body Scrub',    type: 'Spa · Exfoliating',         category: 'bath',         kind: 'body-scrub',      price: '$2.20', unit: 'kg',   featured: true,  desc: 'Exfoliating body scrub with fine pink salt. Removes dead skin and boosts circulation.' },

  // ----- Lifestyle -----
  { name: 'Natural Salt Lamp 3kg',   type: 'Lamp · Hand-Carved',        category: 'lifestyle',    kind: 'lamp-natural',    price: '$12.50', unit: 'unit', featured: true, desc: 'Hand-carved natural Himalayan salt lamp. Warm amber glow for ambiance and air quality.' },
  { name: 'Geometric Salt Lamp',     type: 'Lamp · Pyramid Cut',        category: 'lifestyle',    kind: 'lamp-geometric',  price: '$18.90', unit: 'unit',                 desc: 'Pyramid-cut geometric lamp with precise facets. Modern design for retail display.' },
  { name: 'USB Salt Lamp',           type: 'Lamp · Desktop',            category: 'lifestyle',    kind: 'lamp-usb',        price: '$8.40',  unit: 'unit',                 desc: 'Compact USB-powered desktop salt lamp. Perfect for office or bedside use.' },
  { name: 'Salt Candle Holder',      type: 'Decor · Tealight',          category: 'lifestyle',    kind: 'candle-holder',   price: '$5.20',  unit: 'unit',                 desc: 'Natural salt tealight holder. Creates a warm, rosy glow from any tealight candle.' },

  // ----- Construction -----
  { name: 'Salt Brick 8x4x2',        type: 'Construction · Polished',   category: 'construction', kind: 'salt-brick',      price: '$3.80', unit: 'pc',                    desc: 'Polished Himalayan salt bricks for halotherapy rooms and sauna walls. Precise sizing.' },
  { name: 'Salt Tile 6x6x1',         type: 'Construction · Sauna Wall', category: 'construction', kind: 'salt-tile',       price: '$2.95', unit: 'pc',                    desc: 'Smooth salt tiles for sauna and wellness room cladding. Cut to consistent dimension.' },
  { name: 'Salt Slab Cooking',        type: 'Culinary · Plate',         category: 'construction', kind: 'salt-slab',       price: '$9.50', unit: 'pc',   featured: true,  desc: 'Premium cooking slab for grilling, chilling and serving. Imparts subtle mineral flavour.' },

  // ----- Industrial -----
  { name: 'Animal Lick Salt 5kg',    type: 'Livestock · Mineral',       category: 'industrial',   kind: 'animal-lick',     price: '$1.50', unit: 'pc',                    desc: 'Compressed mineral salt lick blocks for livestock. Provides essential trace elements.' },
  { name: 'Water Softener Pellets',  type: 'Industrial · Refined',      category: 'industrial',   kind: 'water-softener',  price: '$0.30', unit: 'kg',                    desc: 'High-purity salt pellets for water softening systems. Consistent dissolve rate.' },
  { name: 'De-Icing Rock Salt',      type: 'Industrial · Winter',       category: 'industrial',   kind: 'de-icing',        price: '$0.18', unit: 'kg',                    desc: 'Bulk rock salt for de-icing roads and surfaces. Effective to -10°C.' },
  { name: 'Chemical Grade Salt',     type: 'Industrial · 99% NaCl',     category: 'industrial',   kind: 'chemical-grade',  price: '$0.22', unit: 'kg',                    desc: '99%+ NaCl industrial salt for chemical and manufacturing processes.' },
];

// Shown in the "Explore Our Varieties" section on the home page
export const VARIETIES = [
  { name: 'Himalayan Pink Salt',     latin: 'Edible · 99.8% NaCl',     note: 'Bestseller',     kind: 'pink-fine' },
  { name: 'Pure White Salt',         latin: 'Edible · Refined',        note: 'Food Grade',     kind: 'white-refined' },
  { name: 'Black Salt (Kala Namak)', latin: 'Edible · Sulfur-rich',    note: 'Specialty',      kind: 'black-salt' },
  { name: 'Coarse Pink Crystals',    latin: 'Grinder Grade',           note: 'Best for Mills', kind: 'pink-coarse' },
  { name: 'Pink Salt Flakes',        latin: 'Gourmet Grade',           note: 'Hand-Harvested', kind: 'pink-flakes' },
  { name: 'Bath & Spa Salt',         latin: 'Therapeutic Grade',       note: 'Wellness',       kind: 'bath-lavender' },
  { name: 'Pink Salt Bricks',        latin: 'Construction Grade',      note: 'Salt Rooms',     kind: 'salt-brick' },
  { name: 'Decorative Salt Lamps',   latin: 'Hand-Carved',             note: 'Lifestyle',      kind: 'lamp-natural' },
  { name: 'Animal Lick Salt',        latin: 'Livestock Grade',         note: 'Farm Supply',    kind: 'animal-lick' },
  { name: 'De-Icing Rock Salt',      latin: 'Industrial Grade',        note: 'Winter Use',     kind: 'de-icing' },
];
