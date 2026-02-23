import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Todo } from '../types/todo';

const initialState: Todo[] = [
  { id: '1', text: 'Learn Redux Toolkit', completed: true, createdAt: Date.now() - 86400000 },
  { id: '2', text: 'Build a to-do app', completed: false, createdAt: Date.now() },
  { id: '3', text: 'Add routing and custom hooks', completed: false, createdAt: Date.now() },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Todo>) {
        state.push(action.payload);
      },
      prepare(text: string) {
        return {
          payload: {
            id: crypto.randomUUID(),
            text: text.trim(),
            completed: false,
            createdAt: Date.now(),
          },
        };
      },
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo(state, action: PayloadAction<string>) {
      return state.filter((t) => t.id !== action.payload);
    },
    editTodo(state, action: PayloadAction<{ id: string; text: string }>) {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) todo.text = action.payload.text.trim();
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
