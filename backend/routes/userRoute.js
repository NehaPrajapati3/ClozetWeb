import express from "express";
import {
  signup,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/loginUser").post(loginUser);
router.route("/logoutUser").get(logoutUser);
//console.log("User route")

export default router;
