import React, {useState, useEffect} from "react"
import './App.css';
import axios from "axios";
import NavBar from './components/Navbar'


function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
  function getBooks() {
    axios.get('/books')
    .then(res => {
      setBooks(res.data)
    })
    .catch(console.error)
  }
  getBooks()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <div className="book-list">
      {books.map((book, index) => {
        return(
          <ul key={index}>
          <li>
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
          <p>Rating : {book.rating}</p>
          <p>Review: {book.review}</p>
          </li>
          </ul>
        )
      })}
    </div>
    </div>
  )

}

export default App;
