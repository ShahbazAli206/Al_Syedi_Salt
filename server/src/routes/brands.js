import express from 'express';
import Brand from '../models/Brand.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const brands = await Brand.find().sort({ order: 1, name: 1 });
    res.json(brands);
  } catch (err) {
    next(err);
  }
});

export default router;
