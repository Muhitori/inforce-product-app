import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsService } from "../../services/products-service";

const initialState = {
  list: [],
  currentProduct: {},
};

export const getAllProductsAsync = createAsyncThunk(
  "products/getAll",
  async () => {
    const data = await ProductsService.getAll();
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductsAsync.fulfilled, (state, action) => {
      state.list = [...action.payload];
    });
  },
});

export const productsReducer = productsSlice.reducer;
