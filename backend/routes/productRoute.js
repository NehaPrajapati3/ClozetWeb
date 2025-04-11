import express from "express";
import upload from "../middleware/multer.middleware.js";
import {
  addItem,
  getAllItems,
  editItem,
  deleteItem,
} from "../controllers/productController.js";
import isUserAuthenticated from "../middleware/isUserAuthenticated.js";

const router = express.Router();

// Upload Image and Video Middleware
router.post(
  "/add",
    isUserAuthenticated,
  
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  addItem
); // Add new item with image & video

router.get("/all",  isUserAuthenticated,
 getAllItems); // Get all items

router.put(
  "/edit/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  editItem
); // Edit item by ID with image & video

router.delete("/delete/:id", isUserAuthenticated, deleteItem); // Delete item by ID

export default router;
