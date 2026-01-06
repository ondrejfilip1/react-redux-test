import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addProduct: (state, action) => {
      const item = action.payload;
      state.cart.push(item);
      toast.success(`Added ${item.name} to cart.`);
    },
    removeProduct: (state, action) => {
      const index = action.payload;
      state.cart.splice(index, 1);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
