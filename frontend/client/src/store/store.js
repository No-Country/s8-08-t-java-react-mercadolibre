import { configureStore } from "@reduxjs/toolkit";
import auth from "./state/authSlice";
import categories from "./state/categoriesSlice";
import product from "./state/productSlice";

export const store = configureStore({
  reducer: {
    auth,
    categories,
    product
  }
});
