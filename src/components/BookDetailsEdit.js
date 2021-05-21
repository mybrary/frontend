import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from "axios"

function BookDetails() {
const [book, setBook] = useState([])
const { id } = useParams()

useEffect(() => {
    function getBook() {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}books/${id}`)
      .then(res => {
        setBook(res.data)
        console.log(res.data)
      })
      .catch(console.error)
    }
    getBook()
    },[id])
    return (
        
        <div className="edit-details">
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p>Rating : {book.rating}</p>
            <p>Review: {book.review}</p>
        </div>
    );
}

export default BookDetails;