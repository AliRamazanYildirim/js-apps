import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:String
});

userSchema.pre("save", async function(next){
    try {
        const saltRounds = 10;
        const hash = await bcrypt.hash(this.password, saltRounds);
        this.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.authenticate = async function(password){
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error(error);
    }
}

export default model("User", userSchema);