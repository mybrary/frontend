import React from "react"
import MyBooks from './components/MyBooks'
import BookDetails from './components/BookDetails'
import EditBook from './components/EditBook'
import DeleteButton from './components/buttons/DeleteButton'
import { Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/Navbar'


function App() {
  
  return (
    <div className="App">
      <NavBar />
    
      <Route exact path="/myBooks"  component={MyBooks} />
      <Route exact path="/books/:id"  component={BookDetails} />
      <Route exact path="/editBook/:id"  component={EditBook}/>
      <Route exact path="/delete/:id"  component={DeleteButton}/>
      </div>
  )

}

export default App;
