import react from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router'
import Home from './views/Home';
import Products from './views/Products';
import Order from './views/Orders';
import About from'./views/About';
import Contact from './views/Contact';





const root=createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Products" element={<Products/>}/>
    <Route path="/Order" element={<Order/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    
  </Routes>
  </BrowserRouter>
);