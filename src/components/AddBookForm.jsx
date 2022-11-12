// UseState
import { useState } from "react";
//  Dispatch
import { useDispatch } from "react-redux";
// addBook Component
import { addBook, loadBooks} from "../redux/books/books";
// Id provider library
import {v4 as uuidv4} from 'uuid';

const AddBookForm = (props) => {
  const [book, setBook] = useState({})
  
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setBook({
      ...book,
      item_id:uuidv4(),
      [e.target.name]: e.target.value,
      category: 'Action'
    })
  }
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      dispatch(addBook(book))
      // console.log(book)
      e.target.reset()
      }}>
      <fieldset>
        <legend>Add New Book</legend>
        <ul>
          <li>
            <input type="text" name="title" placeholder="Book title" required onChange={(e) => handleInputChange(e)}/>
          </li>
          <li>
            <input type="text" name="author" placeholder="Author" required onChange={(e) => handleInputChange(e)}/>
          </li>
          <li>
            <button type="submit" >Add Book</button>
          </li>
        </ul>
      </fieldset>
</form>
  )
}

export default AddBookForm;