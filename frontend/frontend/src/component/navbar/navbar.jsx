import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice.js";
import { User } from "lucide-react"
import { toast } from "react-hot-toast";
import { useState } from "react";
import { li } from "framer-motion/client";
export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully! 👋");
    navigate("/login");
  };
   const [openDropdown, setOpenDropdown] = useState("");

  const menu = {
    men: ["Shirts", "Jeans", "Shoes"],
    women: ["Tops", "Saree", "Footwear"],
    kids: ["Boys Wear", "Girls Wear", "Toys"],
    electronics: ["Mobiles", "Laptops", "Earphones"],
    home: ["Furniture", "Decor", "Kitchen"],
  };

  return (
    <>
      <nav className="main-navbar">

      <div className="nav-logo" onClick={() => navigate("/")}>ShopEase</div>

     <ul className="nav-menu">
  {Object.keys(menu).map((main) => (
    <li
      key={main}
      onMouseEnter={() => setOpenDropdown(main)}
      onMouseLeave={() => setOpenDropdown("")}
    >
      {main.toUpperCase()}

      
      {openDropdown === main && (
        <ul className="dropdown-menu">
          {menu[main].map((sub) => (
            <li
              key={sub}
              onClick={() =>
                navigate(`/category/${main}/${sub.toLowerCase()}`)
              }
            >
              {sub}
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>

        <div className="nav-search">
          <input type="text" placeholder="Search for products..." />
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="nav-right">
            <li
    className="shop-link"
    onClick={() => navigate("/shop")}
  >
    SHOP
  </li>
          <div className="nav-buttons">
            {!token ? (
              <>
                <button className="login-btn" onClick={() => navigate("/login")}>
                  Login
                </button>

                <button className="register-btn" onClick={() => navigate("/register")}>
                  Register
                </button>
              </>
            ) : (
              <>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
  
          {/* USER AVATAR CIRCLE */}
          <div className="nav-user">
            {!token ? (
              <div className="user-circle guest">
                <User size={22} />
              </div>
            ) : (
              <div className="user-circle">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

        </div>

      </nav>
    </>
  );
}
