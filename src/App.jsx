import React from 'react'
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home.jsx";
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Products from "./components/Products/Products.jsx";
import Contact from "./components/Contact/Contact.jsx";
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className='bg-white h-max max-w-full overflow-x-hidden'>
     <NavBar />
      <ScrollToTop />   {/* 🔥 buraya ekle */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
