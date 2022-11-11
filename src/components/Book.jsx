// Redux useDispatch 
import { useDispatch } from "react-redux";
// RemoveBook action creatore
import { removeBook } from "../redux/books/books";

const Book = ({id, title, author, category}) => { 
  const dispatch = useDispatch();
  
  return (
    <div className="book-card">
      <div className="action">
        <h4>{category}</h4>
        <h1>{title}</h1>
        <p>{author}</p>
        <ul>
          <li><button type="button">Comments</button > |</li>
          <li><button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button > |</li>
          <li><button type="button">Edit</button ></li>
        </ul>
      </div>
      <div className="progress">
        <div className="progress-spinner"></div>
        <div className="completed">
          <p>64%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="chapter">
        <h4>CURRENT CHAPTER</h4>
        <h2>Chapter 17</h2>
        <button type="button">Update Progress</button>
      </div>
    </div>
  )
}

export default Book;

