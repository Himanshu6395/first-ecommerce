import React, { useState } from "react";
import "./register.css";
import { userRegister } from "../apis/auth.api.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setCredential } from "../redux/authSlice.js"; 
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Register = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { user, token } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userRegister(formData);

      if (response.success) {
        localStorage.setItem("token", response.token);

        dispatch(
          setCredential({
            user: response.user,
            token: response.token,
          })
        );
      }
   toast.success("Account Created Successfully 🎉");
    navigate("/");
      console.log("userData", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtext">Join us & explore the best deals</p>

        <form onSubmit={handlesubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={handleChange}
              required
            />
          </div>

          <button className="register-btn">Register</button>

          <p className="login-text">
            Already have an account?<span onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
