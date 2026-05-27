import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import { connectDB } from './config/db.js';
import { seedDB } from './seed.js';
import productRoutes from './routes/products.js';
import brandRoutes from './routes/brands.js';
import ingredientRoutes from './routes/ingredients.js';
import contactRoutes from './routes/contact.js';
import newsletterRoutes from './routes/newsletter.js';
import chatRoutes from './routes/chat.js';

const app = express();

app.use(helmet());

const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:3000')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error(`CORS: origin ${origin} not allowed`));
    },
    credentials: true,
  })
);
app.use(express.json({ limit: '100kb' }));

// Rate limit form-submission routes to deter abuse
const writeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' },
});

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/products', productRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/contact', writeLimiter, contactRoutes);
app.use('/api/newsletter', writeLimiter, newsletterRoutes);
app.use('/api/chat', writeLimiter, chatRoutes);

// 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// Error handler
app.use((err, req, res, _next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Server error' });
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => seedDB())
  .then(() => {
    app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
  });
