import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
  products:null, 
  },
  reducers: {
    setProducts: (state, action) => {
      console.log("✅ Inside setProducts reducer!"); 
      console.log("🚀 Payload received:", action.payload); 
      state.products = action.payload; 
      console.log("✅ Updated products:", state.products); 
    },
     deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      )
     }
  },
});

export const { setProducts, deleteProduct} = productSlice.actions;
export default productSlice.reducer;
