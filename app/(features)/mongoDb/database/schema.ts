import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  scientific_name: { type: String, required: true },
  number_of_legs: { type: Number, required: true },
  habitat: { type: String, required: true },
});

export const Animal =
  mongoose.models.Animal ||
  mongoose.model('Animal', animalSchema, 'collection-of-stuff');
