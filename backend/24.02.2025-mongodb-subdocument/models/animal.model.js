import { Schema, model } from 'mongoose';

export const animalSchema = new Schema({
    species: String,
    sex: String,
    amount: Number,
    characteristics: [
        {
            continent: [String],
            predators: [String],
            food: [String],
            lifeExpectancy: String,
        }
    ],
});

export const Animal = model("Animal", animalSchema);