import { useState } from 'react';

// Redux useSelector
import { useSelector } from 'react-redux';

// Components
import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </>
  );
};

export default Books;
