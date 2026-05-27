import express from 'express';
import Ingredient from '../models/Ingredient.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await Ingredient.find().sort({ order: 1 });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

export default router;
