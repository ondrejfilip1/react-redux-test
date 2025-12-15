import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import themeReducer from "./slices/themeSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
  reducer: { user: userReducer, theme: themeReducer, cart: cartReducer },
});
