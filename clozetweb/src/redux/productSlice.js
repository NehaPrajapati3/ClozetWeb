import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products:null, 
  },
  reducers: {
    setProducts: (state, action) => {
      console.log("✅ Inside setProducts reducer!"); // <-- Check if this logs
      console.log("🚀 Payload received:", action.payload); // <-- Check payload
      state.products = action.payload; // ✅ Update state
      console.log("✅ Updated products:", state.products); // <-- Should log new state
    },

  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
