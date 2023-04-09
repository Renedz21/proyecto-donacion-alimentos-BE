import mongoose from "mongoose";

const foodTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
    },
}, { timestamps: true })

export default mongoose.model("TypesOfFood", foodTypeSchema);