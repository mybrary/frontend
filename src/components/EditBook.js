import React, {useState, useEffect } from 'react';
import { useParams, Link, useHistory  } from 'react-router-dom'
import BookDetailsEdit from './BookDetailsEdit'
import axios from "axios"
import '../Form.css'

function EditBook() {
    const [title, setTitle] = useState()
    const [ edit, setEdit] = useState()
    const [authors, setAuthors] = useState()
    const [rating, setRating] = useState()
    const [review, setReview] = useState()
    const { id } = useParams()
    let history = useHistory()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            title: title,
            authors: authors,
            rating: rating,
            review: review
        }  
        axios.put(`${process.env.REACT_APP_BACKEND_URL}books/${id}`, data)
        .then(res => {
            setEdit(res.data)
            setTitle('')
            setAuthors('')
            setRating('')
            setReview('')
        })
        .then(res => {
            history.goBack()
        })  
        
    }

    return (
        <div className="book-details">
            <BookDetailsEdit />
            
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text"  
                       className="form-control" 
                       id="title"
                       name="title" 
                       placeholder="Title"
                       onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="text"  
                       className="form-control" 
                       name="author" 
                       placeholder="Author"
                       onChange={e => setAuthors(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="text"  
                       className="form-control" 
                       name="rating" 
                       placeholder="Rating"
                       onChange={e => setRating(e.target.value)}/>
            </div>
            <div className="form-group">
                <textarea  
                       className="form-control" 
                       name="review" 
                       placeholder="Your Review"
                       onChange={e => setReview(e.target.value)}>
                </textarea>
            </div>  
            <input type="submit" className="submit-button"value="Submit"/>      
            </form>
             
        </div>
       
    );
}

export default EditBook;