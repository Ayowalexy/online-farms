import { createSlice } from "@reduxjs/toolkit";
import {
  
  signUp,
  login,
  
} from "./thunkAction";


const initialState = {
  user: {},
  loading: "idle",
  isLogging: 'idle'
};

// Then, handle actions in your reducers:ß
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },

  extraReducers: (builder) => {
   

    //signup
    builder.addCase(signUp.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(signUp.fulfilled, (state) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(signUp.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //login
    builder.addCase(login.pending, (state) => {
      return { ...state, isLogging: "pending" };
    });

    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, isLogging: "successful", user: action.payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, isLogging: "failed" };
    });

  },
});
export const authReducer = authSlice.reducer;
