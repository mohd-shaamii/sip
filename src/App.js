import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './About';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/HOME" element={<Home/>}/>
        <Route path="/ABOUT" element={<About/>}/>
        <Route path="/CONTACT" element={<Contact/>}/>
        {/* <Redirect to="/" /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
