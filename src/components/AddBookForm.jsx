// UseState
import { useState } from "react";
//  Dispatch
import { useDispatch } from "react-redux";
// addBook Component
import { addBook } from "../redux/books/books";
// Id provider library
import {v4 as uuidv4} from 'uuid';

// Bootstrap 
import {Form, Button} from 'react-bootstrap';

const AddBookForm = (props) => {
  const [book, setBook] = useState({})
  
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setBook({
      ...book,
      item_id:uuidv4(),
      [e.target.name]: e.target.value,
    })
  }
  
  return (
    <>
      <h2 className="add-new-book">Add New Book</h2>
      <Form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addBook(book))
        e.target.reset()
      }}>
        <Form.Group controlId="formBasicEmail" className="form-grid mx-0">
          <Form.Control type="text" name="title" placeholder="Book title" required onChange={(e) => handleInputChange(e)}/>
          <Form.Control type="text" name="author" placeholder="Author" required
          onChange={(e) => handleInputChange(e)}/>
          <Form.Control type="text" name="category" placeholder="Category" required onChange={(e) => handleInputChange(e)}/>
          <button type="submit" className="primary-btn">ADD BOOK</button>
        </Form.Group>
      </Form>
    </>
  )
}

export default AddBookForm;