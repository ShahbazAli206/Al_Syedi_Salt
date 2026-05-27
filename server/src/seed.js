import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import Product from './models/Product.js';
import Brand from './models/Brand.js';
import Ingredient from './models/Ingredient.js';
import { products, brands, ingredients } from './seedData.js';

export async function seedDB({ force = false } = {}) {
  const productsCount = await Product.estimatedDocumentCount();
  if (productsCount > 0 && !force) {
    console.log(`Skip seed — already have ${productsCount} products. Pass --force to wipe.`);
    return;
  }
  console.log('Seeding database...');
  await Promise.all([Product.deleteMany({}), Brand.deleteMany({}), Ingredient.deleteMany({})]);
  await Product.insertMany(products);
  await Brand.insertMany(brands);
  await Ingredient.insertMany(ingredients);
  console.log(`Seeded ${products.length} products, ${brands.length} brands, ${ingredients.length} ingredients.`);
}

// CLI: `npm run seed` runs this directly
const invokedDirectly = import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}`;
if (invokedDirectly || process.argv[1]?.endsWith('seed.js')) {
  (async () => {
    await connectDB();
    await seedDB({ force: process.argv.includes('--force') });
    await mongoose.connection.close();
    process.exit(0);
  })();
}
