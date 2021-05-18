import React, {useEffect, useState} from 'react';

function SearchResults(props) {
const [books, setBooks] = useState([]);
const [searchString, setSearchString] = useState('');

const handleChange = (event) => {
    setSearchString(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault()
    bookSearch()
}

const bookSearch = () => {
    const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchString}&orderBy=relevance&key=${process.env.REACT_APP_MYBRARY_API_KEY}`;

    fetch(searchUrl)
    .then(res => {return res.json()})
    .then(data => {
        setBooks(data.items)
        console.log(data)
        console.log(data.items.map(item => {
            return item.volumeInfo.title
        }))
        setSearchString('')
    })
    .catch(console.error)

} 
    return (
        <div>
            <form className = 'searchForm' onSubmit = {handleSubmit}>
                <input placeholder = 'Search Books' type = 'text' name = "searchString" required onChange ={handleChange}
                value = {searchString}
                />
            </form>
            <h1>Search Results:</h1>

            <div className = "searchList">
                
                
                    {books.map((book) => {
                    return(
                        <div className = "bookList">
                            <img src =  {book.volumeInfo.imageLinks.thumbnail} alt="" />
                         <div className = "infoCard">
                            {book.volumeInfo.title} by {book.volumeInfo.authors} <br />
                            publish date: {book.volumeInfo.publishedDate}
                         </div>
                            
                        
                        </div>
                    )
                })}
                

            </div>
            
        </div>
    );

}

export default SearchResults;