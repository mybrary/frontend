import React, {useState, useEffect } from 'react';
import { useParams, Link  } from 'react-router-dom'
import BookDetails from './BookDetails'
import axios from "axios"

function EditBook() {
    const [title, setTitle] = useState()
    const [ setData] = useState(null)
    const [author, setAuthor] = useState()
    const [rating, setRating] = useState()
    const [review, setReview] = useState()
    const [defaultBook, setDefaultBook] = useState()
    const { id } = useParams()


    useEffect(() => {
        function getDefault() {
          axios.get(`/books/${id}`)
          .then(res => {
            setDefaultBook(res.data)
            console.log(res.data)
          })
          .catch(console.error)
        }
        getDefault()
        },[id])

    const handleSubmit = () => {
        const data = {
            title: title,
            author: author,
            rating: rating,
            review: review
        }  
        axios.put(`/books/${id}`, data)
        .then(res => {
            setData(res.data)
            setTitle('')
            setAuthor('')
            setRating('')
            setReview('')
        })  
    }


    return (
        <section className="container">
            <BookDetails />
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text"  
                       className="form-control" 
                       id="title"
                       name="title" 
                    //    placeholder={defaultBook.title}  
                    //    defaultValue={title}
                       onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="title">Author:</label>
                <input type="text"  
                       className="form-control" 
                       name="author" 
                    //    placeholder={title}
                    //    defaultValue={title}
                       onChange={e => setAuthor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="title">Rating:</label>
                <input type="text"  
                       className="form-control" 
                       name="rating" 
                    //    placeholder={title}
                    //    defaultValue={title}
                       onChange={e => setRating(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="title">Review:</label>
                <textarea  
                       className="form-control" 
                       name="review" 
                    //    placeholder={title}
                    //    defaultValue={title}
                       onChange={e => setReview(e.target.value)}>
                </textarea>
            </div>
            
           
            
            <Link to={`/myBooks`}><button>Back to My Books</button></Link>
            </form>
             
        </section>
       
    );
}

export default EditBook;