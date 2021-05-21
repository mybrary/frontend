import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios';
function CreateBook(props) {
    const [addBook, setAddBook] = useState();
    const [title, setTitle] = useState();
    const [authors, setAuthors] = useState();
    const [rating, setRating] = useState();
    const [review, setReview] = useState();
let history = useHistory();
    const bookInfo = {
        title: title,
        authors: authors,
        rating: rating,
        review: review,
        read: false
      };
      const handleSubmit = e => {
        e.preventDefault();
        postBooks();
        history.push('/')
      };
      async function postBooks() {
        const { data } = await axios.post(
            '/books', bookInfo
        );
        setAddBook(data);
      };
      return (
        <div className="book-details">
          <h1>Add to Your Reading List</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <br />
            <input type = "text" name = "Book Title" placeholder="Book Title" onChange={event => setTitle(event.target.value)} />
          <br />
          <br />
            <input type = "text" name = "Author" placeholder="Author(s)" onChange={event => setAuthors(event.target.value)} />
            <br />
            <br />
            <input type = "number" name = "Rating" placeholder="Rating" onChange={event => setRating(event.target.value)} />
            <br />
            <br />
            <input type = "text" name = "Review" placeholder="Review" onChange={event => setReview(event.target.value)} />
          </label>
          <br />
          <button type= "submit" className="submit-button">Add New Book</button>
          <Link to={`/`}><button className="back-button">Cancel</button></Link>
        </form>
        </div>
    );
}
export default CreateBook;