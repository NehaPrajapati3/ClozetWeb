import { Customer } from "../models/customer.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    console.log("sign up customer");
    const { firstName, lastName, email, password, address } = req.body;
    console.log(firstName, lastName, email, password, address);
    if (!firstName || !lastName || !email || !password || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const customer = await Customer.findOne({ email });
    if (customer) {
      return res.status(400).json({
        message: "Customer already exists with this email.",
        success: false,
      });
    }
   
    const hashedPassword = await bcrypt.hash(password, 10);

    await Customer.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
    });

    return res.status(201).json({
      message: "Account created succesfully.",
      success: true,
    });
  } catch (error) {
    console.log(`Sign up customer error: ${error}`);
     return res.status(500).json({
       message: "Internal server error",
       success: false,
     });
  }
};

export const login = async (req, res) => {
  try {
    console.log("Log in customer");
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
   const customer = await Customer.findOne({ email }).select("+password");
   if (!customer) {
     return res.status(400).json({
       message: "Incorrect email",
       success: false,
     });
   }

   const isPasswordCorrect = await bcrypt.compare(password, customer.password);
   if (!isPasswordCorrect) {
     return res.status(400).json({
       message: "Incorrect password",
       success: false,
     });
   }

    const tokenData = {
      userId: customer._id,
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
        _id: customer._id,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
      });
  } catch (error) {
    console.log(`Log in customer error: ${error}`);
     return res.status(500).json({
       message: "Internal server error",
       success: false,
     });
  }
};

export const logout = (req, res) => {
  console.log("Inside log out customer");
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

export const toggleCustomerStatus = async (req, res) => {
  try {
    const { customerId } = req.params;

    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Flip the status: true -> false or false -> true
    customer.status = !customer.status;
    await customer.save();

    return res.status(200).json({
      message: `Customer account has been ${
        customer.status ? "activated" : "deactivated"
      }.`,
      status: customer.status,
    });
  } catch (error) {
    console.log("Error toggling customer status:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
