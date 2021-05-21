import React, {useEffect, useState} from 'react';
import axios from 'axios';

function CreateBook(props) {
    const [addBook, setAddBook] = useState();
    const [title, setTitle] = useState();
    const [authors, setAuthors] = useState();
    const [publish_date, setPublishDate] = useState();
    const [rating, setRating] = useState();
    const [review, setReview] = useState();
    
    const bookInfo = {
        title: title,
        authors: authors,
        publish_date: publish_date,
        rating: rating,
        review: review
        
      };
      const handleSubmit = e => {
        e.preventDefault();
        postBooks();
        console.log(postBooks)
      };
      async function postBooks() {
        const { data } = await axios.post(
            
          '/books', bookInfo
        )
        setAddBook(data); 
        console.log(bookInfo)
      };
      return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            Book Title<br />
            <input type = "text" name = "Book Title" onChange={event => setTitle(event.target.value)} />
          <br />
          Author(s)<br />
            <input type = "text" name = "Author" onChange={event => setAuthors(event.target.value)} />
            <br />
            Publish Date<br />
            <input type = "text" name = "Publish Date" onChange={event => setPublishDate(event.target.value)} />
            <br />
            Rating<br />
            <input type = "number" name = "Rating" onChange={event => setRating(event.target.value)} />
            <br />
            Review<br />
            <input type = "text" name = "Review" onChange={event => setReview(event.target.value)} />
          </label>
          <br />
          <button type = "submit">Add Book</button>
        
        </form>
        </div>
    );
}
export default CreateBook;