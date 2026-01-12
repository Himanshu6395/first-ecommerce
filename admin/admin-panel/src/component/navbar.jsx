import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.Adminauth.user);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("/");
  };

  // Get user initials (e.g., Himanshu → H)
  const getInitial = (name) => name?.charAt(0).toUpperCase() || "A";

  return (
    <div className="navbar">
      <h2 className="nav-title">hi! {user?.name || "Admin"}</h2>

      <div className="nav-right">
        {/* Logout Button */}
        <button className="navLogout" onClick={handleLogout}>
          Logout
        </button>
        <div className="avatar-circle">
          {getInitial(user?.name)}
        </div>

      </div>
    </div>
  );
}
