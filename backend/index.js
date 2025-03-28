import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";
import productRoutes from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import storeRoute from "./routes/storeRoute.js";

import cors from "cors";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

// Serve static files from 'uploads' folder
app.use("/uploads", express.static("uploads"));

const corsOption = {
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOption))

// Routes

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/store", storeRoute);


app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listening at port ${PORT}`)
});