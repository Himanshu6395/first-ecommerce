// src/pages/Login.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from "../Apis/authApi.js"
import "./login.css";
import toast  from "react-hot-toast";
import { setCredential } from "../store/authSlice";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user,token } = useSelector(state => state.Adminauth);
 console.log("logindata.....................",user)
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response=await login(form);
      console.log("ijjirejijerijier",response)
       if(response.success){
           toast.success("login  Successfully!");
        }
        if (response.success) {
            console.log("register data",response)
        localStorage.setItem("token", response.token);

       dispatch(setCredential({
    user: response.user,
    token: response.token
  }));
      }
    navigate("/dashboard")
    }
    catch(err){
      toast.success(
        err
      )
    }
     
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p className="login-subtitle">Login to your admin account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" >
            Login
          </button>
        </form>
        <p className="signup-text">
          Don't have an account? <span onClick={() => navigate("/register")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}
