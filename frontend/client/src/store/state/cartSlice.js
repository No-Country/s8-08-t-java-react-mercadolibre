import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../utils/LocalStorageFunctions";

const initialState = {
  title: "",
  price: 0,
  quantity: 0,
  images: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: { product: getLocalStorage("cart") ? getLocalStorage("cart") : initialState },
  reducers: {
    setCart: (state, action) => {
      state.product = action.payload;
    }
  }
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
