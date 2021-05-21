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


      const handleSubmit = e => {
        e.preventDefault();
        const bookInfo = {
          title: title,
          authors: authors,
          rating: rating,
          review: review,
          read: false
        };
        axios.post(`${process.env.REACT_APP_BACKEND_URL}books`, bookInfo)
        .then(res => {
          setAddBook(res.data)
          history.push('/')
        })
        
      };
      return (
        <div className="book-details">
          <h2>Add to Your Reading List</h2>
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