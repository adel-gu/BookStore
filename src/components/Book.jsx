const Book = (props) => { 
  return (
    <div className="book-card">
      <div className="action">
        <h4>Action</h4>
        <h1>{props.book.title}</h1>
        <p>{props.book.author}</p>
        <ul>
          <li><a>Comments</a> |</li>
          <li><a>Remove</a> |</li>
          <li><a>Edit</a></li>
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

