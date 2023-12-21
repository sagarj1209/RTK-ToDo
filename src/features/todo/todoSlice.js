import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo", //name compulsory
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //state->current state and action-> values
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo); //todos from initialState
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; //for using in differernt components

export default todoSlice.reducer; //for store
