import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpRequest";

export const initialList = [];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: initialList
  },
  reducers: {
    setCategoriesList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setCategoriesList } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const getAllCategories = () => async (dispatch) => {
  try {
    const categories = await getRequest("/api/v1/categories/all");
    dispatch(setCategoriesList(categories));
  } catch (error) {
    console.log(error);
  }
};
