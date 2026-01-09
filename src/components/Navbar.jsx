import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo-navbar.jpeg"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className=" w-full bg-white py-2 shadow ">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
       <img
  src={logo}
  alt="Dermacart Logo"
  className="h-20 w-auto cursor-pointer"
/>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
          <li> < Link to ="/" 
          className="hover:text-green-700 cursor-pointer">
            Home </Link> </li>
          <li >  < Link to ="/products" 
          className="hover:text-green-700 cursor-pointer">Products </Link></li>
          <li >< Link to ="/Order" 
          className="hover:text-green-700 cursor-pointer">Order </Link></li>
          <li>< Link to ="/About" 
          className="hover:text-green-700 cursor-pointer">About </Link></li>
          <li>< Link to ="/Contact" 
          className="hover:text-green-700 cursor-pointer">Contact </Link></li>
        </ul>
             <div>
                    <Button title={"Order Now"} variant='primary' size='lg' onClick={()=>{
                        navigate(`/Order`)
                    }}/>
                   {/* Mobile */}
                 <button
                   className="md:hidden text-xl"
                onClick={() => setOpen(!open)}
                >
                 ☰
             </button>
         </div>
                </div>
      {open && (
        <div className="md:hidden px-6 pb-4 ">
          <ul className="space-y-4 text-lg">
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/products">Skin Care</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;