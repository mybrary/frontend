import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";

function MyBooks() {
const [books, setBooks] = useState([])

  useEffect(() => {
  function getBooks() {
    axios.get('/books/')
    .then(res => {
      setBooks(res.data)
      console.log(res.data)
    })
    .catch(console.error)
  }
  getBooks()
  }, [])

    return (
        <section className="container">
            {books.map((book, id) => {
                return(
                    <Link to={`/${book._id}`} key={book.id}>
                    <div className="book-list">
                    <ul>
                    <li>
                    <h2>{book.title}</h2>
                    <h4>{book.author}</h4>
                    <p>Rating : {book.rating}</p>
                    <p>Review: {book.review}</p>
                    </li>
                    </ul>
                    </div>
                    </Link>
                )
            })}
        </section>
    );
}

export default MyBooks;