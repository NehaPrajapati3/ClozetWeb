// redux/selectors.js
import { createSelector } from "reselect";

// Basic selector to get product state
const selectProductState = (state) => state.product || { products: [] };

// Memoized selector to get products
export const selectProducts = createSelector(
  [selectProductState],
  (product) => product.products || [] // <-- Fallback to empty array
);
