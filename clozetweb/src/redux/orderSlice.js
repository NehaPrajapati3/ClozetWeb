import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    products: null,
  },
  reducers: {
    setOrders: (state, action) => {
      console.log("✅ Inside setProducts reducer!");
      console.log("🚀 Payload received:", action.payload);
      state.orders = action.payload;
      console.log("✅ Updated products:", state.orders);
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order._id !== action.payload
      );
    },
  },
});

export const { setOrders, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
