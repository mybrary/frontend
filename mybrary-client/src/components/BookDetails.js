import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from "axios"

function BookDetails() {
const [book, setBook] = useState([])
const { id } = useParams()

useEffect(() => {
    function getBook() {
      axios.get(`/books/${id}`)
      .then(res => {
        setBook(res.data)
        console.log(res.data)
      })
      .catch(console.error)
    }
    getBook()
    },[id])
    return (
        <div className="container">
            <div className="book-list">
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p>Rating : {book.rating}</p>
            <p>Review: {book.review}</p>
            </div>
        <Link to={`/editBook/${book._id}`} key={book._id}><button>Edit</button></Link>
        
        <Link to={`/myBooks`}><button>My Books</button></Link>
        </div>
    );
}

export default BookDetails;