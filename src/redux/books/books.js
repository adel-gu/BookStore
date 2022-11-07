// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Initial state
const books = [];

// Reducer
const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.push(action.book);
    case REMOVE_BOOK:
      return state.map((book) => {
        if (book.id !== action.id) {
          return book;
        }
      });
    default:
      return state;
  }
};

// Action Creators
export const addBookAct = (book) => {
  return {
    type: ADD_BOOK,
    book: book,
  };
};

export const removeBookAct = (bookID) => {
  return {
    type: REMOVE_BOOK,
    id: bookID,
  };
};

// Exports
export default BooksReducer;
