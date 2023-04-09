import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
    },
    beneficOrganizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BeneficOrganization",
    },
    quantity: {
        type: Number,
    },
    donationDate: {
        type: Date,
    },
    status: {
        type: String,
        default: "active"
    },
}, { timestamps: true })

export default mongoose.model("Donation", donationSchema);