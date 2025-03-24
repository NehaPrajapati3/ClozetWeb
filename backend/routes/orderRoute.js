import express from "express";
import {
  addOrder,
  getAllOrders,
  editOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/add", addOrder); 
router.get("/all", getAllOrders); 
router.put("/edit/:id", editOrder); 
router.delete("/delete/:id", deleteOrder); 

export default router;
