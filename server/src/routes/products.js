import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET /api/products?category=oud
router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.category && req.query.category !== 'all') {
      filter.category = req.query.category.toLowerCase();
    }
    const products = await Product.find(filter).sort({ featured: -1, createdAt: -1 });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

export default router;
