import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <Link to="/">
        <img src="../../assets/shared/desktop/logo-dark.png" alt="Logo" />
      </Link>

      {/* Existing desktop navigation */}
      <nav className="navbar">
        <Link to="/about">
          <li>Our company</li>
        </Link>
        <Link to="/location">
          <li>Location</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </nav>

      {/* Mobile navigation */}
      <div className="mobile-nav">
        <div className="hamburger" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>

        <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <Link to="/about">
            <li>Our company</li>
          </Link>
          <Link to="/location">
            <li>Location</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
