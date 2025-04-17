import cloudinary from "../config/cloudinary.js";
import fs from "fs";
import { SubCategory } from "../models/subCategories.model.js";
import { Category } from "../models/category.model.js";
import { nanoid } from "nanoid";

export const addSubCategory = async (req, res) => {
  try {
    const {
      subCategoryName,
      subCategoryStatus,
      subCategorySizeChart,
      mainCategoryName,
    } = req.body;

    const sellerId = req.id;
    console.log(`sellerId: ${sellerId}`);
    console.log(`subCategoryName: ${subCategoryName}`);
    console.log(`mainCategoryName: ${mainCategoryName}`);

    if (!mainCategoryName) {
      return res.status(400).json({
        success: false,
        message: "Select a Main category.",
      });
    }

    const mainCategory = await Category.findOne({
      categoryName: mainCategoryName,
    });

    if (!mainCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    

    // Check if product name already exists
    const existing = await SubCategory.findOne({ subCategoryName });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Item with this name already exists.",
      });
    }

    const prefix = (mainCategory.categoryName || "").slice(0, 3).toUpperCase();
    const subCategoryId = `${prefix}-${nanoid(4)}`;


    let imageUrl = "";
    let subCategorySizeChartUrl= "";

    console.log("Files received:", req.files);

    // Upload image if available

    if (req.files["image"]) {
      const imagePath = req.files["image"][0].path;
      const imageResult = await cloudinary.uploader.upload(imagePath, {
        folder: "uploads/subCategories/images",
        resource_type: "image",
      });
      imageUrl = imageResult.secure_url;
      fs.unlinkSync(imagePath); // Delete local file after upload
    }
    // Upload image if available

    if (req.files["sizeChart"]) {
      const imagePath = req.files["sizeChart"][0].path;
      const imageResult = await cloudinary.uploader.upload(imagePath, {
        folder: "uploads/subCategories/sizeCharts",
        resource_type: "image",
      });
      subCategorySizeChartUrl = imageResult.secure_url;
      fs.unlinkSync(imagePath); // Delete local file after upload
    }

    const newItem = await SubCategory.create({
      subCategoryId,
      subCategoryName,
      subCategoryStatus,
      subCategorySizeChartUrl,
      mainCategoryId: mainCategory._id,
      subCategoryImageUrl: imageUrl,
      sellerId,
    });

    return res.status(201).json({
      success: true,
      message: "Sub Category added successfully.",
      newItem,
    });
  } catch (error) {
    console.error("Sub Category error:", error);
    return res.status(500).json({
      success: false,
      message: "Error adding Sub Category.",
    });
  }
};

export const getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate(
      "mainCategoryId",
      "categoryName customId"
    );
    res.status(200).json({
      success: true,
      count: subCategories.length,
      subCategories,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch sub categories",
    });
  }
};

export const getSubCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await SubCategory.findById(id).populate(
      "mainCategoryId",
      "categoryName customId"
    );

    if (!subCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Sub category not found" });
    }

    res.status(200).json({ success: true, subCategory });
  } catch (error) {
    console.error("Get by ID error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch sub category" });
  }
};

export const updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedSubCategory = await SubCategory.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedSubCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Sub category not found" });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Sub category updated",
        updatedSubCategory,
      });
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update sub category" });
  }
};

export const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SubCategory.findByIdAndDelete(id);

    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Sub category not found" });
    }

    res.status(200).json({ success: true, message: "Sub category deleted" });
  } catch (error) {
    console.error("Delete error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete sub category" });
  }
};

export const getSubCategoriesByMainCategory = async (req, res) => {
  try {
    const { mainCategoryId } = req.params;

    const subCategories = await SubCategory.find({ mainCategoryId });

    res.status(200).json({
      success: true,
      count: subCategories.length,
      subCategories,
    });
  } catch (error) {
    console.error("Fetch by main category error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch sub categories by main category",
    });
  }
};


