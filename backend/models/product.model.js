import mongoose from "mongoose";

const productModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    store: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountType: {
      type: String,
      enum: ["percentage", "amount"],
    },
    discount: {
      type: Number,
      required: true,
    },
    recommended: {
      type: Boolean,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", productModel);
