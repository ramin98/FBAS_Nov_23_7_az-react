import { createSlice } from "@reduxjs/toolkit";
import { completedFetch, todoFetch } from "./todoFetchs";

let completedSlice = createSlice({
  name: "completed",
  initialState: {
    completedArray: [],
    loading: false,
    error: null,
  },
  reducers: {
    completedTodo: (state, action) => {
      let completedArray = [...state.completedArray];
      if (completedArray.length >= 10) {
        completedArray.shift();
      }
      completedArray.push(action.payload);
      return { ...state, completedArray: completedArray };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(completedFetch.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(completedFetch.fulfilled, (state, action) => {
      state.completedArray = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(completedFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default completedSlice.reducer;
export const { completedTodo } = completedSlice.actions;
