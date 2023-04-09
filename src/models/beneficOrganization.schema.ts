import mongoose from "mongoose";

const beneficOrganizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
    },
    status: {
        type: String,
        default: "active"
    },
}, { timestamps: true })

export default mongoose.model("BeneficOrganization", beneficOrganizationSchema);