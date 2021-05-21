import React, {useState, useEffect} from 'react';
import DeleteButton from './buttons/DeleteButton'
import DeleteWarning from './Modal/DeleteWarning'
import DeleteImage from '../resources/trashcan.png'
import { Link } from 'react-router-dom'
 
import axios from "axios";

function MyBooks() {
const [books, setBooks] = useState([])


  useEffect(() => {
  function getBooks() {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}books/`)
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
          <div className="book-collection">
          <h2>My Book Collection</h2>
          <Link to="/addNewBook"><button className="addBookButton"><span className="plus">&#x2b;</span> Add Book</button></Link>
          </div>
            {books.map((book, id) => {
                return(
                    <div className="book-list">
                    <ul>
                    <li className="book-details">
                    <Link to={`books/${book._id}`} key={book._id}>
                    <h2 className="book-title">{book.title}</h2>
                    </Link>
                    <h4>{book.authors}</h4>
                    <p>Rating : {book.rating}</p>
                    <p>Review: {book.review}</p>
                    
                    </li>
                    </ul>
                    <div className="list-buttons">
                    <Link to={`/delete/${book._id}`} key={book._id}>
                      <button className="deleteButton"><img src={DeleteImage} alt='delete button' className="deleteImg"/></button>
                      </Link>
                    </div>
                    </div>
                )
            })}
        </section>
    );
}

export default MyBooks;