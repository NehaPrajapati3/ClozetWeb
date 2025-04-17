import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import productRoutes from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import storeRoute from "./routes/storeRoute.js";
import employeeRoute from "./routes/employeeRoute.js";
import couponRoute from "./routes/couponRoute.js";
import customerRoute from "./routes/customerRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import sellerDashboardRoute from "./routes/sellerDashboardRoute.js";
import subCategoryRoute from "./routes/subCategoryRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// const corsOption = {
//   origin: "http://localhost:3000",
//   credentials: true,
// };
// app.use(cors(corsOption));

// Serve static files from 'uploads' folder
app.use("/uploads", express.static("uploads"));

// Routes

app.use("/api/v1/user", userRoute);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/employee", employeeRoute);
app.use("/api/v1/coupon", couponRoute);
app.use("/api/v1/customer", customerRoute);
app.use("/api/v1/seller-dashboard", sellerDashboardRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/subCategory", subCategoryRoute);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const clientBuildPath = path.join(__dirname, "../clozetweb/build");
// app.use(express.static(clientBuildPath));

const corsOption = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOption));


const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
    process.exit(1); // exit if DB connection fails
  }
};

startServer();

