import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  clearLocalStorage,
  setLocalStorage
} from "../../utils/LocalStorageFunctions.js";
import { postRequest, getRequest } from "../../services/httpRequest.js";

export const initialAuth = {
  token: "",
  user: {
    id: 0,
    name: "",
    lastname: "",
    email: "",
    role: "",
    address: {}
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
    },
    setUserAddress: (state, action) => {
      state.user.address = action.payload;
    }
  }
});

export const { setLogin, setPosition, setLogout, setUserAddress } = authSlice.actions;

export default authSlice.reducer;

export const loginUser = dataLogin => async dispatch => {
  try {
    const auth = await postRequest(dataLogin, "/api/v1/auth/login");
    if (auth.token !== "") {
      dispatch(setLogin(auth));
      const authInStorage = { token: auth.token, user: auth.user };
      setLocalStorage("auth", authInStorage);
      return { login: true, msg: "Usuario logeado con éxito!" };
    }
    return { login: false };
  } catch (error) {
    const msgError = error;
    return { login: false, msg: msgError.toString() };
  }
};

export const userAddress = userId => async dispatch => {
  try {
    const response = await getRequest(`/api/v1/address/user/active/${userId}`);
    if (response) {
      dispatch(setUserAddress(response));
      const localStorageData = getLocalStorage("auth");

      const addressInStorage = {...localStorageData.user.address, ...response};
      localStorageData.user.address = addressInStorage; 

      setLocalStorage("auth", localStorageData);
      return { address: true, msg: "Usuario logeado con éxito!" };
    }
    return null;
  } catch (error) {
    const msgError = error;
    return { address: null, msg: msgError.toString() };
  }
};
