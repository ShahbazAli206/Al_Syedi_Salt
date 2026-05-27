import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true }, // e.g. "Edible · Grinder Grade"
    category: {
      type: String,
      required: true,
      enum: ['edible', 'bath', 'lifestyle', 'construction', 'industrial'],
      lowercase: true,
    },
    image: { type: String, default: '' },
    kind:  { type: String, default: 'pink-fine' }, // SaltImage SVG variant key
    description: { type: String, default: '' },
    specs: {
      purity: { type: String, default: '' },        // e.g. "99.8% NaCl"
      grind:  { type: String, default: '' },        // e.g. "Fine 0.5–1mm"
      origin: { type: String, default: 'Khewra Salt Range, Pakistan' },
    },
    price: { type: String, default: '' },           // display price e.g. "$0.65"
    unit:  { type: String, default: 'kg' },
    moq:   { type: Number, default: 1000 },         // 1 metric ton
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
