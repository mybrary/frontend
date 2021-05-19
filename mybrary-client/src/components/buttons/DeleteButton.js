import React from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DeleteButton(props) {
    // const [id, setId] = useState()
    const {id} = useParams()
    
    // function handleChange(event) {
    //     setId({id: event.target.value})
    // }

    function handleSubmit(event) {
        axios.delete(`/books/${id}`)
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }
    return (
        <div>
            <button
                type="submit"
                onClick={handleSubmit}
                >Delete</button>
            
        </div>
    );
}

export default DeleteButton;