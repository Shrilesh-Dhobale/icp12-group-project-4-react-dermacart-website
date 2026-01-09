import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Primary_color, Main_Text_color, Sub_Headers_color, Hero_BG_color } from '../config/app.js'

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      alert("Login Successful");
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };
   return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: Hero_BG_color }}>
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 space-y-6">
        
        <h2 className="text-center text-3xl font-bold" style={{ color: Main_Text_color }}>
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
         <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2  text-white font-semibold rounded-lg hover:bg-indigo-700 transition cursor-pointer"
            style={{ backgroundColor: Primary_color }}
          >
            Log In
          </button>
        </form>
         <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
export default Login;