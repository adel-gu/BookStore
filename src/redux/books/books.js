import axios from 'axios';

// API
const APP_ID = 'VTajB0F8HFH8ssRHytO8';
export const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookstore/books/LOAD_BOOKS';

// Action Creators
export const loadBooks = (payload) => ({
  type: LOAD_BOOKS,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// Thunk action creators
export const loadBooksThunk = () => async (dispatch) => {
  // fetch books from API
  const response = await fetch(API_URL);
  const books = await response.json();
  dispatch(loadBooks(books));
};

const postBookThunk = async () => {
  // fetch books from API
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: 4,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    }),
  });
};
// postBookThunk();
// loadBooksThunk()();

// Initial state
const books = {};

// Reducer
const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

// Exports
export default BooksReducer;
