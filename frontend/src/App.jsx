import { useState } from 'react'

import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import AddBook from './components/AddBook'
import DeleteBook from './components/DeleteBook'
import SearchBook from './components/SearchBook'
import UpdateBook from './components/UpdateBook'
import ViewBook from './components/ViewBook'
import './App.css'


function App() {
  return(
    <div>
      <Router>
        <nav>
          <Link to="/add">Add Book</Link>
          <Link to="/view">View Book</Link>
          <Link to="/search">Search Book</Link>
          <Link to="/update">Update Book</Link>
          <Link to="/delete">Delete Book</Link>
        </nav>
        <Routes>
          <Route path="/add" element={<AddBook />} />
          <Route path="/delete" element={<DeleteBook />} />
          <Route path="/search" element={<SearchBook />} />
          <Route path="/update" element={<UpdateBook />} />
          <Route path="/view" element={<ViewBook />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App