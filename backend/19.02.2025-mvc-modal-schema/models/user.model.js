import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountNumber: Number,
  description: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
});

export default model("User", UserSchema);
