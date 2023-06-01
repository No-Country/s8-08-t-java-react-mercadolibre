import { configureStore } from "@reduxjs/toolkit";
import auth from "./state/authSlice";
import product from "./state/productSlice";

export const store = configureStore({
  reducer: {
    auth,
    product
  }
});
