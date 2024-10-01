import mongoose from "mongoose"



// dlta mini model jorao zaka da ba orderItems ke wachao de mini model ke ba producrId aw quantity rashe

const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})    





const orderSchema = new mongoose.Schema({

        orderItem: {
            // os ba dlta mini model variable pasdte ko
            type: [orderItemsSchema]
        },
        orderStatus: {
            type: String,
            // dlta enum use kao enum enumeration de matlb "choices"
            enum: ["PENDING", "CANCELED", "DELIVERED"],
            default: "PENDING"
        },
        address: {
            type: String,
            required: true
        },
        

}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)