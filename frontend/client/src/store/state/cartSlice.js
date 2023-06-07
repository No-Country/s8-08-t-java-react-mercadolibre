import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../utils/LocalStorageFunctions";

const initialState = {
cart: {
    title: "",
    price: 0,
    cant: 0,
    images: []
}
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: getLocalStorage("detail") ? getLocalStorage("detail") : initialState,
  reducers: {
    setCart: (state, action) => {
      const newCart = action.payload;
      state.cart = newCart;
    }
  }
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;

// export const postPayment = () => async (dispatch) => {

//   try {
    

//   } catch (error) {
//     console.log(error)
//   }
// }