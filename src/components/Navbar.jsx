import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-700">
          Derma<span className="text-green-900">Cart</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-green-700 cursor-pointer">Home</li>
          <li className="hover:text-green-700 cursor-pointer">Shop</li>
          <li className="hover:text-green-700 cursor-pointer">Skin Care</li>
          <li className="hover:text-green-700 cursor-pointer">About</li>
          <li className="hover:text-green-700 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-green-800 text-white px-6 py-2 rounded-full">
          Shop Now
        </button>

        {/* Mobile */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
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