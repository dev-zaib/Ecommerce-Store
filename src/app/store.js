import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../app/features/cartSlice";
import wishlistReducer from "../app/features/wishSlice";
import productReducer from "../app/features/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    products: productReducer,
  },
})
export default store;