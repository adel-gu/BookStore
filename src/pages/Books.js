import { useState } from 'react';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = () => {
  const [books, setBooks] = useState([
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      title: 'Dune',
      author: 'Frank Herbet',
    },
  ]);
  return (
    <>
      {books.map((book) => (
        <Book book={book} />
      ))}
      <AddBook />
    </>
  );
};

export default Books;
