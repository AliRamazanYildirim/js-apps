import {Schema, model} from 'mongoose';

export const locationSchema = new Schema({
    city: String,
    country: String
  });

export const Location = model("Location", locationSchema);