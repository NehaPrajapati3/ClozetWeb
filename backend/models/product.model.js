import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
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
    imageUrl: {
      type: String,
      default: "",
    },
    videoUrl: {
      type: String,
      default: "",
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
      default: "percentage",
    },
    discount: {
      type: Number,
      default: 0,
    },
    recommended: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);


