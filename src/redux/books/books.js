import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Working with API
import BooksService from '../../services/BooksService';

// Actions
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const LOAD_BOOKS = 'books/LOAD_BOOKS';

// Thunks
export const loadBooks = createAsyncThunk(LOAD_BOOKS, async () => {
  const res = await BooksService.getBooks();
  return res.data;
});

// Slice
const booksSlice = createSlice({
  name: 'bookstore',
  initialState: {},
  extraReducers: (builder) => {
    // Loading Books
    builder.addCase(loadBooks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Exports
export default booksSlice;
