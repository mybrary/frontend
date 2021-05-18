import React, {useState, useEffect} from "react"
import MyBooks from './components/MyBooks'
import { Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/Navbar'


function App() {
  
  return (
    <div className="App">
      <NavBar />
    <main>
      <Route path="/mybooks" exact component={MyBooks} />
    </main>
      </div>
  )

}

export default App;
