import React, {useState} from "react"
import MyBooks from './components/MyBooks'
import BookDetails from './components/BookDetails'
import EditBook from './components/EditBook'
import CreateBook from './components/CreateBook'
import SearchResults from './components/SearchResults'
// import CreatePage from './components/pages/CreatePage'

import DeleteButton from './components/buttons/DeleteButton'
import { Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/Navbar'
import AboutPage from "./components/AboutPage"


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/myBooks"  component={MyBooks} />
      <Route exact path="/books/:id"  component={BookDetails} />
      <Route exact path="/editBook/:id"  component={EditBook}/>
      <Route exact path="/delete/:id"  component={DeleteButton}/>
      <Route path="/addBook" exact component={CreateBook} />
      <Route path="/addNewBook" exact component={CreateBook} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/searchResults" exact component={SearchResults} />
      </div>
  )

}

export default App;
