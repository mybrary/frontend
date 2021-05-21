import React, {useState, useEffect} from 'react';
import DeleteButton from './buttons/DeleteButton'
import DeleteWarning from './Modal/DeleteWarning'
import { Link } from 'react-router-dom'
import axios from "axios";

function MyBooks() {
const [books, setBooks] = useState([])
const [fetched, setFetched] = useState()


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

  const handleChange = (book) => {
      book.read = true
      axios.put(`/books/${book._id}`, book)     

          }

    return (
        <section className="container">
            {books.map((book) => {
                return(
                    
                    <div className="book-list">
                    <ul>
                    <li>
                    <Link to={`books/${book._id}`} key={book._id}>
                    <h2>{book.title}</h2>
                    </Link>
                    <h4>{book.author}</h4>
                    <p>Rating : {book.rating}</p>
                    <p>Review: {book.review}</p>
                    <Link to={`/delete/${book._id}`} key={book._id}><button>Delete</button></Link>
                    <p>Read</p>
                    <input type = "checkbox" onChange={e => handleChange(book)}></input>
                    </li>
                    </ul>
                    </div>
                    
                )
            })}
        </section>
    );
}

export default MyBooks;