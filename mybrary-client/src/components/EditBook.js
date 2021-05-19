import React, {useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios"

function EditBook() {
    const [title, setTitle] = useState()
    const [ setData] = useState(null)
    const [author, setAuthor] = useState()
    const [rating, setRating] = useState()
    const [review, setReview] = useState()
    // const [defaultBook, setDefaultBook] = useState()
    const { id } = useParams()


    // useEffect(() => {
    //     function getDefault() {
    //       axios.get(`books/${id}`)
    //       .then(res => {
    //         setDefaultBook(res.data)
    //         console.log(res.data)
    //       })
    //       .catch(console.error)
    //     }
    //     getDefault()
    //     },[id])

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
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text"  
                       className="form-control" 
                       id="title"
                       name="title" 
                       placeholder='title'  
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
            <button
                type="submit"
                onClick={handleSubmit}
                >Submit</button>
            
            {/* <a href="/todos" class="btn btn-secondary">Cancel</a> */}
            </form>
             
        </section>
       
    );
}

export default EditBook;