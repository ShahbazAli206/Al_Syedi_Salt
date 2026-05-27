import express from 'express';
import validator from 'validator';
import Newsletter from '../models/Newsletter.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { email } = req.body || {};
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const normalized = String(email).trim().toLowerCase();
    const existing = await Newsletter.findOne({ email: normalized });
    if (existing) {
      return res.status(200).json({ success: true, message: "You're already subscribed!" });
    }

    await Newsletter.create({ email: normalized });
    res.status(201).json({ success: true, message: 'Subscribed. Watch your inbox for B2B insights.' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(200).json({ success: true, message: "You're already subscribed!" });
    }
    next(err);
  }
});

export default router;
