import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      enum: ["user", "editor", "admin"],
      default: ["user"],
    },
  },
  {
    timestamps: true,
  }
);

// Schema-Methode zum Hashen des Passworts vor dem Speichern
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
    try {
      const hash = await bcrypt.hash(this.password, 12);
        this.password = hash;
      next();
    } catch (error) {
      next(error);
    }
  });

  // Schema-Methode zum Vergleichen von Passwörtern
userSchema.methods.authenticate = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  

const User = model("User", userSchema);

export default User;
