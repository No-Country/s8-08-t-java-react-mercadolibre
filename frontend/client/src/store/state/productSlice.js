import { createSlice } from "@reduxjs/toolkit";

import { getRequest } from "../../services/httpRequest.js";
import { getLocalStorage } from "../../utils/LocalStorageFunctions.js";

export const initialProduct = {
  list: [],

  detail: {
    id: 0,
    title: "",
    price: 0,
    numberQuotas: 0,
    priceQuotas: 0,
    discount: 0,
    priceDiscount: 0,
    images: [],
    descriptionGeneric: [],
    descriptionRelevant: [],
    colors: []
  }
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialProduct,

  reducers: {
    setAllProducts: (state, action) => {
      state.list = action.payload;
    },
    setProductDetail: (state, action) => {
      state.detail = action.payload;
    }
  }
});

export const { setAllProducts, setProductDetail } = productSlice.actions;

export default productSlice.reducer;

export const getAllProducts = () => async dispatch => {
  try {
    const productList = await getRequest("/api/v1/products");
    if (productList.length > 0) {
      dispatch(setAllProducts(productList));
    }
  } catch (error) {
    const msgError = error;
    return { msg: msgError.toString() };
  }
};

export const getProductDetail = idProduct => async dispatch => {
  try {
    const product = await getRequest(`/api/v1/products/details/${idProduct}`);
    if (product.title !== "") {
      dispatch(setProductDetail(product));
    }
  } catch (error) {
    const msgError = error;
    return { msg: msgError.toString() };
  }
};
