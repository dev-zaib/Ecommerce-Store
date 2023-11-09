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
      const productToAdd = action.payload;
      const isProductInCart = state.cart.find(
        (item) => item.title === productToAdd.title
      );

      if (!isProductInCart) {
        state.cart.push(productToAdd);
      }
    },
    moveAllToCart(state, action) {
      const productsToMove = action.payload;
      productsToMove.forEach((product) => {
        const isProductInCart = state.cart.find(
          (item) => item.title === product.title
        );
        if (!isProductInCart) {
          state.cart.push(product);
        }
      });
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

    remove(state, action) {
      state.cart = state.cart.filter(
        (product) => product.title !== action.payload.title
      );
    },
    increment(state, action) {
      const title = action.payload;
      const product = state.cart.find((product) => product.title === title);

      if (product) {
        product.quantity += 1;
      }
    },
    decrement(state, action) {
      const title = action.payload; // Assuming you pass the product ID in the action payload
      const product = state.cart.find((product) => product.title === title);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
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
  increment,
  decrement,
  getSubTotal,
} = productSlice.actions;
export default productSlice.reducer;
