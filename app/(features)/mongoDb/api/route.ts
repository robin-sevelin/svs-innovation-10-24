import dbConnect from '../database/mongoose';
import { Animal } from '../database/schema';
import { IAnimal } from '../lib/models/IAnimal';

export const GET = async () => {
  await dbConnect();
  let data;

  try {
    const animals: IAnimal[] = await Animal.find();
    data = Response.json({ success: true, animals: animals });
  } catch (error) {
    data = Response.json({ success: false, error });
  }

  return data;
};
