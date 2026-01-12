import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./adminRegister.css"
import { useState } from "react";
export default function AdminLogin() {
  constt[data,setData]=useState({
    email:"",
    password:""
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error } = useSelector(state => state.auth)

  const handleSubmit=()=>{

  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Admin Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email"  placeholder="Email" name="email" required  />
        <input  placeholder="Password" type="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
