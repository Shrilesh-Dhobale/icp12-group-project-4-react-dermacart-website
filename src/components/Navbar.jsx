import { useState } from "react";
import Button from "./Button";
import logo from "../components/logo-navbar.jpeg"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
       <img
  src={logo}
  alt="Dermacart Logo"
  className="h-35 w-auto cursor-pointer"
/>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-green-700 cursor-pointer">Home</li>
          <li className="hover:text-green-700 cursor-pointer">Shop</li>
          <li className="hover:text-green-700 cursor-pointer">Skin Care</li>
          <li className="hover:text-green-700 cursor-pointer">About</li>
          <li className="hover:text-green-700 cursor-pointer">Contact</li>
        </ul>
             <div>
                    <Button title={"Order Now"} variant='primary' size='lg' onClick={()=>{
                        navigate(`/order/${id}`)
                    }}/>
                </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-4">
            <li>Home</li>
            <li>Shop</li>
            <li>Skin Care</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;