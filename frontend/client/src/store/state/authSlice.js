import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  clearLocalStorage,
  setLocalStorage
} from "../../utils/LocalStorageFunctions.js";

export const initialAuth = {
  token: "",
  user: {
    id: 0,
    name: "",
    lastname: "",
    email: "",
    role: ""
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getLocalStorage("auth") ? getLocalStorage("auth") : initialAuth,

  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: () => {
      clearLocalStorage("auth");
      return initialAuth;
    }
  }
});

export const { setLogin, setPosition, setLogout } = authSlice.actions;

export default authSlice.reducer;
