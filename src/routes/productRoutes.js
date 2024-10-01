// import { Product } from "../models/Product.model.js";
import { Router } from "express";
import { createProduct, getAllProducts, } from "../controllers/productControllers.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()



router.route('/addproduct').post((
    upload.fields([
        {
            name: "imageUrl",
            maxCount: 1
        },

        
    ])),    
    asyncHandler(createProduct))

router.route('/products').get(asyncHandler(getAllProducts));

export default router
