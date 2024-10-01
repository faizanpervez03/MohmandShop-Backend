/*

import { v2 as cloudinary } from 'cloudinary';
import exp from 'constants';
import fs from "fs"

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadFileCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // file upload yaha pe hota hn cloudinary par 
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("file is uploaded on cloundinary successfully", response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) //it remove the locally saved temporary file as the upload operation got failed
        return null
    }
}

export { uploadFileCloudinary }

*/

