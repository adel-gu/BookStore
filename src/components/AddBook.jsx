const AddBook = (props) => {
  return (
    <form action="/action_page.php">
      <fieldset>
        <legend>Add New Book</legend>
        <ul>
          <li>
            <input type="text" name="title" placeholder="Book title"/>
          </li>
          <li>
            <input type="text" name="author" placeholder="Author"/>
          </li>
          <li>
            <button type="button">Add Book</button>
          </li>
        </ul>
      </fieldset>
</form>
  )
}

export default AddBook;