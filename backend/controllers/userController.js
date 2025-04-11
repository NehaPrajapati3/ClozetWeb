import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    console.log("sign up user");
    const { firstName, lastName, email, password  } = req.body;
    console.log(firstName, lastName, email, password );
    if (!firstName || !lastName || !email || !password ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists with this email.",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created succesfully.",
      success: true,
    });
  } catch (error) {
    console.log(`Sign up user error: ${error}`);
     return res.status(500).json({
       message: "Internal server error",
       success: false,
     });
  }
};

export const loginUser = async (req, res) => {
  try {
    console.log("Log in user");
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
   const user = await User.findOne({ email }).select("+password");
   if (!user) {
     return res.status(400).json({
       message: "Incorrect email",
       success: false,
     });
   }

  //  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  //  if (!isPasswordCorrect) {
  //    return res.status(400).json({
  //      message: "Incorrect password",
  //      success: false,
  //    });
  //  }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
  } catch (error) {
    console.log(`Log in user error: ${error}`);
     return res.status(500).json({
       message: "Internal server error",
       success: false,
     });
  }
};

export const logoutUser = (req, res) => {
  console.log("Inside log out user")
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out succesfully",
    });
  } catch (error) {
    console.log(error);
     return res.status(500).json({
       message: "Internal server error",
       success: false,
     });
  }
};
