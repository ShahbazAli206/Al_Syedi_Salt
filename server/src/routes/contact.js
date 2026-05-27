import express from 'express';
import validator from 'validator';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (message.length > 4000) {
      return res.status(400).json({ error: 'Message is too long.' });
    }

    const contact = await Contact.create({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : '',
      message: String(message).trim(),
    });

    res.status(201).json({
      success: true,
      message: "Thanks! We'll respond within 24 business hours.",
      id: contact._id,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
