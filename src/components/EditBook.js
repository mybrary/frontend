import React, {useState, useEffect } from 'react';
import { useParams, Link, useHistory  } from 'react-router-dom'
import BookDetailsEdit from './BookDetailsEdit'
import axios from "axios"

function EditBook() {
    const [title, setTitle] = useState()
    const [ setEdit] = useState()
    const [author, setAuthor] = useState()
    const [rating, setRating] = useState()
    const [review, setReview] = useState()
    const { id } = useParams()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            title: title,
            author: author,
            rating: rating,
            review: review
        }  
        axios.put(`/books/${id}`, data)
        .then(res => {
            setEdit(res.data)
            setTitle('')
            setAuthor('')
            setRating('')
            setReview('')
        })  
        
    }

    
    return (
        <section className="container">
            <BookDetailsEdit />
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text"  
                       className="form-control" 
                       id="title"
                       name="title" 
                       onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="title">Author:</label>
                <input type="text"  
                       className="form-control" 
                       name="author" 
                       onChange={e => setAuthor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="title">Rating:</label>
                <input type="text"  
                       className="form-control" 
                       name="rating" 
                       onChange={e => setRating(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="title">Review:</label>
                <textarea  
                       className="form-control" 
                       name="review" 
                       onChange={e => setReview(e.target.value)}>
                </textarea>
            </div>  
            <input type="submit" value="submit"/>      
            </form>
             
        </section>
       
    );
}

export default EditBook;