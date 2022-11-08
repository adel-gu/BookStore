// UseState
import { useState } from "react";
//  Dispatch
import { useDispatch } from "react-redux";
// addBook Component
import { addBook } from "../redux/books/books";
// Id provider library
import {v4 as uuidv4} from 'uuid';

const AddBook = (props) => {
  const [book, setBook] = useState({id:uuidv4()})
  
  const dispatch = useDispatch();

  const getInputValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    })
  }
  
  return (
    <form action="/action_page.php" onSubmit={(e) => {
      e.preventDefault()
      dispatch(addBook(book))
      }}>
      <fieldset>
        <legend>Add New Book</legend>
        <ul>
          <li>
            <input type="text" name="title" placeholder="Book title" onChange={(e) => getInputValue(e)}/>
          </li>
          <li>
            <input type="text" name="author" placeholder="Author" onChange={(e) => getInputValue(e)}/>
          </li>
          <li>
            <button type="submit" >Add Book</button>
          </li>
        </ul>
      </fieldset>
</form>
  )
}

export default AddBook;