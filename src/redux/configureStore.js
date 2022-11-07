import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import BooksReducer from './books/books';
import categoriesReducer from './categories/categories';

// Combining reducers
const rootReducer = combineReducers({
  books: BooksReducer,
  categories: categoriesReducer,
});

export default rootReducer;
