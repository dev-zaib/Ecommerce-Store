import { createSlice } from "@reduxjs/toolkit";
import {images} from "../images";

export const productSlice = createSlice({
    name: "Products",
    initialState: images,
    reducers: {
       filterProducts: (state, action) => {
        return state.filter((product) => product.title !== action.payload.title);
       }
    }
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;