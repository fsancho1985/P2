import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema({
    username: String,
    email: {type: String, unique: true},
    password: String,
    name: String
});

export const User = mongoose.model('User', userSchema);