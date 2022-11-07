import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Reducers
import BooksReducer from './books/books';
import categoriesReducer from './categories/categories';

// Combining reducers
const rootReducer = combineReducers({
  books: BooksReducer,
  categories: categoriesReducer,
});

// Configure Store
const store = configureStore({ reducer: rootReducer });

export default store;
