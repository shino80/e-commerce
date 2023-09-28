import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    currentproduct: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.currentproduct = action.payload;
    },

    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.currentproduct.splice(
        state.currentproduct.findIndex((item) => item._id === action.payload)
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getProductFailure, getProductSuccess, getProductStart,deleteProductFailure,deleteProductSuccess,deleteProductStart } =
  productSlice.actions;
export default productSlice.reducer;
