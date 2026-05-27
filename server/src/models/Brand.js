import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    tagline: { type: String, default: '' },
    description: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Brand', brandSchema);
