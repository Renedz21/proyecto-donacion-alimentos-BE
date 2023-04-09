import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: "active"
    },
}, { timestamps: true })

export default mongoose.model("User", userSchema);