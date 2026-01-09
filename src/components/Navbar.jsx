import { useState } from "react";
import Button from "./Button";
import logo from "../assets/logo-navbar.jpeg"

const Navbar = () => {
  const [open, setOpen] = useState(false);
   const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        
       <img
  src={logo}
  alt="Dermacart Logo"
  className="h-12 w-auto cursor-pointer"
/>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
          <li className="hover:text-green-700 cursor-pointer">Home</li>
          <li className="hover:text-green-700 cursor-pointer">Shop</li>
          <li className="hover:text-green-700 cursor-pointer">Skin Care</li>
          <li className="hover:text-green-700 cursor-pointer">About</li>
          <li className="hover:text-green-700 cursor-pointer">Contact</li>
        </ul>
                     {
  email && (
    <div className="ml-auto flex items-center gap-3 
                    rounded-full border border-[#2F5D50] 
                    px-2 py-1 shadow-sm bg-white">

      
      <span className="bg-[#2F5D50] text-white px-4 py-1 rounded-full text-sm">
        {email}
      </span>

    
      <button
        onClick={handleLogout}
        className="text-[#2F5D50] px-3 py-1 rounded-full text-sm
                   hover:bg-[#2F5D50] hover:text-white
                   transition"
      >
        Logout
      </button>

      
      <button
        onClick={() => navigate(`/order/${id}`)}
        className="bg-[#2F5D50] text-white px-4 py-1 rounded-full text-sm
                   hover:bg-[#264D43] transition"
      >
        Order Now
      </button>

    </div>
  )
}

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