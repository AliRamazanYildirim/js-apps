import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    posts: [
        {
        title: { type: String, required: true },
        content: String,
        comments: [
            {
            name: String,
            comment: String,
            },
        ],
        address: {
            city: String,
            state: String,
            country: String,
        },
        createdAt: { type: Date, default: Date.now }
        }
    ]
});

export const User = model("User", userSchema);
