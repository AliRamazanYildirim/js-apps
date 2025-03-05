import User from "../models/user.js";
import bcrypt from "bcrypt";


export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }
        const isMatch = await user.authenticate(password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }
        res.status(200).json({ message: "Login successful" })
    } catch (error) {
        next(error);
    }
}