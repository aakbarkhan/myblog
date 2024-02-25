import React from 'react';
import './App.css';
import BlogList from './components/BlogList';
import { Routes, Route, BrowserRouter as Router   } from 'react-router-dom';
// import NewBlog from './components/newPage';
import Navbar from './components/navBar'; 
import NewBlog from './components/newPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/blogs' Component={BlogList} />
        <Route path='/new' Component={NewBlog} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
