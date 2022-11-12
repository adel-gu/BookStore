// Redux useDispatch 
import { useDispatch } from "react-redux";
// RemoveBook action creatore
import { removeBook } from "../redux/books/books";

const Book = ({id, title, author, category}) => { 
  const dispatch = useDispatch();
  
  return (    
    <div className="book-card">
      <div className="card-left">
        <h4 className="book-category">{category}</h4>
        <h1 className="book-title">{title}</h1>
        <p className="book-author">{author}</p>
        <ul className="actions d-flex align-items-center">
          <li><button type="button" className="border-0 bg-transparent p-0">Comments</button ></li>
          <div className="seperator"></div>
          <li><button type="button"  className="border-0 bg-transparent p-0"onClick={() => dispatch(removeBook(id))}>Remove</button ></li>
          <div className="seperator"></div>
          <li><button type="button" className="border-0 bg-transparent p-0">Edit</button ></li>
        </ul>
      </div>
      <div className="card-middle d-flex justify-content-center align-items-center">
        <div className="progress-spinner"></div>
        <div className="completed">
          <p className="progress-percent">64%</p>
          <p className="progress-text">Completed</p>
        </div>
      </div>
      <div className="card-right d-flex flex-column align-items-center border-start">
        <div>
          <h4>CURRENT CHAPTER</h4>
          <h2>Chapter 17</h2>
          <button type="button" className="primary-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  )
}

export default Book;

