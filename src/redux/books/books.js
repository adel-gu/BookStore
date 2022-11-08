// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Initial state
const books = [
  {
    id: 0,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 1,
    title: 'Dune',
    author: 'Frank Herbet',
  },
];

// Reducer
const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// Exports
export default BooksReducer;
