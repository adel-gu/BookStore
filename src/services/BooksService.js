import http from '../http-common';

// Retrieve data
const getBooks = () => {
  return http.get();
};

// Add a book
const postBook = (data) => http.post('', JSON.stringify(data));

const BooksService = {
  getBooks,
  postBook,
};

export default BooksService;
