import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts
  
} from "./thunkAction";


const initialState = {
 
  loading: "idle",
  bulkbuy: [],
  retailbuy: [],
  products: []
};

// Then, handle actions in your reducers:ß
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },

  extraReducers: (builder) => {
   
    //get products
    builder.addCase(getProducts.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      const bulkbuy = action.payload?.map(ele => ele.type === 'bulk buy')
      const retailbuy = action.payload?.map(ele => ele.type === 'retail buy')

      return { ...state, loading: "successful", 
      products: action.payload };
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });

  },
});
export const productReducer = productSlice.reducer;
