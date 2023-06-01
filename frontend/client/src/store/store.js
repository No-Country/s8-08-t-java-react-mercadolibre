import { configureStore } from "@reduxjs/toolkit";
import auth from "./state/authSlice";
import categories from "./state/categoriesSlice";

export const store = configureStore({
  reducer: {
    auth,
    categories
  }
});
