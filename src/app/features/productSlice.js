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
      state.cart = [];
    },
    searchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const product = state.cart.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const {
  addCart,
  moveAllToCart,
  addFavourite,
  remove,
  removeAll,
  searchTerm,
  updateQuantity
} = productSlice.actions;
export default productSlice.reducer;
