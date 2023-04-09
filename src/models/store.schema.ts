import mongoose from "mongoose";

//*TODO: Add more fields to the store schema
//TODO: Que alimentos puede donar cada o la tienda
//TODO: Ejemplo: La tienda tambo solo puede donar lacteos, pescados y golosinas, la tienda de ropa solo puede donar ropa y calzado
//TODO: cantidad de alimentos que puede donar cada tienda ponerlo en un 'stock' y que se vaya restando cada vez que se haga una donacion
//TODO: considerar la fecha de caducidad de los alimentos

const storeSchema = new mongoose.Schema({
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
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "active"
    },

}, { timestamps: true })

export default mongoose.model("Store", storeSchema);