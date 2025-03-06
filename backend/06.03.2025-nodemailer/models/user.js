import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    validationToken: String,

    emailValidated: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", async function(next){
    try {
        if (this.isModified("password")){
            const hash = await bcrypt.hash(this.password, 12);
            this.password = hash;
        }
        next();
    } catch (error) {
        next(error)
    }
});

export const User = model("User", userSchema);