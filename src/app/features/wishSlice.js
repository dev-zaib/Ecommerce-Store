import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const wishSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    addToLikes: (state, action) => {
      state.push(action.payload);
    },
    removeFromLikes: (state, action) => {
      return initialState;
    },
  },
});

export const { addToLikes, removeFromLikes } = wishSlice.actions;
export default wishSlice.reducer;