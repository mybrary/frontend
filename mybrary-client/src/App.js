import React from "react"
import MyBooks from './components/MyBooks'
import BookDetails from './components/BookDetails'
import { Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/Navbar'


function App() {
  
  return (
    <div className="App">
      <NavBar />
    <main>
      <Route path="/myBooks" exact component={MyBooks} />
      <Route path="/:id" exact component={BookDetails} />
    </main>
      </div>
  )

}

export default App;
