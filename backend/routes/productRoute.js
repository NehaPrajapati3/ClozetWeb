import express from "express";
import upload from "../middleware/multer.middleware.js";
import {
  addItem,
  getAllItems,
  editItem,
  deleteItem,
} from "../controllers/productController.js";

const router = express.Router();

// Upload Image and Video Middleware
router.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  addItem
); // Add new item with image & video

router.get("/all", getAllItems); // Get all items

router.put(
  "/edit/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  editItem
); // Edit item by ID with image & video

router.delete("/delete/:id", deleteItem); // Delete item by ID

export default router;
