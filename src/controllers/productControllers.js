import { Product } from "../models/Product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadFileCloudinary } from "../utils/fileUpload-cloudinary.js";

const createProduct = async (req, res, next) => {
    try {
        console.log("Request Body:", req.body);

        const { title, description, price, stock, category } = req.body;

        // Validate required fields
        if (
            [title, description, price, stock].some((field) =>
                field?.trim() === ""
            )
        ) {
            throw new ApiError(400, "All fields are required");
        }

        // Ensure the file is uploaded
        const imageUrlLocalPath = req.files?.imageUrl?.[0]?.path;
        if (!imageUrlLocalPath) {
            throw new ApiError(400, "imageUrl is required");
        }

        // Upload the image to Cloudinary
        const uploadedImage = await uploadFileCloudinary(imageUrlLocalPath);
        if (!uploadedImage) {
            throw new ApiError(400, "Image upload failed");
        }

        // Create the product in the database
        const product = await Product.create({
            title,
            description,
            price,
            stock,
            category,
            imageUrl: uploadedImage.url,
        });

        const createdProduct = await Product.findById(product._id);
        if (!createdProduct) {
            throw new ApiError(500, "Failed to create product");
        }

        return res.status(201).json(
            new ApiResponse(201, createdProduct, "Product created successfully")
        );
    } catch (error) {
        next(error);
    }
};

// Fetch all products
const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(
            new ApiResponse(200, products, "Products fetched successfully")
        );
    } catch (error) {
        next(new ApiError(500, "Failed to fetch products", [error.message]));
    }
};

const getProductDetails = async (req,res, next) =>{
    const id = req.params.id
    try {
        const productDetails = await Product.findOne({_id : id})
        if (productDetails){
            return res.status(200).json(productDetails)
        }else {
            return res.status(404).json({error: "product is not found"})
        }
    }catch (error){
        // next(new ApiError(500, "Failed to fetch products", [error.message]));
        return res.status(500).json(error.message)
    }
    
    // return res.json(id)
}

export { createProduct, getAllProducts, getProductDetails };
