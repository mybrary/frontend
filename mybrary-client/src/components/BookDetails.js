import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios"

function BookDetails() {
const [book, setBook] = useState([])
const { id } = useParams()

useEffect(() => {
    function getBook() {
      axios.get(`books/${id}`)
      .then(res => {
        setBook(res.data)
        console.log(res.data)
      })
      .catch(console.error)
    }
    getBook()
    })
    return (
        <div className="details-container">
            <div className="book-list">
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p>Rating : {book.rating}</p>
            <p>Review: {book.review}</p>
            </div>
        </div>
    );
}

export default BookDetails;