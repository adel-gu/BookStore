// Redux useSelector
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Bootstrap components
import { Container } from 'react-bootstrap';

// Components
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';
import { loadBooks } from '../redux/books/books';

// StyleSheet
import './Home.css';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // eslint-disable-next-line
  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <main>
      <Container>
        <section className="section">
          {Object.keys(books).map((id) => (
            <Book
              key={id}
              id={id}
              title={books[id][0].title}
              author={books[id][0].author}
              category={books[id][0].category}
            />
          ))}
        </section>
        <div className="line" />
        <section className="section">
          <AddBookForm />
        </section>
      </Container>
    </main>
  );
};

export default Books;
