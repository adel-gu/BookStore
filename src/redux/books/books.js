import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../http-common';
// Working with API
import BooksService from '../../services/BooksService';

// Actions
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const LOAD_BOOKS = 'books/LOAD_BOOKS';

// Thunks
// Load Books
export const loadBooks = createAsyncThunk(LOAD_BOOKS, async () => {
  try {
    const res = await BooksService.getBooks();
    return res.data;
  } catch (err) {
    throw new Error('somthing went wrong!!');
  }
});

// Add a Book
export const addBook = createAsyncThunk(ADD_BOOK, async (payload, thunkAPI) => {
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  thunkAPI.dispatch(loadBooks());
});

// Remove a book
export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (payload, thunkAPI) => {
    await fetch(`${API_URL}/${payload}`, {
      method: 'DELETE',
    });
    thunkAPI.dispatch(loadBooks());
  }
);

// Slice
const booksSlice = createSlice({
  name: 'bookstore',
  initialState: {},
  reducers: {
    fetchBooks: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    // Loading Books
    builder.addCase(loadBooks.fulfilled, (state, action) => {
      return action.payload;
    });
    // Adding a book
    builder.addCase(addBook.fulfilled, (state, action) => {});
    // Remove a book
    builder.addCase(removeBook.fulfilled, (state, action) => {});
  },
});

// Exports
export default booksSlice;
