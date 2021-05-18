import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

function EditBook(props) {
    const [edit, setEdit] = useState()
    const { id } = useParams()

    useEffect(() => {
        function editBooks() {
          axios.put('/books/:id')
          .then(res => {
            setEdit(res.data)
            console.log(res.data)
          })
          .catch(console.error)
        }
        editBooks()
        }, [])
    return (
        <section className="container">
            <h2>Edit Book</h2>
            <form action="/todos/{{this.id}}/?_method=put" method="POST">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" class="form-control" value="{{this.title}}"/>
            </div>

            <input type="submit" value="Update Book" />
            {/* <a href="/todos" class="btn btn-secondary">Cancel</a> */}
            </form>
             
        </section>
       
    );
}

export default EditBook;