import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true, 
        unique: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique:true
    },
    address: {
        type: String,
        required: true
    }



}, {timestamps: true})

export const Customer = mongoose.model("Customer", customerSchema) 