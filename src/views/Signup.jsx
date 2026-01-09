import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen flex items-center justify-center bg-[#F8DEBC] px-4">
      
      <div className="w-full max-w-md backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-8">
        
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800
                         focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800
                         focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-indigo-500 to-purple-500
                       hover:scale-105 transition transform cursor-pointer"
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
