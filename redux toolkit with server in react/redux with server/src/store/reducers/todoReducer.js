import { createSlice } from "@reduxjs/toolkit";
import { todoFetch } from "./todoFetchs";

let todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoArray: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      let todoList = [...state.todoArray];
      todoList.push(action.payload);
      return { ...state, todoArray: todoList };
    },
    complete: (state, action) => {
      let todoList = [...state.todoArray];
      let index = todoList.findIndex((item) => item.id === action.payload);
      todoList.splice(index, 1);
      return { ...state, todoArray: todoList };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(todoFetch.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(todoFetch.fulfilled, (state, action) => {
      state.todoArray = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(todoFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default todoSlice.reducer;
export const { addTodo, complete } = todoSlice.actions;
