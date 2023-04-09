import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    nutritionFacts: {
        type: String,
    },
    expirationDate: {
        type: Date,
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "active"
    },
    photoUrl: {
        type: String,
    },
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
    },
    beneficOrganizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BeneficOrganization",
    },
    donationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donation",
    },
    foodTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TypesOfFood",
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // },

}, { timestamps: true })

export default mongoose.model("Foods", foodSchema);