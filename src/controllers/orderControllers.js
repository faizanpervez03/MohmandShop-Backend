/*
const placeOrder = (req, res)=> {
    const data = req.body
    console.log(data);

    return res.status(200).json(data)
    
}

export { placeOrder }
*/
// ----------------------------------------


import { Order } from "../models/Order.model.js";
const placeOrder = async (req, res) => {
    const data = req.body; // Get the order data from the request body
    console.log("Received order data:", data);
    

    try {
        // Create a new order in the database
        const newOrder = await Order.create(data);

        // Send a success response with the created order
        return res.status(201).json({
            success: true,
            message: "Order placed successfully!",
            order: newOrder
        });
    } catch (error) {
        console.error("Error placing order:", error);

        // Send an error response if something goes wrong
        return res.status(500).json({
            success: false,
            message: "Failed to place order.",
            error: error.message
        });
    }
};

export { placeOrder };