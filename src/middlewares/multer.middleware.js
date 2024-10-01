import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = "./public/uploads";
        cb(null, uploadDir);
        // sfhdskfhdsfjds
    },
    filename: function (req, file, cb) {

        cb(null, `${Date.now()}_${file.originalname}`);
    }
})

export const upload = multer({
    storage,
})

