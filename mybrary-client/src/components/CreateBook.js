// import React, {useState} from 'react';
// import axios from 'axios'
// import {Link, useParams} from 'react-router-dom'
// function CreateBook(props) {
//     // const addBook = () => {
//     //     console.log(bookName)
//     //     axios.post('http://localhost:3000/createBook', {title: bookName})
//     // }
//     const [bookName, setBookName] = useState('')
//     const { id } = useParams()
//         function addBook() {
//           axios.post('/books')
//           .then(res => {
//             setBookName(res.data)
//             console.log(res.data)
//           })
//           .catch(console.error)
//         }
//     return (
//         <div>
//             <h1>Create Book</h1>
//             <form className = 'addBook'>
//                 <input placeholder = 'Enter Book Name' type = 'text' name = "searchString" required
//                 onChange ={(event) => {
//                     setBookName(event.target.value)}}/>
//             </form>
//             <div className = "bookButtons" >
//             <button onClick = {addBook}>Add Book</button>
//             <button>Cancel</button>
//             </div>
//         </div>
//     );
// }
// export default CreateBook;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
function CreateBook(props) {
    const [addBook, setAddBook] = useState();
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [publish_date, setPublishDate] = useState();
    // function handleChange(event){
    //     setAuthor({ author: event.target.value });
    //     setTitle({ title: event.target.value });
    //     setPublishDate({ publish_date: event.target.value });
    // }
    function handleSubmit(event) {
        event.preventDefault();
        const bookInfo = {
          title: title,
          author: author,
          publish_date: publish_date
        };
        axios.post('/books/', {bookInfo})
            .then(res => {
            setAddBook(res.data)
            console.log(res.data)
            })
            .catch(console.error)
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            Book Title:
            <input type = "text" name = "Book Title" onChange={event => setTitle(event.target.value)} />
          <br />
          Author(s):
            <input type = "text" name = "Author" onChange={event => setAuthor(event.target.value)} />
            <br />
            Publish Date:
            <input type = "text" name = "Publish Date" onChange={event => setPublishDate(event.target.value)} />
          </label>
          <br />
          <button type="submit">Add Book</button>
        </form>
        </div>
    );
}
export default CreateBook;