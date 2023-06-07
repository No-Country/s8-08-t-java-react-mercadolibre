import { createSlice } from "@reduxjs/toolkit";

import { getRequest } from "../../services/httpRequest.js";

export const initialProduct = {
  list: {
    allProducts: [],
    discounted: [],
    latest: []
  },
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
      state.list.allProducts = action.payload;
    },
    setListDiscounted: (state, action) => {
      state.list.discounted = action.payload;
    },
    setListLatest: (state, action) => {
      state.list.latest = action.payload;
    },
    setProductDetail: (state, action) => {
      state.detail = action.payload;
    }
  }
});

export const { setAllProducts, setProductDetail, setListDiscounted, setListLatest } =
  productSlice.actions;

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

export const getProductsDiscount = () => async dispatch => {
  try {
    const productList = await getRequest("/api/v1/products/discounted");
    if (productList.length > 0) {
      dispatch(setListDiscounted(productList));
    }
  } catch (error) {
    const msgError = error;
    return { msg: msgError.toString() };
  }
};

export const getProductsLatest = () => async dispatch => {
  try {
    const productList = await getRequest("/api/v1/products/latest");
    if (productList.length > 0) {
      dispatch(setListLatest(productList));
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

export const getSearchProducts = name => async dispatch => {
  try {
    const productList = await getRequest(`/api/v1/products/name/${name}`);
    dispatch(setAllProducts(productList));
  } catch (error) {
    dispatch(setAllProducts([]));
    const msgError = error;
    return { msg: msgError.toString() };
  }
};

export const getProductsByCategory = idCategory => async dispatch => {
  try {
    const productList = await getRequest(`/api/v1/products/category/${idCategory}`);
    dispatch(setAllProducts(productList));
  } catch (error) {
    dispatch(setAllProducts([]));
    const msgError = error;
    return { msg: msgError.toString() };
  }
};
