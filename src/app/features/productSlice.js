import { createSlice } from "@reduxjs/toolkit";

 const productSlice = createSlice({
  name: "products",
  initialState: {
    cart: [],
    favouriteProducts: [],
    moveAllToCart: [],
  },
  reducers: {
    addCart(state, action) {
      state.cart.push(action.payload);
    },
    moveAllToCart(state, action) {
      state.moveAllToCart.push(...action.payload);
    },
    addFavourite(state, action) {
      state.favouriteProducts.push(action.payload);
    },
    removeAll(state, action) {
      state.cartProducts = [];
    },
    searchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCart, moveAllToCart, addFavourite, remove, removeAll, searchTerm } = productSlice.actions;
export default productSlice.reducer;
