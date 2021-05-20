import React, {useState} from 'react';
import { useParams, Link, useHistory } from 'react-router-dom'
import DeleteWarning from '../Modal/DeleteWarning'
import axios from 'axios'

function DeleteButton(props) {
    // const [redirect, setRedirecet] = useState(false)
    const {id} = useParams()
    let history = useHistory()
    
    // function handleChange(event) {
    //     setId({id: event.target.value})
    // }

    function handleSubmit(event) {
        axios.delete(`/books/${id}`)
        .then(res => {
            history.goBack()
        })
    }
    return (
        <div>
            <h3>Are you sure you want to delete this book?</h3>
            <button
                type="submit"
                onClick={handleSubmit}
                >Delete</button>
            <Link to="/myBooks"><button>Cancel</button></Link>
            
        </div>
    );
}

export default DeleteButton;