import { configureStore } from "@reduxjs/toolkit";
import { commentsReducer } from "./slices/comments-slice";
import { productsReducer } from "./slices/products-slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    comments: commentsReducer,
  },
});
