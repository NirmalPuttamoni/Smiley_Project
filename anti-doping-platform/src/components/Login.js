// src/Login.js
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple validation
    if (email === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }

    await LoginUser({email:email, password:password});

    // Reset fields
    setEmail("");
    setPassword("");
    setError("");
  };
  const LoginUser = async (values) => {
    try {
      const response = await axios.post("http://localhost:8080/users/signin", values);
      
      const userRole = response.data.role;
      sessionStorage.setItem('userData', JSON.stringify(response.data));
      if (userRole === "Whistleblower") {
        navigate("/report");
      } else if (userRole === "Investigator") {
        navigate("/investigator-dashboard");
      } else {
        navigate("/athlete-dashboard");
      }
      return response.data;
    } catch (error) {
      console.log("err : ", error?.response?.data);
    }
  }
  return (
    
      <div
        style={{
          maxWidth: "400px",
          margin: "auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              className="border p-2 rounded-md flex-1"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <input
            type="password"
            placeholder="Password"
            value={password}
            className="border p-2 rounded-md w-full mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center gap-2 mb-4"></div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
  );
};

export default Login;
