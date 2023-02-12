import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { productReducer } from "./reducers/products";

export const rootReducer = combineReducers({
  authReducer,
  productReducer
});
