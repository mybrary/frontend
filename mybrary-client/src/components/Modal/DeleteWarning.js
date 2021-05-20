import React from 'react';
import './modal.css'
import DeleteButton from '../buttons/DeleteButton'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DeleteWarning(props) {
        const {id} = useParams()
    
        function handleSubmit(event) {
            axios.delete(`/books/${id}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
        }
    if(!props.show) {
        return null
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Warning!</h4>
                </div>
                <div className="modal-body">
                    Are you sure you want to delete this book?
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose}className="button">Close</button>
                    <button type="submit" onClick={handleSubmit}>Delete</button>
                </div>
            </div>
            
        </div>
    );
}

export default DeleteWarning;