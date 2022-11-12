// Redux useSelector
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';
import { loadBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <>
      {Object.keys(books).map((id) => (
        <Book
          key={id}
          id={id}
          title={books[id][0].title}
          author={books[id][0].author}
          category={books[id][0].category}
        />
      ))}
      <AddBookForm />
    </>
  );
};

export default Books;
