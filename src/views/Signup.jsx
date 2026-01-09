import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Primary_color, Main_Text_color, Sub_Headers_color, Hero_BG_color,BG_color } from '../config/app.js'

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registered Successfully");
    navigate("/login");
  };
  return (
    <div className="min-h-screen flex items-center justify-center  px-4" style={{ backgroundColor: BG_color }}>
      
      <div className="w-full max-w-md backdrop-blur-xl  border border-white/30 rounded-2xl shadow-2xl p-8">
        
        <h2 className="text-3xl font-extrabold text-white text-center mb-6" style={{ color: Main_Text_color }}>
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="block text-sm font-medium  mb-1" style={{ color: Sub_Headers_color }}>
              Email Address
            </label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: Sub_Headers_color }}>
              Password
            </label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white
                       hover:scale-105 transition transform cursor-pointer"
            style={{ backgroundColor: Primary_color }}
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-white mt-6">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="ml-1 font-semibold underline cursor-pointer"
          >
            Log in
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;
