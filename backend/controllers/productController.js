import { Product } from "../models/product.model.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

// Add Item API with Image and Video Upload
// export const addItem = async (req, res) => {
//   try {
//     const {
//       name,
//       description,
//       tags,
//       store,
//       category,
//       price,
//       discountType,
//       discount,
//       recommended,
//       status,
//     } = req.body;
//     const userId = req.id

//     // Check if product name already exists
//     let gotProduct = await Product.findOne({ name });
//     if (gotProduct) {
//       return res.status(400).json({
//         message: "Item with this name already exists.",
//         success: false,
//       });
//     }

//     let imageUrl = "";
//     let videoUrl = "";

//     console.log("Files received:", req.files);


//     // Upload image if available

//     if (req.files["image"]) {
//       const imagePath = req.files["image"][0].path;
//       const imageResult = await cloudinary.uploader.upload(imagePath, {
//         folder: "uploads/products/images",
//         resource_type: "image",
//       });
//       imageUrl = imageResult.secure_url;
//       fs.unlinkSync(imagePath); // Delete local file after upload
//     }

//     // Upload video if available
//     if (req.files["video"]) {
//       const videoPath = req.files["video"][0].path;
//       const videoResult = await cloudinary.uploader.upload(videoPath, {
//         folder: "uploads/products/productsvideos",
//         resource_type: "video",
//       });
//       videoUrl = videoResult.secure_url;
//       fs.unlinkSync(videoPath); // Delete local file after upload
//     }

//     // Create new product
//     const newItem = await Product.create({
//       name,
//       description,
//       tags: tags ? tags.split(",") : [],
//       store,
//       category,
//       price,
//       discountType,
//       discount,
//       recommended,
//       status,
//       imageUrl,
//       videoUrl,
//       userId,
//     });

//     return res.status(201).json({
//       message: "Item added successfully.",
//       success: true,
//       newItem,
//     });
//   } catch (error) {
//     console.error(`Add Item error: ${error}`);
//     res.status(500).json({
//       message: "Error adding item.",
//       success: false,
//     });
//   }
// };

export const addItem = async (req, res) => {
  try {
    const {
      name,
      category,
      subcategory,
      shortDesc,
      detailedDesc,
      brand,
      sku,
      sellingPrice,
      originalPrice,
      discountType,
      discountValue,
      taxIncluded,
      stock,
      stockStatus,
      restockDate,
      returnPolicy,
      visibility,
      seoKeywords,
      buyerNotes,
      status,
    } = req.body;

    const userId = req.id;

    // Check if product name already exists
    const existing = await Product.findOne({ name });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Item with this name already exists.",
      });
    }

    let imageUrl = "";
    let videoUrl = "";

    console.log("Files received:", req.files);

    // Upload image if available

    if (req.files["image"]) {
      const imagePath = req.files["image"][0].path;
      const imageResult = await cloudinary.uploader.upload(imagePath, {
        folder: "uploads/products/images",
        resource_type: "image",
      });
      imageUrl = imageResult.secure_url;
      fs.unlinkSync(imagePath); // Delete local file after upload
    }

    // Upload video if available
    if (req.files["video"]) {
      const videoPath = req.files["video"][0].path;
      const videoResult = await cloudinary.uploader.upload(videoPath, {
        folder: "uploads/products/productsvideos",
        resource_type: "video",
      });
      videoUrl = videoResult.secure_url;
      fs.unlinkSync(videoPath); // Delete local file after upload
    }

    const newItem = await Product.create({
      name,
      category,
      subcategory,
      shortDesc,
      detailedDesc,
      brand,
      sku,
      sellingPrice,
      originalPrice,
      discountType,
      discountValue,
      taxIncluded: taxIncluded === "true" || taxIncluded === true, // handle boolean
      stock: stock ? JSON.parse(stock) : {},
      stockStatus,
      restockDate,
      imageUrl,
      videoUrl,
      returnPolicy,
      visibility: visibility ? JSON.parse(visibility) : {},
      seoKeywords,
      buyerNotes,
      status,
      userId,
    });

    return res.status(201).json({
      success: true,
      message: "Item added successfully.",
      newItem,
    });
  } catch (error) {
    console.error("Add item error:", error);
    return res.status(500).json({
      success: false,
      message: "Error adding item.",
    });
  }
};


// Get All Items API
export const getAllItems = async (req, res) => {
  try {
    const userId = req.id;
    const allItems = await Product.find({ userId: userId });
    return res.status(200).json({
      success: true,
      items: allItems,
    });
  } catch (error) {
    console.error(`Get all Items error: ${error}`);
    res.status(500).json({
      message: "Error fetching items.",
      success: false,
    });
  }
};

// Edit Item API with Image and Video Upload
export const editItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    let updatedItem = await Product.findById(id);
    if (!updatedItem) {
      return res.status(404).json({
        message: "Item not found.",
        success: false,
      });
    }

    // Upload new image if available
    if (req.files["image"]) {
      // Delete old image from Cloudinary
      if (updatedItem.imageUrl && updatedItem.imageUrl.length > 0) {
        const oldImagePublicId = updatedItem.imageUrl[0]
          .split("/")
          .pop()
          .split(".")[0];

        await cloudinary.uploader.destroy(
          `uploads/products/images/${oldImagePublicId}`
        );
      }

      // Upload new image
      const imagePath = req.files["image"][0].path;
      const imageResult = await cloudinary.uploader.upload(imagePath, {
        folder: "uploads/products/images",
        resource_type: "image",
      });

      // Assign as array
      updateData.imageUrl = [imageResult.secure_url];

      // Clean up local file
      fs.unlinkSync(imagePath);
    }

    // Upload new video if available
    if (req.files["video"]) {
      // Delete old video from Cloudinary
      if (updatedItem.videoUrl) {
        const oldVideoPublicId = updatedItem.videoUrl
          .split("/")
          .pop()
          .split(".")[0];
        await cloudinary.uploader.destroy(
          `uploads/products/videos/${oldVideoPublicId}`,
          {
            resource_type: "video",
          }
        );
      }

      // Upload new video
      const videoPath = req.files["video"][0].path;
      const videoResult = await cloudinary.uploader.upload(videoPath, {
        folder: "uploads/products/videos",
        resource_type: "video",
      });
      updateData.videoUrl = videoResult.secure_url;
      fs.unlinkSync(videoPath);
    }

    // Update product with new data
    updatedItem = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      message: "Item updated successfully.",
      success: true,
      updatedItem,
    });
  } catch (error) {
    console.error(`Edit Item error: ${error}`);
    res.status(500).json({
      message: "Error updating item.",
      success: false,
    });
  }
};


// Delete Item API with Image and Video Deletion
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    // Find item by ID to get image and video URLs
    const deletedItem = await Product.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        message: "Item not found.",
        success: false,
      });
    }

    // Delete image from Cloudinary if exists
    if (deletedItem.imageUrl) {
      const oldImagePublicId = deletedItem.imageUrl
        .split("/")
        .pop()
        .split(".")[0];
      await cloudinary.uploader.destroy(
        `uploads/products/images/${oldImagePublicId}`
      );
    }

    // Delete video from Cloudinary if exists
    if (deletedItem.videoUrl) {
      const oldVideoPublicId = deletedItem.videoUrl
        .split("/")
        .pop()
        .split(".")[0];
      await cloudinary.uploader.destroy(
        `uploads/products/videos/${oldVideoPublicId}`,
        {
          resource_type: "video",
        }
      );
    }

    return res.status(200).json({
      message: "Item deleted successfully.",
      success: true,
      deletedItem,
    });
  } catch (error) {
    console.error(`Delete Item error: ${error}`);
    res.status(500).json({
      message: "Error deleting item.",
      success: false,
    });
  }
};
