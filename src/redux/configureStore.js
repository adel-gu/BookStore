import { configureStore } from '@reduxjs/toolkit';

// Reducers
import BooksReducer from './books/books';
import categoriesReducer from './categories/categories';

// Configure Store
const store = configureStore({
  reducer: {
    books: BooksReducer,
    categories: categoriesReducer,
  },
});

export default store;
