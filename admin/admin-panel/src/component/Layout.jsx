import React from "react";
import Sidebar from "./sidebar.jsx";
import Navbar from "./navbar.jsx";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* Sidebar fixed */}
      <Sidebar />

      {/* Main content area */}
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          {children} {/* Ye wahi content render karega jo Routes se pass hoga */}
        </div>
      </div>
    </div>
  );
}
