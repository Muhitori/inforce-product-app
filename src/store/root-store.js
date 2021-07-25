import { configureStore } from "@reduxjs/toolkit";
import { commentsReducer, productsReducer } from "./slices";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    comments: commentsReducer,
  },
});
