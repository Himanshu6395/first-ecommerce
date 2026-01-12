// src/pages/AdminRegister.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./adminRegister.css";
import {Adminregister} from "../Apis/authApi.js"
import { toast } from "react-hot-toast";
import { setCredential } from "../store/authSlice.jsx";
export default function AdminRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.Adminauth);
console.log("uer",user,token    )
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response=await Adminregister(form)
         
        if(response.success){
           toast.success("Admin Registered Successfully!");
        }
        if (response.success) {
            console.log("register data",response)
        localStorage.setItem("token", response.token);

       dispatch(setCredential({
    user: response.user,
    token: response.token
  }));
      }
    }
    catch(err){
          toast.error(err?.message || "Something went wrong!");
    }
    
    // navigate("/dashboard")
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Admin Account</h2>
        <p className="register-subtitle">Fill in your details to register</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
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
          <button type="submit">
            register
          </button>
          {/* {error && <p className="error">{error.message || error}</p>} */}
        </form>
        <p className="login-text">
          Already have an account? <span onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}
