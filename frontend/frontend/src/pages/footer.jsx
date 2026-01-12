import React from "react";
import { motion } from "framer-motion";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* FOOTER GRID */}
      <motion.div
        className="footer-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >

        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="footer-brand">FashionKart</h3>
          <p>Your premium fashion destination.</p>
        </motion.div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <motion.p whileHover={{ x: 8, color: "#ff5c5c" }}>Home</motion.p>
          <motion.p whileHover={{ x: 8, color: "#ff5c5c" }}>Shop</motion.p>
          <motion.p whileHover={{ x: 8, color: "#ff5c5c" }}>About</motion.p>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h4>Support</h4>
          <motion.p whileHover={{ x: 8, color: "#ff5c5c" }}>Contact</motion.p>
          <motion.p whileHover={{ x: 8, color: "#ff5c5c" }}>Return Policy</motion.p>
          <motion.p whileHover={{ x: 8, color: "#ff5c5c" }}>Privacy Policy</motion.p>
        </div>

        {/* Social Icons */}
        <div className="footer-links">
          <h4>Follow Us</h4>
          <motion.p whileHover={{ scale: 1.2, color: "#ff5c5c" }}>Instagram</motion.p>
          <motion.p whileHover={{ scale: 1.2, color: "#ff5c5c" }}>Facebook</motion.p>
          <motion.p whileHover={{ scale: 1.2, color: "#ff5c5c" }}>Twitter</motion.p>
        </div>

      </motion.div>

      {/* COPYRIGHT TEXT */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        © 2025 FashionKart — All Rights Reserved.
      </motion.div>

    </footer>
  );
}
