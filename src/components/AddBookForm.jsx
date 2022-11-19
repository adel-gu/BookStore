// UseState
import { useState } from 'react';
//  Dispatch
import { useDispatch } from 'react-redux';
// Bootstrap
import { Form, Button } from 'react-bootstrap';
// Id provider library
import { v4 as uuidv4 } from 'uuid';
// Redux
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const [book, setBook] = useState({ });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setBook({
      ...book,
      item_id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    e.target.reset();
  };

  return (
    <>
      <h2 className="add-new-book">Add New Book</h2>
      <Form onSubmit={(e) => { handlSubmit(e); }}>
        <Form.Group controlId="formBasicEmail" className="form-grid mx-0">
          <Form.Control
            type="text"
            name="title"
            placeholder="Book title"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Form.Control
            type="text"
            name="author"
            placeholder="Author"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Form.Control
            type="text"
            name="category"
            placeholder="Category"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Button type="submit" className="primary-btn">ADD BOOK</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddBookForm;
