import http from '../http-common';

// Retrieve Books
const getBooksServ = () => http.get();

// Add a book
const postBookServ = (data) => http.post('', data);

// Remove a Book
const delBookServ = (id) => http.delete(`/${id}`);

const BooksService = {
  getBooksServ,
  postBookServ,
  delBookServ,
};

export default BooksService;
