import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import {About , Contact} from './components/Pages'


function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
      <Route path='/' element={<h1>Hello! I'm Home Page</h1>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
