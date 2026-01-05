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