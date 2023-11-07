import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    cart: [],
    favouriteProducts: [],
    moveAllToCart: [],
    cartTotalAmount: 0,
    cartQuantity: 0,
  },
  reducers: {
    addCart(state, action) {
      const productToAdd = action.payload;
      const isProductInCart = state.cart.find(item => item.title === productToAdd.title);
    
      if (!isProductInCart) {
        state.cart.push(productToAdd);
      }
    },
    moveAllToCart(state, action) {
      const productsToMove = action.payload;
      productsToMove.forEach(product => {
        const isProductInCart = state.cart.find(item => item.title === product.title);
        if (!isProductInCart) {
          state.cart.push(product);
        }
      })
      
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
        (product) => product.id !== action.payload.id
      );
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const product = state.cart.find((product) => product.id === id);
      product.quantity = quantity;
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
  updateQuantity,
  getTotals,
  updateProductPrice
  
} = productSlice.actions;
export default productSlice.reducer;
