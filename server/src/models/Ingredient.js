import mongoose from 'mongoose';

// "Ingredient" model is reused for salt varieties (horizontal scroller)
const ingredientSchema = new mongoose.Schema(
  {
    name:  { type: String, required: true, trim: true, unique: true },
    latin: { type: String, required: true }, // sub-label e.g. "Edible · 99.8% NaCl"
    note:  { type: String, required: true }, // tag e.g. "Bestseller"
    image: { type: String, default: '' },
    kind:  { type: String, default: 'pink-fine' }, // SaltImage SVG variant key
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Ingredient', ingredientSchema);
