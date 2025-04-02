// redux/selectors.js
import { createSelector } from "reselect";

// Basic selector to get product state
const selectProductState = (state) => state.product || { products: [] };

// Memoized selector to get products
export const selectProducts = createSelector(
  [selectProductState],
  (product) => product.products || [] // <-- Fallback to empty array
);

const selectOrderState = (state) => state.order || { orders: [] };

export const selectOrders = createSelector(
  [selectOrderState],
  (order) => order.orders || [] // <-- Fallback to empty array
);

const selectEmployeeState = (state) => state.order || { orders: [] };

export const selectEmployees = createSelector(
  [selectEmployeeState],
  (employee) => employee.employees || [] 
);

