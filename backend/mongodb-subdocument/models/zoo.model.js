import { Schema, model } from "mongoose";
import { locationSchema } from "./location.model.js";
import { animalSchema } from "./animal.model.js";

const zooSchema = new Schema({
  name: { type: String, required: true, unique: true },
  location: locationSchema,
  admission: Number,
  foundation: Date,
  animals: [animalSchema],
});

export const Zoo = model("Zoo", zooSchema);