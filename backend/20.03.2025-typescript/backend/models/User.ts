import {model, Schema, Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);

const User = model<IUser>('User', UserSchema);

export default User;