import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Working with API
import BooksService from '../../services/BooksService';

// Actions
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const LOAD_BOOKS = 'books/LOAD_BOOKS';

// Load Books Thunk
export const loadBooks = createAsyncThunk(LOAD_BOOKS, async () => {
  try {
    const res = await BooksService.getBooksServ();
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
});

// Add a Book Thunk
export const addBook = createAsyncThunk(ADD_BOOK, async (payload, thunkAPI) => {
  try {
    await BooksService.postBookServ(payload);
    thunkAPI.dispatch(loadBooks());
  } catch (err) {
    throw new Error(err);
  }
});

// Remove a book Thunk
export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (payload, thunkAPI) => {
    try {
      await BooksService.delBookServ(payload);
      thunkAPI.dispatch(loadBooks());
    } catch (err) {
      throw new Error(err);
    }
  }
);

// Book Store Slice
const booksSlice = createSlice({
  name: 'bookstore',
  initialState: {},
  extraReducers: (builder) => {
    // Loading Books
    builder.addCase(loadBooks.fulfilled, (state, action) => action.payload);
  },
});

// Exports
export default booksSlice;
