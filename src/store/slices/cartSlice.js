import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addProduct: (state, action) => {
      const item = action.payload;
      state.cart.push(item);
    },
    removeProduct: (state, action) => {
      const index = action.payload;
      state.cart.splice(index, 1);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
