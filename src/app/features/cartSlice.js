import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeAllFromCart: (state, action) => {
        return initialState;
    }
  },
});
export const { addToCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;