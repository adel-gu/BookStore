import { useState } from 'react';

// Redux useSelector
import { useSelector } from 'react-redux';

// Components
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBookForm />
    </>
  );
};

export default Books;
