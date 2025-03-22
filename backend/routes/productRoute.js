import express from "express";
import {
  addItem,
  getAllItems,
  editItem,
  deleteItem,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/add", addItem); // Add new item
router.get("/all", getAllItems); // Get all items
router.put("/edit/:id", editItem); // Edit item by ID
router.delete("/delete/:id", deleteItem); // Delete item by ID

export default router;
