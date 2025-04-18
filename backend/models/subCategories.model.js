import mongoose from "mongoose";

const subCategoryModel = new mongoose.Schema(
  {
    subCategoryId: {
      type: String,
      required: true,
    },
    subCategoryName: {
      type: String,
      required: true,
    },
    subCategoryStatus: {
      type: Boolean,
      default: false,
    },
    subCategoryImageUrl: {
      type: [String],
      required: true,
    },
   
    subCategorySizeChartUrl: {
      type: [String],
      default:""
    },
   mainCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
   sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SellerUserAuth",
      required: true,
    },
  },
  { timestamps: true }
);

export const SubCategory = mongoose.model("SubCategory", subCategoryModel);
