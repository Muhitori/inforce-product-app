import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CommentsService } from "../../services/comments-service";

const initialState = {
  list: [],
};

export const getCommentsByProductIdAsync = createAsyncThunk(
  "comments/getByProductId",
  async (productId) => {
    const data = await CommentsService.getByProductId(productId);
    return data;
  }
);

export const createCommentAsync = createAsyncThunk(
  "comment/create",
  async ({ productId, description }) => {
    const data = await CommentsService.create(productId, description);
    return data;
  }
);

export const deleteCommentAsync = createAsyncThunk(
  "comment/delete",
  async (id) => {
    const data = await CommentsService.delete(id);
    return data;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByProductIdAsync.fulfilled, (state, action) => {
        state.list = [...action.payload];
      })
      .addCase(createCommentAsync.fulfilled, (state, action) => {
        state.list = [...state.list, action.payload];
      })
      .addCase(deleteCommentAsync.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export const commentsReducer = commentsSlice.reducer;
