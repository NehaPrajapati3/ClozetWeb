import { Order } from "../models/order.model.js";

// Add Item API
export const addOrder = async (req, res) => {
  try {
    const {
      customerInformation,
      totalAmount,
      orderStatus,
    } = req.body;

    
    const newOrder = await Order.create({
      customerInformation,
      totalAmount,
      orderStatus,
    });

    return res.status(201).json({
      message: "Item ordered successfully.",
      success: true,
      newOrder,
    });
  } catch (error) {
    console.error(`Add order error: ${error}`);
    res.status(500).json({
      message: "Error adding order.",
      success: false,
    });
  }
};

// Get All Items API
export const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find(); 
    return res.status(200).json({
      success: true,
      items: allOrders,
    });
  } catch (error) {
    console.error(`Get all orders error: ${error}`);
    res.status(500).json({
      message: "Error fetching orders.",
      success: false,
    });
  }
};

// Edit Item API
export const editOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
   // console.log(`Update data is ${updateData}`)

    // Find and update item by ID
    const updatedOrder = await Order.findByIdAndUpdate(id, updateData, {
      new: true, // Return updated item
      runValidators: true, // Run validators on update
    });

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Order updated successfully.",
      success: true,
      updatedOrder,
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
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({
        message: "Order not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Order deleted successfully.",
      success: true,
      deletedOrder,
    });
  } catch (error) {
    console.error(`Delete order error: ${error}`);
    res.status(500).json({
      message: "Error deleting order.",
      success: false,
    });
  }
};
