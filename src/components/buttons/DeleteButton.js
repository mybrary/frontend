import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

function DeleteButton(props) {
    const {id} = useParams()
    let history = useHistory()

    function handleSubmit(event) {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}books/${id}`)
        .then(res => {
            history.goBack()
        })
    }

    return (
        <div className="delete-modal">
            <div className="modal-content">
                <div className="modal-text">
            <h3>Are you sure you want to delete this book?</h3>
                
            <button
                type="submit"
                onClick={handleSubmit}
                className="delete-confirm"
                >Delete</button>
            <Link to="/"><button className="back-button">Cancel</button></Link>
            </div>
            </div>
            
         </div>
     
    );
}

export default DeleteButton;