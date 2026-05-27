// Seed data — Al Syedi Group salt catalogue
// Visuals are rendered by the SaltImage SVG component on the client via "kind".
export const products = [
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

// Salt collections / specialist ranges
export const brands = [
  { name: 'Pink Edible Range',       description: 'Our flagship food-grade Himalayan Pink Salt — fine, coarse, granular and gourmet flakes. The cleanest pink crystal on the global market, lab-verified to 99.8% NaCl.', order: 1 },
  { name: 'White Refined Range',     description: 'Iodized and non-iodized refined white salt for retail and food-service. Free-flowing, anti-caking treated where required, with consistent crystal size.', order: 2 },
  { name: 'Black Salt (Kala Namak)', description: 'South-Asian culinary classic — sulfur-rich, smoky and pungent. Stone-mined, traditionally kiln-fired and ground to chef-grade specifications.', order: 3 },
  { name: 'Bath & Spa Collection',   description: 'Therapeutic bath salts, foot soaks and scented blends with lavender, eucalyptus, rose and citrus. Cosmetic-grade facility with full INCI labeling.', order: 4 },
  { name: 'Lifestyle & Lamps',       description: 'Hand-carved natural lamps, geometric pyramids, USB desk lamps and salt candle holders — wired to UK/EU/US/AU standards with CE/FCC certification.', order: 5 },
  { name: 'Salt Bricks & Tiles',     description: 'Polished construction-grade salt bricks and tiles for halotherapy rooms, spa walls and decorative interiors. Custom dimensions on request.', order: 6 },
  { name: 'Gourmet Salt Slabs',      description: 'Restaurant-grade salt plates for cooking, serving and curing. Heat-rated to 500°C, hand-finished and packaged with care instructions.', order: 7 },
  { name: 'Industrial Salt Range',   description: 'Animal lick salts, water-softener pellets, de-icing rock salt and chemical-grade NaCl. Container-load shipments for agricultural and industrial customers.', order: 8 },
];

// Salt varieties (horizontal carousel on home page)
export const ingredients = [
  { name: 'Himalayan Pink Salt',     latin: 'Edible · 99.8% NaCl',     note: 'Bestseller',     kind: 'pink-fine',      order: 1 },
  { name: 'Pure White Salt',         latin: 'Edible · Refined',        note: 'Food Grade',     kind: 'white-refined',  order: 2 },
  { name: 'Black Salt (Kala Namak)', latin: 'Edible · Sulfur-rich',    note: 'Specialty',      kind: 'black-salt',     order: 3 },
  { name: 'Coarse Pink Crystals',    latin: 'Grinder Grade',           note: 'Best for Mills', kind: 'pink-coarse',    order: 4 },
  { name: 'Pink Salt Flakes',        latin: 'Gourmet Grade',           note: 'Hand-Harvested', kind: 'pink-flakes',    order: 5 },
  { name: 'Bath & Spa Salt',         latin: 'Therapeutic Grade',       note: 'Wellness',       kind: 'bath-lavender',  order: 6 },
  { name: 'Pink Salt Bricks',        latin: 'Construction Grade',      note: 'Salt Rooms',     kind: 'salt-brick',     order: 7 },
  { name: 'Decorative Salt Lamps',   latin: 'Hand-Carved',             note: 'Lifestyle',      kind: 'lamp-natural',   order: 8 },
  { name: 'Animal Lick Salt',        latin: 'Livestock Grade',         note: 'Farm Supply',    kind: 'animal-lick',    order: 9 },
  { name: 'De-Icing Rock Salt',      latin: 'Industrial Grade',        note: 'Winter Use',     kind: 'de-icing',       order: 10 },
];
