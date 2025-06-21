import mongoose, { Schema } from "mongoose";
import { userSchema } from "./user.js";

const raceSchema = new Schema({
    nameRace: String,
    data: {
        type: Date
    },
    city: String,
    subscribed: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        }
    ]
});

export const Race = mongoose.model('Race', raceSchema);