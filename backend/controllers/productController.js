import { Product } from "../models/product.model.js";

// Add Item API
export const addItem = async (req, res) => {
  try {
    const {
      name,
      description,
      tags,
      store,
      category,
      price,
      discountType,
      discount,
      recommended,
      status,
    } = req.body;

   
    let gotProduct = await Product.findOne({ name });
    if (gotProduct) {
      return res.status(400).json({
        message: "Item with this name already exists.",
        success: false,
      });
    }

    
    const newItem = await Product.create({
      name,
      description,
      tags,
      store,
      category,
      price,
      discountType,
      discount,
      recommended,
      status,
    });

    return res.status(201).json({
      message: "Item added successfully.",
      success: true,
      newItem,
    });
  } catch (error) {
    console.error(`Add Item error: ${error}`);
    res.status(500).json({
      message: "Error adding item.",
      success: false,
    });
  }
};

// Get All Items API
export const getAllItems = async (req, res) => {
  try {
    const allItems = await Product.find(); 
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

// Edit Item API
export const editItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
   // console.log(`Update data is ${updateData}`)

    // Find and update item by ID
    const updatedItem = await Product.findByIdAndUpdate(id, updateData, {
      new: true, // Return updated item
      runValidators: true, // Run validators on update
    });

    if (!updatedItem) {
      return res.status(404).json({
        message: "Item not found.",
        success: false,
      });
    }

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


// Delete Item API
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await Product.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        message: "Item not found.",
        success: false,
      });
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
