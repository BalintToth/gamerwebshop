import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find((product) => product._id === action.payload._id) 
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.quantity += 1;
        state.products.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (products) => products._id !== action.payload
      );
      state.total = action.payload.price * action.payload.quantity;
      state.quantity -= 1;
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
