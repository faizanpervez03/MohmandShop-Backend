/*
import express from "express"
import cors from 'cors'

// ----------------------------
// database things

const app = express()
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB() 

// ----------------------------

app.use(cors({
    origin: "*"
}))



app.get('/', (req, res) => {
    res.send('App is successfully run')
})



app.get('/api/products', (req, res) => {

    let product = [
        {
            name: "chair",
            price: 2500,
            description: "Nordic beautifull chair"
        },
        {
            name: "Samsung Tv",
            price: 30000,
            description: "42 inch samsung LED"
        },
        {
            name: "Watch",
            price: 5500,
            description: "Golden time watch"
        },
        {
            name: "Watch",
            price: 5500,
            description: "Golden time watch"
        }, {
            name: "Washing Machine",
            price: 26000,
            description: "Fast and lite weight"
        },
    ]


    res.send(product)
})


app.listen(process.env.PORT, () => {
    console.log(`pa de port run sho ${process.env.PORT}`)
})
*/













// server.js
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
