import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// Slices
import booksSlice from './books/books';
import categoriesReducer from './categories/categories';

// combine slices reducers
const rootReducer = {
  reducer: {
    books: booksSlice.reducer,
    categories: categoriesReducer,
  },
};

// Configure Store
const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
