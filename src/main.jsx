import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./views/Quiz";
import "./index.css";

import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Products from './views/Products.jsx'


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/products" element={<Products />} />
     
    </Routes>
  </BrowserRouter>
);
