// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/SSlogo.png" alt="logo" className="logo-image" />
          <h1 className="logo-title">SkillSwap</h1>
        </div>

        {/* Menu items */}
        <div className={`navbar-links ${isOpen ? "show" : ""}`}>
          <a href="/home" className="navbar-link">Home</a>
          <a href="/explore" className="navbar-link">Explore Skills</a>
          <a href="/dashboard" className="navbar-link">Dashboard</a>
          <a href="/about" className="navbar-link">About Us</a>
          <a href="/contact" className="navbar-link">Contact</a>
        </div>

        {/* Mobile menu toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="menu-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
