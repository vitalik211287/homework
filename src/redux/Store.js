import { configureStore } from "@reduxjs/toolkit";
import booksReducers from './books/booksReducer'

export const store = configureStore({
  reducer: {
    books: booksReducers,
  },
});