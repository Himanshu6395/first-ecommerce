import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";
import "./sidebar.css";

export default function Sidebar() {
  const location = useLocation();
  const [openProduct, setOpenProduct] = useState(false);

  return (
    <div className="sidebar">
      <h2 className="sidebar-brand">AdminPanel</h2>

      <ul className="sidebar-menu">
        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">
            <FaHome /> Dashboard
          </Link>
        </li>

        <li className={location.pathname === "/users" ? "active" : ""}>
          <Link to="/users">
            <FaUsers /> Users
          </Link>
        </li>

        {/* Products with sub menu */}
        <li className={openProduct ? "active" : ""}>
          <div
            className="submenu-title"
            onClick={() => setOpenProduct(!openProduct)}
          >
            <span>
              <FaBoxOpen /> Products
            </span>
            <FaChevronDown className={openProduct ? "rotate" : ""} />
          </div>

          {openProduct && (
            <ul className="submenu">
              <li className={location.pathname === "/add-product" ? "active" : ""}>
                <Link to="/add-product">Add Product</Link>
              </li>

              <li className={location.pathname === "/add-category" ? "active" : ""}>
                <Link to="/add-category">Categories</Link>
              </li>
              <li className={location.pathname === "/add-subcategory" ? "active" : ""}>
                <Link to="/add-subcategory">subCategories</Link>
              </li>
            </ul>
          )}
        </li>

        <li className={location.pathname === "/orders" ? "active" : ""}>
          <Link to="/orders">
            <FaShoppingCart /> Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}
