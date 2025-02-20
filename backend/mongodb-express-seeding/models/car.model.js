import {Schema,model} from "mongoose";

const CarSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  type: String,
  fuel: String,
  color: String,
  buildYear: Number,
  milege: Number,
  hp: Number,
  vin: String,
  price: Number,
});

export default model("Car", CarSchema);
