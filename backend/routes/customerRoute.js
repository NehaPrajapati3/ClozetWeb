import express from "express";
import {
  signup,
  login,
  logout,
  toggleCustomerStatus
} from "../controllers/customerController.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/toggle-status/:customerId").put(toggleCustomerStatus);
//console.log("User route")

export default router;
