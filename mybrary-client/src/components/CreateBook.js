import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function CreateBook(props) {
    const [addBook, setAddBook] = useState();
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [rating, setRating] = useState();
    const [review, setReview] = useState();
    
let history = useHistory();

    const bookInfo = {
        title: title,
        author: author,
        rating: rating,
        review: review,
        read: false
      };
      const handleSubmit = e => {
        e.preventDefault();
        postBooks();
        history.push('/myBooks')
      };
      async function postBooks() {
        const { data } = await axios.post(
            '/books', bookInfo
        );
        setAddBook(data); 
      };
    
      return (
        <div>
          <h1>Add to Your Reading List</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Book Title<br />
            <input type = "text" name = "Book Title" onChange={event => setTitle(event.target.value)} />
          <br />
          Author(s)<br />
            <input type = "text" name = "Author" onChange={event => setAuthor(event.target.value)} />
            <br />
            Rating<br />
            <input type = "number" name = "Rating" onChange={event => setRating(event.target.value)} />
            <br />
            Review<br />
            <input type = "text" name = "Review" onChange={event => setReview(event.target.value)} />
          </label>
          <br />
          <button type = "submit">Add New Book</button>
        
        </form>
        </div>
    );
}
export default CreateBook;

