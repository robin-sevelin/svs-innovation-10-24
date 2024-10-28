/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const uri =
  'mongodb+srv://admin:admin@robins-database.vozcc.mongodb.net/?retryWrites=true&w=majority&appName=robins-database';

let cached = (globalThis as any).mongoose;

if (!cached) {
  cached = (globalThis as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
