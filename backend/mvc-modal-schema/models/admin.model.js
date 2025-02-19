import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
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

export default mongoose.model("Admin", AdminSchema);