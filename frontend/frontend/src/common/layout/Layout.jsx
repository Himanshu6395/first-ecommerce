import React from "react";
import Navbar from "../../component/navbar/Navbar.jsx";  
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
