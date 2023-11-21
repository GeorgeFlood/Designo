import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  console.log("hello");
  return (
    <div className="nav">
      <Link to="/">
        <img src="../../assets/shared/desktop/logo-dark.png" alt="Logo" />
      </Link>
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
    </div>
  );
};

export default Navbar;
