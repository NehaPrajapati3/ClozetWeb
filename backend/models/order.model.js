import mongoose from "mongoose";

const orderModel = new mongoose.Schema(
  {
    customerInformation: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: [
        "Confirmed",
        "Ready for Delivery",
        "Item on the Way",
        "Delivered",
        "Refunded",
        "Scheduled",
      ],
      required: true,
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", orderModel);
