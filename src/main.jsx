import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./views/Quiz";

import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Products from './views/Products.jsx'
import Home from './views/Home.jsx'
import Contact from './views/Contact.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    
    <Routes>
      
      <Route path="/quiz" element={<Quiz />} />
      <Route path="" element={<Home/>} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact/>} />
     
    </Routes>
  </BrowserRouter>
);
