import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// Reducers
import BooksReducer from './books/books';
import categoriesReducer from './categories/categories';

//
const rootReducer = {
  reducer: {
    books: BooksReducer,
    categories: categoriesReducer,
  },
};

// Configure Store
const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
