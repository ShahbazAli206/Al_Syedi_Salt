import mongoose from 'mongoose';

let memoryServer = null;

export async function connectDB() {
  let uri = process.env.MONGO_URI;

  // Dev fallback: spin up an in-memory MongoDB if no URI is provided
  if (!uri) {
    console.log('No MONGO_URI set — starting in-memory MongoDB (dev fallback)...');
    const { MongoMemoryServer } = await import('mongodb-memory-server');
    memoryServer = await MongoMemoryServer.create();
    uri = memoryServer.getUri();
    console.log(`In-memory MongoDB ready at ${uri}`);
  }

  try {
    await mongoose.connect(uri);
    console.log(`MongoDB connected → ${mongoose.connection.host}/${mongoose.connection.name}`);
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
}

export function isMemoryMode() {
  return !!memoryServer;
}
