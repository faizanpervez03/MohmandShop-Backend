import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import productRoutes from "./routes/productRoutes.js"; // Import routes




dotenv.config({
    path: './env'
});

connectDB();

const app = express();

app.use(cors({
    origin: "*"
}));

// Middleware to parse JSON bodies
app.use(express.urlencoded())
app.use(express.json());
app.use(express.static('public/uploads'));
app.use('/uploads', express.static('uploads'));


app.use('/api/product', productRoutes); // Use product routes


app.get('/', (req, res) => {
    res.send('App is successfully run');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
