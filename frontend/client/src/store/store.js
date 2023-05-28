import { configureStore } from "@reduxjs/toolkit";
import auth from "./state/authSlice";

export const store = configureStore({
  reducer: {
    auth
  }
});
