import { Product } from "../models/Product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import path from "path"

// da da createproduct area da
const createProduct = async (req, res) => {
    console.log(req.body)
    const { title, description, price, stock, category, imageUrl } = req.body;

    // validation
    if (
        [title, description, price, stock, imageUrl].some((field) =>
            field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }


    // ------------------------------------------------------------------
    // image file handling
    const imageUrlLocalPath = req.files?.imageUrl[0]?.path
    console.log(imageUrlLocalPath)
    if (!imageUrlLocalPath) {
        throw new ApiError(400, "imageUrl is required")
    }



    // const image = `/uploads/${req.files.imageUrl[0].filename}`;
    const image = `/uploads/${path.basename(imageUrlLocalPath)}`;

   

    // create Product object, create entry in database
    const product = await Product.create({
        title,
        description,
        price,
        stock,
        category,
        imageUrl: imageUrlLocalPath
    })

    const createdProduct = await Product.findById(product._id)
    
    if (!createdProduct) {
        throw new ApiError(500, "Something went wrong while created a product" )
    }   

    return res.status(201).json(
        new ApiResponse(200, createdProduct, "Product created successfully")
    )
    
    // ------------------------------------------------------------------
    

}


// da da GetallProduct area da

const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find(); // Fetch all products
        res.status(200).json(new ApiResponse(200, products, "Product fetch successfully"))
    } catch (error) {
        next(new ApiError(500, "Failed to fetch products", [error.message]))
    }
};




export { createProduct, getAllProducts }
