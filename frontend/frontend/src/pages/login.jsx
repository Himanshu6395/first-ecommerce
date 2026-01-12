
import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { setCredential } from "../redux/authSlice.js";
import {userLogin} from "../apis/auth.api.jsx"
import toast from "react-hot-toast";
const Login=()=>{
    const dispatch = useDispatch();
    const[formdata,setFormdata]=useState({
        email:"",
        password:""
    });
     const  navigate=useNavigate()
    const handleChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await userLogin(formdata);
            if(res.success){
                localStorage.setItem("token",res.token);
                dispatch(setCredential({user:res.user,token:res.token}));
                    toast.success("Login Successful!");
        navigate("/"); 
            }
           else{
            alert(res.message || "Login failed")
           }
            
    
        }
      catch(err){
          console.log(err);
      alert("Error logging in");
      }
    }

    return(
        <>

        <div className="login-wrapper">
            <div className="login-card">             
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtext">Login to your account</p>
                 <form action="" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="email" name="email" placeholder="Email adrress" onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
                    </div>
                    <button className="loginn-btn">Login</button>
                    <p className="register-text">
                        Don't have an account?<span onClick={() => navigate("/register")}>Create account</span>

                    </p>

                 </form>
            </div>
        </div>
        </>
    )
}
export default Login;