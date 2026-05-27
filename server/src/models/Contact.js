import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: '', trim: true, maxlength: 40 },
    message: { type: String, required: true, maxlength: 4000 },
    handled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Contact', contactSchema);
